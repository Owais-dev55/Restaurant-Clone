import { FiPhone } from "react-icons/fi"
import reservatiomImage from '../../assets/brocoli.png'
import burger from '../../assets/burger.jpg'
export default function Welcome() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 font-jost min-h-[600px] overflow-hidden">
      <div className="absolute top-8 right-8 opacity-10 hidden xl:block">
        <div className="w-40 h-40 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 z-10 p-4 sm:p-8 lg:p-12">
        <img
          src={`${reservatiomImage}`} 
          alt="Fresh burger"
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-52 lg:h-52 object-contain"
        />
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2  lg:justify-start order-1 lg:order-1">
            <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 -mt-16 sm:-mt-24 lg:-mt-[200px]">
              <img
                src={`${burger}`} 
                alt="Burger"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-5  order-2 lg:order-2">
            <div className="w-full max-w-[480px] aspect-[4/3] bg-gray-300 rounded-sm">
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left order-3 lg:order-3">
            <div className="mb-8">
              <button className="bg-[#CB3A1A] text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300">
                MAKE RESERVATION
              </button>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold ">
                WELCOME TO OUR
                <br />
                LUXURY RESTAURANT
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-paragraph text-base lg:text-lg leading-relaxed font-normal">
                The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and
                seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-12 bg-[#CB3A1A] rounded-full flex items-center justify-center">
                <FiPhone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-paragraph text-sm font-medium tracking-wider uppercase mb-1">HOTLINE 24/7</p>
                <p className="text-secondary text-xl font-bold">+256 3254 2568</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
