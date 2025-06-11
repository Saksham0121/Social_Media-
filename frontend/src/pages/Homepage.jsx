import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, Search, Bell, Mail, Bookmark, User, Home, Hash, Users } from 'lucide-react';


// Sidebar Component
const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Hash, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: Users, label: 'Communities' },
    { icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-white border-r border-gray-200 p-4">
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
              item.active 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-lg">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

// Post Component
const Post = ({ user, handle, time, content, image, likes, comments, shares }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">{user.charAt(0)}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{user}</h3>
            <p className="text-gray-500 text-sm">@{handle} · {time}</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-900 text-base leading-relaxed mb-3">{content}</p>
        {image && (
          <div className="rounded-lg overflow-hidden">
            <img src={image} alt="Post content" className="w-full h-64 object-cover" />
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <button 
          onClick={handleLike}
          className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors ${
            liked ? 'text-red-500 hover:bg-red-50' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">{likeCount}</span>
        </button>
        
        <button className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-500 hover:bg-gray-100">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{comments}</span>
        </button>
        
        <button className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-500 hover:bg-gray-100">
          <Share className="w-5 h-5" />
          <span className="text-sm font-medium">{shares}</span>
        </button>
      </div>
    </div>
  );
};

// Create Post Component
const CreatePost = () => {
  const [postText, setPostText] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What's happening?"
            className="w-full p-3 text-lg border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4 text-blue-500">
              <button className="hover:bg-blue-50 p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <button 
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                postText.trim() 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!postText.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Homepage Component
const Homepage = () => {
  const posts = [
    {
      user: "Sarah Johnson",
      handle: "sarahj",
      time: "2h",
      content: "Just finished an amazing hiking trip in the mountains! The view from the top was absolutely breathtaking. Nature never fails to inspire me 🏔️",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=cover",
      likes: 124,
      comments: 18,
      shares: 7
    },
    {
      user: "Tech Insider",
      handle: "techinsider",
      time: "4h",
      content: "Breaking: New AI breakthrough promises to revolutionize how we interact with technology. This could change everything we know about human-computer interfaces.",
      likes: 89,
      comments: 32,
      shares: 45
    },
    {
      user: "Food Explorer",
      handle: "foodie_adventures",
      time: "6h",
      content: "Tried this incredible new fusion restaurant downtown. The combination of Korean and Mexican flavors was absolutely mind-blowing! 🌮🥢",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=cover",
      likes: 67,
      comments: 12,
      shares: 8
    },
    {
      user: "Design Studio",
      handle: "designstudio",
      time: "8h",
      content: "Clean, minimal design is not about having less. It's about making room for what matters most. Every element should have a purpose.",
      likes: 156,
      comments: 24,
      shares: 31
    }
  ];

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 ml-64">
          <div className="max-w-2xl mx-auto py-8 px-4">
            <CreatePost />
            
            {/* Posts Feed */}
            <div>
              {posts.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Sidebar - Trending */}
        <div className="w-80 p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trending</h3>
            <div className="space-y-4">
              {['#TechNews', '#Photography', '#FoodieLife', '#DesignTips', '#Travel'].map((trend, index) => (
                <div key={index} className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <p className="font-medium text-gray-900">{trend}</p>
                  <p className="text-sm text-gray-500">{Math.floor(Math.random() * 50 + 10)}K posts</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Suggested for you</h3>
            <div className="space-y-4">
              {['Alex Chen', 'Maria Garcia', 'John Smith'].map((name, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{name}</p>
                      <p className="text-sm text-gray-500">@{name.toLowerCase().replace(' ', '')}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Homepage;