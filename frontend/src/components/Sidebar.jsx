import React, { useState } from 'react';
import { Home, MessageCircle, Video, Users, Bookmark, Hash, Briefcase, Calendar, GraduationCap } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Feed', active: true },
    { icon: MessageCircle, label: 'Chats' },
    { icon: Video, label: 'Videos' },
    { icon: Users, label: 'Groups' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: Hash, label: 'Questions' },
    { icon: Briefcase, label: 'Jobs' },
    { icon: Calendar, label: 'Events' },
    { icon: GraduationCap, label: 'Courses' }
  ];

  const friends = [
    { name: 'Tanjiro Kamado', username: '@tanjiro', avatar: "src/assets/tanjiroDS.jpg" },
    { name: 'Inosuke Hashibira', username: '@inosuke', avatar: 'src/assets/inosukeDS.jpg' },
    { name: 'Nezuko Kamado', username: '@nezuko', avatar: 'src/assets/nezukoDS.jpg' },
    { name: 'Giyu Tomioka', username: '@giyu', avatar: "/src/assets/giyuDS.jpg" }
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="fixed left-0 top-16 w-80 bg-[#000000] p-4 overflow-y-auto border-r border-[#222222] custom-scrollbar"
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <nav className="space-y-1">
        {menuItems.slice(0, showMore ? menuItems.length : 6).map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
              item.active
                ? 'bg-[#1DCD9F]/10 text-[#1DCD9F] font-medium'
                : 'text-white hover:bg-[#222222]'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-base">{item.label}</span>
          </button>
        ))}

        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full text-left px-4 py-3 text-[#1DCD9F] hover:bg-[#222222] rounded-lg transition-colors"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </nav>

      {/* Friends List Section */}
      <div className="mt-8 p-4 bg-[#111111] rounded-lg shadow-inner border border-[#222222]">
        <h3 className="font-semibold text-white mb-4 text-lg">My Friends</h3>
        <div className="space-y-3">
          {friends.map((friend, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#222222] transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center overflow-hidden">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-white font-semibold text-sm hidden">
                  {friend.name.charAt(0)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white text-sm truncate">{friend.name}</p>
                <p className="text-[#AAAAAA] text-xs truncate">{friend.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
