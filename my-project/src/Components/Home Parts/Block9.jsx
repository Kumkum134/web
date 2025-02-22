import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { reviews } from "../../Data/data";

const Block9 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center py-12 px-6 md:px-12 lg:px-16 rounded-2xl shadow-xl relative overflow-hidden">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Aurinko Health Care Pvt. Ltd</h1>
            <motion.div
                className="mb-8 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-2xl font-semibold text-gray-800">Review & Feedback</h2>
                <button className="mt-3 px-6 py-2 bg-orange-600 text-white rounded-full shadow-lg hover:bg-green-800 transition-all duration-300">
                    Go Review
                </button>
            </motion.div>

            <motion.div 
                key={currentIndex} 
                className="relative w-96 h-96 flex flex-col items-center justify-center bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center border border-white"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.6 }}
            >
                <motion.img
                    src={reviews[currentIndex].image}
                    alt="Review user"
                    className="w-20 h-20 rounded-full border-4 mb-3 "
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
                <p className="text-gray-900 text-lg italic">{reviews[currentIndex].text}</p>
                <h3 className="mt-2 text-xl font-medium text-gray-800">{reviews[currentIndex].name}</h3>
            </motion.div>
        </div>
    );
};

export default Block9;
