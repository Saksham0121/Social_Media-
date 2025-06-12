import React, { useState } from 'react';
import { Image, Video, Tag, MapPin, Smile, User } from 'lucide-react';

const Share = () => {
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (postText.trim()) {
      console.log('Posting:', postText);
      setPostText('');
      setSelectedImage(null);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-[#111111] rounded-lg shadow-sm border border-[#222222] p-4 mb-6">
      {/* User Input Section */}
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-[#1DCD9F] to-[#169976] rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What's in your mind, Zenitsu?"
            className="w-full p-3 text-base border border-[#222222] bg-[#000000] text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#1DCD9F] focus:border-transparent"
            rows="3"
          />

          {/* Image Preview */}
          {selectedImage && (
            <div className="mt-3 relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 bg-[#000000] bg-opacity-60 text-white rounded-full px-2 hover:bg-opacity-80"
              >
                ×
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex flex-wrap gap-2">
              {/* Photo/Video Button */}
              <label className="flex items-center space-x-2 px-3 py-2 bg-[#1DCD9F]/10 text-[#1DCD9F] rounded-lg cursor-pointer hover:bg-[#1DCD9F]/20 transition-colors">
                <Image className="w-4 h-4" />
                <span className="text-sm font-medium">Photo/Video</span>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {/* Tag Button */}
              <button className="flex items-center space-x-2 px-3 py-2 bg-[#169976]/10 text-[#169976] rounded-lg hover:bg-[#169976]/20 transition-colors">
                <Tag className="w-4 h-4" />
                <span className="text-sm font-medium">Tag</span>
              </button>

              {/* Location Button */}
              <button className="flex items-center space-x-2 px-3 py-2 bg-[#169976]/10 text-[#169976] rounded-lg hover:bg-[#169976]/20 transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Location</span>
              </button>

              {/* Feelings Button */}
              <button className="flex items-center space-x-2 px-3 py-2 bg-yellow-100/10 text-yellow-400 rounded-lg hover:bg-yellow-100/20 transition-colors">
                <Smile className="w-4 h-4" />
                <span className="text-sm font-medium">Feelings</span>
              </button>
            </div>

            {/* Share Button */}
            <button
              onClick={handlePost}
              className={`px-6 py-2 rounded-lg font-medium transition-colors mt-2 sm:mt-0 ${
                postText.trim()
                  ? 'bg-[#1DCD9F] text-white hover:bg-[#169976]'
                  : 'bg-[#222222] text-[#555] cursor-not-allowed'
              }`}
              disabled={!postText.trim()}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
