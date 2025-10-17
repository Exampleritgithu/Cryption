import React, { useEffect, useState } from "react";

// ✅ Custom Hook (moved outside component)
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // roughly 60 FPS

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animate();
  }, [end, duration]);

  return count;
};

const Analysis = () => {
  const analyses = [
    { title: 42, description: "ICO Evaluated" },
    { title: 12, description: "Years of Experience" },
    { title: 280, description: "Successful Projects" },
    { title: 25, suffix: "M$", description: "To Invest" },
  ];

  return (
    <section
      className="relative w-full py-24 bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: "url('/Analysis.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-16">
          ICO <span className="text-green-400">Analysis</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-4 divide-green-400/50">
          {analyses.map((item, index) => {
            const animatedValue = useCountUp(item.title);

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 hover:bg-white/10 transition duration-300"
              >
                <h3 className="text-6xl font-bold text-green-400 mb-3">
                  {animatedValue}
                  {item.suffix || ""}
                </h3>
                <p className="text-xl font-semibold">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Analysis;
