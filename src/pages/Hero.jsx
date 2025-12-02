import React, { useState, useEffect } from 'react';


const slides = [
  {
    id: 0,
    img: "/Hero/img-0.avif",
    subtitle: "Best Seller",
    title: "Spring Vibe Collection",
    orb1: "from-pink-300/25 to-purple-300/20", 
    orb2: "from-rose-300/30 to-blue-200/20"
  },
  {
    id: 1,
    img: "/Hero/img-3.avif",
    subtitle: "Top Rated",
    title: "Royal Rose Exclusive",
    orb1: "from-red-300/25 to-orange-300/20",
    orb2: "from-orange-200/30 to-red-200/20"
  },
  {
    id: 2,
    img: "/Hero/img-2.avif",
    subtitle: "Customer Choice",
    title: "Express Delivery",
    orb1: "from-blue-300/25 to-cyan-300/20",
    orb2: "from-sky-200/30 to-indigo-200/20"
  },
  {
    id: 3, 
    img: "/Hero/img-1.avif",
    subtitle: "New Arrival",
    title: "Starting at $49.00",
    orb1: "from-indigo-300/25 to-blue-300/20",
    orb2: "from-blue-300/30 to-slate-300/20"
  },
  {
    id: 4,
    img: "/Hero/img-4.avif",
    subtitle: "Aromatic",
    title: "Limited Bundle Deal",
    orb1: "from-violet-300/25 to-fuchsia-300/20",
    orb2: "from-purple-200/30 to-pink-200/20"
  },
  {
    id: 5, 
    img: "/Hero/img-5.avif",
    subtitle: "Premium",
    title: "100% Fresh Quality",
    orb1: "from-rose-400/25 to-pink-400/20",
    orb2: "from-red-300/30 to-rose-200/20"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentYear = new Date().getFullYear();

  // --- Auto Play Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      {/* --- CUSTOM CSS FOR ANIMATIONS --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      {/* Main Container */}
      <div className="w-full min-h-screen bg-[#FFF5F7] dark:bg-[#0f0f0f] transition-colors duration-300 relative overflow-hidden font-sans selection:bg-pink-200 selection:text-pink-900">
        
      
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${slides[currentSlide].orb1} rounded-full blur-[160px] pointer-events-none translate-x-1/4 -translate-y-1/4 transition-all duration-1000 ease-in-out opacity-0 animate-fade-in`} style={{ animationDelay: '0ms' }}></div>
        
        {/* Bottom Left Orb */}
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t ${slides[currentSlide].orb2} rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4 transition-all duration-1000 ease-in-out opacity-0 animate-fade-in`} style={{ animationDelay: '0ms' }}></div>

        {/* Main Wrapper */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between h-full min-h-screen px-6 py-20 lg:pt-28 gap-12 lg:gap-0 relative z-10">
          
          
          <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left z-20 relative">
            
            <div className="space-y-6 relative z-10">
              
              {/* Tagline (Animation Delay: 100ms) */}
              <div className="flex items-center justify-center lg:justify-start gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <span className="w-10 h-[2px] bg-gradient-to-r from-pink-500 to-transparent inline-block"></span>
                  <p className="text-pink-600 dark:text-pink-400 font-bold tracking-[0.25em] text-xs uppercase shadow-sm">
                     Est. {currentYear} • Premium Bloom
                  </p>
              </div>
              
              {/* H1 Title (Animation Delay: 200ms) */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-[1.2] relative inline-block drop-shadow-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                
                {/* Star Icon */}
                <svg className="absolute -top-6 -right-8 w-8 h-8 text-pink-300 animate-[spin_6s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>

                Nature’s <br />
                
                <span className="relative inline-block z-10 mt-1">
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600 z-10 relative px-1 pb-1">
                    Masterpiece
                  </span>
                  {/* Underline SVG */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-400/60 -z-10" viewBox="0 0 200 9" fill="none">
                      <path d="M2.00025 6.99999C45.5002 1.5 130 -2.5 198.5 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              {/* Paragraph (Animation Delay: 300ms) */}
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                Discover the art of gifting with our hand-picked floral arrangements. Curated for elegance, delivered with love & care.
              </p>
            </div>
            
            {/* Buttons (Animation Delay: 400ms) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8 relative z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              
              {/* Primary Button */}
              <button className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-500 text-white rounded-lg text-sm font-bold tracking-wide hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                </svg>
                Shop Collection
              </button>
              
              {/* Secondary Button */}
              <button className="group flex items-center justify-center gap-2 px-8 py-3.5 border border-pink-300/60 dark:border-pink-900/50 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-bold tracking-wide hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 bg-white/40 backdrop-blur-sm dark:bg-black/20">
                How we work
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Stats (Animation Delay: 500ms) */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-10 relative z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
               <div>
                  <p className="text-2xl font-serif text-gray-900 dark:text-white">2k+</p>
                  <p className="text-xs text-pink-500/80 uppercase tracking-wider mt-1 font-medium">Trusted Clients</p>
               </div>
               <div className="w-px h-8 bg-gradient-to-b from-pink-200 to-transparent dark:from-pink-900"></div>
               <div>
                  <p className="text-2xl font-serif text-gray-900 dark:text-white">4.9</p>
                  <p className="text-xs text-pink-500/80 uppercase tracking-wider mt-1 font-medium">Star Rating</p>
               </div>
            </div>
          </div>


          {/* --- RIGHT SIDE: IMAGE SLIDER (Entrance Animation) --- */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative opacity-0 animate-zoom-in" style={{ animationDelay: '400ms' }}>
            
            {/* Background Rings */}
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[190px] -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] z-0 hidden sm:block pointer-events-none">
               <div className="absolute inset-0 border border-pink-200/60 dark:border-pink-800/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
               <div className="absolute inset-4 border border-dashed border-pink-300/40 dark:border-pink-900/30 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            </div>

            {/* Slider Container */}
            <div className="relative w-full max-w-sm aspect-[3/4] group z-10">
              
              {/* Frame Border Effect */}
              <div className="absolute -inset-3 border border-white/40 rounded-2xl z-0 hidden lg:block backdrop-blur-[2px]"></div>

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-pink-900/10 dark:shadow-black/50 z-10 bg-gray-100">
                  {slides.map((slide, index) => (
                  <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                      
                      {/* Image */}
                      <img src={slide.img} alt={slide.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                      
                      {/* Glass Card Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg animate-[fadeInUp_0.5s_ease-out]">
                          <p className="text-pink-200 text-[10px] tracking-widest uppercase mb-1 font-bold">
                              {slide.subtitle}
                          </p>
                          <h3 className="text-white text-lg font-serif tracking-wide">
                              {slide.title}
                          </h3>
                      </div>
                  </div>
                  ))}
                  
                  {/* Slider Indicators (Top Right) */}
                  <div className="absolute top-4 right-4 flex gap-1.5 z-20">
                      {slides.map((_, index) => (
                      <div
                          key={index}
                          className={`h-1 rounded-full transition-all duration-300 ${
                          currentSlide === index 
                              ? 'w-4 bg-white' 
                              : 'w-1.5 bg-white/40'
                          }`}
                      />
                      ))}
                  </div>

                  {/* Slider Controls */}
                  <div className="absolute bottom-[28px] right-[28px] flex items-center gap-2 z-20">
                     <button onClick={prevSlide} className="w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md text-white border border-white/10 transition-all">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                     </button>
                     <button onClick={nextSlide} className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-600/20 transition-all">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                     </button>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;