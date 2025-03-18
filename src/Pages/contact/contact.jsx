import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800 container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-orange-500 h-6 w-1 mr-2"></span>
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                className="border border-gray-300 p-2 w-full md:w-1/3"
                placeholder="Name"
                type="text"
              />
              <input
                className="border border-gray-300 p-2 w-full md:w-1/3"
                placeholder="Mobile No."
                type="text"
              />
              <input
                className="border border-gray-300 p-2 w-full md:w-1/3"
                placeholder="Email id"
                type="email"
              />
            </div>
            <textarea
              className="border border-gray-300 p-2 w-full h-32"
              placeholder="Message"
            ></textarea>
            <button className="bg-green-800 text-white px-4 py-2 rounded" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-orange-500 h-6 w-1 mr-2"></span>
              HEAD OFFICE
            </h2>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt text-green-700"></i> Plot: 1, Mirzapur, Sec-74, Mirzapur Mor, Ballabhgarh, Faridabad, Haryana-121004
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope text-green-700"></i> info@aurinkohealthcare.com
            </p>
            <p>
              <i className="fas fa-phone text-green-700"></i> 01296662200
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.2936394417075!2d77.34505539999999!3d28.3499707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb9766d62aab%3A0x499dcf82d3074077!2sAurinko%20Healthcare%20Private%20Limited!5e0!3m2!1sen!2sin!4v1741677068894!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
