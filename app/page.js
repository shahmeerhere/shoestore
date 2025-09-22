"use client"
import React from 'react';
import Section from './section/page';
import StructuredData from './components/StructuredData';


export default function LandingPage() {

  const handlesubs = (e) => {
    e.preventDefault();
    alert("You are now a subscriber");
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="store" />
      <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black font-sans min-h-screen">
      <section
        className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/comps/heropic.jpeg')",
        }}
      >

        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl">
          <h1 className="text-6xl mb-6 playfair-display-sc-black text-white drop-shadow-lg">
           MORVA
          </h1>

          <p className="max-w-2xl text-white leading-relaxed mb-6 playfair-display-sc-regular">
            Morva is not just a brand, it is a statement. Every design we create carries
            the legacy of timeless elegance, built for those who deserve to stand apart.
            Where others chase trends, Morva defines what it means to walk with power
            and grace.
          </p>

          <p className="max-w-2xl text-white leading-relaxed mb-6 playfair-display-sc-regular-italic">
            For the ones who know that royalty is not inherited but chosen, Morva is the
            voice that speaks of class, dominance, and distinction. Each step you take
            in Morva is a declaration that you are not just part of the crowd — you are
            the standard they aspire to.
          </p>

          <button className="group mt-6 px-10 py-4 rounded-full bg-transparent text-gray-200 font-semibold tracking-wide transition-all duration-300 flex items-center gap-3 hover:bg-black/20">
            <span className="text-lg">Explore the Legacy</span>
            {/* Crown Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-200 transition-colors duration-300"
            >
              <path d="M12 2l2.5 7.5L22 9l-5 4 1.5 7L12 16l-6.5 4 1.5-7-5-4 7.5-1.5L12 2z" />
            </svg>
          </button>
        </div>
      </section>

      <main className="flex flex-col items-center w-full">
        <div className="relative h-[80vh] w-full max-w-[500vw] m-8 overflow-hidden">
          <div className="relative w-full h-[90vh]">
            <video
              src="/comps/herovid.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              aria-label="MORVA premium footwear showcase video"
            />

          </div>


          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent flex flex-col justify-end p-8 text-white">
            <h2 className="text-3xl font-bold ">MORVA</h2>
            <p className="text-lg mt-2">For the Ones Born to Reign</p>
          </div>
        </div>

        <Section />

        <div className="flex justify-between items-center p-[7vw] w-full hover:brightness-125 hover:saturate-125 hover:shadow-inner">
          <img 
            src="/comps/img 1.jpg" 
            alt="Professional office shoes - MORVA premium footwear for business meetings" 
            className="w-1/4" 
            loading="lazy"
            width="300"
            height="200"
          />
          <span className="w-3/4 pl-6">
            Office grind? No sweat. Our shoes blend sleek style with all-day comfort, so you can crush those meetings without feeling like you're walking on bricks. They're the perfect wingman for your 9-to-5 hustle—professional enough to impress, comfy enough to keep you going strong till quitting time.
          </span>
        </div>

        <div className="flex justify-between items-center p-[7vw] w-full hover:brightness-125 hover:saturate-125 hover:shadow-inner">
          <span className="w-3/4 pr-6">
            Hit the streets, own the night. Our shoes bring that fresh flex whether you're rolling out to a party, concert, or just exploring the city lights. Durable and stylish, they handle whatever your urban adventure throws at you — all while keeping your swagger high and your feet comfy for miles.
          </span>
          <img 
            src="/comps/img 2.jpg" 
            alt="Urban street shoes - MORVA casual footwear for city adventures" 
            className="w-1/4" 
            loading="lazy"
            width="300"
            height="200"
          />
        </div>

        <div className="flex justify-between items-center p-[7vw] w-full hover:brightness-125 hover:saturate-125 hover:shadow-inner">
          <img 
            src="/comps/img 3.jpg" 
            alt="Weekend casual shoes - MORVA comfortable footwear for relaxed days" 
            className="w-1/4" 
            loading="lazy"
            width="300"
            height="200"
          />
          <span className="w-3/4 pl-6">
            Weekend chill mode activated. Whether you're hitting the park, grabbing coffee, or just kicking it with friends, our shoes keep your feet happy and your look on point. Lightweight, breathable, and effortlessly cool — they're your go-to for those laid-back days when you just wanna vibe without sacrificing style.
          </span>
        </div>
        <marquee>
          <span className='mx-20 text-2xl font-semibold'>Azaadi's Biggest Offer</span>
          <span className='mx-20 text-2xl font-semibold'>25% sale on all items</span>
          <span className='font-semibold text-2xl mx-20'>Buy yours now</span>

        </marquee>

        <div className="text-black my-9 m-6 p-1 bg-gradient-to-r from-gray-100 to-gray-200 shadow-md rounded-lg">
          <p className="mb-4">
            Want to stay updated for new arrivals? Subscribe to our site!
          </p>
          <form method="get" className="bg-gradient-to-r from-black to-gray-800 p-8 mt-4 shadow-lg animate-fadeInUp rounded-lg" onSubmit={handlesubs}>
            <label htmlFor="email" className="block mb-2 text-white">
              Subscribe to our website!
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern=".*@gmail\.com"
              className="w-full p-2 rounded bg-gray-100 text-black"
            />
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-gradient-to-r from-white to-gray-200 text-black font-bold hover:from-gray-100 hover:to-gray-300 shadow-lg animate-pulse rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
      </div>
    </>
  );
}
