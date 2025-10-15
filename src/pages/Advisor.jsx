import React from "react";

const Advisor = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-10 py-36 bg-gray-100 text-gray-900">
      {/* Left Section */}
      <div className="md:w-1/2 mb-24 md:mb-0 p-8">
        <h2 className="text-6xl font-bold mb-6">ICO Advisors</h2>
        <p className="text-6xl font-light leading-relaxed ">
          is the smartest new generation ICO agency!
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-10">
        <div>
          <h3 className="font-bold text-4xl mb-3">Blockchain Technology</h3>
          <p className="text-xl leading-relaxed">
            is rapidly changing the way applications are built. Its key advantages offer huge potential for redesigning the internet landscape. Digital assets, tokens, and cryptocurrencies are the fuel of this new economy.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-4xl mb-3">ICO Financial Solutions</h3>
          <p className="text-xl leading-relaxed">
            Our agency provides strategic guidance and marketing expertise for ICOs, helping clients launch successful blockchain-based projects with clarity and compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advisor;
