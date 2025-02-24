import React, { useState } from "react";
import { products } from "../../Data/data";

const tabs = [
  "General Info",
  "Composition",
  "Indications",
  "Usage",
  "Report",
  "Brochure",
  "Feedback"
];

const Healthsupplements = () => {
  const [activeTab, setActiveTab] = useState("General Info");

  return (
    <div className="flex flex-col min-h-screen min-w-full p-4 space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-wrap w-full max-w-full h-96 bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="w-1/3 h-full p-2">
            <img
              src={product.Productimg}
              alt="Product"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>

          <div className="w-2/3 p-2 flex flex-col">
            <img
              src={product.Produchname}
              alt="Product Thumbnail"
              className="h-12 w-32 rounded-lg mb-2 object-contain"
            />

            <div className="flex">
              {tabs.map((label) => (
                <button
                  key={label}
                  className={`px-4 py-2 text-base ${
                    activeTab === label
                      ? "bg-green-800 text-orange-600 border-l-2 border-y-2 border-orange-700"
                      : "bg-green-800 text-white hover:underline"
                  }`}
                  onClick={() => setActiveTab(label)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-2">
              {activeTab === "General Info" && (
                <>
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <h2 className="text-sm font-medium mt-2">
                    Segment: {product.segment}
                  </h2>
                  <h2 className="text-sm font-medium">Type: {product.type}</h2>
                  <h2 className="text-sm font-medium">
                    Category: {product.category}
                  </h2>
                  <h2 className="text-sm font-medium">
                    Packaging: {product.packaging}
                  </h2>
                </>
              )}

              {activeTab === "Composition" && (
                <ul className="text-sm text-gray-600 pl-5">
                  {product.composition.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {activeTab === "Indications" && (
                <p className="text-sm text-gray-600">{product.indications}</p>
              )}
              {activeTab === "Usage" && (
                <p className="text-sm text-gray-600">{product.usage}</p>
              )}
              {activeTab === "Report" && (
                <p className="text-sm text-gray-600">{product.report}</p>
              )}
              {activeTab === "Brochure" && (
                <p className="text-sm text-gray-600">{product.brochure}</p>
              )}
              {activeTab === "Feedback" && (
                <p className="text-sm text-gray-600">{product.feedback}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Healthsupplements;