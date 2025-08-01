"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaMapMarkerAlt, FaSearch, FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"
import React from "react"

const Headertwo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hoverTimeout, setHoverTimeout] = useState(null)

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
      { name: "Order", href: "/home-3" },
    ],
    shop: [
      { name: "Menu", href: "/menu" },
      { name: "shop", href: "/shop" },
    ],
  }

  return (
    <div className="w-full py-4">
      <header className="text-white font-light">
        {/* Top Bar */}
        <div className="bg-black py-2 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <FaMapMarkerAlt className="text-white" />
              <span className="text-center sm:text-left">Silk St, Barbican, London, EC2Y 8DS, UK</span>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <span className="hover:text-orange-500 cursor-pointer">Find a Store</span>
              <span className="hover:text-orange-500 cursor-pointer">Order Tracking</span>
            </div>
          </div>
        </div>

        {/* Middle Bar */}
        <div className="bg-orange-600 py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white font-medium cursor-pointer text-sm sm:text-base">EN - IT</div>
            <Link
              to="/"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white hover:opacity-90 transition-opacity"
            >
              DELISH
            </Link>
            <button className="bg-orange-600 border border-white text-white px-3 py-1 sm:px-4 sm:py-2 rounded-none hover:bg-white hover:text-orange-600 transition text-xs sm:text-sm">
              BOOK A TABLE
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-black py-4 px-4 sm:px-6 relative">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 font-medium text-sm relative">
              <Link to="/" className="hover:text-orange-500 cursor-pointer transition-colors">
                HOME
              </Link>

              {/* Pages Dropdown */}
              <div className="relative" onMouseEnter={() => handleMouseEnter("pages")} onMouseLeave={handleMouseLeave}>
                <button className="hover:text-orange-500 cursor-pointer transition-colors flex items-center">
                  PAGES ▼
                </button>
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
              </div>

              {/* Shop Dropdown */}
              <div className="relative" onMouseEnter={() => handleMouseEnter("shop")} onMouseLeave={handleMouseLeave}>
                <button className="hover:text-orange-500 cursor-pointer transition-colors flex items-center">
                  SHOP ▼
                </button>
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
              </div>

              <Link to="/team" className="hover:text-orange-500 cursor-pointer transition-colors">
                TEAM
              </Link>
              <Link to="/contact" className="hover:text-orange-500 cursor-pointer transition-colors">
                CONTACT
              </Link>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden lg:flex space-x-6 text-lg">
              <FaSearch className="cursor-pointer hover:text-orange-500 transition-colors" />
              <FaUser className="cursor-pointer hover:text-orange-500 transition-colors" />
              <FaHeart className="cursor-pointer hover:text-orange-500 transition-colors" />
              <div className="relative">
                <FaShoppingCart className="cursor-pointer hover:text-orange-500 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-black z-50 lg:hidden flex flex-col items-center py-4 space-y-4">
                <nav className="flex flex-col space-y-4 font-medium text-base">
                  <Link
                    to="/"
                    className="hover:text-orange-500 cursor-pointer transition-colors"
                    onClick={handleMobileLinkClick}
                  >
                    HOME
                  </Link>

                  <div>
                    <div className="text-white font-medium mb-2">PAGES</div>
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
                    <div className="text-white font-medium mb-2">SHOP</div>
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
                    className="hover:text-orange-500 cursor-pointer transition-colors"
                    onClick={handleMobileLinkClick}
                  >
                    TEAM
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-orange-500 cursor-pointer transition-colors"
                    onClick={handleMobileLinkClick}
                  >
                    CONTACT
                  </Link>
                </nav>

                <div className="flex space-x-6 text-lg mt-4">
                  <FaSearch className="cursor-pointer hover:text-orange-500 transition-colors" />
                  <FaUser className="cursor-pointer hover:text-orange-500 transition-colors" />
                  <FaHeart className="cursor-pointer hover:text-orange-500 transition-colors" />
                  <div className="relative">
                    <FaShoppingCart className="cursor-pointer hover:text-orange-500 transition-colors" />
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      2
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Headertwo
