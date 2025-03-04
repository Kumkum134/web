import React, { useState } from "react";
import items from "../../Data/productbrochure";
import { FaTimes, FaExpand, FaSearchPlus, FaDownload, FaShareAlt } from "react-icons/fa";

const ProductBrochures = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const openImage = (index) => {
    setSelectedIndex(index);
    setZoom(false);
    setShowShare(false);
  };

  const closeImage = () => {
    setSelectedIndex(null);
    setZoom(false);
    setShowShare(false);
  };

  const toggleZoom = () => {
    setZoom(!zoom);
  };

  const toggleShare = () => {
    setShowShare(!showShare);
  };

  const downloadImage = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `image_${selectedIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto py-8">
        <div className="flex justify-center space-x-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => openImage(index)}
            >
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-64 h-64 object-cover rounded-lg"
                />
                <div className="p-4">
                  <p className="text-gray-700 font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeImage}
            >
              <FaTimes />
            </button>
            <img
              src={items[selectedIndex].img}
              alt="Full View"
              className={`rounded-lg ${
                zoom ? "w-screen h-screen" : "max-w-4xl max-h-[80vh]"
              }`}
            />
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <button className="text-white text-2xl" onClick={toggleZoom}>
                <FaSearchPlus />
              </button>
              <button className="text-white text-2xl" onClick={toggleShare}>
                <FaShareAlt />
              </button>
              <button
                className="text-white text-2xl"
                onClick={() => downloadImage(items[selectedIndex].img)}
              >
                <FaDownload />
              </button>
            </div>
          </div>

          {showShare && (
            <div className="absolute bottom-16 right-4 bg-white p-2 rounded-lg shadow-lg flex flex-col">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${items[selectedIndex].img}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 mb-2"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${items[selectedIndex].img}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 mb-2"
              >
                Twitter
              </a>
              <a
                href={`https://www.pinterest.com/pin/create/button/?url=${items[selectedIndex].img}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 mb-2"
              >
                Pinterest
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductBrochures;
