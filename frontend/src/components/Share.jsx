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
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#111111] rounded-lg shadow-sm border border-[#222222] p-4 mb-6">
      <form onSubmit={submitHandler}>
        <div className="flex space-x-4 mb-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "defaultpfp.png"
            }
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user.username}?`}
            className="flex-1 p-3 text-base border border-[#222222] bg-[#000000] text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#1DCD9F]"
            ref={desc}
          />
        </div>

        {file && (
          <div className="relative mb-4">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <button
              type="button"
              onClick={() => setFile(null)}
              className="absolute top-2 right-2 bg-[#000000] bg-opacity-60 text-white rounded-full p-1 hover:bg-opacity-80"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <hr className="border-[#222222] mb-4" />

        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center space-x-2 px-3 py-2 bg-red-500/10 text-red-500 rounded-lg cursor-pointer hover:bg-red-500/20 transition-colors">
              <Image className="w-4 h-4" />
              <span className="text-sm font-medium">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="flex items-center space-x-2 px-3 py-2 bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500/20 transition-colors cursor-pointer">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-medium">Tag</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20 transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Location</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-2 bg-yellow-100/10 text-yellow-400 rounded-lg hover:bg-yellow-100/20 transition-colors cursor-pointer">
              <Smile className="w-4 h-4" />
              <span className="text-sm font-medium">Feelings</span>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-[#1DCD9F] text-white rounded-lg font-medium hover:bg-[#169976] transition-colors mt-2 sm:mt-0"
          >
            Share
          </button>
        </div>
      </form>
    </div>
  );
}
