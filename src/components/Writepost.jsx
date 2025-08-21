import React, { useState } from 'react';

const WritePage = ({ currentUser, onAddPost, onGoBack }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both the title and content."); // Simple validation
      return;
    }
    onAddPost({ title, content });
  };

  return (
    <div className="write-page-container">
      <div className="write-page-header">
        <h2>Create a New Post</h2>
        <button onClick={onGoBack} className="back-button">
          &larr; Back to Home
        </button>
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
        
        <button type="submit" className="publish-button" >
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default WritePage;