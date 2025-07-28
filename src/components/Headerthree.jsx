import React from "react";
import logo3 from "../assets/logo3.png";

const HeaderThree = () => {
  return (
    <header>
  
       {/* Topbar */}
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

      {/* ⬛ Main Navigation Bar */}
      <nav className="bg-black text-white py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={logo3} alt="Delish Logo" className="h-10" />
        </div>

         {/* Menu Links */}
         <ul className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide mt-4 md:mt-0">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Pages ⌄</a></li>
          <li><a href="#" className="hover:text-orange-500">Shop ⌄</a></li>
          <li><a href="#" className="hover:text-orange-500">Blog ⌄</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* White Button - Black Text */}
          <button className="bg-white text-black px-5 py-2 border border-white hover:bg-gray-100 transition">
            ORDER ONLINE
          </button>

          {/* Orange Button - White Text */}
          <button className="bg-orange-600 text-white px-5 py-2 hover:bg-orange-700 transition">
            BOOK A TABLE
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderThree;
