import React from 'react';
import { FaStar, FaChevronUp, FaChevronDown } from "react-icons/fa";

export const ShopDetails =()=>{
    return(
        <div className="bg-gray-100 min-h-screen  space-y-10">
      
      {/* === Header Section === */}
      <div className="bg-gray-500 shadow-md flex flex-col justify-center items-center p-8 space-y-6 ">
        <h1 className="text-white font-bold font-sans text-4xl">SHOP DETAILS</h1>
        <h2 className="text-white text-lg">Home / Shop Details</h2>
        <h1 className="text-6xl font-extrabold text-transparent uppercase tracking-widest stroke-text">
          SHOP DETAILS
        </h1>
      </div>
<div className="bg-white min-h-screen px-10 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image + Sale Badge */}
        <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center">
            <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSnkw3JcfcIac0kGUoNxUokBesCwREvSQaQ&s"
  alt="Grilled image"
  className="w-full h-full object-cover rounded"
/>
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
          
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Grilled Lemon Herb Chicken</h2>

          <div className="flex items-center space-x-2">
            <div className="text-orange-500 flex">
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm text-gray-600">(1 customer review)</span>
          </div>

          <div className="text-xl font-semibold">$260.00 - $360.00</div>

          <p className="text-gray-600">
            Eget facilisi odio cum habitant egestas convallis turpis phasellus,
            ante parturient donec duis primis nam faucibus augue malesuada venenatis.
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="p-2 text-gray-700 hover:bg-gray-200">
                <FaChevronDown />
              </button>
              <span className="px-4 py-2">1</span>
              <button className="p-2 text-gray-700 hover:bg-gray-200">
                <FaChevronUp />
              </button>
            </div>
            <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              ADD TO CART
            </button>
          </div>

          {/* Meta Info */}
          <div className="text-sm text-gray-600 space-y-1 pt-4">
            <p><strong>SKU:</strong> 17</p>
            <p><strong>Categories:</strong> Light Bulb, Table</p>
            <p><strong>Tags:</strong> Illuminate, Textured</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex border-b border-black text-sm font-semibold uppercase">
          <button className="border-b-2 border-black px-4 py-2">Description</button>
          <button className="text-gray-500 px-4 py-2">Additional Information</button>
          <button className="text-gray-500 px-4 py-2">Review (03)</button>
        </div>

        <div className="mt-6 text-gray-600 text-sm space-y-4">
          <p>
            Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital.
            Compellingly whiteboard client-centric sources across platform schemas.
            Distinctively develop future-proof outsourcing without multimedia-based portals.
          </p>
          <p>
            Holistically restore technically sound internal or “organic” sources before client-centered
            human capital underwhelm holistic mindshare for prospective innovation.
          </p>
        </div>
      </div>
    </div>
    {/* === Bottom CTA === */}
      <div className="bg-gray-200 p-10 text-center">
        <p className="text-xs uppercase text-gray-500">Book a table for your and family members</p>
        <h2 className="text-2xl font-semibold mb-4">NEED A TABLE ON COFFEE HOUSE</h2>
        <button className="px-6 py-2 border border-gray-700 text-sm text-gray-700 hover:bg-gray-700 hover:text-white transition">
          BOOK A TABLE
        </button>
      </div>
</div>
        
    )
}