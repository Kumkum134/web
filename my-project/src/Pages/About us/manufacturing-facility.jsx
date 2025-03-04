import React from "react";

const ManufacturingFacility = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <MainContent />
    </div>
  );
};

const Header = () => (
  <header className="relative">
    <img
      src="https://storage.googleapis.com/a1aa/image/blaWwjc9WZ7DSRsGyj6hUqZJZS-GC5YcYTVs38wLMvE.jpg"
      alt="Manufacturing facility background"
      className="w-full h-72 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Manufacturing Facility</h1>
    </div>
  </header>
);


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

const Gallery = () => {
  const images = [
    "https://storage.googleapis.com/a1aa/image/t-5oRmQ4akigGuf2Zeh1cOx1a7OTShbDI4stgDvbW6w.jpg",
    "https://storage.googleapis.com/a1aa/image/rTsFbXo4nLw-IjMIQBPG276Hyt62qk4sCTM2czLBm0Q.jpg",
    "https://storage.googleapis.com/a1aa/image/aocEJJhJ1CavWMhbjdADjOMi3yCDju7RrR9DwRCCZ3A.jpg",
    "https://storage.googleapis.com/a1aa/image/-AgFkiQrTQ1i4zzC4Tz_7IZeFj2UcSKevG4piAmQGOQ.jpg",
    "https://storage.googleapis.com/a1aa/image/N3BtQNB41Q5IDwc92cBrQX1JXiU3sP_BY1FRRyRwcDQ.jpg",
    "https://storage.googleapis.com/a1aa/image/7WV0h-HDOztBb2KxOWe1_3Rk1DuvdXWUMewJcm93Jt8.jpg",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Manufacturing process ${index + 1}`} className="w-full h-auto rounded shadow" />
        </div>
      ))}
    </div>
  );
};

export default ManufacturingFacility;
