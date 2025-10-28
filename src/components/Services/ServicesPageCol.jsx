import React from "react";

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
    <section className="w-full px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Scrollable container for small screens */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center min-w-[600px] sm:min-w-full">
            {/* Table Header */}
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

            {/* Table Body */}
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

        {/* ✅ Mobile Card Layout (Visible only on very small screens) */}
        <div className="grid gap-4 sm:hidden mt-8">
          {data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm"
            >
              {row.map((cell, colIndex) => (
                <div key={colIndex} className="flex justify-between py-1 border-b last:border-none">
                  <span className="font-semibold text-gray-700 text-sm">{columns[colIndex]}:</span>
                  <span className="text-gray-600 text-sm">{cell}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPageCol;
