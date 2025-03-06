import React from "react";

const BlogCard = ({ title, img, alt, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row">
                <img src={img} alt={alt} className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
                <div className="md:w-2/3">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;