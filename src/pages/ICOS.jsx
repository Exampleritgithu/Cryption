import React, { useState } from "react";

const ICOS = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 20;
    const y = (e.clientY / innerHeight) * 20;
    setOffset({ x, y });
  };

  const icos = [
    {
      title: "Digital Tech",
      description: "Collected:",
      amount: "70,000,000$",
      date: "5 March, 2018",
      image: "/ICOs-degital.jpg",
    },
    {
      title: "Circuit Boarder",
      description: "Collected:",
      amount: "15,000,000$",
      date: "4 April, 2005",
      image: "/ICOs-circit.jpg",
    },
    {
      title: "Setra ICOs",
      description: "Collected:",
      amount: "20,000,000$",
      date: "6 June, 2000",
      image: "/ICOs-Setra.jpg",
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleShare = (ico) => {
    if (navigator.share) {
      navigator
        .share({
          title: ico.title,
          text: `${ico.title} — ${ico.description} ${ico.amount}`,
          url: window.location.href,
        })
        .catch((err) => console.log("Share failed:", err));
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen text-black bg-[#212f3a] p-6 sm:p-10 transition-all duration-500"
      style={{
        backgroundImage: `url('/ICOS-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: `${50 - offset.x}% ${50 - offset.y}%`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <div className="text-center mt-32 mb-16 sm:mt-52 sm:mb-24">
        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
          Cryption
        </h2>
        <p className="text-gray-300 text-2xl sm:text-4xl font-light">
          ICOS Completed
        </p>
      </div>

      {/* ICO Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {icos.map((ico, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            {/* Image */}
            <img
              src={ico.image}
              alt={ico.title}
              className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-400 opacity-0 group-hover:opacity-80 transition-all duration-500 flex items-center justify-center sm:items-start sm:justify-start">
              <div className="p-6 text-center sm:text-left text-gray-900">
                <h2 className="text-xl sm:text-2xl text-gray-800 font-bold mb-2">
                  {ico.title}
                </h2>
                <p className="font-semibold text-white">{ico.description}</p>
                <p className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                  {ico.amount}
                </p>
                <p className="text-sm text-gray-800">{ico.date}</p>

                {/* Buttons */}
                <div className="flex justify-center sm:justify-start gap-3 mt-4">
                  {/* Copy Button */}
                  <button
                    onClick={() =>
                      handleCopy(`${ico.title} - ${ico.amount} (${ico.date})`)
                    }
                    className="w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition"
                  >
                    <i className="fa-solid fa-copy"></i>
                  </button>

                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(ico)}
                    className="w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition"
                  >
                    <i className="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="text-[#18d685] border-2 border-[#18d685] rounded-full px-6 sm:px-10 py-3 sm:py-4 text-2xl sm:text-3xl font-semibold hover:bg-[#18d685] hover:text-white transition mt-20 mb-20">
          View All ICOs
        </button>
      </div>
    </div>
  );
};

export default ICOS;
