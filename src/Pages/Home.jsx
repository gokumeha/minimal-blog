import React from 'react';
import BlogPost from '../components/Blogpost';
import SignIn from '../components/Signin';

const HomePage = ({ posts, currentUser, onSignIn }) => {
  return (
    <>
      {/* Show Sign-In form only if no user is logged in */}
      {!currentUser && <SignIn onSignIn={onSignIn} />}
      
      <h2 className="posts-heading">All Recent Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => {
          const twentyFourHoursAgo = new Date().getTime() - (24 * 60 * 60 * 1000);
          const isNew = post.timestamp.getTime() > twentyFourHoursAgo;
          
          return <BlogPost key={post.id} {...post} isNew={isNew} />;
        })
      ) : (
        <p style={{ textAlign: 'center' }}>No posts yet. Be the first to write one!</p>
      )}
    </>
  );
};

export default HomePage;