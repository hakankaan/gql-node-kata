import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../generated/graphql';



export const BooksList: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const [limit] = useState<number>(5);
  
  const { loading, error, data } = useGetBooksQuery({
    variables: { limit, offset }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  const books = data?.books?.edges || [];
  const { hasNextPage, hasPreviousPage, totalCount } = data?.books?.pageInfo || { 
    hasNextPage: false, 
    hasPreviousPage: false, 
    totalCount: 0 
  };

  const handlePrevious = () => {
    setOffset(Math.max(0, offset - limit));
  };

  const handleNext = () => {
    setOffset(offset + limit);
  };

  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.map((book) => (
          <div key={book.id} className="card book-card">
            <h2 className="book-title">
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </h2>
            <p className="author-name">by {book.author.name}</p>
          </div>
        ))}
      </div>
      
      <div className="pagination">
        <p>
          Showing {totalCount > 0 ? offset + 1 : 0} to {Math.min(offset + limit, totalCount)} of {totalCount} books
        </p>
        <div className="pagination-buttons">
          <button 
            onClick={handlePrevious} 
            disabled={!hasPreviousPage}
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            disabled={!hasNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}; 