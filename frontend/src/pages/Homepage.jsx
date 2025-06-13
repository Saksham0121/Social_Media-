import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/feed';
import Rightbar from '../components/Rightbar';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container" style={{ backgroundColor: '#1A1A1A' }}>
        <Sidebar />
        <Feed />
        <Rightbar/>
      </div>
    </div>
  );
};

export default Homepage;