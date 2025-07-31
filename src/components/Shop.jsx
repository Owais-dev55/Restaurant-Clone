import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'Beef Bourguignon',
    price: '$15.00',
    image: 'https://static01.nyt.com/images/2023/08/24/multimedia/MC-Beef-Bourguignon-lpbv/MC-Beef-Bourguignon-lpbv-mediumSquareAt3X-v4.jpg',
  },
  {
    name: 'Spicy Tuna Tartare',
    price: '$15.00',
    image: 'https://images.getrecipekit.com/20221102171125-spicy-20tuna-20tartare-20main-20image.jpg?aspect_ratio=1:1&quality=90&',
  },
  {
    name: 'Margherita Pizza',
    price: '$15.00',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2024/03/Margherita-Pizza-_EXPS_TOHVP24_275515_MF_02_28_1.jpg',
  },
  {
    name: 'Braised Short Ribs',
    price: '$15.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqBRlgSL_FYEFjD79D6a2g09gjR4GNvu7uw&s',
  },
  {
    name: 'Vegan Buddha Bowl',
    price: '$15.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLug4VMkmPrTqVha7Sp1O9etOedhMM1vRPuw&s',
  },
  {
    name: 'Chicken Alfredo Pasta',
    price: '$15.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Pfs7BvioQCwRQQjowDFQqQV2j5I0bC6WXQ&s',
  },
  {
    name: 'Classic Caesar Salad',
    price: '$15.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIiNbCtvRjdGunEXvzblckJtNTZRe4eYDvw&s',
  },
  {
    name: 'Roasted Vegetable Platter',
    price: '$15.00',
    image: 'https://playswellwithbutter.com/wp-content/uploads/2021/05/Grilled-Vegetable-Platter-with-Chimichurri-8-e1650490755580.jpg',
  },
  {
    name: 'Pulled Pork Sandwich',
    price: '$15.00',
    image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F5f846e99af1d5a7abfe11f2c50ba71d763642073',
  },
  {
    name: 'Ahi Poke Bowl',
    price: '$15.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZK8YR8YASqLBC4AeHPXsAX9CIwTujdoc3BQ&s',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$15.00',
    image: 'https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&',
  },
  {
    name: 'Lobster Bisque',
    price: '$15.00',
    image: 'https://cafedelites.com/wp-content/uploads/2020/02/Lobster-Bisque-IMAGE-2-500x500.jpg',
  },
];

export const Shop = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <div className="bg-gray-500 shadow-md flex flex-col justify-center items-center p-8 space-y-6 ">
        <h1 className="text-white font-bold font-sans text-4xl">SHOP PAGE</h1>
        <h2 className="text-white text-lg">Home / Shop Page</h2>
        <h1 className="text-6xl font-extrabold text-transparent uppercase tracking-widest stroke-text">
          OUR SHOP PAGE
        </h1>
      </div>

      {/* === Menu Grid === */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <Link to={`/home-1/shop/${index}`} key={index}
 className="bg-white shadow rounded overflow-hidden text-center hover:scale-105 transition-transform">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="py-4">
              <p className="text-red-600 text-sm mb-1">★★★★★</p>
              <h2 className="font-semibold text-sm">{item.name}</h2>
              <p className="text-red-600 text-sm">{item.price}</p>
            </div>
          </Link>
        ))}
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
  );
};
