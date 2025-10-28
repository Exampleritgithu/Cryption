import React from "react";
import { ChevronRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1643823829289-ffb4d09c7f16?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-4 sm:px-8">
        {/* Responsive Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">
          About Us
        </h1>

        {/* Breadcrumb */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:space-x-3 text-gray-300 text-sm sm:text-lg">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <ChevronRight className="w-4 h-4" />
          <span>Pages</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-emerald-400">About Us</span>
        </div>

        {/* Underline */}
        <div className="w-20 sm:w-24 h-1 bg-emerald-400 mt-4 sm:mt-6 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default AboutUs;
