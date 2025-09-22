"use client"
import React, { useState } from "react"

const onsale = () => {
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
    <div className='bg-white'>
     <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shoes.map((shoe) => {
            // Get the currently selected color for this specific shoe.
            const selectedColor = selectedColors[shoe.id]

            return (
              <div
                key={shoe.id}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                {/* Shoe Image */}
                <img
                  src={shoe.colors[selectedColor]}
                  alt={`${shoe.name} in ${selectedColor}`}
                  className="w-full h-auto mb-4 rounded"
                />

                {/* Shoe Name */}
                <h3 className="uppercase text-lg font-bold mb-1">
                  {shoe.name}
                </h3>

                {/* Price information */}
                <div className="flex items-center space-x-2 mb-4">
                  <p className="text-gray-500 line-through text-sm">
                    Rs.{shoe.prices.original}
                  </p>
                  <p className="text-xl font-semibold text-black">
                    Rs.{shoe.prices.discounted}
                  </p>
                </div>

                {/* Color selection buttons */}
                <div className="flex justify-center space-x-2">
                  {Object.entries(shoe.colors).map(([colorKey]) => (
                    <button
                      key={colorKey}
                      onClick={() => handleColorChange(shoe.id, colorKey)}
                      className={`w-8 h-8 rounded-full border-2 ${selectedColor === colorKey
                        ? "border-white"
                        : "border-gray-300"
                        } transition-all duration-200`}
                      style={{ backgroundColor: colorKey }}
                      aria-label={`Select ${colorKey} color for ${shoe.name}`}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default onsale 