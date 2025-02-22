import React, { useState, useEffect } from "react";
import { block8Data } from "../../Data/data";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Block8 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    block8Data.forEach((item) => {
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
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {block8Data.map((item, index) => (
        <div
          key={item.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-[18%] h-[25rem] flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="h-[75%] relative">
            <img
              src={hoveredIndex === index ? item.hoverImage : item.image}
              alt={item.title}
              className="w-full h-full rounded-lg object-cover transition-opacity duration-300"
            />
          </div>
          <div className="text-center mt-2 h-[25%] flex flex-col justify-center bg-gray-50 p-2 rounded-b-lg">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <div className="flex justify-center mt-1">{renderStars(item.rating)}</div>
            <span
              className={`mt-2 inline-block ${
                index % 2 === 0 ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"
              } text-xs font-semibold px-3 py-1 rounded-full`}
            >
              {item.segment}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block8;
