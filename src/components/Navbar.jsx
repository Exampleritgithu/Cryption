import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", dropdown: ["Our Story", "Team", "Mission"] },
    { name: "Services", dropdown: ["Web Development", "SEO Optimization", "UI/UX Design"] },
    { name: "Portfolio", dropdown: ["Web Projects", "Mobile Apps", "Branding"] },
    { name: "News & Blog", dropdown: ["Latest News", "Articles", "Case Studies"] },
    { name: "Contact", dropdown: ["Contact Form", "Map", "Support"] },
    { name: "Features", dropdown: ["Animations", "Integrations", "Performance"] },
    { name: "Elements", dropdown: ["Buttons", "Icons", "Forms"] },
  ];

  return (
    <nav
      className={`w-full bg-white shadow-md transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 z-50" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between  ">
        {/* ✅ Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Cryption Logo"
            className="w-50 h-50 object-contain"
          />
          
        </div>

        {/* ✅ Menu Items */}
        <ul className="hidden md:flex gap-14 text-black font-semibold text-xl relative items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer hover:text-green-500 transition-all"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.name}

              {/* ✅ Dropdown */}
              {activeDropdown === index && (
                <ul className="absolute left-0 top-full mt-3 bg-white shadow-lg rounded-xl py-3 w-56 text-gray-700 z-50 border border-gray-100">
                  {item.dropdown.map((sub, i) => (
                    <li
                      key={i}
                      className="px-5 py-2 hover:bg-green-100 hover:text-green-600 transition-colors"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* ✅ Search Icon + Input */}
          <li className="cursor-pointer text-2xl hover:text-green-500 relative">
            <FaSearch
              onClick={() => setShowSearch(!showSearch)}
              className="transition-transform duration-200 hover:scale-110"
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute right-0 top-full mt-2 w-64 border border-gray-300 rounded-full px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400 bg-white shadow-md transition-all"
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
