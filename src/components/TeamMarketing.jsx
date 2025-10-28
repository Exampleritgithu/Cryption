import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const TeamMarketing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-10 shadow-lg rounded-2xl max-w-6xl mx-auto mt-10">
      
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/500x600" // Replace with your image
          alt="Team Member"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Right: Info */}
      <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
        <h2 className="text-3xl font-semibold text-gray-900">CMO, VP Marketing</h2>
        <h1 className="text-5xl font-light text-gray-800 mt-2">Emerson Anderson</h1>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-5 text-gray-600 text-xl">
          <a href="#" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-sky-500 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-red-600 transition">
            <FaGooglePlusG />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Bullet point */}
        <ul className="mt-5 space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-lg mt-1">•</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-lg mt-1">•</span>
            <span>Tempor incididunt ut labore et dolore magna aliqua</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamMarketing;
