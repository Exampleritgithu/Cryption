import React from "react";
import {
  Briefcase,
  Megaphone,
  Scale,
  PenTool,
} from "lucide-react"; // ✅ Lucide icons

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

  return (
    <section className="flex flex-col sm:flex-row sm:flex-wrap w-full text-white">
      {services.map((service, i) => (
        <div
          key={i}
          className={`${service.bg} flex-1 min-w-[100%] sm:min-w-[50%] lg:min-w-[25%] p-8 sm:p-10 md:p-14 relative flex flex-col justify-center items-center text-center transition-transform duration-500 hover:-translate-y-2`}
        >
          {/* ✅ Icon on top-right corner */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 sm:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
            {service.icon}
          </div>

          {/* ✅ Text Content */}
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
  );
}
