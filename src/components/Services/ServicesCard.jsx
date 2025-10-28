import React from "react";

export default function Services() {
  const servicesCard = [
    {
      title: "ICO Advisory",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      bg: "bg-[#0B1B2A]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a8 8 0 10-16 0v2h5"
          />
        </svg>
      ),
    },
    {
      title: "Promotion & Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      bg: "bg-[#00695C]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v12l8-6-8-6z"
          />
        </svg>
      ),
    },
    {
      title: "Legal Framework",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      bg: "bg-[#0097A7]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10h14M5 6h14M5 14h14M5 18h14"
          />
        </svg>
      ),
    },
    {
      title: "Token Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      bg: "bg-[#00BFA5]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6l4 2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="flex flex-col md:flex-row flex-wrap w-full text-white">
      {servicesCard.map((service, i) => (
        <div
          key={i}
          className={`${service.bg} w-full sm:w-1/2 lg:w-1/4 p-8 sm:p-10 lg:p-14 relative flex flex-col justify-center items-center text-center transition-transform duration-500 hover:-translate-y-2`}
        >
          {/* Icon */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 p-3 sm:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
            {service.icon}
          </div>

          {/* Text Content */}
          <div className="mt-20 sm:mt-28 md:mt-36 text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-200 text-sm sm:text-base max-w-[90%] sm:max-w-[80%] mt-2 sm:mt-4 mb-8 sm:mb-12">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
