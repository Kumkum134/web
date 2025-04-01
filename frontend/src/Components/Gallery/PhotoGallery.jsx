import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTractor, FaChartBar, FaUsers, FaHandsHelping } from "react-icons/fa";

const categories = [
  { name: "Farmers Fairs", path: "/photos/farmers-fairs", icon: <FaTractor size={30} /> },
  { name: "Exhibitions", path: "/photos/exhibitions", icon: <FaChartBar size={30} /> },
  { name: "Team Meeting & Training", path: "/photos/team-meeting-training", icon: <FaUsers size={30} /> },
  { name: "CRM Activities", path: "/photos/crm-activities", icon: <FaHandsHelping size={30} /> },
];

const PhotoGallery = () => {
  const reloadPage = (e, url) => {
    e.preventDefault();
    window.location.href = url;
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gradient-to-b px-6 py-16"
    >
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📷 Explore Photo Categories
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {categories.map((category, index) => (
          <Link to={category.path} className="mt-4 text-lg font-semibold text-gray-800" onClick={(e) => reloadPage(e, category.path)}>
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-xl shadow-lg bg-white p-6 flex flex-col items-center justify-center text-center border border-gray-300 hover:shadow-xl hover:bg-gray-200 transition-all duration-300"
            >
              {category.icon}
              {category.name}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
