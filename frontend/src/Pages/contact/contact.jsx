import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.mobile) {
      formErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = "Mobile number must be 10 digits";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:2025/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        // Clear form after successful submission
        setFormData({
          name: "",
          mobile: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white text-gray-800 container mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-orange-500 h-6 w-1 mr-2"></span>
            Get in Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col w-full">
                <input
                  className="border border-gray-300 p-2"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="flex flex-col w-full">
                <input
                  className="border border-gray-300 p-2"
                  placeholder="Mobile No."
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>
              <div className="flex flex-col w-full">
                <input
                  className="border border-gray-300 p-2"
                  placeholder="Email id"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                className="border border-gray-300 p-2 w-full h-32"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              className="bg-green-800 text-white px-4 py-2 rounded"
              type="submit"
            >
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.2936394417075!2d77.34505539999999!3d28.3499707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb9766d62aab%3A0x499dcf82d3074077!2sAurinko%20Healthcare%20Private%20Limited!5e0!3m2!1sen!2sin!4v1741677068894!5m2!1sen!2sin"
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
