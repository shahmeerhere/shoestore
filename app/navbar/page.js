"use client";

import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-white via-gray-50 to-gray-100 backdrop-blur-md border-b border-gray-200/50 shadow-lg z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center h-[70px] px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img
              className="w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300"
              src="/comps/logo.png"
              alt="Logo"
            />
          </Link>
          <Link
            href="/"
            className="text-xl md:text-2xl lg:text-3xl text-black font-serif hover:text-gray-700 transition-colors duration-300"
          >
            MORVA
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center list-none space-x-1.5">
          {[
            ["Men", "/men"],
            ["Women", "/women"],
            ["Kids", "/kids"],
            ["Accessories", "/acc"],
            ["New Arrival", "/newarrival"],
            ["On Sale", "/onsale"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="uppercase text-gray-800 font-medium text-sm px-4 py-2 font-mono rounded-lg hover:bg-gray-100 hover:text-black transition-all duration-300 hover:shadow-md"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-black py-2 font-mono hover:brightness-125 hover:saturate-125 hover:shadow-inner cursor-pointer"
          >
            <FaShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                {itemCount}
              </span>
            )}
          </Link>

          {/* User */}
          <Link
            href="/login"
            className="text-black py-2 font-mono hover:brightness-125 hover:saturate-125 hover:shadow-inner cursor-pointer"
          >
            <FaRegUser className="w-6 h-6" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-3 pb-4 bg-gray-50 border-t border-gray-200 animate-fade-in-up">
          {[
            ["Men", "/men"],
            ["Women", "/women"],
            ["Kids", "/kids"],
            ["Accessories", "/acc"],
            ["New Arrival", "/newarrival"],
            ["On Sale", "/onsale"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="uppercase block text-gray-800 font-medium text-sm px-4 py-2 font-mono rounded-lg hover:bg-gray-100 hover:text-black transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <div className="w-full max-w-2xl mx-auto text-black">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
