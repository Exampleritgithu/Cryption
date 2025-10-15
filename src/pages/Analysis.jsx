import React, { useEffect, useState } from "react";

const Analysis = () => {
  // ✅ Array of values and descriptions
  const analyses = [
    { title: "42", description: "ICO Evaluated" },
    { title: "12", description: "Years of Experience" },
    { title: "280", description: "Successful Projects" },
    { title: "25", suffix: "M$", description: "To Invest" }, // handle 25M$ separately
  ];

  // ✅ Count-up animation hook
  const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  return (
    <section
      className="relative w-full py-24 bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: "url('/Analysis.jpg')" }}
    >
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-16">
          ICO <span className="text-green-400">Analysis</span>
        </h2>

        {/* ✅ Grid with bold vertical divider lines */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-4 divide-green-400/60">
          {analyses.map((item, index) => {
            // Run animation only for numbers (ignore M$, etc.)
            const numberPart = parseInt(item.title);
            const animatedValue = useCountUp(numberPart);

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 hover:bg-white/20 transition duration-300"
              >
                <h3 className="text-6xl font-bold text-green-400 mb-3">
                  {animatedValue}
                  {item.suffix ? item.suffix : ""}
                </h3>
                <p className="text-xl text-white font-bold">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Analysis;
