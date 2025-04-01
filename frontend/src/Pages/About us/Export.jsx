import React, { useState } from "react";

const Export = () => {
  const [tooltip, setTooltip] = useState({ visible: false, text: "", top: "0%", left: "0%" });

  const locations = [
    { name: "India", top: "45%", left: "63%" },
    { name: "Zimbabwe", top: "66%", left: "50.5%" },
    { name: "Egypt", top: "45%", left: "50.5%" },
    { name: "South Korea", top: "37%", left: "75%" },
    { name: "Bangladesh", top: "45%", left: "66.2%" },
    { name: "Nepal", top: "43%", left: "64.5%" },
    { name: "Sri Lanka", top: "53.5%", left: "64.6%" },
  ];

  const handleMouseEnter = (name, top, left) => {
    setTooltip({ visible: true, text: name, top, left });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false });
  };

  return (
    <div className="font-sans">
      <div className="relative">
        <img
          src="/Assets/banner/export.webp"
          alt="Export"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Export</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Global Presence</h2>
          <div className="w-12 h-1 bg-orange-500 mb-6"></div>
          <p className="mb-6">
            Aurinko Healthcare markets veterinary and human healthcare products across the globe,
            with primary focus in South and South-East Asia, SAARC, Gulf, Middle-East, and African regions.
            We have dedicated manufacturing units in India to develop products suited to meet the diverse needs
            and preferences of consumers in different markets.
          </p>
          <p className="mb-6">If you are looking for Business Opportunities or Business Association.</p>
          <p className="mb-6">
            <strong>Email to:</strong>{" "}
            <a href="mailto:exim@aurinkohealthcare.com" className="text-blue-600 hover:underline">
              exim@aurinkohealthcare.com,
            </a>{" "}
            <a href="mailto:info@aurinkohealthcare.com" className="text-blue-600 hover:underline">
              info@aurinkohealthcare.com
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="/Assets/vision and mission/world-map.png"
            alt="World Map"
            className="w-full rounded-lg shadow-md"
            loading="lazy"
          />
          {locations.map((loc, index) => (
            <div
              key={index}
              className="absolute text-red-500 text-2xl cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-125"
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => handleMouseEnter(loc.name, loc.top, loc.left)}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fas fa-map-marker-alt text-xs lg:text-lg"></i>
            </div>
          ))}
          {tooltip.visible && (
            <div
              className="absolute bg-black text-white text-xs px-2 py-1 rounded shadow-md transition-opacity duration-200"
              style={{
                top: `calc(${tooltip.top} - 25px)`,
                left: tooltip.left,
                transform: "translate(-50%, -100%)",
                whiteSpace: "nowrap",
              }}
            >
              {tooltip.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Export;