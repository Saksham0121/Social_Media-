import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { format } from 'timeago.js';
import axios from 'axios';
import john from "/public/assets/john.png"


const Post = ({ post }) => {
  if (!post) return null;

  const [user, setUser] = useState({});
  const [like, setLike] = useState(post?.likes?.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users/${post.userId}`);
        // const res = await axios.get(`/users/id=${post.userId}`);
        // const res = await axios.get(`http://localhost:8800/api/users/id`);

        
        console.log(res.data)

        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (post?.userId) fetchUser();
  }, [post?.userId]);

  const likeHandler = async () => {
    try {
      await axios.put(`/posts/${post._id}/like`, { userId: post.userId });
    } catch (err) {
      console.error(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Post by ${user.username}`,
        text: post.desc,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Handle image error by setting a fallback
  const handleImageError = (e) => {
    e.target.src = '/assets/default-avatar.jpg'; // Path to default image in public folder
  };

  return (
    <div className="bg-[#111111] rounded-lg shadow-sm border border-[#222222] mb-4 text-white">
      {/* Header */}
      <div className="flex items-start justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : '/assets/defaultpfp.png' // Direct path to public folder
            }
            alt=""
            className="w-12 h-12 rounded-full object-cover"
            onError={handleImageError} // Fallback for broken images
          />
          <div>
            <h3 className="font-semibold text-white">{user?.username }</h3>
            <p className="text-gray-400 text-sm">@{user?.username || "user"} · {format(post.createdAt)}</p>

          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-[#1DCD9F]/10 transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-200 text-base leading-relaxed mb-3">{post.desc}</p>
        {post.img && (
          <div className="rounded-lg overflow-hidden">
            <img src={`/assets/${post.img}`} alt="Post" className="w-full h-64 object-cover" />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-[#222222]">
        <button
          onClick={likeHandler}
          className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors ${
            isLiked
              ? 'text-[#1DCD9F] hover:bg-[#1DCD9F]/10'
              : 'text-gray-400 hover:bg-white/5'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">{like}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-400 hover:bg-white/5 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{post.comment} comments</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-400 hover:bg-white/5 transition-colors"
        >
          <Share className="w-5 h-5" />
          <span className="text-sm font-medium">{post.shares || 0}</span>
        </button>
      </div>

      {/* Comments */}
      {showComments && (
        <div className="px-4 pb-4 border-t border-[#222222] mt-2">
          <div className="mt-4 space-y-3">
            {/* Static comment preview */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#1DCD9F] to-[#169976] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">J</span>
              </div>
              <div className="flex-1">
                <div className="bg-[#222222] rounded-lg px-3 py-2">
                  <p className="text-sm font-medium text-white">John Doe</p>
                  <p className="text-sm text-gray-300">Awesome post!</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">2m ago</p>
              </div>
            </div>
          </div>

          {/* Add Comment */}
          <div className="flex space-x-3 mt-4">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">Y</span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-3 py-2 border border-[#333333] rounded-lg bg-[#000000] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1DCD9F] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;