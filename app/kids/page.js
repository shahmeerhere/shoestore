"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const KidsPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Air Jordan 1 Mid",
      brand: "Jordan",
      price: 120,
      colors: {
        red: { image: "/shoes/jordan1-red.png" },
        blue: { image: "/shoes/jordan1-blue.png" },
      },
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      brand: "Nike",
      price: 100,
      colors: {
        white: { image: "/shoes/airforce1-white.png" },
        black: { image: "/shoes/airforce1-black.png" },
      },
    },
    {
      id: 3,
      name: "Yeezy Boost 350",
      brand: "Adidas",
      price: 200,
      colors: {}, // no colors
    },
  ];

  // Track selected color per product
  const [selectedColors, setSelectedColors] = useState(
    products.reduce((acc, p) => {
      acc[p.id] = Object.keys(p.colors)[0] || null;
      return acc;
    }, {})
  );

  const handleColorChange = (productId, colorKey) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorKey }));
  };

  const handleAddToCart = (product) => {
    const selectedColor = selectedColors[product.id];
    const imageSrc =
      (selectedColor && product.colors[selectedColor]?.image) ||
      Object.values(product.colors || {})[0]?.image ||
      "/placeholder.png";

    const cartItem = {
      ...product,
      color: selectedColor || "default",
      image: imageSrc,
      price: product.price,
      size: "Kids Size",
    };

    addToCart(cartItem, cartItem.color, cartItem.size, 1);
    alert(`${product.name} (${cartItem.color}) added to cart!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Kids' Collection</h1>
        <p className="text-xl text-gray-600">
          Explore our premium collection of stylish footwear for kids
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => {
          const selectedColor = selectedColors[product.id];
          const imageSrc =
            (selectedColor && product.colors[selectedColor]?.image) ||
            Object.values(product.colors || {})[0]?.image ||
            "/placeholder.png";

          return (
            <motion.div
              key={product.id}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={imageSrc}
                  alt={`${product.name} ${selectedColor || ""}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Name */}
              <h3 className="uppercase text-lg font-bold mb-3 text-black group-hover:text-gray-700 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-500 mb-4">{product.brand}</p>

              {/* Price */}
              <p className="text-2xl font-bold text-black mb-4">
                ${product.price.toLocaleString()}
              </p>

              {/* Color Selection */}
              <div className="flex justify-center space-x-3 mb-6">
                {Object.entries(product.colors).length > 0 ? (
                  Object.entries(product.colors).map(([colorKey, colorData]) => (
                    <button
                      key={colorKey}
                      onClick={() => handleColorChange(product.id, colorKey)}
                      className={`w-10 h-10 rounded-full border-3 shadow-lg hover:scale-110 transition-all duration-300 ${
                        selectedColor === colorKey
                          ? "border-black ring-4 ring-gray-200"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: colorKey }}
                      aria-label={`Select ${colorKey} color`}
                    />
                  ))
                ) : (
                  <span className="text-sm text-gray-400">No colors</span>
                )}
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={() => handleAddToCart(product)}
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
  );
};

export default KidsPage;
