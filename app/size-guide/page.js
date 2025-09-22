"use client";
import React from 'react';
import { FaRuler, FaInfoCircle } from 'react-icons/fa';

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <FaRuler className="w-16 h-16 text-black mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-black mb-4">Size Guide</h1>
          <p className="text-xl text-gray-600">Find your perfect fit with our comprehensive sizing guide</p>
        </div>

        {/* Men's Size Chart */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Men's Shoe Sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-black">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">US Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">UK Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">EU Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Foot Length (cm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Foot Length (inches)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { us: 7, uk: 6, eu: 40, cm: 24.1, inches: "9.5" },
                  { us: 8, uk: 7, eu: 41, cm: 24.8, inches: "9.8" },
                  { us: 9, uk: 8, eu: 42, cm: 25.4, inches: "10.0" },
                  { us: 10, uk: 9, eu: 43, cm: 26.0, inches: "10.2" },
                  { us: 11, uk: 10, eu: 44, cm: 26.7, inches: "10.5" },
                  { us: 12, uk: 11, eu: 45, cm: 27.3, inches: "10.8" },
                ].map((size, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.us}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.uk}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.eu}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.cm}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.inches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Women's Size Chart */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Women's Shoe Sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-black">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">US Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">UK Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">EU Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Foot Length (cm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Foot Length (inches)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { us: 6, uk: 4, eu: 37, cm: 22.9, inches: "9.0" },
                  { us: 7, uk: 5, eu: 38, cm: 23.5, inches: "9.3" },
                  { us: 8, uk: 6, eu: 39, cm: 24.1, inches: "9.5" },
                  { us: 9, uk: 7, eu: 40, cm: 24.8, inches: "9.8" },
                  { us: 10, uk: 8, eu: 41, cm: 25.4, inches: "10.0" },
                  { us: 11, uk: 9, eu: 42, cm: 26.0, inches: "10.2" },
                ].map((size, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.us}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.uk}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.eu}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.cm}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.inches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kids Size Chart */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Kids' Shoe Sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-black">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">US Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">UK Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">EU Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Foot Length (cm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black">Age Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { us: 1, uk: 0.5, eu: 16, cm: 12.7, age: "6-9 months" },
                  { us: 2, uk: 1, eu: 17, cm: 13.3, age: "9-12 months" },
                  { us: 3, uk: 2, eu: 18, cm: 14.0, age: "12-18 months" },
                  { us: 4, uk: 3, eu: 19, cm: 14.6, age: "18-24 months" },
                  { us: 5, uk: 4, eu: 20, cm: 15.2, age: "2-3 years" },
                  { us: 6, uk: 5, eu: 21, cm: 15.9, age: "3-4 years" },
                  { us: 7, uk: 6, eu: 22, cm: 16.5, age: "4-5 years" },
                  { us: 8, uk: 7, eu: 23, cm: 17.1, age: "5-6 years" },
                  { us: 9, uk: 8, eu: 24, cm: 17.8, age: "6-7 years" },
                  { us: 10, uk: 9, eu: 25, cm: 18.4, age: "7-8 years" },
                ].map((size, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.us}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.uk}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.eu}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.cm}</td>
                    <td className="border border-gray-300 px-4 py-3 text-black">{size.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <FaInfoCircle className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Sizing Tips</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Measure your feet at the end of the day when they're at their largest</li>
                <li>• If you're between sizes, we recommend sizing up</li>
                <li>• Different shoe styles may fit differently - check individual product descriptions</li>
                <li>• Our customer service team is happy to help with sizing questions</li>
                <li>• We offer free exchanges if the size doesn't fit perfectly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
