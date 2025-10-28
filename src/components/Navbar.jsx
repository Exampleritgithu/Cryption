import { useState, useEffect, useRef } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "About",
      dropdown: [
        { label: "About Us", path: "/about" },
        { label: "About Us Skills" },
      ],
    },
    {
      name: "Services",
      dropdown: [{ label: "Services" }, { label: "Services page" }],
    },
    {
      name: "News & Blog",
      dropdown: [
        { label: "Latest News" },
        { label: "Articles" },
        { label: "Case Studies" },
      ],
    },
    {
      name: "Contact",
      path: "/contact", // ✅ Simple link
    },
    {
      name: "Portfolio",
      path: "/Portfolio", // ✅ Simple link (no dropdown)
    },
    {
      name: "Features",
      path: "/featured", // ✅ Simple link (no dropdown)
    },
  ];

  const toggleDropdown = (index) => {
    if (!menuItems[index].dropdown) return; // ✅ Skip for Contact & Features
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    if (!menuItems[index].dropdown) return; // ✅ Skip hover for Contact & Features
    clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <nav
      className={`w-full bg-white shadow-md transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 z-50" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Cryption Logo"
            className="w-40 h-auto object-contain"
          />
        </div>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-black font-semibold text-xl relative items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer hover:text-green-500 transition-all"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.path ? <Link to={item.path}>{item.name}</Link> : item.name}

              {/* ✅ Dropdown (Desktop Only if exists) */}
              {item.dropdown && activeDropdown === index && (
                <ul className="absolute left-0 top-full mt-3 bg-white shadow-lg rounded-xl py-3 w-56 text-gray-700 z-50 border border-gray-100 transition-opacity duration-300">
                  {item.dropdown.map((sub, i) =>
                    sub.path ? (
                      <li key={i}>
                        <Link
                          to={sub.path}
                          className="block px-5 py-2 hover:bg-green-100 hover:text-green-600 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ) : (
                      <li
                        key={i}
                        className="px-5 py-2 hover:bg-green-100 hover:text-green-600 transition-colors"
                      >
                        {sub.label}
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}

          {/* ✅ Search Icon */}
          <li className="cursor-pointer text-2xl hover:text-green-500 relative">
            <Search
              onClick={() => setShowSearch(!showSearch)}
              className="transition-transform duration-200 hover:scale-110 w-5 h-5"
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

        {/* ✅ Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <X
              className="w-8 h-8 text-green-500 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              className="w-8 h-8 text-green-500 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col text-gray-800 text-lg font-semibold px-6 py-4 space-y-3">
            {menuItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                {item.path ? (
                  // ✅ Direct link (Contact & Features)
                  <Link
                    to={item.path}
                    className="block py-2 hover:text-green-500 transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <div
                      className="flex justify-between items-center py-2 hover:text-green-500"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeDropdown === index
                            ? "rotate-180 text-green-500"
                            : ""
                        }`}
                      />
                    </div>

                    {/* ✅ Dropdown (Mobile Only if exists) */}
                    {item.dropdown && activeDropdown === index && (
                      <ul className="pl-4 border-l-2 border-green-300 mt-2 space-y-2 text-base text-gray-600">
                        {item.dropdown.map((sub, i) =>
                          sub.path ? (
                            <li key={i}>
                              <Link
                                to={sub.path}
                                className="py-1 hover:text-green-600 transition-colors block"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ) : (
                            <li
                              key={i}
                              className="py-1 hover:text-green-600 transition-colors"
                            >
                              {sub.label}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}

            {/* ✅ Search in Mobile Menu */}
            <li className="border-t pt-3">
              <div className="flex items-center gap-3">
                <Search className="text-green-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-full px-4 py-2 w-full text-base focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
