import { FaStar } from "react-icons/fa"

export default function Menu() {
  const menuItems = [
    { name: "Braised Short Ribs", description: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Roasted Vegetable Platter", description: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Classic Caesar Salad", description: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Szechuan Beef Stir-Fry", description: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Vegan Buddha Bowl", description: "Non nisi est sit amet facilisis magna", price: "$15.00" },
    { name: "Vegan Buddha Bowl", description: "Non nisi est sit amet facilisis magna", price: "$15.00" },
  ]

  const cardItems = [
    { name: "Classic Caesar Salad", price: "$15.00" },
    { name: "Braised Short Ribs", price: "$15.00" },
    { name: "Chicken Masala", price: "$15.00" },
    { name: "Chicken Alfredo Pasta", price: "$15.00" },
    { name: "Vegan Buddha Bowl", price: "$15.00" },
    { name: "Chocolate Lava Cake", price: "$15.00" },
  ]

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          {/* Title Section */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <span className="bg-[#CB3A1A] text-white px-4 py-1 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
              FOOD MENU
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">OUR DELICIOUS FOODS</h2>
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4">
            <button className="border border-[#CB3A1A] text-[#CB3A1A] px-6 py-2 text-sm font-medium uppercase hover:bg-[#CB3A1A] hover:text-white transition-colors duration-300">
              ALL FOOD
            </button>
            <button className="border border-[#D9D9D9] text-[#111111] px-6 py-2 text-sm font-medium uppercase hover:bg-gray-100 transition-colors duration-300">
              BREAKFAST
            </button>
            <button className="border border-[#D9D9D9] text-[#111111] px-6 py-2 text-sm font-medium uppercase hover:bg-gray-100 transition-colors duration-300">
              LUNCH
            </button>
            <button className="border border-[#D9D9D9] text-[#111111] px-6 py-2 text-sm font-medium uppercase hover:bg-gray-100 transition-colors duration-300">
              DINNER
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: List View */}
          <div className="flex flex-col bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 rounded-sm">
            <div className="w-full aspect-[4/3] bg-[#D9D9D9] mb-8 rounded-sm overflow-hidden">
              {/* Image will be rendered here */}
            </div>
            {/* Menu Items List */}
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <div key={index} className="pb-6 border-b border-[#D9D9D9] last:border-b-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#111111]">{item.name}</h3>
                    <span className="text-[#CB3A1A] text-lg font-semibold">{item.price}</span>
                  </div>
                  <p className="text-[#74787C] text-sm font-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {cardItems.map((item, index) => (
              <div key={index} className="flex flex-col bg-white shadow-sm rounded-sm overflow-hidden">
                {/* This part should have large height */}
                <div className="w-full h-60 aspect-[4/3] bg-[#D9D9D9] overflow-hidden">
                </div>
                {/* this should have less  */}
                <div className="p-4 text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#CB3A1A] w-4 h-4" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-[#111111] mb-1">{item.name}</h3>
                  <span className="text-[#74787C] text-base font-medium">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
