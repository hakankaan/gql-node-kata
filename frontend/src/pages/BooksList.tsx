import React from 'react';
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../generated/graphql';

export const BooksList: React.FC = () => {
  const { loading, error, data } = useGetBooksQuery()

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div>
      <h1>Books</h1>
      <div>
        {data?.books.map((book: { id: string; title: string; author: { name: string } }) => (
          <div key={book.id} className="card book-card">
            <h2 className="book-title">
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </h2>
            <p className="author-name">by {book.author.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 