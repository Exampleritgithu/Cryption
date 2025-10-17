import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    img: "/Blog-1.jpg",
    title: "SEC Suspends Crypto Firm’s Stock After Big Price Boost",
    desc: "Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.",
    author: "By admin",
  },
  {
    img: "/Blog-2.jpg",
    title: "Decentralized Token Exchange Radar Relay Raises $3 Million",
    desc: "Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.",
    author: "By admin",
  },
  {
    img: "/Blog-3.jpg",
    title: "$17k Breached: Bitcoin Down 15% From All-Time High",
    desc: "Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.",
    author: "By admin",
  },
];

export default function Blog() {
  const [current, setCurrent] = useState(0);

  const nextBlog = () => setCurrent((prev) => (prev + 1) % blogs.length);
  const prevBlog = () => setCurrent((prev) => (prev - 1 + blogs.length) % blogs.length);

  // ✅ Optional auto-slide
  useEffect(() => {
    const interval = setInterval(nextBlog, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="blog">
      {/* Section Title */}
      <div className="text-center mb-12 mt-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-500">Craytion</h2>
        <h3 className="text-4xl md:text-5xl font-light text-gray-800 mt-4">Blog & News</h3>
      </div>

      {/* Blog Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-8">
        {/* Left: Featured Blog */}
        <div className="relative overflow-hidden group rounded-2xl shadow-lg">
          {/* Blog Image */}
          <img
            key={blogs[current].img}
            src={blogs[current].img}
            alt={blogs[current].title}
            className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[800px] object-cover transform group-hover:scale-105 transition-all duration-700 rounded-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end lg:justify-center lg:w-[60%] bg-black/50 p-6 sm:p-10 md:p-14 text-white rounded-2xl transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-snug">
              {blogs[current].title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-gray-200">
              {blogs[current].desc}
            </p>
            <p className="text-emerald-400 font-semibold mb-4">{blogs[current].author}</p>

            {/* Arrows */}
            <div className="flex space-x-3 mt-4">
              <button
                onClick={prevBlog}
                className="p-3 bg-white/30 hover:bg-emerald-500 hover:text-white text-emerald-400 rounded-full transition-all duration-300"
              >
                <FaArrowLeft size={18} />
              </button>
              <button
                onClick={nextBlog}
                className="p-3 bg-white/30 hover:bg-emerald-500 hover:text-white text-emerald-400 rounded-full transition-all duration-300"
              >
                <FaArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Blog List */}
        <div className="space-y-6 sm:space-y-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                index === current
                  ? "bg-emerald-50 shadow-md"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full sm:w-40 md:w-56 h-40 sm:h-32 md:h-40 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 hover:text-emerald-500 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-base md:text-lg leading-relaxed">
                  {blog.desc}
                </p>
                <p className="text-emerald-500 font-semibold mt-2">{blog.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
