import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BooksList } from './pages/BooksList';
import { AuthorsList } from './pages/AuthorsList';
import { BookDetails } from './pages/BookDetails';
import { AuthorDetails } from './pages/AuthorDetails';
import { AddBook } from './pages/AddBook';
import { AddAuthor } from './pages/AddAuthor';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', padding: '0', marginBottom: '20px' }}>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
          <li>
            <Link to="/add-author">Add Author</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/authors" element={<AuthorsList />} />
        <Route path="/authors/:id" element={<AuthorDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-author" element={<AddAuthor />} />
      </Routes>
    </div>
  );
};

export default App;
