import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetBooksDocument, useAddBookMutation, useGetAuthorsQuery } from '../generated/graphql';


export const AddBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const navigate = useNavigate();

  const { loading: authorsLoading, error: authorsError, data: authorsData } = useGetAuthorsQuery();
  
  const [addBook, { loading: addingBook, error: addBookError }] = useAddBookMutation({
    refetchQueries: [{ 
      query: GetBooksDocument,
      variables: { limit: 5, offset: 0 }
    }],
    onCompleted: (data) => {
      navigate(`/books/${data.addBook.id}`);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !authorId) return;
    
    addBook({ variables: { title, authorId } });
  };

  if (authorsLoading) return <p>Loading...</p>;
  if (authorsError) return <p className="error">Error: {authorsError.message}</p>;

  return (
    <div className="form-container">
      <h1 className="form-title">Add New Book</h1>
      
      {addBookError && <p className="error">Error: {addBookError.message}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <select
            id="author"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            required
          >
            <option value="">Select an author</option>
            {authorsData?.authors.map((author: { id: string; name: string }) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        
        <button type="submit" disabled={addingBook}>
          {addingBook ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
}; 