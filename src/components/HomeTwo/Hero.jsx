"use client"

import { FaArrowRight } from "react-icons/fa"
import Headertwo from "../Headertwo"
import HeroImage from '../../assets/bg.png'
export default function Hero() {
  return (
    <div >
        <Headertwo />
      <section className="relative bg-[#2A2A2A] min-h-screen flex items-center font-[jost] overflow-hidden mt-[-200px] -z-10 ">
      <div className="absolute left-0 bottom-0  ">
        <img
          src={HeroImage}
          alt="Decorative tree silhouette"
          className="w-full h-full object-contain  z-10"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="max-w-2xl ml-0 lg:ml-16">
          <div className="mb-6">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wide">
              LUNCH &
            </h1>
            <h1 className="text-white  text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-wide">
              HAPPY HOUR
            </h1>
          </div>
            <p className="text-white text-sm sm:text-base lg:text-lg font-normal tracking-wider uppercase mb-8 opacity-90">
            CHECK OUR LATEST SEASONAL PROMOTIONS
          </p>
          <button className="flex items-center gap-3 border border-white text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-[#2A2A2A] transition-colors duration-300">
            BOOK A TABLE
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}
