import React from "react";
import { FaQuestion } from "react-icons/fa6";

const Faqs = () => {
  return (
    <div className="bg-[#18d685] flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 lg:px-36 py-16 md:py-24 text-white space-y-8 md:space-y-0">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
        {/* Icon */}
        <div className="rounded-full bg-white text-[#18d685] p-5 flex justify-center items-center">
          <FaQuestion className="text-5xl sm:text-6xl" />
        </div>

        {/* Text */}
        <p className="text-lg sm:text-xl md:text-2xl max-w-md sm:ml-4">
          Answering this questionnaire will help us determine your needs!
        </p>
      </div>

      {/* Button */}
      <button className="border-2 border-white font-semibold text-lg sm:text-xl md:text-2xl px-10 py-3 sm:px-12 sm:py-4 rounded-full hover:bg-white hover:text-[#18d685] transition duration-300 w-full sm:w-auto text-center">
        ICO QUESTIONS
      </button>
    </div>
  );
};

export default Faqs;
