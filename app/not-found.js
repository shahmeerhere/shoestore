import Link from 'next/link';
import { FaHome, FaSearch, FaShoppingBag } from 'react-icons/fa';

export const metadata = {
  title: 'Page Not Found - MORVA',
  description: 'The page you are looking for could not be found. Browse our premium shoe collection or return to the homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <FaShoppingBag className="w-16 h-16 text-gray-400" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for seems to have walked away. Don't worry, 
            we have plenty of amazing shoes waiting for you!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
          >
            <FaHome className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/men"
              className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Men's Shoes</span>
            </Link>
            <Link
              href="/women"
              className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Women's Shoes</span>
            </Link>
          </div>
          
          <Link
            href="/search"
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
          >
            <FaSearch className="w-4 h-4" />
            <span>Search Products</span>
          </Link>
        </div>

        {/* Popular Categories */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/newarrival"
              className="bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">New Arrivals</div>
              <div className="text-xs text-gray-500">Latest styles</div>
            </Link>
            <Link
              href="/onsale"
              className="bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">On Sale</div>
              <div className="text-xs text-gray-500">Great deals</div>
            </Link>
            <Link
              href="/kids"
              className="bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">Kids' Shoes</div>
              <div className="text-xs text-gray-500">Comfortable fit</div>
            </Link>
            <Link
              href="/acc"
              className="bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">Accessories</div>
              <div className="text-xs text-gray-500">Complete your look</div>
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Need help?</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/size-guide"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Size Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


