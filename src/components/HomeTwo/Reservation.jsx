
import { FaRegComment, FaArrowRight } from "react-icons/fa"

export default function Reservation() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="bg-[#CB3A1A] text-white p-3 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
            MAKE RESERVATION
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">LATEST BLOG INSIGHTS</h2>
          <div className="flex justify-center gap-2">
            <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
          </div>
        </div>
       <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative bg-[#D9D9D9] aspect-[4/3] overflow-hidden">
            <div className="absolute top-10 left-10 bg-[#CB3A1A] text-white px-4 py-2 text-center font-bold text-3xl">
              09 <span className="block text-sm font-medium">DEC</span>
            </div>
          </div>
          <div className="bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[300px]">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#74787C] text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#D9D9D9] rounded-full"></div>
                  <span>MARKUS DANIEL</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegComment className="w-4 h-4 text-[#CB3A1A]" />
                  <span>2 COMMENT</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] leading-tight">
                HOW RESTAURANTS FOSTER CONNECTIONS AND CREATE MEMORIES
              </h3>
            </div>
            <button className="flex items-center gap-2 border border-[#CB3A1A] text-[#CB3A1A] px-4 py-2 text-sm font-medium uppercase hover:bg-[#CB3A1A] hover:text-white transition-colors duration-300 w-fit mt-6">
              READ MORE <div className="w-10 h-[1px] bg-[#CB3A1A]"></div> <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[300px]">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#74787C] text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#D9D9D9] rounded-full"></div>
                  <span>MARKUS DANIEL</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegComment className="w-4 h-4 text-[#CB3A1A]" />
                  <span>2 COMMENT</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] leading-tight">
                DISCOVERING AFFORDABLE GOURMET EXPERIENCES IN YOUR CITY
              </h3>
            </div>
            <button className="flex items-center gap-2 border border-[#CB3A1A] text-[#CB3A1A] px-4 py-2 text-sm font-medium uppercase hover:bg-[#CB3A1A] hover:text-white transition-colors duration-300 w-fit mt-6">
              READ MORE <div className="w-10 h-[1px] bg-[#CB3A1A]"></div> <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative bg-[#D9D9D9] aspect-[4/3] overflow-hidden">
            <div className="absolute top-10 left-10 bg-[#CB3A1A] text-white px-4 py-2 text-center font-bold text-3xl">
              09 <span className="block text-sm font-medium">DEC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
