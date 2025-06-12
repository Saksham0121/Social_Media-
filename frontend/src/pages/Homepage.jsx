import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/feed';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container" style={{ backgroundColor: '#1A1A1A' }}>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Homepage;