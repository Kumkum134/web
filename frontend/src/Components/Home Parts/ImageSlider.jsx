import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/Assets/banner/1.jpg",
  "/Assets/banner/2.jpg",
  "/Assets/banner/Auricur Banner.jpg",
  "/Assets/banner/aurinko banner.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[80vh] mx-auto">
      <div className="relative w-full h-full overflow-hidden ">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full hover:bg-gray-800 z-10"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full hover:bg-gray-800 z-10"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-2xl ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}