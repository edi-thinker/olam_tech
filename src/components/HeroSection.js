import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-24" style={{background:"url('../images/Hero-section.png')", backgroundPosition:'center', backgroundSize:'cover'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div style={{lineHeight:2.2}}>
            <h1 className="text-4xl font-bold text-white" style={{lineHeight:1.7, fontSize:'2.5rem'}}>Revolutionizing Technology, <span className='text-[#84c43f]'>Empowering Business</span></h1>
            <p className="text-gray-300 mt-4">
            Intelligent Solutions for a Smarter Future. Elevating Customer Experiences with Cutting-Edge Technology.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 p-2 rounded-2xl font-medium">
              <a href='/services'>Get Started</a>
              </button>
              <button className="bg-transparent border-2 rounded-2xl p-2 px-4 text-blue-100 hover:text-blue-500 hover:bg-white font-medium flex items-center space-x-2">
                <a href='/about'>Discover More</a>
              </button>
            </div>
          </div>
          <div className="relative">
            
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-gray-900 to-transparent opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;