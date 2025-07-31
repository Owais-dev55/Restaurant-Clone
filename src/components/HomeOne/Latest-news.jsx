import { FaRegComment, FaArrowRight } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi" 
export default function LatestNews() {
  const newsItems = [
    {
      date: "20",
      month: "Feb",
      category: "FOOD MENU",
      title: "HOW TO ENSURE DIRECT FOR THE HASSLE-FREE VISA PROCESS",
      comments: "02 Comments",
    },
    {
      date: "20",
      month: "Feb",
      category: "FOOD MENU",
      title: "HOW TO ENSURE DIRECT FOR THE HASSLE-FREE VISA PROCESS",
      comments: "02 Comments",
    },
    {
      date: "20",
      month: "Feb",
      category: "FOOD MENU",
      title: "HOW TO ENSURE DIRECT FOR THE HASSLE-FREE VISA PROCESS",
      comments: "02 Comments",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-16">
          <div className="mb-8 lg:mb-0 text-center  ">
            <span className="bg-[#CB3A1A] text-white px-4 py-1 text-xs font-semibold tracking-wider uppercase mb-4 h-10 w-[250px] flex  justify-center items-center">
              CRISPY, EVERY BITE TASTE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">LATEST NEWS INSIGHTS</h2>
          </div>
          <button className="flex items-center justify-center lg:justify-end gap-2 border border-[#111111] text-[#111111] px-6 py-3 text-sm font-medium uppercase hover:bg-[#111111] hover:text-white transition-colors duration-300 mx-auto lg:mx-0 w-fit">
            VIEW ALL POSTS <div className="w-10 h-[1px] bg-black"></div>   <FaArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col bg-white shadow-sm rounded-sm overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-[#D9D9D9]">    
                <div className="absolute bottom-0 left-0 bg-[#CB3A1A] text-white px-4 py-2 text-center font-bold text-3xl ">
                  {item.date} <span className=" text-sm font-medium">{item.month}</span>
                </div>
              </div>
               <div className="p-6">
                <span className="bg-[#F2EDEA] text-[#111111] p-3 text-xs font-semibold uppercase inline-block mb-4">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-4 leading-tight">{item.title}</h3>
                <div className="flex justify-between items-center text-[#74787C] text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <FaRegComment className="w-4 h-4 text-[#CB3A1A]" />
                    <span>{item.comments}</span>
                  </div>
                  <FiArrowUpRight className="w-5 h-5 text-[#111111]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
