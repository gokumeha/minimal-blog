import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username.trim()) return;
    onSignIn(username);
  };

  return (
    <div className="signin-container">
      <h2>Join the Conversation</h2>
      <p>Sign in to share your own thoughts.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* The button text is updated for clarity */}
        <button type="submit" className="form-button">Sign In & Write Post</button>
      </form>
    </div>
  );
};

export default SignIn;