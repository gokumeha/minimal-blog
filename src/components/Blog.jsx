import React from 'react';

const BlogPost = ({ title, author, date, content }) => (
  <article className="blog-post">
    <h2>{title}</h2>
    <div className="post-meta">
      <span>By {author}</span> | <span>{date}</span>
    </div>
    <p>{content}</p>
  </article>
);

export default BlogPost;