import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Email = () => {
  return (
    <div className="bg-[#18d685] flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 lg:px-36 py-16 md:py-24 text-white space-y-8 md:space-y-0">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        {/* Email Icon */}
        <div className="rounded-full bg-white text-[#18d685] p-5 flex justify-center items-center">
          <FaEnvelope className="text-5xl sm:text-6xl" />
        </div>

        {/* Text */}
        <p className="text-lg sm:text-xl md:text-2xl max-w-md sm:ml-4">
          Subscribe to our newsletter to stay updated with the latest crypto news and insights!
        </p>
      </div>

      {/* Subscription Form */}
      <form className="flex flex-col sm:flex-row items-center bg-white rounded-full overflow-hidden shadow-lg w-full sm:w-auto max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-4 text-gray-700 outline-none w-full sm:w-72 md:w-80 text-base sm:text-lg"
          required
        />
        <button
          type="submit"
          className="bg-[#18d685] text-white font-semibold px-8 py-3 text-base sm:text-lg w-full sm:w-auto mt-3 sm:mt-0 sm:mr-2 rounded-full sm:rounded-full hover:bg-white hover:text-[#18d685] border-2 border-[#18d685] transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Email;
