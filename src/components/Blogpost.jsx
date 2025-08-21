import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const formatTimestamp = (timestamp) => {
  // ... (formatTimestamp function remains the same)
};

const BlogPost = ({ title, author, timestamp, content, isNew }) => (
  <article className="blog-post">
    <h2>
      {title}
      {isNew && <span className="new-badge">New!</span>}
    </h2>
    <div className="post-meta">
      {/* The author's name is now a link */}
      <span>By <Link to={`/user/${author}`} className="author-link">{author}</Link></span> 
      | <span>{formatTimestamp(timestamp)}</span>
    </div>
    <p>{content}</p>
  </article>
);

export default BlogPost;