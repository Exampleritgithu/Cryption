import React from "react";
import { ChevronRight } from "lucide-react";

const AboutUsSkills = () => {
  return (
    <>
      {/* 🔹 Hero Section */}
      <section
        className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Aboutus-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white z-10 px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">
            About Us
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:space-x-3 text-gray-300 text-sm sm:text-lg">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <span>Pages</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-emerald-400">About Us</span>
          </div>

          <div className="w-20 sm:w-24 h-1 bg-emerald-400 mt-4 sm:mt-6 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 🔹 Skills & Mission Section - Circular Card Style */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="relative container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-14 z-10">
          {/* 🔸 Left Side - Circular Skill Cards */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-emerald-400">
              Our Skills
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our creative team blends art and technology to craft designs and
              code that engage, inspire, and perform seamlessly.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-8">
              {[
                {
                  label: "UI / UX DESIGN",
                  value: 90,
                  color: "from-pink-500 to-rose-400",
                },
                {
                  label: "WEB DEVELOPMENT",
                  value: 85,
                  color: "from-cyan-500 to-blue-400",
                },
                {
                  label: "SEO OPTIMIZATION",
                  value: 75,
                  color: "from-amber-400 to-yellow-300",
                },
                {
                  label: "DIGITAL MARKETING",
                  value: 80,
                  color: "from-emerald-400 to-teal-300",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl border border-gray-700 shadow-lg hover:bg-white/20 transition-all duration-300"
                >
                  <div className="relative w-28 h-28 mb-4">
                    {/* Gradient Ring */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-tr ${skill.color} opacity-30`}
                    ></div>
                    {/* Inner Circle */}
                    <div className="absolute inset-[6px] rounded-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-white">
                      {skill.value}%
                    </div>
                  </div>
                  <h3 className="text-center text-sm font-semibold text-gray-200">
                    {skill.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* 🔸 Right Side - Mission Cards */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-emerald-400">
              Our Mission
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our mission is to create meaningful digital experiences that
              empower clients to grow and connect globally.
            </p>

            <div className="grid gap-6">
              {[
                {
                  title: "Innovation at Every Step",
                  desc: "We embrace emerging technologies to deliver future-ready digital products.",
                  icon: "💡",
                },
                {
                  title: "Client-Centered Design",
                  desc: "Your vision drives our process — we design with your goals in mind.",
                  icon: "🤝",
                },
                {
                  title: "Results that Matter",
                  desc: "Our success is measured by your digital growth and customer satisfaction.",
                  icon: "🚀",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl p-5 hover:bg-white/20 transition"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSkills;
