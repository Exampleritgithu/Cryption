import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Herman Ledford",
    title: "Founder, Crypto Mediator",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/Team-1.jpg",
  },
  {
    name: "Emerson Anderson",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/Team2.jpg",
  },
  {
    name: "Steven Beals",
    title: "CTO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/Team3.jpg",
  },
  {
    name: "Evelyn Snyder",
    title: "Head of Sales",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/Team4.jpg",
  },
];

export default function TeamSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 40;
    const y = (e.clientY / innerHeight - 0.5) * 40;
    setOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white py-20 relative overflow-hidden"
    >
      {/* Floating Background */}
      <img
        src="/download.png"
        alt="Partner Background"
        className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-25 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          top: `calc(50% + ${offset.y}px)`,
          left: `calc(50% + ${offset.x}px)`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover bg-center opacity-20"></div>

      {/* Title Section */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Our Team
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mt-4">
          Meet Our Professionals
        </p>
      </div>

      {/* Team Members */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition duration-300 hover:-translate-y-2"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 mx-auto object-cover border-4 border-white/30"
            />
            <h3 className="text-2xl font-semibold text-center text-white">
              {member.name}
            </h3>
            <p className="text-lg font-bold text-emerald-100 text-center mt-2">
              {member.title}
            </p>
            <p className="text-gray-900 text-center text-base mt-3">
              {member.desc}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center mt-6 space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/50 hover:bg-white/40 transition"
              >
                <FaFacebookF className="text-emerald-500 text-xl" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/50 hover:bg-white/40 transition"
              >
                <FaTwitter className="text-emerald-500 text-xl" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/50 hover:bg-white/40 transition"
              >
                <FaLinkedinIn className="text-emerald-500 text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
