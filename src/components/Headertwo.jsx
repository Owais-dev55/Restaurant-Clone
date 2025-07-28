import React from "react";
import { FaMapMarkerAlt, FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const Headertwo = () => {
  return (
    <div className="w-[1280px] h-[168px] mx-auto">
      <header className="text-white text-sm font-light">
        {/* 🔶 Top Bar */}
        <div className="bg-black py-2 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-white-500" />
            <span>Silk St, Barbican, London, EC2Y 8DS, UK</span>
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-orange-500 cursor-pointer">Find a Store</span>
            <span className="hover:text-orange-500 cursor-pointer">Order Tracking</span>
          </div>
        </div>

        {/* 🔶 Middle Bar */}
        <div className="bg-orange-600 py-3 px-6 flex justify-between items-center">
          <div className="text-white font-medium cursor-pointer"> EN - IT </div>
          <h1 className="text-2xl font-bold tracking-wide text-white">DELISH</h1>
          <button className="bg-orange-600 border border-white text-white px-4 py-2 rounded-none hover:bg-white hover:text-orange-600 transition">
            BOOK A TABLE
          </button>
        </div>

        {/* 🔶 Bottom Bar */}
        <div className="bg-black py-4 px-6 flex justify-between items-center">
          <nav className="flex space-x-6 font-medium">
            <span className="hover:text-orange-500 cursor-pointer">HOME ▼</span>
            <span className="hover:text-orange-500 cursor-pointer">PAGES ▼</span>
            <span className="hover:text-orange-500 cursor-pointer">SHOP ▼</span>
            <span className="hover:text-orange-500 cursor-pointer">BLOG ▼</span>
            <span className="hover:text-orange-500 cursor-pointer">CONTACT</span>
          </nav>
          <div className="flex space-x-6 text-lg">
            <FaSearch className="cursor-pointer hover:text-orange-500" />
            <FaUser className="cursor-pointer hover:text-orange-500" />
            <FaHeart className="cursor-pointer hover:text-orange-500" />
            <div className="relative">
              <FaShoppingCart className="cursor-pointer hover:text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headertwo;
