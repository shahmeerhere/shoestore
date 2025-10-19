"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const AccessoriesPage = () => {
  const { addToCart } = useCart();

  const accessories = [
    {
      id: 1,
      name: "Luxury Watch",
      brand: "TimeX",
      originalPrice: 15000,
      discountedPrice: 10999,
      colors: {
        black: { image: "https://placehold.co/300x200/000000/ffffff?text=Black+Watch" },
        gold: { image: "https://placehold.co/300x200/ffd700/000000?text=Gold+Watch" },
      },
    },
    {
      id: 2,
      name: "Elegant Bracelet",
      brand: "GemStone",
      originalPrice: 7000,
      discountedPrice: 4999,
      colors: {
        silver: { image: "https://placehold.co/300x200/c0c0c0/000000?text=Silver+Bracelet" },
        rose: { image: "https://placehold.co/300x200/ff007f/ffffff?text=Rose+Bracelet" },
      },
    },
    {
      id: 3,
      name: "Sleek Sunglasses",
      brand: "SunShade",
      originalPrice: 5500,
      discountedPrice: 3999,
      colors: {
        black: { image: "https://placehold.co/300x200/000000/ffffff?text=Black+Sunglasses" },
        brown: { image: "https://placehold.co/300x200/a52a2a/ffffff?text=Brown+Sunglasses" },
      },
    },
  ];

  // Track selected color for each accessory
  const [selectedColors, setSelectedColors] = useState(
    accessories.reduce((acc, item) => {
      acc[item.id] = Object.keys(item.colors)[0];
      return acc;
    }, {})
  );

  const handleColorChange = (itemId, colorKey) => {
    setSelectedColors((prev) => ({ ...prev, [itemId]: colorKey }));
  };

  const handleAddToCart = (item) => {
    const selectedColor = selectedColors[item.id];
    const productForCart = {
      id: item.id,
      name: item.name,
      brand: item.brand,
      image: item.colors[selectedColor].image,
      color: selectedColor,
      price: item.discountedPrice, // important for cart page
    };
    addToCart(productForCart, selectedColor, "One Size", 1);
    alert(`${item.name} (${selectedColor}) added to cart!`);
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white py-20 px-8 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Premium Accessories
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our exclusive collection of luxury accessories that redefine elegance and style
        </p>
      </div>

      {/* Products Grid */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {accessories.map((item, index) => {
              const selectedColor = selectedColors[item.id];

              return (
                <motion.div
                  key={item.id}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Discount Badge */}
                  <div className="relative w-full mb-4">
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                      {Math.round(
                        ((item.originalPrice - item.discountedPrice) / item.originalPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={item.colors[selectedColor].image}
                      alt={`${item.name} in ${selectedColor}`}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Name */}
                  <h3 className="uppercase text-lg font-bold mb-3 text-black group-hover:text-gray-700 transition-colors duration-300">
                    {item.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center space-x-3 mb-6">
                    <p className="text-gray-500 line-through text-sm">
                      Rs.{item.originalPrice.toLocaleString()}
                    </p>
                    <p className="text-2xl font-bold text-black">
                      Rs.{item.discountedPrice.toLocaleString()}
                    </p>
                  </div>

                  {/* Color selection buttons */}
                  <div className="flex justify-center space-x-3 mb-6">
                    {Object.entries(item.colors).map(([colorKey]) => (
                      <button
                        key={colorKey}
                        onClick={() => handleColorChange(item.id, colorKey)}
                        className={`w-10 h-10 rounded-full border-3 shadow-lg hover:scale-110 transition-all duration-300 ${
                          selectedColor === colorKey
                            ? "border-black ring-4 ring-gray-200"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: colorKey }}
                        aria-label={`Select ${colorKey} color for ${item.name}`}
                      />
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
