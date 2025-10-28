import React from "react";
import {
  User,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactForm = () => {
  return (
    <div
      className="bg-cover bg-center py-12 sm:py-16 px-4 sm:px-8 md:px-20 text-gray-800"
      style={{
        backgroundImage: "url('/Form-bg.jpg')", // your background image
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-16 md:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Contact Us
        </h2>
        <p className="text-2xl sm:text-4xl md:text-6xl text-gray-700 font-light mt-2 sm:mt-3">
          Drop us a message
        </p>
      </div>

      {/* Form */}
      <form className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Top Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name *"
              required
              className="w-full rounded-full py-3 sm:py-4 pl-5 sm:pl-6 pr-12 sm:pr-14 text-gray-700 text-sm sm:text-base bg-white/80 backdrop-blur-md shadow-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <User className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-emerald-400 w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full rounded-full py-3 sm:py-4 pl-5 sm:pl-6 pr-12 sm:pr-14 text-gray-700 text-sm sm:text-base bg-white/80 backdrop-blur-md shadow-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <Mail className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-emerald-400 w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Website */}
          <div className="relative">
            <input
              type="text"
              placeholder="Website *"
              className="w-full rounded-full py-3 sm:py-4 pl-5 sm:pl-6 pr-12 sm:pr-14 text-gray-700 text-sm sm:text-base bg-white/80 backdrop-blur-md shadow-md focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <Globe className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-emerald-400 w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Message Box */}
        <div className="relative">
          <textarea
            rows="6"
            placeholder="Message *"
            required
            className="w-full rounded-3xl py-3 sm:py-4 px-5 sm:px-6 text-gray-700 text-sm sm:text-base bg-white/80 backdrop-blur-md shadow-md focus:ring-2 focus:ring-emerald-400 outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Contact with Us */}
      <div className="text-center mt-12 sm:mt-16">
        <h3 className="text-black font-bold uppercase tracking-widest text-lg sm:text-2xl mb-6">
          Contact With Us
        </h3>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="bg-black text-white p-3 sm:p-4 rounded-full hover:bg-emerald-500 transition-all duration-300"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
