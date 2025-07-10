import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import Share from './Share';
import axios from "axios";
import { AuthContext } from '../context/AuthContext';


const Feed = ( {username}  ) => {
  const[posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)
  useEffect(() => {
  const fetchPosts = async () => {
    const res = username 
    ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
    : await axios.get("http://localhost:8800/api/posts/timeline/" + user._id);

    // console.log(res.data); //shi h
    setPosts(res.data.sort((p1, p2) => {
      return new Date(p2.createdAt) - new Date(p1.createdAt);
    }
    ));
  };
  fetchPosts();
  }, [username, user._id]);

  return (
    <div className="flex-1 ml-80 mr-80 pt-20 px-4 ">
      <div className="max-w-2xl mx-auto" style={{backgroundColor: '#000000' }}>
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