"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  React.useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleMouseEnter = (dropdown) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null);
  };

  const dropdownData = {
    pages: [
      { name: "About Us", href: "/about" },
      { name: "Food", href: "/" },
      { name: "Order", href: "/home-3" },
    ],
    shop: [
      { name: "Menu", href: "/menu" },
      { name: "shop", href: "/shop" },
    ],
  };

  return (
    <header className="bg-black text-white text-sm font-light relative">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-2 border-b border-gray-800 space-y-1 md:space-y-0">
        <div className="flex space-x-6 text-gray-400">
          <span>Mon-Wed 11a-9p</span>
          <span>Thur-Sun 11a-10p</span>
        </div>
        <div className="flex flex-wrap gap-x-4 justify-end text-gray-400">
          <span>reservations@delish.com</span>
          <span>123 456 7890</span>
          <span>296 Relaxo Avenue Moe Berlin 251984</span>
        </div>
      </div>
      <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Delish Logo"
            className="h-10 w-auto"
          />
        </div>
        <ul className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide mt-4 md:mt-0 relative">
          <li>
            <Link to="/home-1" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#" className="hover:text-orange-500 flex items-center">
              Pages ⌄
            </Link>
            {activeDropdown === "pages" && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-black border border-gray-800 shadow-lg z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="py-2">
                  {dropdownData.pages.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("shop")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#" className="hover:text-orange-500 flex items-center">
              Shop ⌄
            </Link>
            {activeDropdown === "shop" && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-black border border-gray-800 shadow-lg z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="py-2">
                  {dropdownData.shop.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/team" className="hover:text-orange-500">
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            className="text-white hover:text-orange-500"
            onClick={() => setActiveDropdown(activeDropdown ? null : "mobile")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <button className="bg-transparent text-white px-6 py-2 border border-orange-600 hover:bg-orange-600 transition">
          BOOK A TABLE →
        </button>
      </nav>

      {/* Mobile Menu */}
      {activeDropdown === "mobile" && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-orange-500">
              Home
            </Link>

            <div>
              <div className="text-white font-medium mb-2">Pages</div>
              <div className="pl-4 space-y-2">
                {dropdownData.pages.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block text-gray-400 hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-white font-medium mb-2">Shop</div>
              <div className="pl-4 space-y-2">
                {dropdownData.shop.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block text-gray-400 hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/team" className="block text-white hover:text-orange-500">
              Team
            </Link>

            <Link
              to="/contact"
              className="block text-white hover:text-orange-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
