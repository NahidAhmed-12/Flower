import React, { useState, useRef, useEffect } from 'react';

const Nevbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Search States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  // Ref to detect click outside
  const searchRef = useRef(null);

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // যদি সার্চ বার ওপেন থাকে এবং ক্লিকটি সার্চ বারের ভেতরে না হয়
      if (isSearchOpen && searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    // ইভেন্ট লিসেনার যোগ করা
    document.addEventListener('mousedown', handleClickOutside);
    
    // ক্লিনআপ ফাংশন
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  // Handle Search Logic
  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchText.trim() !== "") {
      setIsLoading(true);
      setSearchResult(null);

      // Simulate API call delay
      setTimeout(() => {
        setIsLoading(false);
        setSearchResult('Not found');
      }, 1500);
    }
  };

  // Reset Search when closing
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchText('');
    setSearchResult(null);
    setIsLoading(false);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (searchResult) setSearchResult(null); 
  };

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 p-2 md:p-4">
      <div className="container mx-auto bg-white/90 backdrop-blur-md border border-white/60 rounded-full shadow-lg shadow-pink-100/50 px-4 md:px-8 py-3 flex justify-between items-center relative">
        
        {/* =======================
            SEARCH BAR OVERLAY
           ======================= */}
        <div 
          ref={searchRef} // Ref যুক্ত করা হলো
          className={`absolute inset-0 bg-white rounded-full z-[60] flex items-center justify-between px-4 md:px-8 transition-all duration-500 ease-in-out ${
            isSearchOpen ? 'w-full opacity-100 visible' : 'w-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="flex items-center w-full gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             
             <input 
                type="text" 
                placeholder="Search for flowers..." 
                value={searchText}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 font-medium"
                autoFocus={isSearchOpen}
             />

             <div className="flex items-center gap-2 whitespace-nowrap">
                {isLoading && (
                  <div className="animate-spin h-5 w-5 border-2 border-brand-pink border-t-transparent rounded-full"></div>
                )}
                {!isLoading && searchResult && (
                  <span className="text-red-500 text-sm font-semibold">{searchResult}</span>
                )}
             </div>
          </div>

          <button onClick={closeSearch} className="ml-4 p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* =======================
            PREMIUM LOGO SECTION
           ======================= */}
        <a href="#" className="flex items-center gap-2 group z-50">
          {/* Logo Icon Container */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-pink-100 to-pink-50 rounded-full shadow-inner group-hover:shadow-pink-200 transition-all duration-300">
             {/* Stylish Flower SVG */}
             <svg 
               viewBox="0 0 24 24" 
               className="w-6 h-6 text-brand-pink group-hover:scale-110 transition-transform duration-500"
               fill="currentColor"
             >
               <path d="M12 2.25c-1.5 3.5-4 5.5-8 6.5 3 2 4.5 5 4.5 9 0-4 2.5-7.5 7-8.5-3.5-1.5-5-4.5-3.5-7z" opacity="0.6"/>
               <path d="M12 2.25c1.5 3.5 4 5.5 8 6.5-3 2-4.5 5-4.5 9 0-4-2.5-7.5-7-8.5 3.5-1.5 5-4.5 3.5-7z"/>
             </svg>
             {/* Center Dot */}
             <div className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
          </div>
          
          {/* Text Logo */}
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-serif font-bold text-gray-800 tracking-wide group-hover:text-brand-pink transition-colors">
              Blossom
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-400 font-sans">
              Flower Shop
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-brand-pink transition-colors relative group/link">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover/link:w-full"></span>
          </a>
          <a href="#" className="hover:text-brand-pink transition-colors relative group/link">
            Collections
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover/link:w-full"></span>
          </a>
          <a href="#" className="hover:text-brand-pink transition-colors relative group/link">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover/link:w-full"></span>
          </a>
          <a href="#" className="hover:text-brand-pink transition-colors relative group/link">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover/link:w-full"></span>
          </a>
        </div>

        {/* Icons & Buttons */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          
          {/* Search Trigger Button */}
          <button 
            // e.stopPropagation() ব্যবহার করা হয়েছে যাতে বাটনে ক্লিক করলে ইভেন্ট বাবিলিং হয়ে সাথে সাথে বন্ধ না হয়ে যায়
            onClick={(e) => {
              e.stopPropagation(); 
              setIsSearchOpen(true);
            }}
            className="p-1.5 md:p-2 text-gray-500 hover:text-brand-pink transition rounded-full hover:bg-pink-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          
          <button className="relative bg-brand-pink text-white shadow-lg shadow-pink-300/50 hover:bg-pink-500 transition duration-300 flex items-center justify-center rounded-full w-8 h-8 p-0 md:w-auto md:h-auto md:px-6 md:py-2.5 md:gap-2 active:scale-95">
            <span className="hidden md:block font-medium">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            <span className="hidden md:flex bg-white text-brand-pink text-xs font-bold w-5 h-5 rounded-full items-center justify-center shadow-sm">2</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 text-gray-600 hover:text-brand-pink focus:outline-none rounded-full hover:bg-pink-50"
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