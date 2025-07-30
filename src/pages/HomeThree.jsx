import React, {useState} from "react";
import Headerthree from "../components/Headerthree";
import vector from "../assets/vector.png";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";
import texture from "../assets/texture.jpg";

const HomeThree = () => {
  const [activeTab, setActiveTab] = useState("BREAKFAST");

  const menuData = {
    BREAKFAST: [
      { name: "Beef Bourguignon", price: "$15.00" },
      { name: "Spicy Tuna Tartare", price: "$15.00" },
      { name: "Margherita Pizza", price: "$15.00" },
      { name: "Braised Short Ribs", price: "$15.00" },
      { name: "Vegan Buddha Bowl", price: "$15.00" },
      { name: "Chicken Alfredo Pasta", price: "$15.00" },
      { name: "Classic Caesar Salad", price: "$15.00" },
      { name: "Roasted Vegetable Platter", price: "$15.00" },
    ],
    LUNCH: [
      { name: "Grilled Salmon", price: "$20.00" },
      { name: "Chicken Club Sandwich", price: "$18.00" },
      { name: "Caesar Wrap", price: "$16.00" },
      { name: "Avocado Toast", price: "$14.00" },
    ],
    DINNER: [
      { name: "Steak & Potatoes", price: "$25.00" },
      { name: "Pasta Primavera", price: "$18.00" },
      { name: "Seafood Platter", price: "$30.00" },
    ],
  };
  
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <Headerthree />

      {/* Right Grey Box with Buttons */}
      <div className="block absolute top-[35px] right-0 w-[550px] h-[742px] bg-[#D9D9D9] border border-white z-0">
        <div className="flex space-x-4 ml-30 mt-3">
          <button className="bg-white text-black px-5 py-2 border border-white hover:bg-gray-100 transition">
            ORDER ONLINE
          </button>
          <button className="bg-[#CB3A1A] text-white px-5 py-2 hover:bg-[#a82f14] transition">
            BOOK A TABLE
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div className="relative z-20 ml-10">
          <p className="text-white uppercase tracking-wider mb-4 ml-10">
            WE SERVE FOOD, HARMONY, & LAUGHTER SINCE 1998
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-8 ml-10 max-w-[40rem]">
            DELICIOUS FOODS WITH <span className="block">WONDERFUL EATING</span>
          </h1>
          <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-300 ml-10">
            VIEW FOOD MENU
          </button>
        </div>
        <div className="hidden md:block" />
      </div>

      {/* Decorative Vector Image */}
      <img
        src={vector}
        alt="Vector"
        className="absolute z-0"
        style={{ width: "200px", height: "350px", top: "180px" }}
      />

      {/* Book a Table Section */}
      <div className="bg-black py-12 px-6 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Book a Table</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <select className="bg-gray-800 text-gray-300 px-4 py-3 w-full">
              <option>NUMBER OF GUEST</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
            <select className="bg-gray-800 text-gray-300 px-4 py-3 w-full">
              <option>SELECT DATE</option>
              <option>2025-08-01</option>
              <option>2025-08-02</option>
              <option>2025-08-03</option>
            </select>
            <select className="bg-gray-800 text-gray-300 px-4 py-3 w-full">
              <option>SELECT TIME</option>
              <option>11:00 AM</option>
              <option>1:00 PM</option>
              <option>6:00 PM</option>
              <option>8:00 PM</option>
            </select>
            <button className="bg-[#CB3A1A] text-white px-4 py-3 w-full hover:bg-[#a82f14] transition">
              BOOK RESERVATION
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#f9f9f9] text-gray-900 px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {["FRESH PRODUCTS", "SKILLED CHEFS", "DRINKS & WINE", "FRESH FOODS"].map((title, index) => (
            <div key={index} className="bg-white p-6 shadow-sm text-center">
              <div className="w-full h-32 bg-gray-300 mb-5"></div>
              <h3 className="font-bold text-sm uppercase mb-2">{title}</h3>
              <p className="text-xs text-gray-500 mb-4">
                For each dish, the growth of every element & the selection
              </p>
              <button className="text-[13px] text-[#CB3A1A] font-semibold hover:underline">
                BOOK A TABLE
              </button>
            </div>
          ))}
        </div>

        {/* Journey of Taste */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#CB3A1A] text-white px-4 py-1 text-xs mb-4 ml-10">
              MAKE RESERVATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 ml-10">
              ENJOY AN EXCEPTIONAL <br /> JOURNEY OF TASTE
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 ml-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ghewrui wjfrauk jhwrFK JHrrr3gu dYKRR3 TQdryjt ghDYT QCDQyjt3y t3dyw DTY YR72 fy3wev gHFGWY GHFYJ hreeuuufy chdtrjf vfyuk hvfry afkgy...
            </p>
            <button className="bg-[#CB3A1A] text-white px-6 py-3 text-sm hover:bg-[#a82f14] transition ml-10">
              EXPLORE OUR CATEGORY
            </button>
          </div>
          <div className="relative">
            <div className="w-90 h-100 bg-gray-300 rounded-md ml-10"></div>
            <div className="w-32 h-45 bg-gray-300 absolute bottom-10 mr-20 border-4 border-white shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Fast Food Section */}
      <section className="bg-[#2e2e2e] text-white py-20 text-center">
        <span className="inline-block bg-[#CB3A1A] text-white text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-wide">
          OPEN EVERYDAY 9AM - 9PM
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          LOOKING FOR POPULAR <br /> FAST FOOD
        </h2>
        <button className="border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
          READ MORE →
        </button>
      </section>

      {/* Category Section */}
      <section className="bg-[#f9f9f9] py-20 px-6 text-gray-900 relative">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-[#CB3A1A] text-white text-xs font-semibold px-4 py-2 rounded-full mb-4">
            MAKE RESERVATION
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            DISCOVER OUR CATEGORY
          </h2>
          <div className="flex justify-center mb-12">
            <span className="text-[#CB3A1A] text-2xl tracking-widest">•••</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { name: "Wild Mushroom Arancini", price: "$18.00", desc: "Avocado, goat cheese, beetroot and dates." },
              { name: "Honey Glazed Salmon", price: "$18.00", desc: "Avocado, goat cheese, beetroot and dates." },
              { name: "Truffle Mushroom Risotto", price: "$15.00", desc: "Avocado, goat cheese, beetroot and dates." },
              { name: "Mediterranean Quinoa Salad", price: "$15.00", desc: "Avocado, goat cheese, beetroot and dates." },
              { name: "Broiled Silver Bass", price: "$12.00", desc: "Avocado, goat cheese, beetroot and dates." },
              { name: "Roasted Vegetable Platter", price: "$18.00", desc: "Avocado, goat cheese, beetroot and dates." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-start border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{item.name}</h4>
                    <span className="text-[#CB3A1A] font-semibold">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />
      {/* Texture Section */}
<section className="relative bg-black">
  {/* Texture overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: `url(${texture})` }}
  ></div>

  {/* Content Wrapper */}
  <div className="relative z-10">
    {/* Red Bar */}
    <div className="bg-[#e44424] h-32 absolute bottom-0 w-full z-0"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 flex justify-start">
      {/* White Box */}
      <div className="bg-white shadow-lg p-8 w-[60%] mx-auto mt-12 ml-20">
<button className="bg-[#e44424] text-white text-xs font-semibold px-3 py-1 rounded uppercase">
          Make Reservation
        </button>
        <h2 className="text-black text-2xl md:text-3xl font-bold mt-4 mb-3">
          MOST TRUSTED RESTAURANT
        </h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid earum molestias...
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <FaCheck className="text-[#e44424] mt-1" />
            <span className="text-gray-700">
              Analyzing Restaurant Customer Feedback for Enhanced Dining Experiences*
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="text-[#e44424] mt-1" />
            <span className="text-gray-700">
              Leveraging Customer Reviews to Elevate Your Restaurant's Reputation*
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="text-[#e44424] mt-1" />
            <span className="text-gray-700">
              Decoding Online Reviews to Improve Your Restaurant’s Service and Menu*
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Stats Section */}
<div className="bg-[#e44424] text-white py-10 mt-[-1px]">
  <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
    <div>
      <h3 className="text-4xl font-bold">
        15 <span className="text-base font-normal">NEW COOL PROJECTS</span>
      </h3>
    </div>
    <div>
      <h3 className="text-4xl font-bold">
        15 <span className="text-base font-normal">TOTAL AWARDS WIN</span>
      </h3>
    </div>
    <div>
      <h3 className="text-4xl font-bold">
        20 <span className="text-base font-normal">UNIQUE FOOD SPECIALTIES</span>
      </h3>
    </div>
    <div>
      <h3 className="text-4xl font-bold">
        69 <span className="text-base font-normal">HARD TEAM MEMBERS</span>
      </h3>
    </div>
  </div>
</div>

{/* ✅ MENU SECTION */}
<section className="bg-[#f9f9f9] py-16 relative text-gray-900">
        <div className="max-w-6xl mx-auto text-center px-6">
          {/* Tabs */}
          <div className="flex justify-center mb-10 space-x-8">
            {["BREAKFAST", "LUNCH", "DINNER"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase text-sm font-semibold pb-2 relative ${
                  activeTab === tab
                    ? "text-black border-b-2 border-[#CB3A1A]"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {menuData[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition"
              >
                <div className="w-full h-40 bg-gray-300"></div>
                <div className="p-4 text-center">
                  <div className="flex justify-center mb-2 text-[#CB3A1A]">
                    {"★★★★★"}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                  <p className="text-[#CB3A1A] text-sm font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Column */}
    <div>
      {/* Button */}
      <button className="bg-[#CB3A1A] text-white text-xs font-semibold px-4 py-2 rounded mb-4 hover:bg-[#a82f14] transition ml-15">
        MAKE RESERVATION
      </button>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ml-15">
        WHY DELISH YOUR PRIORITY
      </h2>

      {/* Intro Text */}
      <p className="text-gray-600 mb-8 ml-15">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Feature List */}
      <div className="space-y-6">
        {/* Item 1 */}
        <div className="flex items-start gap-4 ml-10">
          <div className="flex-shrink-0 w-12 h-12 bg-[#CB3A1A] text-white flex items-center justify-center rounded-full text-xl ml-10">
            ⚙️
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 ml-10">Efficiency & Management</h4>
            <p className="text-gray-600 text-sm ml-10">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-4 ml-10">
          <div className="flex-shrink-0 w-12 h-12 bg-[#CB3A1A] text-white flex items-center justify-center rounded-full text-xl ml-10">
            👥
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 ml-10">Effective Team Work</h4>
            <p className="text-gray-600 text-sm ml-10">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-4 ml-10">
          <div className="flex-shrink-0 w-12 h-12 bg-[#CB3A1A] text-white flex items-center justify-center rounded-full text-xl ml-10">
            📈
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 ml-10">Amazing Growth Flow</h4>
            <p className="text-gray-600 text-sm ml-10">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column (Image Placeholder) */}
    <div className="bg-gray-300 h-96 w-96 ml-40"></div>
  </div>
</section>

<section className="bg-[#1a1a1a] py-20 relative">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    {/* Top Label */}
    <button className="bg-[#CB3A1A] text-white text-xs font-semibold px-4 py-2 rounded mb-4">
      CUSTOMER FEEDBACKS
    </button>

    {/* Main Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      SEE WHAT OUR CLIENTS HAVE TO SAY
    </h2>

    {/* Decorative Dots */}
    <div className="flex justify-center mb-12">
      <span className="text-[#CB3A1A] text-2xl tracking-widest">•••</span>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Testimonial Card 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-left relative">
        {/* Placeholder Image */}
        <div className="w-25 h-25 bg-gray-300 mb-4"></div>

        {/* Review Text */}
        <p className="text-gray-700 mb-4">
          The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail. I highly recommend it for anyone looking for a memorable dining experience.
        </p>

        {/* Star Rating */}
        <div className="flex text-[#CB3A1A] mb-4">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className="text-lg">★</span>
          ))}
        </div>

        {/* Customer Info */}
        <h4 className="text-lg font-semibold text-gray-900">KUMAN TUNMAN</h4>
        <p className="text-gray-500 text-sm">CUSTOMER</p>

        {/* Quotation Mark */}
        <span className="absolute bottom-4 right-4 text-[#CB3A1A] text-4xl">“</span>
      </div>

      {/* Testimonial Card 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-left relative">
        {/* Placeholder Image */}
        <div className="w-25 h-25 bg-gray-300 mb-4"></div>

        {/* Review Text */}
        <p className="text-gray-700 mb-4">
          The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail. I highly recommend it for anyone looking for a memorable dining experience.
        </p>

        {/* Star Rating */}
        <div className="flex text-[#CB3A1A] mb-4">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className="text-lg">★</span>
          ))}
        </div>

        {/* Customer Info */}
        <h4 className="text-lg font-semibold text-gray-900">MADISON OLIVIA</h4>
        <p className="text-gray-500 text-sm">CUSTOMER</p>

        {/* Quotation Mark */}
        <span className="absolute bottom-4 right-4 text-[#CB3A1A] text-4xl">“</span>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Top Label */}
    <button className="bg-[#CB3A1A] text-white text-xs font-semibold px-4 py-2 rounded mb-4">
      MAKE RESERVATION
    </button>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      LATEST NEWS INSIGHTS
    </h2>

    {/* Decorative Dots */}
    <div className="flex justify-center mb-12">
      <span className="text-[#CB3A1A] text-2xl tracking-widest">•••</span>
    </div>

    {/* News Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white shadow-md overflow-hidden">
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="p-6 text-left">
          {/* Meta Info */}
          <div className="flex items-center text-gray-400 text-sm space-x-4 mb-2">
            <span className="flex items-center">
              <i className="fas fa-user mr-1"></i> by Smith
            </span>
            <span className="flex items-center">
              <i className="fas fa-tag mr-1"></i> Business
            </span>
          </div>
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            How Restaurants Are Adapting to Changing Dietary Trends
          </h3>
          {/* Learn More */}
          <a href="#" className="text-[#CB3A1A] text-sm font-semibold hover:underline">
            LEARN MORE →
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md overflow-hidden">
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="p-6 text-left">
          <div className="flex items-center text-gray-400 text-sm space-x-4 mb-2">
            <span className="flex items-center">
              <i className="fas fa-user mr-1"></i> by Smith
            </span>
            <span className="flex items-center">
              <i className="fas fa-tag mr-1"></i> Business
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Craftsmanship of Artisanal Foods in Restaurants
          </h3>
          <p className="text-gray-500 text-sm mb-3">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore...
          </p>
          <a href="#" className="text-[#CB3A1A] text-sm font-semibold hover:underline">
            LEARN MORE →
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white  shadow-md overflow-hidden">
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="p-6 text-left">
          <div className="flex items-center text-gray-400 text-sm space-x-4 mb-2">
            <span className="flex items-center">
              <i className="fas fa-user mr-1"></i> by Smith
            </span>
            <span className="flex items-center">
              <i className="fas fa-tag mr-1"></i> Business
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            How Visual Appeal Enhances the Dining Experience
          </h3>
          <a href="#" className="text-[#CB3A1A] text-sm font-semibold hover:underline">
            LEARN MORE →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-200 py-10">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
    {/* Text Block */}
    <div className="text-white text-center md:text-left mb-4 md:mb-0">
      <p className=" text-white text-sm text-gray-500 uppercase mb-2">
        BOOK A TABLE FOR YOU AND FAMILY MEMBERS
      </p>
      <h2 className="text-white text-2xl md:text-3xl font-bold text-gray-800 uppercase">
        NEED A TABLE ON COFFEE HOUSE
      </h2>
    </div>

    {/* Button */}
    <button className="text-white border border-white text-gray-700 uppercase font-semibold px-6 py-3 rounded hover:bg-gray-300 transition">
      BOOK A TABLE
    </button>
  </div>
</section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeThree;
