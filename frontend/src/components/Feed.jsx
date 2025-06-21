import React, { useEffect, useState } from 'react';
import Post from './Post';
import Share from './share';
import axios from "axios";


const Feed = () => {
  const[posts, setPosts] = useState([]);

  useEffect(() => {
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8800/api/posts/timeline/6841e6aef2f88ba78c58fb89");
    console.log(res.data); //shi h
    setPosts(res.data);
  };
  fetchPosts();
  }, []);

  return (
    <div className="flex-1 ml-80 mr-80 pt-20 px-4 ">
      <div className="max-w-2xl mx-auto">
        {/* Share Component */}
        <Share />
        
        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        
      
      </div>
    </div>
  );
};

export default Feed;