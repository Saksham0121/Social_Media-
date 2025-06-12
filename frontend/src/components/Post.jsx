import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

const Post = ({ user, handle, time, content, image, likes, comments, shares }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Post by ${user}`,
        text: content,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-[#111111] rounded-lg shadow-sm border border-[#222222] mb-4 text-white">
      {/* Post Header */}
      <div className="flex items-start justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-[#1DCD9F] to-[#169976] rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">{user.charAt(0)}</span>
          </div>
          <div>
            <h3 className="font-semibold text-white">{user}</h3>
            <p className="text-gray-400 text-sm">@{handle} · {time}</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-[#1DCD9F]/10 transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-200 text-base leading-relaxed mb-3">{content}</p>
        {image && (
          <div className="rounded-lg overflow-hidden">
            <img src={image} alt="Post content" className="w-full h-64 object-cover" />
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-[#222222]">
        <button 
          onClick={handleLike}
          className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors ${
            liked 
              ? 'text-[#1DCD9F] hover:bg-[#1DCD9F]/10' 
              : 'text-gray-400 hover:bg-white/5'
          }`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">{likeCount}</span>
        </button>
        
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-400 hover:bg-white/5 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{comments}</span>
        </button>
        
        <button 
          onClick={handleShare}
          className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-400 hover:bg-white/5 transition-colors"
        >
          <Share className="w-5 h-5" />
          <span className="text-sm font-medium">{shares}</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 pb-4 border-t border-[#222222]">
          <div className="mt-4 space-y-3">
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#1DCD9F] to-[#169976] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">J</span>
              </div>
              <div className="flex-1">
                <div className="bg-[#222222] rounded-lg px-3 py-2">
                  <p className="text-sm font-medium text-white">John Doe</p>
                  <p className="text-sm text-gray-300">Great post! Thanks for sharing.</p>
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
