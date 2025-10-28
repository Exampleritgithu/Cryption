import React from "react";
import { FaFacebookF, FaLinkedinIn, FaSkype } from "react-icons/fa";

const teamMembers = [
  {
    name: "Emerson Anderson",
    title: "Co-founder, VP Marketing",
    image: "https://via.placeholder.com/300x300", // replace with your image
  },
  {
    name: "Steven Beals",
    title: "CMO, VP Marketing",
    image: "https://via.placeholder.com/300x300", // replace with your image
  },
  {
    name: "Evelyn Snyder",
    title: "Blockchain architect",
    image: "https://via.placeholder.com/300x300", // replace with your image
  },
  {
    name: "Herman Ledford",
    title: "Lead Product Manager",
    image: "https://via.placeholder.com/300x300", // replace with your image
  },
];

const OurTeam = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-gray-900">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white"
            >
              {/* Profile Image */}
              <div className="relative w-48 h-48 rounded-full border-4 border-green-400 overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Title */}
              <h3 className="text-xl font-medium text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{member.title}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-green-500 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-green-500 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-green-500 transition"
                >
                  <FaSkype />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
