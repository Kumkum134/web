import React from "react";
import { blogs } from "../../../Data/blog";
import BlogCard from "../../../Components/Blog/blogcard";

const Blog = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-gray-700 text-white py-4">
                <div className="container mx-auto items-center px-4">
                    <h1 className="text-xl font-bold">OUR BLOGS</h1>
                </div>
            </header>
            <main className="container mx-auto py-8 px-4">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </main>
        </div>
    );
};

export default Blog;
