import { useState, useCallback } from "react";

const Block9 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }, []);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      formErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="text-left border-r border-gray-200">
          <div className="bg-orange-600 text-white p-7 rounded-b-3xl border-b-4 border-green-800 shadow-md mb-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Get in Touch</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded focus:ring focus:ring-orange-300`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded focus:ring focus:ring-orange-300`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">Type Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded focus:ring focus:ring-orange-300`}
                placeholder="Type your message"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "ENROLL NOW →"}
            </button>
          </form>
        </div>

        <div className="items-center">
          <div className="bg-green-800 text-white p-7 rounded-b-3xl border-b-4 border-orange-600 shadow-md mb-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Thought</h1>
          </div>
          <div className="p-8 items-center text-center">
            <p className="leading-relaxed italic mb-6">
              "Health is not just about being disease-free. It's about physical, mental, and social well-being. Let's work together to create a healthier world."
            </p>
            <p className="font-semibold text-right">- John Doe</p>
            <img
              src="/Assets/block 9.jpg"
              alt="Nature and Wellness"
              className="w-full h-56 object-cover rounded-lg shadow-md mb-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block9;
