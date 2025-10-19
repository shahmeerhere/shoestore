"use client";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Air Jordan 1 Mid",
    price: 120,
    colors: {
      red: { hex: "#FF0000", image: "/shoes/jordan1-red.png" },
      blue: { hex: "#0000FF", image: "/shoes/jordan1-blue.png" },
    },
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    price: 100,
    colors: {
      white: { hex: "#FFFFFF", image: "/shoes/airforce1-white.png" },
      black: { hex: "#000000", image: "/shoes/airforce1-black.png" },
    },
  },
  {
    id: 3,
    name: "Yeezy Boost 350",
    price: 200,
    colors: {}, // no colors example
  },
];

export default function KidsPage() {
  const [selectedColors, setSelectedColors] = useState({});
  const [cart, setCart] = useState([]);

  // Initialize selected colors
  useEffect(() => {
    if (products.length > 0) {
      const colors = products.reduce((acc, shoe) => {
        const firstColorKey =
          shoe.colors && Object.keys(shoe.colors).length > 0
            ? Object.keys(shoe.colors)[0]
            : "default";
        acc[shoe.id] = firstColorKey;
        return acc;
      }, {});
      setSelectedColors(colors);
    }
  }, []);

  const handleColorChange = (shoeId, colorKey) => {
    setSelectedColors((prev) => ({
      ...prev,
      [shoeId]: colorKey,
    }));
  };

  const handleAddToCart = (shoe) => {
    const colorKey = selectedColors[shoe.id];
    const selectedColor = shoe.colors?.[colorKey] || null;

    setCart((prevCart) => [
      ...prevCart,
      {
        id: shoe.id,
        name: shoe.name,
        price: shoe.price,
        color: colorKey,
        image:
          selectedColor?.image ||
          Object.values(shoe.colors || {})[0]?.image ||
          "/placeholder.png",
      },
    ]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Product Grid */}
      <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((shoe) => {
          const selectedColorKey = selectedColors[shoe.id];
          const selectedImage =
            shoe.colors?.[selectedColorKey]?.image ||
            Object.values(shoe.colors || {})[0]?.image ||
            "/placeholder.png";

          return (
            <div
              key={shoe.id}
              className="border p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={selectedImage}
                alt={shoe.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">{shoe.name}</h2>
              <p className="text-gray-600">${shoe.price}</p>

              <div className="flex gap-2 mt-3">
                {Object.entries(shoe.colors || {}).length > 0 ? (
                  Object.entries(shoe.colors).map(([colorKey, colorData]) => (
                    <button
                      key={colorKey}
                      onClick={() => handleColorChange(shoe.id, colorKey)}
                      className={`w-6 h-6 rounded-full border-2 ${
                        selectedColorKey === colorKey
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: colorData.hex || "#ccc" }}
                    />
                  ))
                ) : (
                  <span className="text-sm text-gray-400">
                    No colors available
                  </span>
                )}
              </div>

              <button
                onClick={() => handleAddToCart(shoe)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Cart Sidebar */}
      <div className="w-full md:w-1/3 border-l p-6 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price}{" "}
                      {item.color !== "default" && `( ${item.color} )`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <p className="font-bold">
              Total: $
              {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
            <button className="mt-3 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
