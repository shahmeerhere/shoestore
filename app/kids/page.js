"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Air Jordan 1 Mid",
    brand: "Jordan",
    price: 120,
    colors: {
      red: { hex: "#FF0000", image: "/shoes/jordan1-red.png" },
      blue: { hex: "#0000FF", image: "/shoes/jordan1-blue.png" },
    },
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    brand: "Nike",
    price: 100,
    colors: {
      white: { hex: "#FFFFFF", image: "/shoes/airforce1-white.png" },
      black: { hex: "#000000", image: "/shoes/airforce1-black.png" },
    },
  },
  {
    id: 3,
    name: "Yeezy Boost 350",
    brand: "Adidas",
    price: 200,
    colors: {}, // no colors example
  },
];

export default function KidsPage() {
  const { addToCart } = useCart();

  // Track selected color per product
  const [selectedColors, setSelectedColors] = useState(
    products.reduce((acc, product) => {
      const firstColorKey =
        product.colors && Object.keys(product.colors).length > 0
          ? Object.keys(product.colors)[0]
          : "default";
      acc[product.id] = firstColorKey;
      return acc;
    }, {})
  );

  const handleColorChange = (productId, colorKey) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorKey }));
  };

  const handleAddToCart = (product) => {
    const selectedColor = selectedColors[product.id];
    const colorObj = product.colors?.[selectedColor];
    const cartItem = {
      ...product,
      color: selectedColor,
      image: colorObj?.image || "/placeholder.png",
      price: product.price,
      size: "Kids Size",
    };
    addToCart(cartItem, selectedColor, "Kids Size", 1);
    alert(`${product.name} (${selectedColor}) added to cart!`);
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen py-12 px-4 md:px-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
          Kids Sneakers Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Premium sneakers for your little champions. Fun colors, comfy fit, and safe designs.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => {
          const selectedColor = selectedColors[product.id];
          const imageSrc =
            product.colors?.[selectedColor]?.image ||
            Object.values(product.colors || {})[0]?.image ||
            "/placeholder.png";

          return (
            <motion.div
              key={product.id}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Product Image */}
              <div className="relative w-full mb-6 overflow-hidden rounded-xl">
                <img
                  src={imageSrc}
                  alt={`${product.name} in ${selectedColor}`}
                  className="w-full h-64 object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{product.brand}</p>

              {/* Price */}
              <p className="text-xl font-bold text-black mb-4">${product.price}</p>

              {/* Color Selection */}
              <div className="flex gap-3 mb-6">
                {Object.entries(product.colors).length > 0 ? (
                  Object.entries(product.colors).map(([colorKey, colorData]) => (
                    <button
                      key={colorKey}
                      onClick={() => handleColorChange(product.id, colorKey)}
                      className={`w-8 h-8 rounded-full border-2 shadow-lg hover:scale-110 transition-all duration-300 ${
                        selectedColor === colorKey
                          ? "border-black ring-2 ring-gray-200"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: colorData.hex || "#ccc" }}
                      aria-label={`Select ${colorKey}`}
                    />
                  ))
                ) : (
                  <span className="text-gray-400 text-sm">No colors</span>
                )}
              </div>

              {/* Add to Cart */}
              <motion.button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
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
}

