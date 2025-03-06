import React from "react";
import ProductCard from "../../Components/Human/ProductCard";
import { Human } from "../../Data/human_data";

const Healthsupplements = () => {
  return (
    <div className="font-sans">
      <div className="relative">
        <img
          src="/Assets/banner/Health suppliments.webp"
          alt="Health suppliments"
          className="w-full h-[500px] object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-2">
          <h1 className="text-4xl font-bold">Health Supplements</h1>
        </div>
      </div>
      <div className="flex flex-col min-h-screen w-full p-4">
        {Human?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
            {Human.map((product) => (
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

export default Healthsupplements;
