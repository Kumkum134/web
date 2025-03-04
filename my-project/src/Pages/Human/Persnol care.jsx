import React from "react";
import ProductCard from "../../Components/Human/Health supplements/ProductCard";
import { persnolcare } from "../../Data/persnol_care_data";

const Persnolcare = () => {
  return (
    <div className="font-sans">
      <div className="relative">
        <img
          src="/Assets/banner/Persnol care.webp"
          alt="Persnol care"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-2">
          <h1 className="text-4xl font-bold">Persnol Care</h1>
        </div>
      </div>
      <div className="flex flex-col min-h-screen w-full p-4">
        {persnolcare?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
            {persnolcare.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No health supplements available.</p>
        )}
      </div>
    </div>
  );
};

export default Persnolcare;
