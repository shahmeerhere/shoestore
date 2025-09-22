"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaHeart, FaShare, FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';

import { getProductById } from '../../data/products';
import StructuredData from '../../components/StructuredData';
import OptimizedImage from '../../components/OptimizedImage';
import { trackViewItem, trackAddToCart } from '../../components/GoogleAnalytics';

export default function ProductPage() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = getProductById(productId);
  
  const [selectedColor, setSelectedColor] = useState(Object.keys(product?.colors || {})[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Track add to cart event
    trackAddToCart(
      product.id,
      product.name,
      product.category,
      product.discountedPrice,
      quantity
    );
    
    // Add to cart logic here
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleBuyNow = () => {
    // Direct to checkout
    window.location.href = `/checkout?product=${productId}&quantity=${quantity}&color=${selectedColor}&size=${selectedSize}`;
  };

  // Track product view
  React.useEffect(() => {
    trackViewItem(
      product.id,
      product.name,
      product.category,
      product.discountedPrice
    );
  }, [product.id]);

  return (
    <>
      <StructuredData type="product" data={product} />
      <StructuredData 
        type="breadcrumb" 
        data={[
          { name: 'Home', url: 'https://morva.com' },
          { name: product.category, url: `https://morva.com/${product.category.toLowerCase().replace("'s", '').replace(' ', '')}` },
          { name: product.name, url: `https://morva.com/products/${product.id}` }
        ]} 
      />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link href="/men" className="hover:text-black">Men</Link>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <OptimizedImage
                src={product.images[selectedImage]}
                alt={`${product.name} - ${product.brand} ${product.category}`}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <OptimizedImage
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.brand} • {product.category}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-black">Rs. {product.discountedPrice.toLocaleString()}</span>
              <span className="text-xl text-gray-500 line-through">Rs. {product.originalPrice.toLocaleString()}</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                {product.discount}% OFF
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Color: {product.colors[selectedColor]?.name}</h3>
              <div className="flex space-x-3">
                {Object.entries(product.colors).map(([colorKey, colorData]) => (
                  <button
                    key={colorKey}
                    onClick={() => setSelectedColor(colorKey)}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedColor === colorKey ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: colorData.hex }}
                    title={colorData.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 border rounded-lg text-center font-medium ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  <FaMinus className="w-3 h-3" />
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  <FaPlus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-14 h-14 border rounded-lg flex items-center justify-center ${
                    isWishlisted ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <FaHeart />
                </button>
                <button className="w-14 h-14 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400">
                  <FaShare />
                </button>
              </div>
              
              <button
                onClick={handleBuyNow}
                className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 px-6 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
