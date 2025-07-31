import { FaStar } from "react-icons/fa"

export default function Testimonial() {
  const testimonials = [
    {
      text: "The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail. I highly recommend it for anyone looking for a memorable dining experience.",
      name: "KUMAN TUNMAN",
      role: "WAITER",
    },
    {
      text: "The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail. I highly recommend it for anyone looking for a memorable dining experience.",
      name: "MADISON OLIVIA",
      role: "WAITER",
    },
  ]

  return (
    <section className="bg-[#F6F6F6] py-16 md:py-20 lg:py-24 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="bg-[#CB3A1A] text-white p-3 text-xs font-semibold tracking-wider uppercase inline-block mb-4">
            CLIENTS FEEDBACK
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">WHAT OUR CUSTOMER SAYS</h2>
          <div className="flex justify-center gap-2">
            <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
            <span className="w-2 h-2 bg-[#CB3A1A] rounded-full"></span>
          </div>
        </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 sm:p-8 rounded-sm shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-full sm:w-32 h-32 bg-[#D9D9D9] rounded-sm">
                  </div>
                </div>
                <div className="flex-1 relative">
                  <p className="text-[#74787C] text-sm sm:text-base leading-relaxed mb-4">{testimonial.text}</p>
              <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#CB3A1A] w-4 h-4" />
                    ))}
                  </div>
                  <div>
                    <p className="text-[#111111] text-lg font-bold uppercase">{testimonial.name}</p>
                    <p className="text-[#74787C] text-sm font-medium uppercase">{testimonial.role}</p>
                  </div>
                   <div className="absolute top-0 right-0 text-[#CB3A1A] text-4xl font-bold opacity-60">&rdquo;</div>
                </div>
              </div>
              <div className="w-full h-1 bg-[#CB3A1A] mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
