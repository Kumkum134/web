import React from "react";

const ResearchDevelopment = () => {
  return (
    <div className="font-sans">
      <div className="relative">
        <img
          src="https://storage.googleapis.com/a1aa/image/PDiBL-srCPc1L2_Iaf-mCAe8QjFJd6yO-DK4ozd3n4c.jpg"
          alt="Scientists working in a lab"
          className="w-full h-72 object-cover"
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
              src="https://storage.googleapis.com/a1aa/image/sktXaB8EmtXwg01keCtiWL7jf3Hsbw819HXREqx2MTc.jpg"
              alt="Scientist working with lab equipment"
              className="w-full h-auto mx-auto"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopment;
