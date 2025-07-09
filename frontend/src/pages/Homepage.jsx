import React from 'react';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';
import Navbar from '../components/navbar';
import Feed from '../components/Feed';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Homepage;
