import React from "react";
import ProductCard from "../../Components/Human/Health supplements/ProductCard";
import { poultry } from "../../Data/poultry";

const Poultry = () => {
  return (
    <div className="flex flex-col min-h-screen w-full p-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Health Supplements
      </h1>

      {poultry?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
          {poultry.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No health supplements available.</p>
      )}
    </div>
  );
};

export default Poultry;