import React from   'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import WriteModal from './components/WriteModal';
import HomePage from './Pages/Home'; // Import new page
import UserPage from './components/Users';   // Import new page

// Initial posts data now belongs to a default user
const initialPosts = [
    { id: 1, author: 'Alex', timestamp: new Date('2025-08-20T10:30:00'), title: 'The Simplicity of Minimalist Design', content: '...' },
    { id: 2, author: 'Jane', timestamp: new Date('2025-08-21T12:00:00'), title: 'A Guide to Mindful Writing', content: '...' },
];

function App() {
  const [posts, setPosts] = React.useState(initialPosts);
  const [users, setUsers] = React.useState({ 'Alex': {}, 'Jane': {} }); // Keep track of users
  const [currentUser, setCurrentUser] = React.useState(null);
  const [showWriteModal, setShowWriteModal] = React.useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSignIn = (username) => {
    // Create a new user if they don't exist
    if (!users[username]) {
      setUsers(prevUsers => ({ ...prevUsers, [username]: {} }));
      console.log(`New user created: ${username}`);
    }
    setCurrentUser(username);
    navigate(`/user/${username}`); // Navigate to the user's page after sign-in
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    navigate('/'); // Go back to the homepage on sign-out
  };
  
  const handleAddPost = (newPostData) => {
    const newPost = {
      id: posts.length + 1,
      author: currentUser,
      timestamp: new Date(),
      ...newPostData
    };
    // Add post to the start of the list, sorting by date is best practice for a real app
    setPosts([newPost, ...posts]);
    setShowWriteModal(false);
  };

  return (
    <div className="app-container">
      <Header 
        currentUser={currentUser} 
        onSignOut={handleSignOut}
        onGoToWritePage={() => setShowWriteModal(true)}
      />
      
      {showWriteModal && (
        <WriteModal 
          currentUser={currentUser}
          onAddPost={handleAddPost}
          onClose={() => setShowWriteModal(false)}
        />
      )}

      <main>
        <Routes>
          {/* Route for the Homepage */}
          <Route 
            path="/" 
            element={<HomePage posts={posts} currentUser={currentUser} onSignIn={handleSignIn} />} 
          />
          {/* Route for individual User Pages */}
          <Route 
            path="/user/:username" 
            element={<UserPage posts={posts} />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;