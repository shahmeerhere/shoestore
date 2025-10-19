"use client"

import React from "react"

const SizeGuidePage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
                    Size Guide
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Find your perfect fit with our detailed shoe size guide. We cover
                    international size conversions and tips to ensure maximum comfort
                    with every step.
                </p>
                <table className="w-full border-collapse border border-gray-200 text-center text-gray-700">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-200 px-4 py-2">US</th>
                            <th className="border border-gray-200 px-4 py-2">UK</th>
                            <th className="border border-gray-200 px-4 py-2">EU</th>
                            <th className="border border-gray-200 px-4 py-2">CM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">7</td>
                            <td className="border px-4 py-2">6</td>
                            <td className="border px-4 py-2">40</td>
                            <td className="border px-4 py-2">25</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">8</td>
                            <td className="border px-4 py-2">7</td>
                            <td className="border px-4 py-2">41</td>
                            <td className="border px-4 py-2">26</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">9</td>
                            <td className="border px-4 py-2">8</td>
                            <td className="border px-4 py-2">42</td>
                            <td className="border px-4 py-2">27</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default SizeGuidePage
