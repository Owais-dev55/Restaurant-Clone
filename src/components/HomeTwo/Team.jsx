"use client"

import { FaArrowRight } from "react-icons/fa"

export default function Team() {
  const chefs = [
    { name: "MIKE HARDSON", role: "CO-FOUNDER" },
    { name: "KENNETH OLIVER", role: "CO-FOUNDER" },
    { name: "QUENTIN SAMUEL", role: "CO-FOUNDER" },
    { name: "PATRICK JAMES", role: "CO-FOUNDER" },
  ]

  const menuItems = [
    { name: "Mushroom Arancini", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
    { name: "Butternut Squash Soup", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
    { name: "Braised Short Ribs", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
    { name: "Braised Short Ribs", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
    { name: "Mushroom Arancini", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
  ]

  return (
    <section className="font-jost">
     
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 bg-black mt-20">
          <div className="text-center mb-12 lg:mb-16">
            <span className="bg-[#CB3A1A] text-white p-3 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
              MAKE RESERVATION
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">STARTERS & MAIN DISHES</h2>
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 text-white">
            <div>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-white opacity-50"></div>
                
                <h3 className="text-lg font-bold uppercase">STARTER MENU</h3>
                <div className="w-12 h-px bg-white opacity-50"></div>
              </div>
              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D9D9D9]">
                    
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <span className="text-[#CB3A1A] text-lg font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-[#74787C]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
             <div>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-white opacity-50"></div>
                <h3 className="text-lg font-bold uppercase">MAIN DISHES</h3>
                <div className="w-12 h-px bg-white opacity-50"></div>
              </div>
              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D9D9D9]">
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <span className="text-[#CB3A1A] text-lg font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-[#74787C]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
         <div className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="bg-[#CB3A1A] text-white p-3 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
              TEAM MEMBERS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">OUR POPULAR CHEFS</h2>
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 h-96">
            {chefs.map((chef, index) => (
              <div key={index} className="flex flex-col h-96">
                <div className="w-full aspect-[4/3] bg-[#D9D9D9]">
                </div>
              
                <div className="bg-[#111111] text-white py-4 px-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase opacity-80">{chef.role}</p>
                    <h3 className="text-lg font-bold uppercase">{chef.name}</h3>
                  </div>
                  <button className="bg-[#CB3A1A] p-2 rounded-sm -mt-10">
                    <FaArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}
