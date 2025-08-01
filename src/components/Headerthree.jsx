"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo3 from "../assets/logo3.png"

const HeaderThree = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  React.useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  const handleMouseEnter = (dropdown) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setHoverTimeout(timeout)
  }

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  const dropdownData = {
    pages: [
      { name: "About Us", href: "/about" },
      { name: "Food", href: "/home-1" },
      { name: "Order", href: "#" },
      { name: "Gallery", href: "/gallery" },
    ],
    shop: [
      { name: "Menu", href: "/menu" },
      { name: "shop", href: "/shop" },
      { name: "Reservation", href: "/reservation" },
    ],
  }

  return (
    <header>
      <div className="bg-orange-600 text-white flex flex-col md:flex-row justify-between items-center px-6 py-2 space-y-1 md:space-y-0 text-sm">
        <div className="flex space-x-6">
          <span>Mon-Wed 11a-9p</span>
          <span>Thur-Sun 11a-10p</span>
        </div>
        <div className="flex flex-wrap gap-x-4 justify-end text-right">
          <span>reservations@delish.com</span>
          <span>123 456 7890</span>
          <span>296 Relaxo Avenue Moe Berlin 251984</span>
        </div>
      </div>

      <nav className="bg-black text-white py-4 px-6 flex items-center justify-between relative">
        <div>
          <Link to="/">
            <img src={logo3 || "/placeholder.svg"} alt="Delish Logo" className="h-10" />
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide relative">
          <li>
            <Link to="/home-1" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
          </li>

          {/* Pages Dropdown */}
          <li className="relative" onMouseEnter={() => handleMouseEnter("pages")} onMouseLeave={handleMouseLeave}>
            <button className="hover:text-orange-500 transition-colors flex items-center">Pages ⌄</button>
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

          {/* Shop Dropdown */}
          <li className="relative" onMouseEnter={() => handleMouseEnter("shop")} onMouseLeave={handleMouseLeave}>
            <button className="hover:text-orange-500 transition-colors flex items-center">Shop ⌄</button>
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
            <Link to="/team" className="hover:text-orange-500 transition-colors">
              Team
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-orange-500 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-white text-black px-5 py-2 border border-white hover:bg-gray-100 transition">
            ORDER ONLINE
          </button>
          <button className="bg-orange-600 text-white px-5 py-2 hover:bg-orange-700 transition">BOOK A TABLE</button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black z-50 md:hidden">
            <div className="px-6 py-4 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-orange-500 transition-colors"
                onClick={handleMobileLinkClick}
              >
                Home
              </Link>

              <div>
                <div className="text-white font-medium mb-2">Pages</div>
                <div className="pl-4 space-y-2">
                  {dropdownData.pages.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block text-gray-400 hover:text-orange-500 transition-colors"
                      onClick={handleMobileLinkClick}
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
                      className="block text-gray-400 hover:text-orange-500 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/team"
                className="block text-white hover:text-orange-500 transition-colors"
                onClick={handleMobileLinkClick}
              >
                Team
              </Link>
                <Link
                to="/blog"
                className="block text-white hover:text-orange-500 transition-colors"
                onClick={handleMobileLinkClick}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="block text-white hover:text-orange-500 transition-colors"
                onClick={handleMobileLinkClick}
              >
                Contact
              </Link>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="bg-white text-black px-5 py-2 border border-white hover:bg-gray-100 transition">
                  ORDER ONLINE
                </button>
                <button className="bg-orange-600 text-white px-5 py-2 hover:bg-orange-700 transition">
                  BOOK A TABLE
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default HeaderThree
