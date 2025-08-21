import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Header = ({ currentUser, onSignOut, onGoToWritePage }) => (
  <header className="header">
    <div className="header-content">
      <div className="header-title">
        {/* The title now links to the homepage */}
        <Link to="/" className="home-link">
          <h1>The Minimalist Quill</h1>
        </Link>
        <p>A serene space for thoughts and ideas.</p>
      </div>
      <div className="user-actions">
        {currentUser && (
          <>
            {/* Link to the current user's page */}
            <Link to={`/user/${currentUser}`} className="nav-link">My Posts</Link>
            <button onClick={onGoToWritePage} className="write-post-button">Write a Post</button>
            <button onClick={onSignOut} className="signout-button">Sign Out</button>
          </>
        )}
      </div>
    </div>
  </header>
);

export default Header;