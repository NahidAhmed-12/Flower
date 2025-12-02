import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Theme State
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Search States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  // Ref to detect click outside
  const searchRef = useRef(null);

  // --- Theme Toggle Logic ---
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // --- Prevent Scrolling when Mobile Menu is Open ---
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // --- Search & Click Outside Logic ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchText.trim() !== "") {
      setIsLoading(true);
      setSearchResult(null);
      setTimeout(() => {
        setIsLoading(false);
        setSearchResult('No products found');
      }, 1500);
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchText('');
    setSearchResult(null);
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (searchResult) setSearchResult(null); 
  };

  return (
    <>
      {/* 
         Change 1: `pt-0 px-0` for mobile (no gap), 
         `md:pt-4 md:px-6` for desktop (gap included) 
      */}
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 pt-0 px-0 md:pt-4 md:px-6">
        
        {/* 
           Change 2: `rounded-none` for mobile (rectangular), 
           `md:rounded-2xl` for desktop (rounded corners)
           `border-b` for mobile specific styling, `md:border` for full border on desktop
        */}
        <div className="max-w-7xl mx-auto bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-lg border-b md:border border-gray-200 dark:border-gray-800 rounded-none md:rounded-2xl shadow-sm px-6 py-3 flex justify-between items-center relative z-50">
          
          {/* =======================
              SEARCH BAR OVERLAY
             ======================= */}
          <div 
            ref={searchRef}
            // Change 3: Also apply rounded-none for mobile, rounded-2xl for desktop
            className={`absolute inset-0 bg-white dark:bg-[#1a1a1a] rounded-none md:rounded-2xl z-[60] flex items-center justify-between px-6 transition-all duration-500 ease-in-out ${
              isSearchOpen ? 'w-full opacity-100 visible' : 'w-0 opacity-0 invisible overflow-hidden'
            }`}
          >
            <div className="flex items-center w-full gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
               
               <input 
                  type="text" 
                  placeholder="Search collection..." 
                  value={searchText}
                  onChange={handleInputChange}
                  onKeyDown={handleSearch}
                  className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 font-medium"
                  autoFocus={isSearchOpen}
               />

               <div className="flex items-center gap-2 whitespace-nowrap">
                  {isLoading && (
                    <div className="animate-spin h-5 w-5 border-2 border-orange-500 border-t-transparent rounded-full"></div>
                  )}
                  {!isLoading && searchResult && (
                    <span className="text-orange-600 text-sm font-semibold">{searchResult}</span>
                  )}
               </div>
            </div>

            <button onClick={closeSearch} className="ml-4 p-2 text-gray-500 hover:text-orange-600 dark:hover:text-orange-400 rounded-full transition-colors flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* =======================
              LOGO SECTION
             ======================= */}
          <a href="#" className="flex items-center gap-2 group z-50">
            <div className="flex flex-col leading-none">
              <h1 className="text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                LUXE
                <span className="text-orange-600">.</span>
              </h1>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            {['Home', 'Shop', 'New Arrivals', 'Stories'].map((item) => (
               <a key={item} href="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors relative group/link">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover/link:w-full"></span>
               </a>
            ))}
          </div>

          {/* Icons & Buttons */}
          <div className="flex items-center gap-2 md:gap-4 z-50">
            
            {/* Theme Toggle */}
            <button 
               onClick={toggleTheme}
               className="p-2 text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
            >
               {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
               ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
               )}
            </button>

            {/* Search Trigger */}
            <button 
              onClick={(e) => { e.stopPropagation(); setIsSearchOpen(true); }}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            
            {/* Cart Button */}
            <button className="relative bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-orange-600 dark:hover:bg-orange-400 transition-all duration-300 flex items-center justify-center rounded-lg w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 gap-2 shadow-lg shadow-gray-200 dark:shadow-none">
              <span className="hidden md:block font-bold text-sm tracking-wide">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="absolute -top-1 -right-1 md:static md:ml-1 bg-orange-500 text-white text-[10px] md:text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">2</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 focus:outline-none rounded-full z-50 relative"
            >
              {isMenuOpen ? (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* =======================
          MOBILE FULL SCREEN MENU
         ======================= */}
      <div 
        className={`fixed inset-0 z-40 bg-white dark:bg-[#1a1a1a] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
          <div className="flex flex-col items-center gap-8">
            {['Home', 'Shop', 'New Arrivals', 'Stories'].map((item, index) => (
                <a 
                  key={item} 
                  href="#" 
                  className={`text-3xl md:text-4xl font-serif font-bold text-gray-800 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 transform ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                    {item}
                </a>
            ))}
          </div>
      </div>
    </>
  );
};

export default Navbar;