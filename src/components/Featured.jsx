import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react"; // ✅ Replaced FaQuoteLeft with Lucide Quote

const Featured = () => {
  // ✅ Company Logos
  const logos = [
    { id: 1, name: "This That", img: "/Logo1.png" },
    { id: 2, name: "Crypto Coins", img: "/Logo2.png" },
    { id: 3, name: "Abstract", img: "/Logo3.png" },
    { id: 4, name: "Working Studio", img: "/Logo4.png" },
    { id: 5, name: "Technologies", img: "/Logo5.png" },
    { id: 6, name: "The Archtech", img: "/Logo6.png" },
  ];

  // ✅ Customer Reviews
  const reviews = [
    {
      id: 1,
      img: "/1-Emp.jpg",
      name: "Steven Beals",
      position: "Co-founder, VP Marketing",
      text: "Cryption has been an incredible partner in our growth journey. Their ICO expertise helped us achieve record-breaking funding results!",
    },
    {
      id: 2,
      img: "/2-Emp.jpg",
      name: "Amelia Clarke",
      position: "CEO, FutureChain",
      text: "We loved working with Cryption. Their professionalism and attention to detail made the entire process smooth and successful.",
    },
  ];

  const [activeReview, setActiveReview] = useState(0);

  // ✅ Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* ---------------- LEFT SECTION ---------------- */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-center md:text-left">
            We’ve Been Featured In
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="bg-gray-100 flex items-center justify-center h-32 sm:h-40 rounded-xl hover:shadow-lg transition transform hover:scale-105"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="max-h-20 sm:max-h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- RIGHT SECTION ---------------- */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-center md:text-left">
            What Our Customers Say
          </h2>

          <div className="bg-white border-l-8 border-green-500 p-6 sm:p-8 md:p-10 rounded-xl shadow-md relative transition-all duration-300">
            {/* ✅ Lucide Quote Icon */}
            <Quote className="text-green-500 w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6" />

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg transition-all duration-300 ease-in-out">
              {reviews[activeReview].text}
            </p>

            {/* Reviewer Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 text-center sm:text-left">
              <img
                src={reviews[activeReview].img}
                alt={reviews[activeReview].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-green-500 object-cover shadow-md mb-4 sm:mb-0"
              />
              <div>
                <h4 className="font-semibold text-xl sm:text-2xl text-gray-800">
                  {reviews[activeReview].name}
                </h4>
                <p className="text-gray-500 text-sm sm:text-base">
                  {reviews[activeReview].position}
                </p>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-3 mt-6 sm:mt-8 justify-center">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 ${
                    activeReview === index
                      ? "bg-green-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
