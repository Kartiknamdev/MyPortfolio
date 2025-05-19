import React from 'react';
import Spline from '@splinetool/react-spline';
const CTA = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-10 text-center relative min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Spline scene="https://prod.spline.design/pjxZiK68ixSWKfM4/scene.splinecode" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-6xl font-extrabold mb-8">Your Next Big Step Awaits</h2>
        <p className="text-2xl mb-10 leading-relaxed">
          Join thousands of others who have taken the leap and transformed their lives. Start your journey with us today.
        </p>
        <div className="flex justify-center gap-8">
          <button className="bg-white text-black font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>
      
    </section>

    
  );
};

export default CTA;