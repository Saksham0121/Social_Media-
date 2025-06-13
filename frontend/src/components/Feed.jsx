import React from 'react';
import Post from './Post';
import Share from './share';

const Feed = () => {
  const posts = [
    {
      user: "Tanjiro",
      handle: "tanjiro god",
      time: "5 mins ago",
      content: "Love For All, Hatred For None.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=cover",
      likes: 124,
      comments: 18,
      shares: 7
    },
    {
      user: "Giyu",
      handle: "Giyuuuuu",
      time: "2h",
      content: "Just finished an amazing hiking trip in the mountains! The view from the top was absolutely breathtaking. Nature never fails to inspire me 🏔️",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec29d5?w=600&h=400&fit=cover",
      likes: 89,
      comments: 32,
      shares: 45
    },
    {
      user: "nezuko",
      handle: "nezukochaa",
      time: "4h",
      content: "Breaking: New AI breakthrough promises to revolutionize how we interact with technology. This could change everything we know about human-computer interfaces.",
      likes: 156,
      comments: 24,
      shares: 31
    },
    {
      user: "Inosuke",
      handle: "inoinoooo",
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
      likes: 98,
      comments: 15,
      shares: 22
    },
    {
      user: "Travel Enthusiast",
      handle: "wanderlust_traveler",
      time: "10h",
      content: "Just arrived in Bali and the sunset here is absolutely magical! Sometimes you need to disconnect to truly reconnect with yourself. 🌅",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=cover",
      likes: 203,
      comments: 28,
      shares: 19
    }
  ];

  return (
    <div className="flex-1 ml-80 mr-80 pt-20 px-4 ">
      <div className="max-w-2xl mx-auto">
        {/* Share Component */}
        <Share />
        
        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center py-8">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;