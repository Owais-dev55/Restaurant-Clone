"use client"

import { FaArrowRight } from "react-icons/fa"
import Headertwo from "../Headertwo"
import HeroImage from "../../assets/bg.png"

export default function Hero() {
  return (
    <div>
      {/* Navbar - Ensure it's positioned on top with a high z-index */}
      <div className="relative z-50">
        <Headertwo />
      </div>

      {/* Hero Section - Pulled up to overlap the navbar */}
      {/* Adjusted negative margin based on the now-tighter navbar */}
      <section className="relative bg-[#2A2A2A] min-h-screen flex items-center font-[jost] overflow-hidden mt-[-100px]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={HeroImage || "/placeholder.svg?height=800&width=1600&text=Hero+Background"}
            alt="Decorative tree silhouette"
            className="w-full h-full object-cover object-left-bottom
                       transform-gpu
                       lg:scale-125 lg:origin-left-bottom
                       xl:scale-150 xl:origin-left-bottom
                       2xl:scale-[1.8] 2xl:origin-left-bottom"
          />
        </div>

        {/* Optional overlay for better text readability on large screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A]/60 via-transparent to-transparent lg:from-[#2A2A2A]/40 xl:from-[#2A2A2A]/30 z-10"></div>

        {/* Content Container - Adjusted top padding to push content below the navbar */}
        {/* This padding should roughly match the height of your navbar */}
        <div className="relative z-20 w-full pt-[100px] md:pt-[80px] lg:pt-[70px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-2xl ml-0 lg:ml-16 xl:ml-20 2xl:ml-24 mt-10 lg:mt-16 xl:mt-20">
              {/* Main Heading - Responsive typography */}
              <div className="mb-6 lg:mb-8 xl:mb-10">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight tracking-wide">
                  LUNCH &
                </h1>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-tight tracking-wide">
                  HAPPY HOUR
                </h1>
              </div>

              {/* Subtitle - Responsive sizing */}
              <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal tracking-wider uppercase mb-8 lg:mb-10 xl:mb-12 opacity-90 max-w-lg">
                CHECK OUR LATEST SEASONAL PROMOTIONS
              </p>

              {/* CTA Button - Responsive sizing */}
              <button className="flex items-center gap-3 lg:gap-4 border border-white text-white px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 text-sm lg:text-base xl:text-lg font-medium uppercase tracking-wider hover:bg-white hover:text-[#2A2A2A] transition-colors duration-300">
                BOOK A TABLE
                <FaArrowRight className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
