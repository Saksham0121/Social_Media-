import React, { useEffect, useState, useContext } from 'react';
import { Camera, Edit3, Settings, UserPlus, UserMinus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';
import Feed from '../components/Feed';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(false);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const username = useParams().username;
  const { user: currentUser, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
        console.log(res.data);
        setUser(res.data);
        setFollowed(currentUser.followings?.includes(res.data._id));
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user._id) {
          const friendList = await axios.get(`http://localhost:8800/api/users/friends/${user._id}`);
          setFriends(friendList.data);
        }
      } catch (err) {
        console.log(err);
      }  
    };
    getFriends();
  }, [user]);

  const handleFollowClick = async () => {
    try {
      if (followed) {
        await axios.put(`http://localhost:8800/api/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`http://localhost:8800/api/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-0 lg:ml-80 pt-16">
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
        <div className="relative px-4 sm:px-6 lg:px-8 pb-6">
          {/* Profile Picture */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 pt-6">
            {/* Profile Picture */}
            <div className="relative -mt-16 sm:-mt-20 lg:-mt-24">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 p-1.5 shadow-2xl">
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
                <button className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-[#1DCD9F] hover:bg-[#1DCD9F]/80 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-lg hover:scale-110">
                  <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                </button>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 min-w-0 sm:pb-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="min-w-0 sm:ml-6 lg:ml-10 flex-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {user.username}
                  </h1>
                  <p className="text-gray-300 text-base sm:text-lg lg:text-xl mt-2 leading-relaxed">
                    {user.desc}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 lg:flex-shrink-0">
                  {user.username !== currentUser?.username && (
                    <button 
                      onClick={handleFollowClick}
                      className="bg-[#1DCD9F] hover:bg-[#1DCD9F]/90 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 font-semibold shadow-lg hover:scale-105 text-sm sm:text-base"
                    >
                      {followed ? <UserMinus className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                      <span className="hidden sm:inline">{followed ? 'Unfollow' : 'Follow'}</span>
                    </button>
                  )}
                  <button className="bg-[#1DCD9F] hover:bg-[#1DCD9F]/90 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 font-semibold shadow-lg hover:scale-105 text-sm sm:text-base">
                    <Edit3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Edit Profile</span>
                  </button>
                  <button className="bg-[#222222] hover:bg-[#333333] px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105">
                    <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-6 sm:ml-6 lg:ml-52">
            {/* Follow Stats */}
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:space-x-6 lg:space-x-8 gap-4 sm:gap-0 mt-6">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">{user.from || '-'}</div>
                <div className="text-[#AAAAAA] text-xs sm:text-sm">from</div>
              </div>
              <div className="text-center cursor-pointer hover:text-[#1DCD9F] transition-colors">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">{user.city || '-'}</div>
                <div className="text-[#AAAAAA] text-xs sm:text-sm">City</div>
              </div>
              <div className="text-center cursor-pointer hover:text-[#1DCD9F] transition-colors">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</div>
                <div className="text-[#AAAAAA] text-xs sm:text-sm">Relationship</div>
              </div>
              <div className="text-center cursor-pointer hover:text-[#1DCD9F] transition-colors">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">{friends.length}</div>
                <div className="text-[#AAAAAA] text-xs sm:text-sm">Friends</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area with Two Distinct Columns */}
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column - Posts Feed */}
              <div className="lg:col-span-8 xl:col-span-8">
                <div className="bg-[#111111] rounded-xl border border-[#222222] min-h-[600px]">
                  {/* Posts Header */}
                  <div className="p-4 sm:p-6 border-b border-[#222222]">
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      <div className="w-1 h-6 bg-[#1DCD9F] rounded-full"></div>
                      Posts
                    </h2>
                  </div>
                  
                  {/* Posts Content */}
                  <div className="p-4 sm:p-6">
                    <Feed username={username} isProfilePage={true} />
                  </div>
                </div>
              </div>

              {/* Right Column - Friends */}
              <div className="lg:col-span-4 xl:col-span-4">
                <div className="bg-[#111111] rounded-xl border border-[#222222] sticky top-24">
                  {/* Friends Header */}
                  <div className="p-4 sm:p-6 border-b border-[#222222]">
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      <div className="w-1 h-6 bg-[#1DCD9F] rounded-full"></div>
                      Friends
                      <span className="text-sm font-normal text-[#AAAAAA] ml-2">({friends.length})</span>
                    </h2>
                  </div>
                  
                  {/* Friends Content */}
                  <div className="p-4 sm:p-6">
                    <div className="space-y-3 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#333333] scrollbar-track-transparent">
                      {friends.map((friend) => (
                        <Link
                          key={friend._id}
                          to={`/profile/${friend.username}`}
                          className="block text-decoration-none"
                        >
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#222222] transition-all duration-300 border border-transparent hover:border-[#333333]">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 p-0.5 flex-shrink-0">
                              <img
                                src={
                                  friend.profilePicture
                                    ? PF + friend.profilePicture
                                    : PF + "defaultpfp.png"
                                }
                                alt=""
                                className="w-full h-full rounded-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white text-sm truncate hover:text-[#1DCD9F] transition-colors">
                                {friend.username}
                              </h4>
                              <p className="text-[#AAAAAA] text-xs truncate mt-1">
                                {friend.desc || 'No description'}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                      
                      {friends.length === 0 && (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#222222] flex items-center justify-center">
                            <UserPlus className="w-8 h-8 text-[#AAAAAA]" />
                          </div>
                          <p className="text-[#AAAAAA] text-sm">No friends to show</p>
                          <p className="text-[#666666] text-xs mt-1">Start following people to see them here</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;