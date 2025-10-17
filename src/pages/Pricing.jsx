import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "BASIC PACKAGE",
      price: "350$",
      features: [
        "ICO business and marketing expertise",
        "Token concept development or review",
        "Targeted marketing strategy",
        "Preset PPC account with keywords",
        "Consultations on ICO PR specifics",
      ],
    },
    {
      title: "LEGAL PACKAGE",
      price: "500$",
      features: [
        "Review of the core project documents",
        "Drafting or review of legal documents",
        "Ongoing legal advice",
        "Engage escrow service providers",
        "Establish your legal entity",
      ],
    },
    {
      title: "TECHNOLOGY PACKAGE",
      price: "750$",
      features: [
        "ERC-20 universal standard",
        "Smart contract management system",
        "Set up the platform on your website",
        "Unique promo tokens technology",
        "Payments in fiat and 70+ coins",
      ],
    },
  ];

  return (
    <section
      className="relative text-white py-16 sm:py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('/Pricing-bg.jpeg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* Heading */}
        <div className="mb-16 sm:mb-24">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-teal-400 tracking-wide">
            Cryption
          </h1>
          <p className="text-2xl sm:text-4xl text-gray-300 mt-3 font-light">
            Cryption Pricing
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800/90 rounded-2xl flex flex-col hover:scale-105 transition-transform duration-300 border border-gray-700 shadow-lg"
            >
              {/* Header */}
              <div className="bg-gray-900 py-6 rounded-t-2xl">
                <h2 className="text-teal-400 font-bold text-lg sm:text-xl uppercase tracking-wide">
                  {plan.title}
                </h2>
              </div>

              {/* Price */}
              <div className="py-8 sm:py-10">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-teal-400">
                  {plan.price}
                </h3>
                <p className="mt-2 text-gray-300 text-base sm:text-lg">
                  Per Month
                </p>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-4 sm:space-y-5 text-gray-100 text-base sm:text-lg px-6 sm:px-8 pb-8 sm:pb-10 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="border-t border-gray-700 pt-3 sm:pt-4 first:border-t-0 first:pt-0"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="pb-8 sm:pb-10">
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold py-2.5 sm:py-3 px-8 sm:px-10 rounded-full shadow-lg transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
