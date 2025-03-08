import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-2/3">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  placeholder="Subject of your inquiry"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-green-600 text-white p-8 md:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-orange-400 pb-2">Get in Touch</h2>
            <p className="mb-2"><strong>📍 Address:</strong> Plot: 1, Mirzapur, Sec-74, Mirzapur Mor, Ballabhgarh, Faridabad, Haryana-121004</p>
            <p className="mb-2"><strong>📞 Phone:</strong> 01296662200</p>
            <p className="mb-2"><strong>📧 Email:</strong> info@aurinkohealthcare.com</p>
          </div>
        </div>

        <div className="w-full">
          <iframe
            className="w-full h-64 md:h-80 rounded-b-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.8703323656!2d77.29507309818647!3d28.359595726606814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390caf3ea84f72e9%3A0x2f3d935ac96b7955!2sAurinko%20Healthcare%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1709834676455!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
