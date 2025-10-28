import React from "react";

const Advisor = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-10 py-20 md:py-36 bg-gray-100 text-gray-900">
      {/* ✅ Left Section */}
      <div className="md:w-1/2 mb-16 md:mb-0 p-4 md:p-8 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
          ICO Advisors
        </h2>
        <p className="text-2xl sm:text-3xl md:text-6xl font-light leading-snug md:leading-relaxed">
          is the smartest new generation ICO agency!
        </p>
      </div>

      {/* ✅ Right Section */}
      <div className="md:w-1/2 space-y-8 md:space-y-10 p-4 md:p-0 text-center md:text-left">
        <div>
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
            Blockchain Technology
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            is rapidly changing the way applications are built. Its key advantages
            offer huge potential for redesigning the internet landscape. Digital
            assets, tokens, and cryptocurrencies are the fuel of this new economy.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
            ICO Financial Solutions
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            Our agency provides strategic guidance and marketing expertise for
            ICOs, helping clients launch successful blockchain-based projects
            with clarity and compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advisor;
