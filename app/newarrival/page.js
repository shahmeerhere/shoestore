"use client"
import React from "react"
import Link from 'next/link'

const NewArrivalLanding = () => {

  return (
    <div className='bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-4xl mx-auto text-center">

        {/* Main "New Arrivals" section with deep, royal gradient background */}
        <div className="mb-12 p-8 rounded-xl shadow-xl 
                        bg-gradient-to-r from-slate-900 via-indigo-950 to-gray-900 text-white">

          {/* Main Title - with Royal Gradient Text */}
          <h1
            className="
              text-4xl sm:text-5xl font-extrabold mb-4 py-3 px-6 rounded-lg inline-block
              text-transparent bg-clip-text
              bg-gradient-to-r from-amber-300 via-red-800 to-purple-900 
            "
          >
            New Arrivals
          </h1>

          {/* Main Message */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            It looks like our **New Arrivals** section is currently empty.
            There are no brand new styles to show you just yet!
          </p>

          {/* Integrated Hero Elements */}
          <p className="text-2xl font-bold text-gray-100 mb-6">
            But don't worry, explore our existing collections!
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Discover premium footwear that combines style, comfort, and sophistication across all our ranges.
          </p>

          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            {/* Royal Gold/Bronze CTA */}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-400 text-gray-900 px-6 py-3 rounded-full text-base font-semibold shadow-md">
              Check Our Top Picks
            </span>
            {/* Deep Violet/Maroon CTA */}
            <span className="bg-gradient-to-r from-purple-800 to-fuchsia-900 text-white px-6 py-3 rounded-full text-base shadow-md">
              Free Shipping on All Orders
            </span>
          </div>
        </div>

        {/* COLLECTION LINKS WITH ROYAL STYLING AND ANIMATIONS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-xl shadow-2xl 
                        bg-gradient-to-br from-white to-gray-100 border border-gray-200 animate-fadeIn">
          
          {/* Men's Collection Link - Deep Navy/Royal Blue */}
          <Link 
            href="/men" 
            className="
              flex items-center justify-center p-5 rounded-xl text-white font-extrabold text-xl shadow-lg
              bg-gradient-to-br from-indigo-900 to-blue-700
              transition-all duration-300 ease-in-out
              hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03] active:translate-y-0
              animate-pulseOnce 
            "
            aria-label="Go to Men's Collection"
          >
            Men's Collection &rarr;
          </Link>
          
          {/* Women's Collection Link - Deep Maroon/Plum */}
          <Link 
            href="/women" 
            className="
              flex items-center justify-center p-5 rounded-xl text-white font-extrabold text-xl shadow-lg
              bg-gradient-to-br from-red-900 to-purple-900
              transition-all duration-300 ease-in-out
              hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03] active:translate-y-0
              animate-pulseOnce
            "
            aria-label="Go to Women's Collection"
          >
            Women's Collection &rarr;
          </Link>
          
          {/* Kids' Collection Link - Deep Emerald/Forest Green */}
          <Link 
            href="/kids" 
            className="
              flex items-center justify-center p-5 rounded-xl text-white font-extrabold text-xl shadow-lg
              bg-gradient-to-br from-emerald-900 to-green-700
              transition-all duration-300 ease-in-out
              hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03] active:translate-y-0
              animate-pulseOnce
            "
            aria-label="Go to Kids' Collection"
          >
            Kids' Collection &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}

export default NewArrivalLanding