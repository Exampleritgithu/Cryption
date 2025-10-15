import React from "react";

const Whitepaper = () => {
  return (
    <section className="bg-gray-200 py-20 px-6 lg:px-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* ---------- LEFT SIDE ---------- */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-gray-900">Whitepaper</h3>
          <h2 className="text-6xl font-light text-gray-900 leading-tight">
            Writing and <br /> Critical Analysis
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Whitepaper is the central document of the ICO. It should clearly and
            briefly convey to potential investors the essence of the concept,
            its technical aspects and the prospects for investing in it.
          </p>
          <p className="text-gray-600 text-xl leading-relaxed">
            This document should be given special attention, since most of the
            cryptocurrency investors make a decision to invest in ICO on the
            basis of it.
          </p>

          {/* ---------- EMAIL SUBSCRIBE BOX ---------- */}
          <div className="mt-10">
            <form className="flex bg-white  rounded-full overflow-hidden max-w-xl">
              <input
                type="email"
                placeholder="Your E-mail Address"
                className="flex-1 px-6 py-4 text-gray-700 text-lg outline-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold text-lg rounded-full hover:opacity-90 transition-all duration-300 mr-6 m-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Book-cover.png" // 👉 Replace this with your image path
            alt="Guide to Investing in ICOs"
            className="w-[420px] md:w-[500px] lg:w-[550px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
