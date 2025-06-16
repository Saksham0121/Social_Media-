import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/feed';
import Rightbar from '../components/Rightbar';
import Navbar from '../components/navbar';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container" style={{ backgroundColor: '#000000' }}>
        <Navbar />
        <Sidebar />
        <Feed />
        <Rightbar/>
      </div>
    </div>
  );
};

export default Homepage;