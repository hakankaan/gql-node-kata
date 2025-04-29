import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
}

const fetchBooks = async (): Promise<Book[]> => {
  const query = `
    query GetBooks {
      books {
        id
        title
      }
    }
  `;

  try {
    const response = await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    
    const result = await response.json();
    return result.data.books;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

const addReview = async (
  bookId: string,
  title: string,
  rating: number,
  content: string
): Promise<boolean> => {
  const mutation = `
    mutation AddReview($bookId: ID!, $title: String!, $rating: Int!, $content: String!) {
      addReview(bookId: $bookId, title: $title, rating: $rating, content: $content) {
        id
        title
      }
    }
  `;

  try {
    const response = await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: mutation,
        variables: { bookId, title, rating, content },
      }),
    });
    
    const result = await response.json();
    return !!result.data?.addReview;
  } catch (error) {
    console.error('Error adding review:', error);
    return false;
  }
};

export const AddReview: React.FC = () => {
  const [title, setTitle] = useState('');
  const [bookId, setBookId] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
      if (data.length > 0) {
        setBookId(data[0].id);
      }
    };

    loadBooks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !bookId || !content) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const success = await addReview(bookId, title, rating, content);
      
      if (success) {
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
            disabled={loading || books.length === 0}
          >
            {books.length === 0 ? (
              <option value="">Loading books...</option>
            ) : (
              books.map((book) => (
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