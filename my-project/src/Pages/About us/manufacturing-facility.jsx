import React from "react";
import Gallery from "../../Components/Blog/Gallery";

const ManufacturingFacility = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <img
          src="https://storage.googleapis.com/a1aa/image/blaWwjc9WZ7DSRsGyj6hUqZJZS-GC5YcYTVs38wLMvE.jpg"
          alt="Manufacturing facility background"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Manufacturing Facility</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2">
                <img
                    src="https://storage.googleapis.com/a1aa/image/bHNmlkNjHdDgv_9XrJLL0rn81KFpN8wAJQF1gYPCg7A.jpg"
                    alt="Manufacturing process"
                    className="w-full h-auto rounded shadow"
                />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">Manufacturing Facility</h2>
                <p className="text-gray-700 mb-4">
                    Aurinko Healthcare currently operates two manufacturing sites in Ballabhgarh, Faridabad, India.
                </p>
                <p className="text-gray-700 mb-4">
                    The manufacturing units have two production buildings and one pharma suit with a total production capacity of more than 100 tons per month.
                </p>
                <p className="text-gray-700 mb-4">
                    Aurinko is a commercial-scale manufacturer of probiotic, phytochemical, and food-grade supplement formulations in powder, liquid, capsule, and tablet forms.
                </p>
                <p className="text-gray-700">
                    Aurinko pharma areas comply with class 10,000 clean air requirement.
                </p>
            </div>
        </div>
        <Gallery />
    </div>
    </div>
  );
};


export default ManufacturingFacility;
