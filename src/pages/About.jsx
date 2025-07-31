import React from "react";
import { FaHamburger } from "react-icons/fa";
import qualityIcon from "../assets/quality.svg";
import supplyIcon from "../assets/supply.svg";
import rectangleSvg from "../assets/rectangle.svg";
import foodSectionRectangle from "../assets/food-section-rectangle.png";
import foodSectionRed from "../assets/food-section.png";
import smallBox from "../assets/small.png";
import eyeIcon from "../assets/eye.svg";
import { GiCheeseWedge, GiGlobe } from "react-icons/gi";

const CtaSectionContact = () => {
  return (
    <div className="bg-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <p className="text-white text-sm font-medium mb-2">
              BOOK A TABLE FOR YOU AND FAMILY MEMBERS
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              NEED A TABLE ON COFFEE HOUSE
            </h2>
          </div>
          <button className="mt-6 md:mt-0 border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-gray-800 transition-colors">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <section className="bg-[#3D3D3D] text-white text-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
            ABOUT US
          </h2>

          {/* Breadcrumb */}
          <p className="text-xs font-medium tracking-widest mb-10">
            HOME / ABOUT US
          </p>

          {/* "GET IN TOUCH" Outlined Text */}
          <h3
            className="
        text-[2rem] sm:text-[3rem] lg:text-[5rem]  
        font-black                               
        uppercase
        text-stroke  
        tracking-widest 
        leading-none
        text-center
        mb-[-1rem] lg:mb-[-2rem] 
      "
          >
            ABOUT US
          </h3>
        </div>
      </section>

      {/* Delicious Food Section */}

      <section className="py-20 lg:py-28">
        {/* --- THIS IS THE DIV TO CHANGE --- */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {" "}
          {/* Changed px-4 to this line */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* --- LEFT COLUMN: TEXT CONTENT --- */}
            <div className="relative">
              <FaHamburger className="absolute z-0 top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-gray-100 text-[12rem] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-block bg-[#CB3A1A] text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-sm mb-6">
                  Crispy, Every Bite Taste
                </div>

                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 my-4 leading-tight">
                  DELICIOUS FOOD FOR
                  <br />
                  HEALTHY LIFE
                </h2>

                <div className="mt-10 space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={qualityIcon}
                        alt="Quality Food Icon"
                        className="h-10 w-10"
                      />
                    </div>

                    <div className="w-px h-12 bg-gray-300 mx-5"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        QUALITY FOOD
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        The wise man therefore always holds in these matters
                        this principle of selection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={supplyIcon}
                        alt="Supply Chain Icon"
                        className="h-10 w-10"
                      />
                    </div>

                    <div className="w-px h-12 bg-gray-300 mx-5"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        SUPPLY CHAIN MAINTAIN
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        The wise man therefore always holds in these matters
                        this principle of selection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <button className="border-2 border-gray-900 border-b-4 font-bold tracking-wider py-3 px-8 hover:bg-gray-800 hover:text-white transition-colors">
                    BOOK A TABLE
                  </button>
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: IMAGE --- */}
            <div className="flex justify-center lg:justify-end">
              <div>
                <img
                  src={rectangleSvg}
                  alt="Delicious food presentation"
                  className="w-full max-w-sm lg:max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
        {/* Decorative background icons */}
        <GiGlobe className="absolute top-1/4 left-8 text-red-100 text-8xl transform -rotate-12 pointer-events-none" />
        <GiCheeseWedge className="absolute bottom-1/4 left-12 text-red-100 text-7xl transform rotate-6 pointer-events-none" />
        <div className="container mx-auto px-4 text-center">
          {/* Title Block */}
          <div className="inline-block bg-[#CB3A1A] text-white text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-sm">
            Food Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold my-4 text-gray-800">
            FOOD GALLERY POSTS
          </h2>
          {/* Dotted line below title */}
          <div className="flex justify-center items-center space-x-1 mb-12">
            <span className="w-1.5 h-1.5 bg-[#CB3A1A] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[#CB3A1A] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[#CB3A1A] rounded-full"></span>
          </div>

          {/* --- Image Gallery Grid --- */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* --- Main Red Tile - NO Hover Effect --- */}
            <div className="relative overflow-hidden rounded-md">
              {/* The main red background image */}
              <img
                src={foodSectionRed}
                alt="Featured gallery item"
                className="w-full h-full object-cover"
              />

              {/* This container will center everything inside it */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* The small white box */}
                <img src={smallBox} alt="icon box" className="w-16 h-16" />

                {/* The eye icon, positioned on top of the white box */}
                <img
                  src={eyeIcon}
                  alt="view icon"
                  className="absolute w-8 h-8"
                />
              </div>
            </div>

            {/* The 5 Gray Tiles */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-md"
              >
                <img
                  src={foodSectionRectangle}
                  alt={`Gallery item ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


{/* --- DISCOVER OUR CATEGORY SECTION --- */}
<section className="bg-white py-20 lg:py-28">
  <div className="container mx-auto px-4 text-center">
    
    {/* Title Block */}
    <div className="inline-block bg-[#CB3A1A] text-white text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-sm">
      Make Reservation
    </div>
    <h2 className="text-4xl lg:text-5xl font-extrabold my-4 text-gray-800">
      DISCOVER OUR CATEGORY
    </h2>
    {/* Small vertical red line */}
    <div className="h-6 w-px bg-[#CB3A1A] mx-auto"></div>
    {/* Dotted line below */}
    <div className="flex justify-center items-center space-x-1.5 mt-3 mb-16">
      <span className="w-1.5 h-1.5 bg-[#CB3A1A] rounded-full"></span>
      <span className="w-1.5 h-1.5 bg-[#CB3A1A] rounded-full"></span>
      <span className="w-1.5 h-1.5 bg-[#CB3A1A] rounded-full"></span>
      <span className="w-1.5 h-1.5 bg-[#CB3A1A] rounded-full"></span>
    </div>

    {/* --- Categories Grid --- */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
      {/* Category Card 1 */}
      <div className="text-center">
        <div className="mb-6">
          <img 
            src={foodSectionRectangle} // Assumes this is imported at the top of About.jsx
            alt="Quality Chees" 
            className="mx-auto"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
          QUALITY CHEES
        </h3>
        <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
          Consectetur adipiscing elit quisque eget maximus, velit, non eleifend libero curabitur dapibus mauris sad leo cursus.
        </p>
      </div>

      {/* Category Card 2 */}
      <div className="text-center">
        <div className="mb-6">
          <img 
            src={foodSectionRectangle}
            alt="Crunchi French Fry" 
            className="mx-auto"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
          CRUNCHI FRENCH FRY
        </h3>
        <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
          Consectetur adipiscing elit quisque eget maximus, velit, non eleifend libero curabitur dapibus mauris sad leo cursus.
        </p>
      </div>

      {/* Category Card 3 */}
      <div className="text-center">
        <div className="mb-6">
          <img 
            src={foodSectionRectangle}
            alt="100% Halal Meat" 
            className="mx-auto"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
          100% HALAL MEAT
        </h3>
        <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
          Consectetur adipiscing elit quisque eget maximus, velit, non eleifend libero curabitur dapibus mauris sad leo cursus.
        </p>
      </div>

    </div>

  </div>
</section>

      <CtaSectionContact />
    </>
  );
};

export default About;
