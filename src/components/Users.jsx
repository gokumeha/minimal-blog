import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from './Blogpost';

const UserPage = ({ posts }) => {
  const { username } = useParams(); // Gets the username from the URL (e.g., /user/Alex)

  // Filter posts to get only the ones by the current user
  const userPosts = posts.filter(post => post.author === username);

  return (
    <>
      <h2 className="posts-heading">Posts by {username}</h2>
      {userPosts.length > 0 ? (
        userPosts.map(post => {
          const twentyFourHoursAgo = new Date().getTime() - (24 * 60 * 60 * 1000);
          const isNew = post.timestamp.getTime() > twentyFourHoursAgo;
          
          return <BlogPost key={post.id} {...post} isNew={isNew} />;
        })
      ) : (
        <p style={{ textAlign: 'center' }}>{username} hasn't posted anything yet.</p>
      )}
    </>
  );
};

export default UserPage;