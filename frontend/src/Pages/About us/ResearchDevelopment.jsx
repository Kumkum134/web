import React from "react";

const ResearchDevelopment = () => {
  return (
    <div className="font-sans">
      <div className="relative">
        <img
          src="/Assets/banner/Research and developement.jpg"
          alt="Scientists working in a lab"
          className="w-full h-[400px] object-cover object-top"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            RESEARCH AND DEVELOPMENT
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 ">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              RESEARCH AND DEVELOPMENT
            </h2>
            <hr className="border-t-2 border-orange-500 w-16 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
              Getting Everyday Better With Creativity And Continuous Experimentation
            </h3>
            <p className="text-gray-700 mb-4">
              More than 12 scientists are working continuously in our F&D, contract
              labs, and associated research institutes to develop, improve, and
              innovate the processes and technology to create niche formulations
              and cater to human health as well as animal wealth.
            </p>
            <p className="text-gray-700">
              Process Support Center at Aurinko Healthcare works on process
              development, process optimization, pilot studies, pre-validation
              batches, validation of processes, transfer of technology to the
              plant, review improvement of processes, helps QA with investigations,
              and helps the regulatory team answer queries from regulatory bodies.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/Assets/Research and developement/research img 1.jpg"
              alt="Scientist working with lab equipment"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              NANOPHOSPHOSOME TECHNOLOGY
            </h2>
            <hr className="border-t-2 border-orange-500 w-16 mb-4" />
            <p className="text-gray-700 mb-4">
              Nanophosphosome® technology enhances drug delivery, research, and cosmetics.
              These small, spherical vesicles composed of lipid bilayers increase the stability
              and bioavailability of encapsulated compounds, protecting drugs from degradation
              and improving absorption.
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
              Benefits of Nanophosphosome®
            </h3>
            <ul className="text-gray-700 list-disc pl-5 mb-4">
              <li>Enhances drug absorption and bioavailability.</li>
              <li>Reduces required dosage while maintaining therapeutic effectiveness.</li>
              <li>Minimizes side effects by ensuring controlled release.</li>
              <li>Improves stability and reduces degradation of sensitive compounds.</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/Assets/Research and developement/research img 1.jpg"
              alt="Scientist working with lab equipment"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>

        <div className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            NEUNA® PARTICLE TECHNOLOGY
          </h2>
          <hr className="border-t-2 border-orange-500 w-16 mb-4" />
          <p className="text-gray-700 mb-4">
            Neuna® particles range from 1-100 nanometers, designed for site-specific drug delivery
            and enhanced therapeutic effects. These particles exhibit high mobility, greater absorption,
            and chemical stability.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
            Benefits of Neuna®
          </h3>
          <ul className="text-gray-700 list-disc pl-5">
            <li>Improves strength and durability.</li>
            <li>Site-specific drug delivery with minimal side effects.</li>
            <li>Enhanced reactivity and stability.</li>
          </ul>
        </div>

        <div className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            NEUNA® MIN TECHNOLOGY
          </h2>
          <hr className="border-t-2 border-orange-500 w-16 mb-4" />
          <p className="text-gray-700 mb-4">
            Neuna® Min is a range of highly effective and bioavailable carbon technology-based
            nano minerals. It ensures superior absorption through passive diffusion.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
            Benefits of Neuna® Min
          </h3>
          <ul className="text-gray-700 list-disc pl-5">
            <li>Greater bioavailability and cellular absorption.</li>
            <li>Higher retention and lower fecal excretion.</li>
            <li>Broad safety margin with minimal side effects.</li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopment;
