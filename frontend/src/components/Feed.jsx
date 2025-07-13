import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import Share from './Share';
import axios from "axios";
import { AuthContext } from '../context/AuthContext';

const Feed = ({ username, isProfilePage = false }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        : await axios.get("http://localhost:8800/api/posts/timeline/" + user._id);
      // console.log(res.data); //shi h
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    };
    fetchPosts();
  }, [username, user._id]);

  // If it's the main page (not profile page), use the original layout
  if (!isProfilePage && !username) {
    return (
      <div className="flex-1 ml-80 mr-80 pt-20 px-4">
        <div className="max-w-2xl mx-auto" style={{backgroundColor: '#000000'}}>
          {/* Share Component */}
          <Share />
         
          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <Post key={post._id || index} post={post} />
              ))
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#222222] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#AAAAAA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <p className="text-[#AAAAAA] text-sm">No posts to show</p>
                <p className="text-[#666666] text-xs mt-1">Start following people to see their posts</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Profile page layout (column-friendly)
  return (
    <div className="w-full">
      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Post key={post._id || index} post={post} />
          ))
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#222222] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#AAAAAA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p className="text-[#AAAAAA] text-sm">No posts to show</p>
            <p className="text-[#666666] text-xs mt-1">
              {username ? "This user hasn't posted anything yet" : "Start following people to see their posts"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;