import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Megaphone,
  Scale,
  PenTool,
  ChevronRight,
  BarChart2,
  Box,
  Lightbulb,
  HandCoins,
  Gem,
  Settings,
  TrendingUp,
  Puzzle,
  Target,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "ICO Advisory",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      bg: "bg-[#0B1B2A]",
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    },
    {
      title: "Promotion & Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      bg: "bg-[#00695C]",
      icon: <Megaphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    },
    {
      title: "Legal Framework",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      bg: "bg-[#0097A7]",
      icon: <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    },
    {
      title: "Token Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      bg: "bg-[#00BFA5]",
      icon: <PenTool className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    },
  ];

  const dolorsiteItems = [
    { icon: BarChart2, title: "Build a Portfolio", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
    { icon: Box, title: "Smart Project Design", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
    { icon: Lightbulb, title: "Innovative Solutions", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
    { icon: HandCoins, title: "Earn Cryption Tokens", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
    { icon: Gem, title: "Secure Investments", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
    { icon: Settings, title: "Custom Strategies", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
    { icon: TrendingUp, title: "Blockchain Advisory", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
    { icon: Puzzle, title: "Legal Framework", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
    { icon: Target, title: "ICO/TGE Promotion", description: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod." },
  ];

  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612832021030-3cb93bfb6f14?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white z-10 px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">
            Our Services
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:space-x-3 text-gray-300 text-sm sm:text-lg">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <span>Pages</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-emerald-400">Services</span>
          </div>

          <div className="w-20 sm:w-24 h-1 bg-emerald-400 mt-4 sm:mt-6 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* ✅ Main Services Section */}
      <section className="flex flex-col sm:flex-row sm:flex-wrap w-full text-white">
        {services.map((service, i) => (
          <div
            key={i}
            className={`${service.bg} flex-1 min-w-[100%] sm:min-w-[50%] lg:min-w-[25%] p-8 sm:p-10 md:p-14 relative flex flex-col justify-center items-center text-center transition-transform duration-500 hover:-translate-y-2`}
          >
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 sm:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
              {service.icon}
            </div>

            <div className="mt-24 sm:mt-36 md:mt-48 text-left px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-[95%] sm:max-w-[80%] mt-3 sm:mt-4 mb-12 sm:mb-20">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ✅ Dolorsite Grid Section (Added Below Services) */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="text-center mb-16 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Lorem Ipsum
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-light text-black mb-6">
            Dolor Sit Amet
          </h3>
          <p className="text-gray-600 max-w-5xl mx-auto text-base sm:text-lg md:text-2xl mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 px-4 sm:px-8 md:px-12">
          {dolorsiteItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300"
              >
                <div className="mb-4 sm:mb-0 sm:mr-6">
                  <IconComponent size={60} className="text-green-500 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
