import React from "react";
import { FaLaptopCode, FaRocket } from "react-icons/fa";

const StartupSectionTeam = () => {
  return (
    <section className="bg-[#061B2C] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE CONTENT */}
        <div className="w-full md:w-1/2 space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-white/80">Achieving startup</h3>
            <h1 className="text-6xl md:text-7xl font-light mt-2">Success together</h1>
          </div>

          {/* First Feature */}
          <div className="flex items-start gap-6">
            <FaLaptopCode className="text-4xl text-green-400 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-green-400">
                BUILD A PORTFOLIO
              </h2>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>

          {/* Second Feature */}
          <div className="flex items-start gap-6">
            <FaRocket className="text-4xl text-green-400 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-green-400">
                SUCCESS SOLUTIONS
              </h2>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/600x400" // Replace with your image
            alt="Dashboard"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default StartupSectionTeam;
