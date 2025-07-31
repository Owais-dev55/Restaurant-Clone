import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const CtaSectionContact = () => {
  return (
    <div className="bg-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <p className="text-white text-sm font-medium mb-2">
              BOOK A TABLE FOR YOU AND FAMILY MEMBERS
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              NEED A TABLE ON COFFEE HOUSE
            </h2>
          </div>
          <button className="mt-6 md:mt-0 border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-gray-800 transition-colors">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3D3D3D] text-white text-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
            CONTACT US
          </h2>

          {/* Breadcrumb */}
          <p className="text-xs font-medium tracking-widest mb-10">
            HOME / CONTACT US
          </p>

          {/* "GET IN TOUCH" Outlined Text */}
          <h3
            className="
        text-[2rem] sm:text-[3rem] lg:text-[5rem]  
        font-black                               
        uppercase
        text-stroke  
        tracking-widest 
        leading-none
        text-center
        mb-[-1rem] lg:mb-[-2rem] 
      "
          >
            GET IN TOUCH
          </h3>
        </div>
      </section>

      {/* Office Info Section */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div className="container px-4">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md ml-0 lg:ml-16">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              OFFICE INFORMATION
            </h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Completely reachable 24x7 via standards & compliant modern
              solutions.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
                  <FaPhoneAlt className="text-[#CB3A1A] text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800 mb-1">
                    Phone Number & Email
                  </h4>
                  <p className="text-gray-600 text-xs mb-1">+92 327 2311 238</p>
                  <p className="text-gray-600 text-xs">help@delishportal.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
                  <FaMapMarkerAlt className="text-[#CB3A1A] text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800 mb-1">
                    Our Office Address
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    201 Earning Street, Mixed Lines,
                    <br />
                    HYT 21345, New York
                  </p>
                </div>
              </div>

              {/* Work Time */}
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
                  <FaClock className="text-[#CB3A1A] text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800 mb-1">
                    Official Work Time
                  </h4>
                  <p className="text-gray-600 text-xs mb-1">
                    7:00am – 8:00pm (Mon - Fri)
                  </p>
                  <p className="text-[#B8341A] font-semibold text-xs">
                    Sat, Sun & Holiday Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-200 py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                LEAVE A MESSAGE
              </h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                felis felis, aliquam sit amet.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-gray-100 border border-gray-300 rounded p-3 text-sm focus:border-red-500 focus:ring-0 focus:outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-100 border border-gray-300 rounded p-3 text-sm focus:border-red-500 focus:ring-0 focus:outline-none transition"
                />
              </div>

              <div>
                <select
                  defaultValue=""
                  className="w-full bg-gray-100 border border-gray-300 rounded p-3 text-sm appearance-none focus:border-red-500 focus:ring-0 focus:outline-none transition text-gray-500"
                >
                  <option value="" disabled>
                    Select Subject
                  </option>
                  <option>General Inquiry</option>
                  <option>Booking Question</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Type Your Message"
                  rows="5"
                  className="w-full bg-gray-100 border border-gray-300 rounded p-3 text-sm focus:border-red-500 focus:ring-0 focus:outline-none transition resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full text-white font-bold text-sm tracking-wider py-3 px-6 rounded transition-colors flex items-center justify-center"
                  style={{ backgroundColor: "#CB3A1A" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#B8341A")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#CB3A1A")
                  }
                >
                  SUBMIT MESSAGE →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSectionContact />
    </>
  );
};

export default Contact;
