"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaSearch, FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"

const Headertwo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="w-full py-4">
      <header className="text-white font-light">
        <div className="bg-black py-2 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <FaMapMarkerAlt className="text-white" /> {/* Corrected color to text-white */}
              <span className="text-center sm:text-left">Silk St, Barbican, London, EC2Y 8DS, UK</span>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <span className="hover:text-orange-500 cursor-pointer">Find a Store</span>
              <span className="hover:text-orange-500 cursor-pointer">Order Tracking</span>
            </div>
          </div>
        </div>
        <div className="bg-orange-600 py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white font-medium cursor-pointer text-sm sm:text-base"> EN - IT </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">DELISH</h1>{" "}
            <button className="bg-orange-600 border border-white text-white px-3 py-1 sm:px-4 sm:py-2 rounded-none hover:bg-white hover:text-orange-600 transition text-xs sm:text-sm">
              BOOK A TABLE
            </button>
          </div>
        </div>
        <div className="bg-black py-4 px-4 sm:px-6 relative">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className="hidden lg:flex space-x-6 font-medium text-sm">
              <span className="hover:text-orange-500 cursor-pointer">HOME ▼</span>
              <span className="hover:text-orange-500 cursor-pointer">PAGES ▼</span>
              <span className="hover:text-orange-500 cursor-pointer">SHOP ▼</span>
              <span className="hover:text-orange-500 cursor-pointer">BLOG ▼</span>
              <span className="hover:text-orange-500 cursor-pointer">CONTACT</span>
            </nav>
            <div className="hidden lg:flex space-x-6 text-lg">
              <FaSearch className="cursor-pointer hover:text-orange-500" />
              <FaUser className="cursor-pointer hover:text-orange-500" />
              <FaHeart className="cursor-pointer hover:text-orange-500" />
              <div className="relative">
                <FaShoppingCart className="cursor-pointer hover:text-orange-500" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
            </div>

            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-black z-50 lg:hidden flex flex-col items-center py-4 space-y-4">
                <nav className="flex flex-col space-y-4 font-medium text-base">
                  <span className="hover:text-orange-500 cursor-pointer">HOME ▼</span>
                  <span className="hover:text-orange-500 cursor-pointer">PAGES ▼</span>
                  <span className="hover:text-orange-500 cursor-pointer">SHOP ▼</span>
                  <span className="hover:text-orange-500 cursor-pointer">BLOG ▼</span>
                  <span className="hover:text-orange-500 cursor-pointer">CONTACT</span>
                </nav>
                <div className="flex space-x-6 text-lg mt-4">
                  <FaSearch className="cursor-pointer hover:text-orange-500" />
                  <FaUser className="cursor-pointer hover:text-orange-500" />
                  <FaHeart className="cursor-pointer hover:text-orange-500" />
                  <div className="relative">
                    <FaShoppingCart className="cursor-pointer hover:text-orange-500" />
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
