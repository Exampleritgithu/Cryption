import React from "react";
import { FaQuestion } from "react-icons/fa6";

const Faqs = () => {
  return (
    <div className="bg-[#18d685] flex items-center justify-between px-36 py-36  text-white">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Question Icon */}
        <div className="rounded-full bg-white text-[#18d685] p-4">
          <FaQuestion className="text-6xl" />
        </div>

        {/* Text */}
        <p className="text-2xl  max-w-md ml-24">
          Answering this questionnaire will help us determine your needs!
        </p>
      </div>

      {/* Button */}
      <button className="  text-white border-white border-2 font-semibold text-3xl px-12 py-4 rounded-full hover:bg-white hover:text-[#18d685] transition">
        ICO QUESTIONS
      </button>
    </div>
  );
};

export default Faqs;
