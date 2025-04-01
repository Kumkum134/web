import React from "react";
import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
];

const VideoGallery = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gradient-to-b px-6 py-16"
    >
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎬 Explore Videos Categories
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {videos.map((video, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            <iframe
              className="w-full h-64"
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
