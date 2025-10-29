import React from "react";
import { TrendingUp, Laptop, Coins } from "lucide-react";

// 🟩 Table Columns + Data
const columns = ["Column 1", "Column 2", "Column 3", "Column 4"];
const data = [
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
];

// 🟦 Services Data
const services = [
  {
    id: 1,
    title: "Token Launch Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    icon: <TrendingUp className="w-10 h-10 text-[#13232f]" />,
    imgLeft:
      "https://images.unsplash.com/photo-1581091215367-59ab6c34a4d2?auto=format&fit=crop&w=800&q=80",
    imgRight:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Blockchain Development",
    description:
      "We build secure and scalable blockchain applications tailored to your project’s goals and requirements.",
    icon: <Laptop className="w-10 h-10 text-[#13232f]" />,
    imgLeft:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=800&q=80",
    imgRight:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Crypto Token Marketing",
    description:
      "Grow your project’s visibility with strategic campaigns designed to attract and retain investors.",
    icon: <Coins className="w-10 h-10 text-[#13232f]" />,
    imgLeft:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=800&q=80",
    imgRight:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
  },
];

// 🧩 Component
const ServicesDrop = () => {
  return (
    <section className="flex flex-col w-full">
      {/* 🟨 Services Section */}
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Left Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={service.imgLeft}
              alt={service.title}
              className="w-full h-56 md:h-full object-cover"
            />
          </div>

          {/* Middle Content */}
          <div className="md:w-1/3 w-full flex flex-col justify-center items-center bg-[#13232f] text-white p-8 sm:p-10 text-center">
            <div className="bg-emerald-400 rounded-full p-5 sm:p-6 mb-6 flex items-center justify-center">
              {service.icon}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {service.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-[90%]">
              {service.description}
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={service.imgRight}
              alt={service.title}
              className="w-full h-56 md:h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* 🟩 Responsive Table Section */}
      <section className="w-full px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* ✅ Scrollable container for small screens */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center min-w-[600px] sm:min-w-full">
              <thead>
                <tr>
                  {columns.map((col, i) => (
                    <th
                      key={i}
                      className="bg-emerald-500 text-white font-semibold text-sm sm:text-base py-3 sm:py-4 px-2 sm:px-4 border border-gray-200 uppercase"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="bg-gray-50 even:bg-gray-100">
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        className="py-3 sm:py-5 px-2 sm:px-4 border border-gray-200 text-gray-600 text-sm sm:text-base"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Mobile Card Layout (Visible only on small screens) */}
          <div className="grid gap-4 sm:hidden mt-8">
            {data.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm"
              >
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex justify-between py-1 border-b last:border-none"
                  >
                    <span className="font-semibold text-gray-700 text-sm">
                      {columns[colIndex]}:
                    </span>
                    <span className="text-gray-600 text-sm">{cell}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesDrop;
