import React from "react";

const AboutUsSkills = () => {
  return (
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
        {/* Left Side - Skills */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white text-center md:text-left">
            Our Skills
          </h2>
          <p className="text-gray-300 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base text-center md:text-left">
            Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod
            tempor incidi labore et dolore magna aliqua. Ut enim ad mini veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip commodot.
          </p>

          {/* Skill Bars */}
          <div className="space-y-6">
            {/* Skill Item */}
            {[
              { label: "USABILITY & DESIGN", color: "bg-emerald-500", value: "42%" },
              { label: "PROGRAMMING", color: "bg-cyan-500", value: "44%" },
              { label: "PRODUCERS", color: "bg-teal-500", value: "62%" },
            ].map((skill, index) => (
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
                    className={`${skill.color} h-4 sm:h-6 rounded-full transition-all duration-500`}
                    style={{ width: skill.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Mission */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white text-center md:text-left">
            Our Mission
          </h2>
          <p className="text-gray-300 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base text-center md:text-left">
            Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod
            tempor incidi labore et dolore magna aliqua. Ut enim ad mini veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip commodot.
          </p>

          {/* Mission List */}
          <div className="space-y-5 sm:space-y-6 border border-gray-600 rounded-lg p-4 sm:p-6 bg-white/5">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-600 pb-4 last:border-none text-center sm:text-left"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto sm:mx-0 flex items-center justify-center rounded-full bg-emerald-500 font-bold text-lg sm:text-xl mb-2 sm:mb-0">
                  {num}
                </div>
                <p className="font-bold text-emerald-400 text-sm sm:text-lg leading-snug">
                  Lorem ipsum dolor sit ametcon sectetur adipisicing
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSkills;
