import React, { useContext, useRef, useState } from 'react';
import { Image, Tag, MapPin, Smile, X } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      try {
        await axios.post('http://localhost:8800/api/upload', data);
      } catch (err) {}
    }
    try {
      await axios.post('http://localhost:8800/api/posts', newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="bg-gradient-to-br from-[#0b0b0b] to-[#111111] border border-[#1a1a1a] rounded-2xl p-6 mb-6 shadow-[0_0_20px_#0f0f0f]">
      <form onSubmit={submitHandler}>
        {/* Profile + input */}
        <div className="flex items-start gap-4 mb-5">
          <img
            src={user.profilePicture ? PF + user.profilePicture : PF + 'defaultpfp.png'}
            alt="pfp"
            className="w-12 h-12 rounded-full object-cover border border-[#2e2e2e]"
          />
          <input
            ref={desc}
            placeholder={`What's in your mind ${user.username}?`}
            className="flex-1 bg-[#0e0e0e] text-white placeholder-gray-400 text-base p-4 rounded-xl border border-[#1d1d1d] focus:outline-none focus:ring-2 focus:ring-[#1DCD9F] shadow-inner"
          />
        </div>

        {/* Preview image */}
        {file && (
          <div className="relative mb-4">
            <img
              className="w-full h-52 object-cover rounded-xl border border-[#1d1d1d]"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <button
              type="button"
              onClick={() => setFile(null)}
              className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1 hover:bg-black/90"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <hr className="border-[#1f1f1f] mb-4" />

        {/* Action Buttons + Share */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {/* Styled Action Buttons */}
            <label className="group flex items-center gap-2 px-4 py-2 bg-[#0f0f0f] text-white/70 border border-[#2a2a2a] rounded-xl hover:border-[#1DCD9F] hover:text-[#1DCD9F] transition-all duration-200 cursor-pointer">
              <Image className="w-4 h-4 group-hover:scale-110 transition" />
              <span className="text-sm">Photo/Video</span>
              <input
                type="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="group flex items-center gap-2 px-4 py-2 bg-[#0f0f0f] text-white/70 border border-[#2a2a2a] rounded-xl hover:border-[#1DCD9F] hover:text-[#1DCD9F] transition-all duration-200 cursor-pointer">
              <Tag className="w-4 h-4 group-hover:scale-110 transition" />
              <span className="text-sm">Tag</span>
            </div>

            <div className="group flex items-center gap-2 px-4 py-2 bg-[#0f0f0f] text-white/70 border border-[#2a2a2a] rounded-xl hover:border-[#1DCD9F] hover:text-[#1DCD9F] transition-all duration-200 cursor-pointer">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition" />
              <span className="text-sm">Location</span>
            </div>

            <div className="group flex items-center gap-2 px-4 py-2 bg-[#0f0f0f] text-white/70 border border-[#2a2a2a] rounded-xl hover:border-[#1DCD9F] hover:text-[#1DCD9F] transition-all duration-200 cursor-pointer">
              <Smile className="w-4 h-4 group-hover:scale-110 transition" />
              <span className="text-sm">Feelings</span>
            </div>
          </div>

          {/* Share Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-[#1DCD9F]/10 text-[#1DCD9F] border border-[#1DCD9F] rounded-xl font-medium hover:bg-[#1DCD9F]/20 hover:shadow-[0_0_15px_#1DCD9F] transition-all duration-200"
          >
            Share
          </button>
        </div>
      </form>
    </div>
  );
}
