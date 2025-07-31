import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { FiTarget } from "react-icons/fi" 

export default function Counter() {
  const stats = [
    { number: "15", text: "NEW COOL PROJECTS" },
    { number: "15", text: "TOTAL AWARDS WIN" },
    { number: "20", text: "UNIQUE FOOD SPECIALITIES" },
    { number: "69", text: "HARD TEAM MEMBERS" },
  ]

  const galleryItems = [
    { id: 1, isHighlighted: false },
    { id: 2, isHighlighted: true },
    { id: 3, isHighlighted: false },
    { id: 4, isHighlighted: false },
    { id: 5, isHighlighted: false },

  ]

  return (
    <section className="bg-[#111111] font-jost text-white overflow-hidden">
      <div
        className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url("/images/food-pattern.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl sm:text-6xl font-bold mb-2">{stat.number}</span>
              <span className="text-sm sm:text-base font-medium uppercase tracking-wider opacity-80">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="text-center lg:text-left">
          <button className="bg-[#CB3A1A] text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300 mb-4">
            VIEW OUR PROJECTS
          </button>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">OUR FOOD GALLERY</h2>
        </div>
        <div className="flex justify-center lg:justify-end gap-4">
          <button className="border border-white text-white p-4 hover:bg-white hover:text-[#111111] transition-colors duration-300">
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <button className="border border-white text-white p-4 hover:bg-white hover:text-[#111111] transition-colors duration-300">
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
     <div className="relative w-full overflow-x-auto pb-12 md:pb-16 lg:pb-20">
        <div className="flex flex-nowrap items-start gap-4 px-4 sm:px-6 lg:px-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative flex-shrink-0 w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] lg:w-[280px] lg:h-[350px] ${
                item.isHighlighted ? "bg-[#CB3A1A]" : "bg-[#D9D9D9]"
              }  "mt-8 sm:mt-12 lg:mt-16"} transition-all duration-300`}        >
              {item.isHighlighted && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full flex items-center justify-center">
                    <FiTarget className="w-6 h-6 text-[#CB3A1A]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
