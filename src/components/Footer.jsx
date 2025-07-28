import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPaperPlane, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo3.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand and Contact Info */}
        <div className="space-y-4">
        <img
  src={logo}
  alt="Delish Logo"
  className="h-10 object-contain"
/>
          <p>1234, Restaurant St,<br />South City, New York 0124</p>
          <div className="flex space-x-3">
            <div className="bg-orange-600 text-white p-2 rounded-full cursor-pointer"><FaFacebookF /></div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer"><FaInstagram /></div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer"><FaTwitter /></div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer"><FaLinkedinIn /></div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">LINKS</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="hover:text-orange-500 cursor-pointer">Meet our team</li>
            <li className="hover:text-orange-500 cursor-pointer">Case stories</li>
            <li className="hover:text-orange-500 cursor-pointer">Latest News</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">OTHER LINK</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Careers</li>
            <li className="hover:text-orange-500 cursor-pointer">Creative Agency</li>
            <li className="hover:text-orange-500 cursor-pointer">Digital Agency</li>
            <li className="hover:text-orange-500 cursor-pointer">Marketing</li>
            <li className="hover:text-orange-500 cursor-pointer">Digital Services</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-white font-semibold mb-4">NEWSLETTER</h3>
          <p className="mb-4">Subscribe us & receive our offers and updates your inbox directly</p>
          <div className="relative w-full">
  <input
    type="email"
    placeholder="Email Address"
    className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-md pr-12 focus:outline-none"
  />
  <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-500">
    <FaPaperPlane className="text-sm" />
  </button>
</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <span>All rights reserved 2024. Delish Restaurant</span>
        <div className="space-x-6">
          <span className="hover:text-orange-500 cursor-pointer">Terms Of Use</span>
          <span className="hover:text-orange-500 cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
