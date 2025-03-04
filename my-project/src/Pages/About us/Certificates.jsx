import React from "react";
import certificates from "../../Data/certificates_data";

const Certificates = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">OUR CERTIFICATES</h1>
      <div className="border-t-4 border-orange-500 w-16 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <div key={certificate.name} className="text-center">
            <img
              src={certificate.imgSrc}
              alt={certificate.name + " Certificate"}
              className="mx-auto mb-2 hover:scale-105"
              width="200"
              height="300"
            />
            <p className="font-bold">{certificate.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Certificates;