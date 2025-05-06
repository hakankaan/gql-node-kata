import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddAuthorMutation, GetAuthorsDocument } from '../generated/graphql';

export const AddAuthor: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const [addAuthor, { loading, error }] = useAddAuthorMutation({
    refetchQueries: [{ query: GetAuthorsDocument }],
    onCompleted: data => {
      navigate(`/authors/${data.addAuthor.id}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    addAuthor({ variables: { name } });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add New Author</h1>

      {error && <p className="error">Error: {error.message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Author'}
        </button>
      </form>
    </div>
  );
};
