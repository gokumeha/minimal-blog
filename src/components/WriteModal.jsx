import React, { useState } from 'react';

const WriteModal = ({ currentUser, onAddPost, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both the title and content.");
      return;
    }
    // Pass the new post data up to the App component
    onAddPost({ title, content });
  };

  return (
    // The modal overlay
    <div className="modal-backdrop" onClick={onClose}>
      {/* The modal content itself */}
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create a New Post</h2>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <p className="author-info">Posting as: <strong>{currentUser}</strong></p>
        <form onSubmit={handleSubmit} className="write-form">
          <label htmlFor="post-title">Title</label>
          <input
            id="post-title"
            type="text"
            className="form-input"
            placeholder="An Interesting Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
          <label htmlFor="post-content">Content</label>
          <textarea
            id="post-content"
            className="form-textarea"
            placeholder="Share your story..."
            rows="12"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          
          <button type="submit" className="publish-button">
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteModal;