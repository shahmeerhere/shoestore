"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"

const acc = () => {
  const shoes = [
    {
      id: 1,
      name: "Trail Bernard",
      prices: { original: 6999, discounted: 4899 },
      colors: {
        red: "https://placehold.co/300x200/ff0000/ffffff?text=Red+Shoe",
        black: "https://placehold.co/300x200/000000/ffffff?text=Black+Shoe",
        beige: "https://placehold.co/300x200/f5f5dc/000000?text=Beige+Shoe",
      },
    },
    {
      id: 2,
      name: "Eliss Zeox",
      prices: { original: 6999, discounted: 4899 },
      colors: {
        black: "https://placehold.co/300x200/000000/ffffff?text=Black+Shoe",
        red: "https://placehold.co/300x200/ff0000/ffffff?text=Red+Shoe",
      },
    },
    {
      id: 3,
      name: "Ross Zeox",
      prices: { original: 6999, discounted: 4899 },
      colors: {
        beige: "https://placehold.co/300x200/f5f5dc/000000?text=Beige+Shoe",
        black: "https://placehold.co/300x200/000000/ffffff?text=Black+Shoe",
      },
    },
    {
      id: 4,
      name: "Urban Runner",
      prices: { original: 5500, discounted: 3999 },
      colors: {
        blue: "https://placehold.co/300x200/0000ff/ffffff?text=Blue+Shoe",
        grey: "https://placehold.co/300x200/808080/ffffff?text=Grey+Shoe",
      },
    },
    {
      id: 5,
      name: "Aero Glide",
      prices: { original: 7500, discounted: 6000 },
      colors: {
        white: "https://placehold.co/300x200/ffffff/000000?text=White+Shoe",
        green: "https://placehold.co/300x200/008000/ffffff?text=Green+Shoe",
        orange: "https://placehold.co/300x200/ffa500/000000?text=Orange+Shoe",
      },
    },
    {
      id: 6,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        yellow: "https://placehold.co/300x200/ffff00/000000?text=Yellow+Shoe",
        black: "https://placehold.co/300x200/000000/ffffff?text=Black+Shoe",
      },
    },
    {
      id: 7,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        yellow: "https://placehold.co/300x200/ffff00/000000?text=Yellow+Shoe",
        grey: "https://placehold.co/300x200/808080/ffffff?text=Grey+Shoe",
      },
    },
    {
      id: 8,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        yellow: "https://placehold.co/300x200/ffff00/000000?text=Yellow+Shoe",
        beige: "https://placehold.co/300x200/f5f5dc/000000?text=Beige+Shoe",
        black: "https://placehold.co/300x200/000000/ffffff?text=Black+Shoe",
      },
    },
    {
      id: 9,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Silver: "https://placehold.co/300x200/c0c0c0/000000?text=Silver",
        Gold: "https://placehold.co/300x200/ffd700/000000?text=Gold",
        Turquoise: "https://placehold.co/300x200/40e0d0/000000?text=Turquoise",
      },
    },
    {
      id: 10,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        IndianRed: "https://placehold.co/300x200/cd5c5c/000000?text=IndianRed",
        SlateBlue: "https://placehold.co/300x200/6a5acd/ffffff?text=SlateBlue",
      },
    },
    {
      id: 11,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Red: "https://placehold.co/300x200/ff0000/ffffff?text=Red",
        Blue: "https://placehold.co/300x200/0000ff/ffffff?text=Blue",
      },
    },
    {
      id: 12,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Green: "https://placehold.co/300x200/008000/ffffff?text=Green",
        Yellow: "https://placehold.co/300x200/ffff00/000000?text=Yellow",
      },
    },
    {
      id: 13,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Orange: "https://placehold.co/300x200/ffa500/000000?text=Orange",
        Purple: "https://placehold.co/300x200/800080/ffffff?text=Purple",
      },
    },
    {
      id: 14,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Pink: "https://placehold.co/300x200/ffc0cb/000000?text=Pink",
        Brown: "https://placehold.co/300x200/a52a2a/ffffff?text=Brown",
      },
    },
    {
      id: 15,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Cyan: "https://placehold.co/300x200/00ffff/000000?text=Cyan",
        Magenta: "https://placehold.co/300x200/ff00ff/ffffff?text=Magenta",
      },
    },
    {
      id: 16,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Silver: "https://placehold.co/300x200/c0c0c0/000000?text=Silver",
        Gold: "https://placehold.co/300x200/ffd700/000000?text=Gold",
      },
    },
    {
      id: 17,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Turquoise: "https://placehold.co/300x200/40e0d0/000000?text=Turquoise",
        Beige: "https://placehold.co/300x200/f5f5dc/000000?text=Beige",
      },
    },
    {
      id: 18,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Black: "https://placehold.co/300x200/000000/ffffff?text=Black",
        White: "https://placehold.co/300x200/ffffff/000000?text=White",
      },
    },
    {
      id: 19,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Gray: "https://placehold.co/300x200/808080/ffffff?text=Gray",
        IndianRed: "https://placehold.co/300x200/cd5c5c/000000?text=IndianRed",
      },
    },
    {
      id: 20,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        SlateBlue: "https://placehold.co/300x200/6a5acd/ffffff?text=SlateBlue",
        ForestGreen: "https://placehold.co/300x200/228b22/ffffff?text=ForestGreen",
      },
    },
    {
      id: 21,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Red: "https://placehold.co/300x200/ff0000/ffffff?text=Red",
        Blue: "https://placehold.co/300x200/0000ff/ffffff?text=Blue",
      },
    },
    {
      id: 22,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Green: "https://placehold.co/300x200/008000/ffffff?text=Green",
        Yellow: "https://placehold.co/300x200/ffff00/000000?text=Yellow",
      },
    },
    {
      id: 23,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Orange: "https://placehold.co/300x200/ffa500/000000?text=Orange",
        Purple: "https://placehold.co/300x200/800080/ffffff?text=Purple",
      },
    },
    {
      id: 24,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Pink: "https://placehold.co/300x200/ffc0cb/000000?text=Pink",
        Brown: "https://placehold.co/300x200/a52a2a/ffffff?text=Brown",
      },
    },
    {
      id: 25,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Cyan: "https://placehold.co/300x200/00ffff/000000?text=Cyan",
        Magenta: "https://placehold.co/300x200/ff00ff/ffffff?text=Magenta",
      },
    },
    {
      id: 26,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Silver: "https://placehold.co/300x200/c0c0c0/000000?text=Silver",
        Gold: "https://placehold.co/300x200/ffd700/000000?text=Gold",
      },
    },
    {
      id: 27,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Turquoise: "https://placehold.co/300x200/40e0d0/000000?text=Turquoise",
        Beige: "https://placehold.co/300x200/f5f5dc/000000?text=Beige",
      },
    },
    {
      id: 28,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Black: "https://placehold.co/300x200/000000/ffffff?text=Black",
        White: "https://placehold.co/300x200/ffffff/000000?text=White",
      },
    },
    {
      id: 29,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        Gray: "https://placehold.co/300x200/808080/ffffff?text=Gray",
        IndianRed: "https://placehold.co/300x200/cd5c5c/000000?text=IndianRed",
      },
    },
    {
      id: 30,
      name: "Sport Max",
      prices: { original: 8000, discounted: 6500 },
      colors: {
        SlateBlue: " https://placehold.co/300x200/6a5acd/ffffff?text=SlateBlue",
        ForestGreen: "https://placehold.co/300x200/228b22/ffffff?text=ForestGreen",
      },
    },
  ]
  // We use state to track which color is selected for each shoe.
  // The initial state is set to the first color available for each shoe.
  const [selectedColors, setSelectedColors] = useState(
    shoes.reduce((acc, shoe) => {
      acc[shoe.id] = Object.keys(shoe.colors)[0]
      return acc
    }, {})
  )

  // This function updates the state when a user clicks a color button.
  const handleColorChange = (shoeId, colorKey) => {
    setSelectedColors((prev) => ({ ...prev, [shoeId]: colorKey }))
  }
  return (
    <div className='bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen'>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white py-20 px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-32 right-20 w-16 h-16 bg-gray-300/20 rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-gray-400/20 rounded-full"
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-32 right-1/3 w-8 h-8 bg-gray-500/20 rounded-full"
            animate={{
              y: [0, 18, 0],
              x: [0, -12, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Premium Accessories
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Discover our exclusive collection of luxury accessories that redefine elegance and style
          </motion.p>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          />
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Collection
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/2 left-10 w-2 h-2 bg-gray-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-16 w-3 h-3 bg-gray-500 rounded-full"
            animate={{
              y: [0, 25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {shoes.map((shoe, index) => {
            // Get the currently selected color for this specific shoe.
            const selectedColor = selectedColors[shoe.id]

            return (
                <motion.div
                key={shoe.id}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Discount Badge */}
                  <div className="relative w-full mb-4">
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                      {Math.round(((shoe.prices.original - shoe.prices.discounted) / shoe.prices.original) * 100)}% OFF
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={shoe.colors[selectedColor]}
                  alt={`${shoe.name} in ${selectedColor}`}
                      className="w-full h-64 object-cover rounded-xl"
                />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Name */}
                  <h3 className="uppercase text-lg font-bold mb-3 text-black group-hover:text-gray-700 transition-colors duration-300">
                    {shoe.name}
                  </h3>

                  {/* Price information */}
                  <div className="flex items-center space-x-3 mb-6">
                    <p className="text-gray-500 line-through text-sm">
                      Rs.{shoe.prices.original.toLocaleString()}
                    </p>
                    <p className="text-2xl font-bold text-black">
                      Rs.{shoe.prices.discounted.toLocaleString()}
                    </p>
                  </div>

                {/* Color selection buttons */}
                  <div className="flex justify-center space-x-3 mb-6">
                  {Object.entries(shoe.colors).map(([colorKey]) => (
                    <button
                      key={colorKey}
                      onClick={() => handleColorChange(shoe.id, colorKey)}
                        className={`w-10 h-10 rounded-full border-3 shadow-lg hover:scale-110 transition-all duration-300 ${selectedColor === colorKey
                          ? "border-black ring-4 ring-gray-200"
                          : "border-gray-300 hover:border-gray-400"
                          }`}
                      style={{ backgroundColor: colorKey }}
                      aria-label={`Select ${colorKey} color for ${shoe.name}`}
                    />
                  ))}
                </div>

                  {/* Add to Cart Button */}
                  <motion.button 
                    className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default acc



