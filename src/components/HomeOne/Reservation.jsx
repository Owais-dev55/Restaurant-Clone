import { FaArrowRight } from "react-icons/fa"
export default function Reservation() {
  const chefs = [
    { name: "KUMAN TUNMAN", role: "WAITER" },
    { name: "KUMAN TUNMAN", role: "WAITER" },
    { name: "KUMAN TUNMAN", role: "WAITER" },
  ]

  return (
    <section className="font-jost">
      <div className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="bg-[#CB3A1A] text-white p-3 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
              MAKE RESERVATION
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">MEET THE EXPERT CHEF</h2>
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-full aspect-[4/3] bg-[#D9D9D9] mb-0">
                </div>
                <div className="bg-[#4F4F4F] text-white py-6 px-4 w-full">
                  <h3 className="text-xl font-bold uppercase mb-1">{chef.name}</h3>
                  <p className="text-sm uppercase opacity-80">{chef.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="relative bg-[#333333] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center" >
        <div className="max-w-3xl mx-auto">
          <span className="bg-[#CB3A1A] text-white px-4 py-1 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
            CRISPY, EVERY BITE TASTE
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-8 relative">
            LOOKING FOR POPULAR 
            {/* <span className="absolute top-14 mr-[-300px] w-7 h-1 bg-[#FFD700] rounded-full transform translate-y-1"></span> */}
            <span className="relative inline-block">
            FAST  FOOD
              
            </span>
          </h2>
          <button className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 text-sm font-medium uppercase hover:bg-white hover:text-[#111111] transition-colors duration-300 mx-auto w-fit">
            READ MORE <div className="w-20 h-[1px] bg-white"></div> <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
