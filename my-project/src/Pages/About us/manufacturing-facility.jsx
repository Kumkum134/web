import React from "react";
import MainContent from "../../Components/Blog/MainContent";

const ManufacturingFacility = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <img
          src="https://storage.googleapis.com/a1aa/image/blaWwjc9WZ7DSRsGyj6hUqZJZS-GC5YcYTVs38wLMvE.jpg"
          alt="Manufacturing facility background"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Manufacturing Facility</h1>
        </div>
      </div>
      <MainContent />
    </div>
  );
};


export default ManufacturingFacility;
