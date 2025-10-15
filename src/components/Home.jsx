import { useState, useEffect } from "react";

export default function Home() {
  const images = ["/Home-bg1.jpg", "/Home-bg2.jpg"];

  // ✅ Define color themes for each image
  const themes = [
    {
      textColor: "text-white",
      subTextColor: "text-gray-200",
      buttonBg: "bg-green-500",
      buttonHover: "hover:bg-green-600",
      buttonText: "text-white",
      hoverText: "hover:text-yellow-300",
    },
    {
      textColor: "text-black",
      subTextColor: "text-gray-700",
      buttonBg: "bg-yellow-400",
      buttonHover: "hover:bg-yellow-500",
      buttonText: "text-black",
      hoverText: "hover:text-white",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "We Guide Companies Through ICOs";
  const [index, setIndex] = useState(0);

  // ✅ Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Typing text effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // ✅ Current theme based on image
  const theme = themes[currentImage];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-end overflow-hidden transition-all duration-1000">
      {/* ✅ Background Image */}
      <img
        src={images[currentImage]}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* ✅ Text section */}
      <div className="relative z-10 w-1/2 pr-24 text-left transition-colors duration-1000">
        <h1 className={`text-6xl md:text-6xl  ${theme.textColor} leading-snug min-h-[160px]`}>
          {displayedText.split(" ").map((word, i) => (
            <span
              key={i}
              className="inline-block opacity-0 animate-fade-in-left"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <p className={`text-2xl md:text-3xl mt-6 ${theme.subTextColor}`}>
          ICO Advisors is a full-service agency specializing in ICO financial and
          marketing advisory as well as blockchain solutions.
        </p>

        {/* ✅ Buttons */}
        <div className="flex  gap-5 mt-10">
          <button
            className={`px-8 py-3 rounded-full shadow-lg text-xl ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHover} ${theme.hoverText} transition-all duration-300 animate-slide-up delay-100`}
          >
            Get Started
          </button>

          <button
            className={`px-8 py-3 rounded-full shadow-lg text-xl bg-gray-900 text-white hover:bg-gray-700 hover:text-yellow-300 transition-all duration-300 animate-slide-up delay-200`}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* ✅ Animations */}
      <style>
        {`
          @keyframes fade-in-left {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-left {
            animation: fade-in-left 0.6s forwards;
          }

          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.3s; }
        `}
      </style>
    </section>
  );
}
