import { FaChevronDown } from "react-icons/fa"

import onion from '../../assets/onion-icon.png'
import burger from '../../assets/burger-icon.png'
import beans from '../../assets/beans-icon.png'
import pop from '../../assets/pop-icon.png'
export default function Testimonial() {
  const testimonials = [
    {
      text: "The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.",
      name: "Amanda Martin",
      role: "Food Reviewer",
    },
    {
      text: "The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.",
      name: "Amanda Martin",
      role: "Food Reviewer",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 font-[jost] relative overflow-hidden">
      <img
        src={onion}
        alt="Onion illustration"
        className="absolute top-16 left-16  hidden lg:block"
      />
      <img
        src={pop}
        alt="Cupcake illustration"
        className="absolute top-16 right-16  hidden lg:block"
      />
      <img
        src={burger}
        alt="Burger illustration"
        className="absolute top-[45%] left-6  hidden lg:block"
      />
      <img
        src={beans}
        alt="Coffee beans illustration"
        className="absolute top-[45%] right-6  hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 md:mb-24 lg:mb-32">
          <div className="text-center mb-12">
            <span className="bg-[#CB3A1A] text-white p-3 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
              CLIENT TESTIMONIAL
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">OUR CUSTOMER FEEDBACKS</h2>
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white p-8 border border-[#CB3A1A] rounded-sm shadow-sm flex flex-col justify-between"
              >
                <p className="text-[#74787C] text-base leading-relaxed mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-[#111111] text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-[#74787C] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <span className="absolute bottom-4 right-4 text-[#CB3A1A] text-6xl font-bold opacity-10 select-none">
                  &rdquo;
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-[#F6F6F6] px-10">
          <div className="bg-[#F6F6F6] p-8 md:p-10 lg:p-12 rounded-sm text-center lg:text-left">
            <span className="bg-[#CB3A1A] text-white px-4 py-1 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
              BOOK A TABLE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">MAKE RESERVATION</h2>
            <div className="flex justify-center gap-2 mb-8">
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
              <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            </div>

            <form className="space-y-6">
              <div className="relative">
                <select
                  className="w-full p-4 border border-[#D9D9D9] bg-white text-[#74787C] text-base appearance-none pr-10 focus:outline-none focus:ring-1 focus:ring-[#CB3A1A]"
                  defaultValue="1 Person"
                >
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#74787C] pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  className="w-full p-4 border border-[#D9D9D9] bg-white text-[#74787C] text-base appearance-none pr-10 focus:outline-none focus:ring-1 focus:ring-[#CB3A1A]"
                  defaultValue="2024-05-16"
                >
                  <option>2024-05-16</option>
                  <option>2024-05-17</option>
                  <option>2024-05-18</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#74787C] pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  className="w-full p-4 border border-[#D9D9D9] bg-white text-[#74787C] text-base appearance-none pr-10 focus:outline-none focus:ring-1 focus:ring-[#CB3A1A]"
                  defaultValue="09:00 am"
                >
                  <option>09:00 am</option>
                  <option>10:00 am</option>
                  <option>11:00 am</option>
                  <option>12:00 pm</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#74787C] pointer-events-none" />
              </div>
              <button className="w-full bg-[#CB3A1A] text-white py-4 text-lg font-semibold uppercase hover:bg-opacity-90 transition-all duration-300">
                BOOK NOW
              </button>
            </form>
          </div>
         <div className="w-full aspect-[4/3] bg-[#D9D9D9] border-white border-8 rounded-sm overflow-hidden">
          </div>
        </div>
      </div>
    </section>
  )
}
