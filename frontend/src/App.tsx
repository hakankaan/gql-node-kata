import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BooksList } from './pages/BooksList';
import { AuthorsList } from './pages/AuthorsList';
import { BookDetails } from './pages/BookDetails';
import { AuthorDetails } from './pages/AuthorDetails';
import { AddBook } from './pages/AddBook';
import { AddAuthor } from './pages/AddAuthor';
import { AddReview } from './pages/AddReview';
import { ContentList } from './components/ContentList';
import { NodeViewer } from './components/NodeViewer';
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
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
          <li>
            <Link to="/add-author">Add Author</Link>
          </li>
          <li>
            <Link to="/add-review">Add Review</Link>
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
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/content" element={<ContentList />} />
        <Route path="/node/:id" element={<NodeViewerWrapper />} />
      </Routes>
    </div>
  );
};

// Wrapper component to extract the id from route params
const NodeViewerWrapper: React.FC = () => {
  // Simple implementation that extracts the ID from the URL
  const id = window.location.pathname.split('/').pop() || '';
  return <NodeViewer nodeId={id} />;
};

export default App;
