import React, { useState } from "react";
import { speciesData } from "../../Data/data";

const Block6 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="relative flex justify-center py-8 px-4 md:px-8 lg:px-12  min-h-48">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {speciesData.map((species, index) => {
          const isLastThree = index >= speciesData.length - 3;
          const expandPosition = isLastThree ? "right-0" : "left-0";

          return (
            <div
              key={index}
              className="relative w-40 h-40 md:w-48 lg:w-48 flex flex-col items-center bg-white rounded-lg shadow-lg cursor-pointer border-2 border-transparent hover:border-orange-600"
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <img src={species.image} alt={species.title} className="w-full h-[70%] object-cover rounded-t-lg" />
              <h1 className="text-sm sm:text-md font-bold text-center mt-2 text-green-800">{species.title}</h1>
              
              {expandedIndex === index && (
                <div className={`absolute top-0 ${expandPosition} max-w-[90vw] sm:w-[60vw] md:w-[50vw] max-h-[70vh] bg-white p-4 shadow-xl rounded-lg z-50 overflow-auto`}>
                  <h3 className="text-orange-600 font-bold text-center mb-2">{species.title} Data</h3>
                  <table className="w-full border border-black">
                    <thead>
                      <tr className="bg-green-600 text-white text-sm sm:text-md">
                        <th className="border border-black p-2">{species.title} Category</th>
                        <th className="border border-black p-2">Diseases</th>
                        <th className="border border-black p-2">Treatment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {species.data.map((item, i) => (
                        <tr key={i} className="text-xs sm:text-sm">
                          <td className="border border-black p-2">{item.type}</td>
                          <td className="border border-black p-2">{item.amount}</td>
                          <td className="border border-black p-2">{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Block6;
