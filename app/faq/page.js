"use client"

import React, { useState } from "react"

const faqs = [
    {
        question: "What makes Morva shoes royal?",
        answer:
            "Each pair is crafted with premium leather, intricate hand-finishing, and timeless silhouettes that reflect true royalty in every step.",
    },
    {
        question: "Do you offer worldwide shipping?",
        answer:
            "Yes, we ship globally with express delivery options. All orders are carefully packed in our signature royal packaging.",
    },
    {
        question: "Can I customize my shoes?",
        answer:
            "Absolutely. Our bespoke service allows you to select leathers, finishes, and detailing for a personalized royal experience.",
    },
    {
        question: "What is your return policy?",
        answer:
            "We offer hassle-free returns within 14 days for unworn shoes, with full refunds or store credit depending on your choice.",
    },
    {
        question: "Do you have limited edition collections?",
        answer:
            "Yes. Each season we release exclusive limited editions—crafted in small numbers to preserve uniqueness and luxury.",
    },
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 md:px-20 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-serif text-center text-gray-900 mb-10">
                    Frequently Asked Questions
                </h2>

                {/* FAQs */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left"
                            >
                                <span className="font-medium text-gray-800">{faq.question}</span>
                                <span className="text-gray-500">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
