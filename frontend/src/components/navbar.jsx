import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { Search, Home, User, MessageCircle, Bell } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { user } = useContext(AuthContext);
  const PF =  import.meta.env.VITE_PUBLIC_FOLDER;

  const notifications = {
    messages: 3,
    notifications: 7,
    updates: 12
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#000000] border-b border-[#222222] px-6 py-3 z-50">
      <div className="flex items-center justify-between max-w mx-auto">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-1">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-black text-lg">
            <img src = "/src/assets/ConnectNow.png"></img>
          </div>
          <span className="text-white font-semibold text-xl">ConnectNow</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <div className={`relative transition-all duration-200 ${isSearchFocused ? 'transform scale-105' : ''}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#169976] w-4 h-4" />
              <input
                type="text"
                placeholder="Search the neural network..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                className={`w-full pl-10 pr-4 py-2 bg-[#222222] border rounded-full text-white placeholder-[#1DCD9F] focus:outline-none transition-all duration-200 ${
                  isSearchFocused
                    ? 'border-[#1DCD9F] bg-[#222222] shadow-lg shadow-[#1DCD9F]/20'
                    : 'border-[#169976] hover:border-[#1DCD9F]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-5">
          {/* Home */}
          <Link to="/" className="p-2 text-[#1DCD9F] hover:text-white hover:bg-[#222222] rounded-lg transition-all duration-200">
            <Home className="w-5 h-5" />
          </Link>


          {/* Messages */}
          <button className="relative p-2 text-[#1DCD9F] hover:text-white hover:bg-[#222222] rounded-lg transition-all duration-200 group">
            <MessageCircle className="w-5 h-5" />
            {notifications.messages > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                {notifications.messages}
              </span>
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-[#1DCD9F] hover:text-white hover:bg-[#222222] rounded-lg transition-all duration-200 group">
            <Bell className="w-5 h-5" />
            {notifications.notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                {notifications.notifications}
              </span>
            )}
          </button>

          {/* User Avatar */}
          <div className="ml-3">
            <Link to={`/profile/${user.username}`} className="w-8 h-8 rounded-full flex items-center justify-center bg-[#222222] hover:shadow-lg hover:shadow-[#1DCD9F]/25 transition-all duration-200 transform hover:scale-110 overflow-hidden relative">
              <img src={
                user.profilePicture
                ? PF + user.profilePicture
                : '/assets/defaultpfp.png' // Direct path to public folder
              }alt="icon" className="w-full h-full object-cover absolute inset-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button (Optional) */}
      <div className="md:hidden mt-3">
        <button className="w-full text-left text-[#1DCD9F] hover:text-white transition-colors duration-200">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-0.5 bg-[#1DCD9F]"></div>
            <div className="w-4 h-0.5 bg-[#1DCD9F]"></div>
            <div className="w-5 h-0.5 bg-[#1DCD9F]"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}
