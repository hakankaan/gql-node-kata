import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddReviewMutation, useGetBooksQuery } from '../generated/graphql';

export const AddReview: React.FC = () => {
  const [title, setTitle] = useState('');
  const [bookId, setBookId] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { data, loading: booksLoading } = useGetBooksQuery();
  const [addReviewMutation] = useAddReviewMutation();

  useEffect(() => {
    if (data?.books?.edges && data.books.edges.length > 0) {
      setBookId(data.books.edges[0].id);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !bookId || !content) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await addReviewMutation({ 
        variables: { 
          title, 
          bookId, 
          rating, 
          content 
        } 
      });
      
      if (data?.addReview) {
        navigate('/content');
      } else {
        setError('Failed to add review');
      }
    } catch (err) {
      setError('An error occurred while adding the review');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const hasBooks = data?.books?.edges && data.books.edges.length > 0;

  return (
    <div className="add-review">
      <h2>Add a New Review</h2>
      
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="book">Book</label>
          <select
            id="book"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            disabled={loading || booksLoading || !hasBooks}
          >
            {!hasBooks ? (
              <option value="">Loading books...</option>
            ) : (
              data.books.edges.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title}
                </option>
              ))
            )}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="title">Review Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
            placeholder="Enter a title for your review"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            disabled={loading}
          >
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Review Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}
            placeholder="Write your review here"
            rows={5}
            required
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Review'}
        </button>
      </form>
    </div>
  );
}; 