import React from "react";
import Gallery from "./Gallery";

const MainContent = () => (
    <main className="container mx-auto px-4 py-8">
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
    </main>
);

export default MainContent;