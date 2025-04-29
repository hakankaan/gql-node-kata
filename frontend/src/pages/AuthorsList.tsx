import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAuthorsQuery } from '../generated/graphql';

export const AuthorsList: React.FC = () => {
  const { loading, error, data } = useGetAuthorsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div>
      <h1>Authors</h1>
      <div>
        {data?.authors.map((author) => (
          <div key={author.id} className="card author-card">
            <h2 className="author-name">
              <Link to={`/authors/${author.id}`}>{author.name}</Link>
            </h2>
            <p>{author.books?.length || 0} books</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 