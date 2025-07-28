import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-black text-white text-sm font-light">
      {/* Topbar */}
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

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Delish Logo" className="h-10 w-auto" />
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide mt-4 md:mt-0">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Pages ⌄</a></li>
          <li><a href="#" className="hover:text-orange-500">Shop ⌄</a></li>
          <li><a href="#" className="hover:text-orange-500">Blog ⌄</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact</a></li>
        </ul>

        {/* CTA Button */}
       <button className="bg-transparent text-white px-6 py-2 border border-orange-600 hover:bg-orange-600 transition">
  BOOK A TABLE →
</button>
      </nav>
    </header>
  );
};

export default Header;
