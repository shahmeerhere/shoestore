"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaHeart, FaEye, FaStar, FaFilter } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { getProductsByCategory } from "../data/products";

export default function WomenPage() {
  const [selectedColors, setSelectedColors] = useState({})
  const [wishlist, setWishlist] = useState(new Set())
  const [subcategoryFilter, setSubcategoryFilter] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const { addToCart } = useCart()

  const products = getProductsByCategory("Women's Shoes")
  
  // Initialize selected colors
  React.useEffect(() => {
    const colors = products.reduce((acc, shoe) => {
      acc[shoe.id] = Object.keys(shoe.colors)[0]
      return acc
    }, {})
    setSelectedColors(colors)
  }, [products])

  const handleColorChange = (shoeId, colorKey) => {
    setSelectedColors((prev) => ({ ...prev, [shoeId]: colorKey }))
  }

  const handleAddToCart = (shoe) => {
    const selectedColor = selectedColors[shoe.id]
    addToCart(shoe, selectedColor, 'M', 1)
    alert(`${shoe.name} added to cart!`)
  }

  const handleWishlist = (shoeId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev)
      if (newWishlist.has(shoeId)) {
        newWishlist.delete(shoeId)
      } else {
        newWishlist.add(shoeId)
      }
      return newWishlist
    })
  }

  // Get unique subcategories
  const subcategories = [...new Set(products.map(product => product.subcategory))]

  // Filter products
  let filteredProducts = products
  if (subcategoryFilter !== 'all') {
    filteredProducts = products.filter(product => product.subcategory === subcategoryFilter)
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.discountedPrice - b.discountedPrice)
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.discountedPrice - a.discountedPrice)
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
  } else if (sortBy === 'newest') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.id - a.id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Women's Collection</h1>
          <p className="text-xl text-gray-300 mb-8">Elegant footwear that combines style, comfort, and sophistication</p>
          <div className="flex justify-center space-x-4">
            <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
              {filteredProducts.length} Products
            </span>
            <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm">
              Free Shipping
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mb-8">
          <div className="flex flex-wrap items-center space-x-4">
            <span className="text-gray-700 font-medium">Filter by type:</span>
            <select
              value={subcategoryFilter}
              onChange={(e) => setSubcategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              {subcategories.map(subcategory => (
                <option key={subcategory} value={subcategory}>{subcategory}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((shoe) => {
            const selectedColor = selectedColors[shoe.id]
            const isWishlisted = wishlist.has(shoe.id)

            return (
              <div
                key={shoe.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Link href={`/products/${shoe.id}`}>
                    <img
                      src={shoe.colors[selectedColor]?.image || shoe.colors[Object.keys(shoe.colors)[0]].image}
                      alt={`${shoe.name} in ${selectedColor}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleWishlist(shoe.id)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <FaHeart className="w-4 h-4" />
                    </button>
                    <Link
                      href={`/products/${shoe.id}`}
                      className="w-8 h-8 rounded-full bg-white text-gray-600 hover:bg-gray-100 flex items-center justify-center"
                    >
                      <FaEye className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    {shoe.discount > 0 && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {shoe.discount}% OFF
                      </span>
                    )}
                    {shoe.featured && (
                      <span className="bg-pink-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    )}
                    {shoe.bestseller && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Bestseller
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-lg text-black mb-1">{shoe.name}</h3>
                    <p className="text-sm text-gray-600">{shoe.brand}</p>
                    <p className="text-xs text-gray-500">{shoe.subcategory}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(shoe.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({shoe.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-black">
                      Rs. {shoe.discountedPrice.toLocaleString()}
                    </span>
                    {shoe.originalPrice > shoe.discountedPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        Rs. {shoe.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Color Selection */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {Object.entries(shoe.colors).map(([colorKey, colorData]) => (
                      <button
                        key={colorKey}
                        onClick={() => handleColorChange(shoe.id, colorKey)}
                        className={`w-6 h-6 rounded-full border-2 ${
                          selectedColor === colorKey
                            ? "border-pink-500"
                            : "border-gray-300"
                        } transition-all duration-200`}
                        style={{ backgroundColor: colorData.hex }}
                        aria-label={`Select ${colorData.name} color for ${shoe.name}`}
                      />
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(shoe)}
                    className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <FaShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <FaFilter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
            <button
              onClick={() => setSubcategoryFilter('all')}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}