import { useState } from 'react';
import { Search, Home, User, MessageCircle, Bell, Settings } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const notifications = {
    messages: 3,
    notifications: 7,
    updates: 12
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-700 px-6 py-3">
      <div className="flex items-center justify-between max-w mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
            N
          </div>
          <span className="text-white font-semibold text-xl">YapYap</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <div className={`relative transition-all duration-200 ${
              isSearchFocused ? 'transform scale-105' : ''
            }`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search the neural network..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                className={`w-full pl-10 pr-4 py-2 bg-slate-800 border rounded-full text-white placeholder-slate-400 focus:outline-none transition-all duration-200 ${
                  isSearchFocused 
                    ? 'border-blue-500 bg-slate-700 shadow-lg shadow-blue-500/20' 
                    : 'border-slate-600 hover:border-slate-500'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-5">
          {/* Home */}
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200">
            <Home className="w-5 h-5" />
          </button>

          {/* Profile */}
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200">
            <User className="w-5 h-5" />
          </button>

          {/* Messages with notification */}
          <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200 group">
            <MessageCircle className="w-5 h-5" />
            {notifications.messages > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                {notifications.messages}
              </span>
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200 group">
            <Bell className="w-5 h-5" />
            {notifications.notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                {notifications.notifications}
              </span>
            )}
          </button>

          {/* Updates */}
          {/* <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200 group">
            <Settings className="w-5 h-5" />
            {notifications.updates > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                {notifications.updates}
              </span>
            )}
          </button> */}

          {/* User Avatar */}
          <div className="ml-3">
            <button className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-110">
              <span className="text-white font-medium text-sm">A</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button (hidden on desktop) */}
      <div className="md:hidden mt-3">
        <button className="w-full text-left text-slate-400 hover:text-white transition-colors duration-200">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-0.5 bg-slate-600"></div>
            <div className="w-4 h-0.5 bg-slate-600"></div>
            <div className="w-5 h-0.5 bg-slate-600"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}