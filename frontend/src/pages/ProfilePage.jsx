import React, { useState } from 'react';
import { Home, MessageCircle, Video, Users, Bookmark, Hash, Briefcase, Calendar, GraduationCap, Camera, Edit3, MapPin, Heart, Share, MoreHorizontal, UserPlus, Settings } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const posts = [
    {
      id: 1,
      content: "Just finished an amazing hiking trip in the mountains! The view was absolutely breathtaking. Nature always has a way of putting things into perspective. 🏔️",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      likes: 124,
      comments: 23,
      shares: 8,
      time: "2 hours ago"
    },
    {
      id: 2,
      content: "Working on a new project that I'm really excited about. Can't wait to share more details soon! The creative process has been incredibly rewarding.",
      likes: 89,
      comments: 15,
      shares: 5,
      time: "1 day ago"
    },
    {
      id: 3,
      content: "Beautiful sunset from my balcony today. Sometimes the best moments are the ones right at home. 🌅",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      likes: 156,
      comments: 31,
      shares: 12,
      time: "3 days ago"
    }
  ];

  const photos = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
  ];

  const friends = [
    { name: 'Alex Johnson', username: '@alex_j', mutual: 15 },
    { name: 'Sarah Chen', username: '@sarah_c', mutual: 8 },
    { name: 'Mike Rodriguez', username: '@mike_r', mutual: 22 },
    { name: 'Emma Wilson', username: '@emma_w', mutual: 12 },
    { name: 'David Kim', username: '@david_k', mutual: 7 },
    { name: 'Lisa Brown', username: '@lisa_b', mutual: 18 }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-80 pt-16">
        {/* Cover Photo Section */}
        <div className="relative h-80 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=320&fit=crop"
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <button className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Camera className="w-4 h-4" />
            <span>Change Cover</span>
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="relative px-8 pb-6">
          {/* Profile Picture */}
          <div className="absolute -top-20 left-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1">
                <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center text-4xl font-bold">
                  Zen
                </div>
              </div>
              <button className="absolute bottom-2 right-2 bg-[#1DCD9F] hover:bg-[#1DCD9F]/80 p-2 rounded-full transition-colors">
                <Camera className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Profile Actions */}
          <div className="flex justify-end pt-4 space-x-3">
            <button className="bg-[#222222] hover:bg-[#333333] px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Edit3 className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
            <button className="bg-[#222222] hover:bg-[#333333] px-4 py-2 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Profile Details */}
          <div className="mt-16 ml-44">
            <h1 className="text-3xl font-bold">Zenitsu Agatsuma</h1>
            <p className="text-[#AAAAAA] text-lg">@zeniiizeni</p>
            
            <p className="mt-4 text-lg max-w-2xl">
              Warrior | Soon Hashira | Lightening God
              <br />
              Building amazing digital experiences one line of code at a time ✨
            </p>

            {/* Follow Stats */}
            <div className="flex items-center space-x-8 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-[#AAAAAA] text-sm">Posts</div>
              </div>
              <div className="text-center cursor-pointer hover:text-[#1DCD9F] transition-colors">
                <div className="text-2xl font-bold">12.5K</div>
                <div className="text-[#AAAAAA] text-sm">Followers</div>
              </div>
              <div className="text-center cursor-pointer hover:text-[#1DCD9F] transition-colors">
                <div className="text-2xl font-bold">1,891</div>
                <div className="text-[#AAAAAA] text-sm">Following</div>
              </div>
              <div className="text-center cursor-pointer hover:text-[#1DCD9F] transition-colors">
                <div className="text-2xl font-bold">432</div>
                <div className="text-[#AAAAAA] text-sm">Friends</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-[#222222] px-8">
          <nav className="flex space-x-8">
            {['posts', 'photos', 'friends', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-[#1DCD9F] text-[#1DCD9F]'
                    : 'border-transparent text-[#AAAAAA] hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="px-8 py-6">
          {activeTab === 'posts' && (
            <div className="max-w-2xl space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-[#111111] rounded-lg p-6 border border-[#222222]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center font-bold">
                        SK
                      </div>
                      <div>
                        <h3 className="font-semibold">Safak Kocaoglu</h3>
                        <p className="text-[#AAAAAA] text-sm">{post.time}</p>
                      </div>
                    </div>
                    <button className="text-[#AAAAAA] hover:text-white transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="mb-4 leading-relaxed">{post.content}</p>
                  
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt="Post content"
                      className="w-full rounded-lg mb-4 max-h-96 object-cover"
                    />
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#222222]">
                    <button className="flex items-center space-x-2 text-[#AAAAAA] hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-[#AAAAAA] hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-[#AAAAAA] hover:text-green-500 transition-colors">
                      <Share className="w-5 h-5" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="grid grid-cols-3 gap-4 max-w-4xl">
              {photos.map((photo, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-[#111111] border border-[#222222] hover:border-[#1DCD9F] transition-colors cursor-pointer">
                  <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'friends' && (
            <div className="grid grid-cols-2 gap-4 max-w-4xl">
              {friends.map((friend, index) => (
                <div key={index} className="bg-[#111111] rounded-lg p-4 border border-[#222222] hover:border-[#1DCD9F] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                        {friend.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{friend.name}</h3>
                        <p className="text-[#AAAAAA] text-sm">{friend.username}</p>
                        <p className="text-[#AAAAAA] text-xs">{friend.mutual} mutual friends</p>
                      </div>
                    </div>
                    <button className="bg-[#1DCD9F] hover:bg-[#1DCD9F]/80 text-black px-4 py-2 rounded-lg transition-colors">
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'about' && (
            <div className="max-w-2xl space-y-6">
              <div className="bg-[#111111] rounded-lg p-6 border border-[#222222]">
                <h3 className="text-xl font-semibold mb-4">About</h3>
                <p className="text-[#AAAAAA] leading-relaxed">
                  Passionate full-stack developer with over 5 years of experience building scalable web applications. 
                  I love working with modern technologies like React, Node.js, and cloud platforms. When I'm not coding, 
                  you can find me hiking, reading tech blogs, or experimenting with new frameworks.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;