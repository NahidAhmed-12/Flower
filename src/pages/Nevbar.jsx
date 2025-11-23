import React, { useState } from 'react';

const Nevbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 p-2 md:p-4">
      <div className="container mx-auto bg-white/90 backdrop-blur-md border border-white/60 rounded-full shadow-lg shadow-pink-100/50 px-4 md:px-8 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-lg md:text-2xl font-serif font-bold flex items-center gap-1 md:gap-2 text-brand-dark group z-50">
          <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">🌸</span> 
          <span className="text-brand-pink">Blossom.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-brand-pink transition-colors">Home</a>
          <a href="#" className="hover:text-brand-pink transition-colors">Collections</a>
          <a href="#" className="hover:text-brand-pink transition-colors">About</a>
          <a href="#" className="hover:text-brand-pink transition-colors">Contact</a>
        </div>

        {/* Icons & Buttons */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          <button className="p-1.5 md:p-2 text-gray-500 hover:text-brand-pink transition rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          
          <button className="relative bg-brand-pink text-white shadow-lg shadow-pink-300/50 hover:bg-pink-500 transition duration-300 flex items-center justify-center rounded-full w-8 h-8 p-0 md:w-auto md:h-auto md:px-6 md:py-2.5 md:gap-2">
            <span className="hidden md:block font-medium">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            <span className="hidden md:flex bg-white text-brand-pink text-xs font-bold w-5 h-5 rounded-full items-center justify-center">2</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 text-gray-600 hover:text-brand-pink focus:outline-none rounded-full hover:bg-gray-100"
          >
            {isMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-pink-100 p-6 flex flex-col items-center gap-4 md:hidden transform transition-all duration-300 origin-top z-40">
                <a href="#" className="text-gray-700 hover:text-brand-pink font-medium text-lg w-full text-center py-2 border-b border-gray-100">Home</a>
                <a href="#" className="text-gray-700 hover:text-brand-pink font-medium text-lg w-full text-center py-2 border-b border-gray-100">Collections</a>
                <a href="#" className="text-gray-700 hover:text-brand-pink font-medium text-lg w-full text-center py-2 border-b border-gray-100">About</a>
                <a href="#" className="text-gray-700 hover:text-brand-pink font-medium text-lg w-full text-center py-2">Contact</a>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Nevbar;