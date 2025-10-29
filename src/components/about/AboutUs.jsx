import React from "react";
import { ChevronRight } from "lucide-react";

const AboutUs = () => {
  const skills = [
    { label: "Web Development", color: "bg-emerald-500", value: "85%" },
    { label: "UI/UX Design", color: "bg-cyan-500", value: "78%" },
    { label: "SEO Optimization", color: "bg-teal-500", value: "90%" },
    { label: "Digital Marketing", color: "bg-lime-500", value: "70%" },
  ];

  const missions = [
    "Delivering high-quality web solutions for modern businesses.",
    "Building long-term partnerships through innovation and trust.",
    "Empowering clients with scalable and user-friendly technology.",
  ];

  return (
    <div className="w-full">

      {/* 🟢 Hero Section */}
      <section
  className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/About-bg.jpg')",
  }}
>

      
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative text-center text-white z-10 px-4 sm:px-8">
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

      {/* 🟢 Skills + Mission Section */}
      <section
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 z-10">
          {/* Left - Skills */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center md:text-left">
              Our Skills
            </h2>
            <p className="text-gray-300 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base text-center md:text-left">
              At WebNest, we specialize in creating responsive, high-performance websites and digital platforms tailored for your business growth. Our team combines creativity, strategy, and technical expertise to deliver impactful solutions.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                    <span
                      className={`font-bold ${skill.color} text-white px-3 py-1 rounded-full text-xs sm:text-sm`}
                    >
                      {skill.label}
                    </span>
                    <span
                      className={`font-bold ${skill.color} text-white px-3 py-1 rounded-full text-xs sm:text-sm`}
                    >
                      {skill.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-900 h-4 sm:h-6 rounded-full overflow-hidden">
                    <div
                      className={`${skill.color} h-4 sm:h-6 rounded-full transition-all duration-700`}
                      style={{ width: skill.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mission */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center md:text-left">
              Our Mission
            </h2>
            <p className="text-gray-300 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base text-center md:text-left">
              Our mission is to provide creative and strategic web solutions that empower businesses to thrive in the digital world.
            </p>

            <div className="space-y-5 sm:space-y-6 border border-gray-600 rounded-lg p-4 sm:p-6 bg-white/5">
              {missions.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-600 pb-4 last:border-none text-center sm:text-left"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto sm:mx-0 flex items-center justify-center rounded-full bg-emerald-500 font-bold text-lg sm:text-xl mb-2 sm:mb-0">
                    {i + 1}
                  </div>
                  <p className="font-bold text-emerald-400 text-sm sm:text-lg leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
