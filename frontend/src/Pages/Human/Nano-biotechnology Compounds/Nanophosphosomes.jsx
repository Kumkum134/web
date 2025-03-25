import React from "react";
import Human_Nano_biotechnology from "../../../Components/Human/Human_Nano-biotechnology";
import nanophosphosome_data from "../../../Data/Nanophosphosome_data";

const Nanophosphosome = () => {
  return (
    <div className="font-sans">
      <div className="relative">
        <img
          loading="lazy"
          src="/Assets/banner/Health suppliments.webp"
          alt="Health suppliments"
          className="w-full h-[500px] object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-2">
          <h1 className="text-4xl font-bold">Nanophosphosome®</h1>
        </div>
      </div>
      <div className="flex flex-col min-h-screen w-full p-4">
        {nanophosphosome_data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
            {nanophosphosome_data.map((product) => (
              <Human_Nano_biotechnology key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No health supplements available.</p>
        )}
      </div>
    </div>
  );
};

export default Nanophosphosome;
