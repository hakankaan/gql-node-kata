import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetAuthorQuery } from '../generated/graphql';

export const AuthorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useGetAuthorQuery({
    variables: { id: id || '' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;
  if (!data?.author) return <p>Author not found</p>;

  return (
    <div>
      <h1>{data.author.name}</h1>
      <h2>Books</h2>
      {data.author.books.length === 0 ? (
        <p>No books yet</p>
      ) : (
        <div>
          {data.author.books.map((book: { id: string; title: string }) => (
            <div key={book.id} className="card book-card">
              <h3 className="book-title">
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </h3>
            </div>
          ))}
        </div>
      )}
      <Link to="/authors">&larr; Back to authors</Link>
    </div>
  );
}; 