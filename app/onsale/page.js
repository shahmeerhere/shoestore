"use client";
import React, { useState } from "react";
import Link from "next/link";

const OnSale = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      console.log(`Subscribing ${email} to Morva Sales.`);
      setIsSubscribed(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const salesEvents = [
    {
      id: 1,
      name: "The Royal Mid-Season Refresh",
      dates: "June 15th - June 30th",
      occasion: "Seasonal Transition",
      details:
        "Our biggest seasonal markdown! Enjoy up to **40% off** on selected styles as we make way for the new collection. Perfect for updating your wardrobe for the summer months.",
    },
    {
      id: 2,
      name: "Majestic Festival Savings",
      dates: "Varies (Around October/November)",
      occasion: "Diwali, Thanksgiving & Black Friday",
      details:
        "An annual spectacle of savings across all categories. Get early access codes by subscribing! Expect **flat 50% off** on select footwear and premium gifts with purchase.",
    },
    {
      id: 3,
      name: "The New Year's Grand Finale",
      dates: "December 26th - January 10th",
      occasion: "Year-End & New Year",
      details:
        "Don't miss the final chance to grab premium styles at unparalleled prices. Includes last-of-stock items and exclusive **Buy One, Get One Free** offers.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white py-16 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-3 tracking-wider">
            Morva Sales & Exclusive Offers
          </h1>
          <p className="text-xl text-indigo-300 mb-8">
            Your key to royal savings starts here. Subscribe now to unlock early access to all major events!
          </p>

          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg mx-auto bg-gradient-to-br from-gray-50 to-white">
            {isSubscribed ? (
              <div className="text-center text-green-600 font-bold text-lg">
                🎉 Success! You are now subscribed to Morva's exclusive offers. Check your inbox!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email for VIP access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-600 to-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-0.5"
                >
                  Subscribe & Get Updated
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Sales Event Details */}
      <div className="mx-auto py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-900">
          Our Annual Sales Calendar 🗓️
        </h2>

        <div>
          {salesEvents.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row items-center transition-all duration-300 ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-white to-gray-50 md:space-x-8"
                  : "bg-gradient-to-l from-white to-gray-50 md:space-x-8 md:flex-row-reverse"
              } hover:shadow-[0_0px_30px_rgba(255,255,255,0.8)]`}
            >
              <div
                className={`max-w-6xl mx-auto py-10 px-4 flex w-full flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse md:space-x-8" : ""
                }`}
              >
                {/* Event Image */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0 rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] h-64 flex items-center justify-center">
                  <img
                    src="/comps/celeb.jpg"
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="w-full md:w-1/2 text-left space-y-4 md:px-8">
                  <span className="text-sm font-semibold uppercase tracking-widest text-red-700 border border-red-700 py-1 px-3 rounded-full bg-red-50">
                    {event.occasion}
                  </span>

                  <h3 className="text-3xl font-bold text-gray-900">{event.name}</h3>

                  <p className="text-lg font-mono text-purple-800 font-semibold">
                    Sale Dates: {event.dates}
                  </p>

                  <p className="text-gray-600 leading-relaxed">{event.details}</p>

                  <Link
                    href="/shop"
                    className="inline-block mt-4 text-white font-bold py-3 px-6 rounded-lg shadow-xl transition duration-300 
                    bg-gradient-to-r from-purple-800 to-indigo-800 hover:shadow-2xl transform hover:-translate-y-0.5"
                  >
                    Browse Current Collection &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Subscription Reminder */}
        <div className="mt-20 p-10 text-center rounded-2xl bg-gradient-to-br from-fuchsia-800 to-red-900 shadow-2xl max-w-6xl mx-auto">
          <p className="text-3xl font-extrabold text-yellow-300 mb-4 tracking-wide">
            VIP Access Awaits You.
          </p>
          <p className="text-xl text-red-200">
            Morva subscribers get access to secret sales 24 hours before everyone else!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnSale;
