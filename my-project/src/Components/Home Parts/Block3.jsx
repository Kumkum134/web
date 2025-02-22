import React, { useState, useEffect } from "react";
import { block3Data } from "../../Data/data";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Block3 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    block3Data.forEach((item) => {
      const img = new Image();
      img.src = item.hoverImage;
    });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400" />);
    }

    return stars;
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 py-6 px-4 sm:px-6 md:px-8 lg:px-12">
      {block3Data.map((item, index) => (
        <div
          key={item.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-[18%] max-w-xs h-[25rem] flex flex-col justify-between bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="h-[75%] relative">
            <img
              src={hoveredIndex === index ? item.hoverImage : item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
          <div className="text-center h-[25%] flex flex-col justify-center bg-gray-50 p-3 rounded-b-xl">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <div className="flex justify-center mt-1">{renderStars(item.rating)}</div>
            <span
              className={`mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                index % 2 === 0 ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"
              }`}
            >
              {item.segment}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block3;
