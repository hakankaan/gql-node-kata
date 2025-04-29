import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetBookQuery } from '../generated/graphql';

export const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useGetBookQuery({
    variables: { id: id || '' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;
  if (!data?.book) return <p>Book not found</p>;

  return (
    <div>
      <h1>{data.book.title}</h1>
      <p>
        Author: <Link to={`/authors/${data.book.author.id}`}>{data.book.author.name}</Link>
      </p>
      <Link to="/">&larr; Back to books</Link>
    </div>
  );
}; 