import React from 'react';

export const Menu = () => {
  return (
    <div className="bg-gray-100 min-h-screen  space-y-10">
      
      {/* === Header Section === */}
      <div className="bg-gray-500 shadow-md flex flex-col justify-center items-center p-8 space-y-6 ">
        <h1 className="text-white font-bold font-sans text-4xl">FOOD MENU PAGE</h1>
        <h2 className="text-white text-lg">Home / MenuPage</h2>
        <h1 className="text-6xl font-extrabold text-transparent uppercase tracking-widest stroke-text">
          OUR FOOD MENU
        </h1>
      </div>

      {/* === Two Column Layout === */}
      <div className="flex justify-center gap-10 flex-wrap">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">

          {/* Card 1 */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-sm w-full max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow">
              <p className="text-base font-semibold text-gray-800">
                <span className="inline-block w-full">
                  <span className="inline-block max-w-[70%] truncate">Wild Mushroom Arancini</span>
                  <span className="mx-2 text-gray-400">....................</span>
                  <span className="text-red-600 font-bold">$15.00</span>
                </span>
              </p>
              <p className="text-sm text-gray-600">Ricotta, goat cheese, beetroot and dateline.</p>
            </div>
          </div>

          {/* Repeat for other 3 items */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-sm w-full max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow">
              <p className="text-base font-semibold text-gray-800">
                <span className="inline-block w-full">
                  <span className="inline-block max-w-[70%] truncate">Truffle Mushroom Risotto</span>
                  <span className="mx-2 text-gray-400">....................</span>
                  <span className="text-red-600 font-bold">$15.00</span>
                </span>
              </p>
              <p className="text-sm text-gray-600">Ricotta, goat cheese, beetroot and dateline.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-sm w-full max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow">
              <p className="text-base font-semibold text-gray-800">
                <span className="inline-block w-full">
                  <span className="inline-block max-w-[70%] truncate">Braised Short Ribs</span>
                  <span className="mx-2 text-gray-400">....................</span>
                  <span className="text-red-600 font-bold">$15.00</span>
                </span>
              </p>
              <p className="text-sm text-gray-600">Ricotta, goat cheese, beetroot and dateline.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-sm w-full max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow">
              <p className="text-base font-semibold text-gray-800">
                <span className="inline-block w-full">
                  <span className="inline-block max-w-[70%] truncate">Caesar Salad</span>
                  <span className="mx-2 text-gray-400">....................</span>
                  <span className="text-red-600 font-bold">$15.00</span>
                </span>
              </p>
              <p className="text-sm text-gray-600">Ricotta, goat cheese, beetroot and dateline.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">

          <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-sm w-full max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow">
              <p className="text-base font-semibold text-gray-800">
                <span className="inline-block w-full">
                  <span className="inline-block max-w-[70%] truncate">Honey Glazed Salmon</span>
                  <span className="mx-2 text-gray-400">....................</span>
                  <span className="text-red-600 font-bold">$15.00</span>
                </span>
              </p>
              <p className="text-sm text-gray-600">Ricotta, goat cheese, beetroot and dateline.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-sm w-full max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow">
              <p className="text-base font-semibold text-gray-800">
                <span className="inline-block w-full">
                  <span className="inline-block max-w-[70%] truncate">Mediterranean Quinoa Salad</span>
                  <span className="mx-2 text-gray-400">....................</span>
                  <span className="text-red-600 font-bold">$15.00</span>
                </span>
              </p>
              <p className="text-sm text-gray-600">Ricotta, goat cheese, beetroot and dateline.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-sm w-full max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow">
              <p className="text-base font-semibold text-gray-800">
                <span className="inline-block w-full">
                  <span className="inline-block max-w-[70%] truncate">Roasted Vegetable Platter</span>
                  <span className="mx-2 text-gray-400">....................</span>
                  <span className="text-red-600 font-bold">$15.00</span>
                </span>
              </p>
              <p className="text-sm text-gray-600">Ricotta, goat cheese, beetroot and dateline.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-sm w-full max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div className="flex-grow">
              <p className="text-base font-semibold text-gray-800">
                <span className="inline-block w-full">
                  <span className="inline-block max-w-[70%] truncate">Roasted Vegetable Platter</span>
                  <span className="mx-2 text-gray-400">....................</span>
                  <span className="text-red-600 font-bold">$15.00</span>
                </span>
              </p>
              <p className="text-sm text-gray-600">Ricotta, goat cheese, beetroot and dateline.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-black p-6">
  <div className="grid grid-cols-5 gap-6">
    
    {/* === Column 1 === */}
    <div>
      <h1 className="text-white font-bold text-xl mb-1">BOOK A TABLE</h1>
      <p className="text-white text-sm mb-2">Book A Open Table For Your Happy Time Spent</p>
    </div>

    {/* === Column 2 === */}
    <div>
      <select className="w-full p-2 rounded bg-black text-white">
        <option>Persons</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>4+</option>
      </select>
    </div>

    
    <div>
      <select className="w-full p-2 rounded bg-black text-white">
        <option>Select Date</option>
        <option>29:07:2026</option>
        <option>28:07:2026</option>
        <option>27:07:2026</option>
      </select>
    </div>

    {/* === Column 4 === */}
    <div>
      <select className="w-full p-2 rounded bg-black text-white">
        <option>Select Time</option>
        <option>12:00 PM</option>
        <option>08:00 PM</option>
        <option>9:00 PM
        </option>
      </select>
    </div>
    <div>
      <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
        SUBMIT
      </button>
    </div>

  </div>
</div>

<div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider block mb-2">
            Make Reservation
          </span>
          <h2 className="text-4xl font-bold text-gray-800">
            OUR POPULAR CHEFS
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mx-0.5"></div>
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mx-0.5"></div>
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mx-0.5"></div>
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mx-0.5"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-gray-100 p-6 flex flex-col md:flex-row items-start">
            <div className="bg-red-600 text-white p-4 text-center mr-6 mb-4 md:mb-0">
              <span className="block text-2xl font-bold">09</span>
              <span className="block text-sm uppercase">Dec</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                <span className="mr-4">MARKUS DANIEL</span>
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7c0-3.866 3.582-7 8-7s8 3.134 8 7zM9 9a1 1 0 012 0v2a1 1 0 11-2 0V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2 COMMENT
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                HOW RESTAURANTS FOSTER CONNECTIONS AND CREATE MEMORIES
              </h3>
              <button className="flex items-center text-red-600 font-semibold group">
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-gray-100 p-6 flex flex-col md:flex-row items-start">
            <div className="flex-1 order-2 md:order-1"> {/* Reorder for mobile */}
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                <span className="mr-4">MARKUS DANIEL</span>
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7c0-3.866 3.582-7 8-7s8 3.134 8 7zM9 9a1 1 0 012 0v2a1 1 0 11-2 0V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2 COMMENT
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                DISCOVERING AFFORDABLE GOURMET EXPERIENCES IN YOUR CITY
              </h3>
              <button className="flex items-center text-red-600 font-semibold group">
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-red-600 text-white p-4 text-center ml-6 mb-4 md:mb-0 order-1 md:order-2"> {/* Reorder for mobile */}
              <span className="block text-2xl font-bold">09</span>
              <span className="block text-sm uppercase">Dec</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
    
  );
};
