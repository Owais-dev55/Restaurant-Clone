
import React from 'react';

const CtaSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            NEED A TABLE ON COFFEE HOUSE
          </h2>
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded hover:bg-orange-600 transition-colors">
            BOOKING TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;