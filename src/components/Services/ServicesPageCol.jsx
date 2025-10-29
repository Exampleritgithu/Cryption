import React from "react";
import { ChevronRight } from "lucide-react";

const columns = ["Column 1", "Column 2", "Column 3", "Column 4"];
const data = [
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
  ["458976.34968968$", "458976.34968968$", "458976.34968968$", "458976.34968968$"],
];

const ServicesPageCol = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/About-bg.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="relative text-center text-white z-10 px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">
            Our Services
          </h1>

          {/* Breadcrumb */}
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

      {/* ✅ Table Section */}
      <section className="w-full px-4 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Scrollable Table */}
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

          {/* Mobile Cards */}
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
    </>
  );
};

export default ServicesPageCol;
