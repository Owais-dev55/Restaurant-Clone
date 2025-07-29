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


    </div>
    
  );
};
