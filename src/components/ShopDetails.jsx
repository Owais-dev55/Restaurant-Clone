import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaChevronUp, FaChevronDown } from "react-icons/fa";

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

export const ShopDetails = () => {
  const { id } = useParams();
  const dish = menuItems[id];

  if (!dish) return <p className="p-10 text-center">Dish not found</p>;

  return (
    <div className="bg-gray-100 min-h-screen  space-y-10">
      <div className="bg-gray-500 shadow-md flex flex-col justify-center items-center p-8 space-y-6 ">
        <h1 className="text-white font-bold font-sans text-4xl">SHOP DETAILS</h1>
        <h2 className="text-white text-lg">Home / Shop Details</h2>
        <h1 className="text-6xl font-extrabold text-transparent uppercase tracking-widest stroke-text">
          SHOP DETAILS
        </h1>
      </div>

      <div className="bg-white px-10 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover rounded"
            />
            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{dish.name}</h2>
            <div className="flex items-center space-x-2">
              <div className="text-orange-500 flex">
                {Array(5).fill().map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-sm text-gray-600">(1 customer review)</span>
            </div>

            <div className="text-xl font-semibold">{dish.price}</div>

            <p className="text-gray-600">
              Eget facilisi odio cum habitant egestas convallis turpis phasellus...
            </p>

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

            <div className="text-sm text-gray-600 space-y-1 pt-4">
              <p><strong>SKU:</strong> {parseInt(id) + 1}</p>
              <p><strong>Categories:</strong> Food</p>
              <p><strong>Tags:</strong> Fresh, Organic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
