import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeFeed from './pages/HomeFeed';
import PostCreateForm from './pages/PostCreateForm';
import Header from './components/Header';
import PostDetail from './pages/PostDetail';
import PostEditForm from './pages/PostEditForm';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/create-post" element={<PostCreateForm />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/edit-post/:postId" element={<PostEditForm />} />
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App;
