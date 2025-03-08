import React from "react";
import { Link } from "react-router-dom";

const Block9 = () => {
    return (
        <div className="min-h-96 py-12">
            <div className="text-center mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">
                    Get in <span className="text-green-800">Touch</span>
                </h1>
                <div
                    className="h-1 w-24 md:w-36 lg:w-44 xl:w-48 mx-auto mt-2 rounded"
                    style={{ background: "linear-gradient(to right, #15803d,#ea580c)" }}
                ></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-stretch p-10 rounded-lg max-w-6xl mx-auto gap-6">
                <div className="flex-1 text-center md:text-left">
                    <div className="bg-white/90 backdrop-blur-lg p-6 rounded-lg shadow-lg border-l-4 border-green-600 flex flex-col justify-center h-full">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We believe in making healthcare better, together! If you're interested in our vision and want to collaborate or learn more, let's talk!
                        </p>
                        <Link to="/contact-us">
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                Join Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <div className="bg-white/90 backdrop-blur-lg p-6 rounded-lg border-l-4 border-orange-500 shadow-lg flex flex-col justify-center h-full">
                        <p className="text-gray-700 leading-relaxed italic mb-6">
                            "Health is not just about being disease-free. It's about physical, mental, and social well-being. Let's work together to create a healthier world."
                        </p>
                        <p className="text-gray-800 px-4 py-2 rounded-md font-semibold text-right">
                            - John Doe
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block9;