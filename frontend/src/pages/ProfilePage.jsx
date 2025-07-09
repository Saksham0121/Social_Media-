import React, { useEffect, useState } from 'react';
import { Camera, Edit3, Settings } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';
import Feed from '../components/Feed';
import axios from 'axios';
import { useParams } from 'react-router';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [user, setUser] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const username = useParams().username;
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
          console.log(res.data)
          setUser(res.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchUser();
    }, [username]);

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
        {/* Cover Photo Section */}
        <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
          <img 
            src={user.coverPicture
                ? PF + user.coverPicture
                : PF + 'Nocover.jpeg'}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <button className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-300 backdrop-blur-sm border border-white/20">
            <Camera className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Change Cover</span>
          </button>
        </div>

        {/* Profile Info Section */}
          <div className="relative px-8 pb-6">
            {/* Profile Picture */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 pt-6">
              {/* Profile Picture */}
              <div className="relative -mt-16 sm:-mt-20 lg:-mt-24">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 p-1.5 shadow-2xl">
                    <img
                      src={
                          user.profilePicture
                          ? PF + user.profilePicture
                          : PF + "defaultpfp.png"
                      }
                      className='w-full h-full rounded-full object-cover'
                      alt="Profile"
                    />
                  </div>
                  <button className="absolute bottom-2 right-2 bg-[#1DCD9F] hover:bg-[#1DCD9F]/80 p-2.5 rounded-full transition-all duration-300 shadow-lg hover:scale-110">
                    <Camera className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 min-w-0 sm:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="min-w-0 ml-10 flex-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {user.username}
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-xl mt-2 leading-relaxed">
                      {user.desc}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 sm:flex-shrink-0">
                    <button className="bg-[#1DCD9F] hover:bg-[#1DCD9F]/90 text-black px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 font-semibold shadow-lg hover:scale-105">
                      <Edit3 className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </button>
                    <button className="bg-[#222222] hover:bg-[#333333] px-4 py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105">
                      <Settings className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/* Profile Details */}
          <div className="mt-6 ml-52">
          
            {/* Follow Stats */}
            <div className="flex items-center space-x-8 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{user.from}</div>
                <div className="text-[#AAAAAA] text-sm">from</div>
              </div>
              <div className="text-center cursor-pointer hover:text-[#1DCD9F] transition-colors">
                <div className="text-2xl font-bold">{user.city}</div>
                <div className="text-[#AAAAAA] text-sm">City</div>
              </div>
              <div className="text-center cursor-pointer hover:text-[#1DCD9F] transition-colors">
                <div className="text-2xl font-bold">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-" }</div>
                <div className="text-[#AAAAAA] text-sm">Relationship</div>
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
              <Feed username={username} />
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


//new
