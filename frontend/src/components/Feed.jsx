import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import Share from './share';
import axios from "axios";
import { AuthContext } from '../context/AuthContext';


const Feed = ( {username}  ) => {
  const[posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)
  useEffect(() => {
  const fetchPosts = async () => {
    const res = username 
    ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
    // : await axios.get("http://localhost:8800/api/posts/timeline/" + user._id);
    : await axios.get("http://localhost:8800/api/posts/timeline/6841e6aef2f88ba78c58fb89");

    // console.log(res.data); //shi h
    setPosts(res.data);
  };
  fetchPosts();
  }, [username, user._id]);

  return (
    <div className="flex-1 ml-80 mr-80 pt-20 px-4 " style={{backgroundColor: '#000000' }}>
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