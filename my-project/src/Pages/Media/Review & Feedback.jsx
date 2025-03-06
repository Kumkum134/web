import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    console.log({
      rating,
      review,
      name,
      email,
    });
    alert("Review submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Your overall rating
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <i
                key={value}
                className={`${
                  value <= rating ? "fas" : "far"
                } fa-star text-yellow-500 text-3xl cursor-pointer`}
                onClick={() => handleRating(value)}
              ></i>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Your review
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="Please leave your review."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Your name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Tell us your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Your email
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Tell us your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            SUBMIT YOUR REVIEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
