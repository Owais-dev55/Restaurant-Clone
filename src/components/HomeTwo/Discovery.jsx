import { FiPhone } from "react-icons/fi"

export default function Discovery() {
  const categories = [
    { name: "TEA & DRINKS", isPrimary: true },
    { name: "LUNCH MEAL", isPrimary: false },
    { name: "DINNER MEAL", isPrimary: false },
    { name: "DESSERTS MENU", isPrimary: false },
  ]

  return (
    <section className="font-[jost]">
      <div className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="bg-[#CB3A1A] text-white px-4 py-1 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
              MAKE RESERVATION
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">DISCOVER OUR CATEGORY</h2>
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            </div>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-full aspect-[4/3] bg-[#D9D9D9] mb-6">
                </div>
                <div className="relative w-full flex flex-col items-center">
                  <div className={`w-full  border-black h-px mb-6 ${category.isPrimary ? "bg-[#CB3A1A]" : "bg-[#111111]"}`}></div>
                  <div
                    className={`absolute -top-6 w-px h-6 ${category.isPrimary ? "bg-[#CB3A1A]" : "bg-[#111111]"}`}
                  ></div>
                  <button
                    className={`px-6 py-2 text-sm font-medium uppercase transition-colors duration-300 ${
                      category.isPrimary
                        ? "border border-[#CB3A1A] text-[#CB3A1A] hover:bg-[#CB3A1A] hover:text-white"
                        : "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"}`}>
                    {category.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#2A2A2A]  py-16 md:py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start">
          <div className="bg-white p-8 md:p-10 lg:p-12 rounded-sm shadow-lg max-w-md w-full ">
            <div className="text-center mb-8">
              <span className="bg-[#CB3A1A] text-white px-4 py-1 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
                MAKE RESERVATION
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">OPENING TIME</h2>
              <div className="flex justify-center gap-2">
                <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
                <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
                <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
                <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              </div>
            </div>
       <div className="grid grid-cols-2 gap-y-4 text-center mb-8 border border-[#ECECEC]">
              <div className="font-bold uppercase text-sm text-[#74787C] border border-[#ECECEC]">MONDAY TO FRIDAY</div>
              <div className="font-bold uppercase text-sm text-[#74787C] border border-[#ECECEC]">FRIDAY TO SUNDAY</div>
              <div className="text-[#111111] text-lg font-bold border border-[#ECECEC]">10:00</div>
              <div className="text-[#111111] text-lg font-bold border border-[#ECECEC]">12:00</div>
              <div className="text-[#111111] text-lg font-bold border border-[#ECECEC]">20:00</div>
              <div className="text-[#111111] text-lg font-bold border border-[#ECECEC]">22:00</div>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center gap-2 border border-[#CB3A1A] text-[#CB3A1A] px-6 py-3 text-sm font-medium uppercase hover:bg-[#CB3A1A] hover:text-white transition-colors duration-300">
                <FiPhone className="w-4 h-4" />
                +256 1489 362
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
