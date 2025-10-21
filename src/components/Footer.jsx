import React from "react";
import { Phone, Printer, Mail, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1B2A] text-gray-300 py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ===== Column 1: Logo & About ===== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/Logo.png" alt="Logo" className="w-40 h-15" />
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            ICO Landing Page Template. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua enim dolor sit amet.
          </p>
          <button className="border border-emerald-400 text-emerald-400 px-6 py-2 rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300">
            About Us
          </button>
        </div>

        {/* ===== Column 2: Contacts ===== */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Contacts</h3>

          <p className="flex items-start gap-3 mb-4">
            <MapPin className="text-emerald-400 w-5 h-5 mt-1" />
            908 New Hampshire Avenue #100,
            <br />
            Washington, DC 20037, United States
          </p>

          <div className="border-t border-gray-700 my-4"></div>

          <p className="flex items-center gap-3 mb-2">
            <Phone className="text-emerald-400 w-5 h-5" /> +1 916-85-2235
          </p>
          <p className="flex items-center gap-3 mb-2">
            <Printer className="text-emerald-400 w-5 h-5" /> +1 916-85-2235
          </p>
          <p className="flex items-center gap-3 mb-2">
            <Mail className="text-emerald-400 w-5 h-5" />
            <a href="mailto:info@cryption.network" className="hover:text-white">
              info@cryption.network
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Globe className="text-emerald-400 w-5 h-5" />
            <a
              href="https://cryption.network"
              className="text-emerald-400 hover:text-white"
            >
              cryption.network
            </a>
          </p>
        </div>

        {/* ===== Column 3: Recent Posts ===== */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Recent Posts</h3>

          {[1, 2].map((post) => (
            <div key={post} className="flex gap-4 mb-6">
              <img
                src="/1-Emp.jpg"
                alt="Post"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-white leading-snug">
                  Decentralized Token Exchange Radar Relay Raises $3 Million
                </p>
                <p className="text-emerald-400 text-sm mt-1">April 3, 2018</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Column 4: Newsletter ===== */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Newsletter</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our MailChimp newsletter and stay up to date with all
            events coming straight in your mailbox:
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your E-mail address"
              className="w-full px-5 py-3 rounded-full bg-[#132738] text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button className="bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 w-full sm:w-auto">
              SUBSCRIBE
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            <span className="text-emerald-400">*</span> Personal information will
            be encrypted
          </p>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Cryption. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
