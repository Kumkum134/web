import React from "react";


const Contact = () => {

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8 m-6">
        <div className="w-full md:w-full lg:w-1/2 h-[20rem] md:h-[30rem] lg:h-[40rem]">
        <img
          src="/Assets/Contact us.jpg"
          alt="Contact us-Page"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:max-w-lg px-6 sm:px-8 lg:px-10 rounded-lg">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-8 text-gray-800 relative">
          Contact Us
          <span className="absolute top-16 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-green-600"></span>
        </h1>
       <div className="mb-4">
          <h1 className="block text-sm font-medium text-gray-600">Username</h1>
          <input type="text" placeholder="Enter your username"
            className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}/>
        </div>
        <div className="mb-4">
          <h1 className="block text-sm font-medium text-gray-600">Password</h1>
          <input type="password" placeholder="Enter your password"
            className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}/>
        </div>
        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >Contact us</button>
      </div>
    </div>
  );
};

export default Contact;
