import React, { useState, useRef, useEffect } from 'react';

const Hero = () => {
    const slides = [
        {
            id: 0,
            img: "/Hero/img-0.avif", 
            topText: "Top Sell",
            bottomLabel: "Offer",
            bottomValue: "10% Off",
            blobColor1: "#e1f5f3", 
            blobColor2: "#ffd5e5"  
        },
        {
            id: 1,
            img: "/Hero/img-3.webp", 
            topText: "Top Rated",
            bottomLabel: "Offer",
            bottomValue: "30% Off",
            blobColor1: "#fbcfe8", 
            blobColor2: "#e9d5ff"  
        },
        {
            id: 2,
            img: "/Hero/img-2.webp", 
            topText: "Most Loved",
            bottomLabel: "Delivery",
            bottomValue: "Free Ship",
            blobColor1: "#fee2e2", 
            blobColor2: "#ffedd5"  
        },
        {
            id: 3,
            img: "/Hero/img-1.webp", 
            topText: "New Arrival",
            bottomLabel: "Price",
            bottomValue: "From $29",
            blobColor1: "#fef9c3", 
            blobColor2: "#f0d8bb"  
        },
        {
            id: 4,
            img: "/Hero/img-4.webp", 
            topText: "Best Scent",
            bottomLabel: "Exclusive",
            bottomValue: "Bundle",
            blobColor1: "#e0f2fe", 
            blobColor2: "#fff1d9"  
        },
        {
            id: 5,
            img: "/Hero/img-5.webp", 
            topText: "Premium",
            bottomLabel: "Quality",
            bottomValue: "100% Fresh",
            blobColor1: "#f3e8ff", 
            blobColor2: "#eeffe3"  
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);
    const autoplayRef = useRef(null);

    // --- 1. Handle Scroll (Detect Active Slide) ---
    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const width = sliderRef.current.clientWidth;
            const newIndex = Math.round(scrollLeft / width);
            if (newIndex !== activeIndex && newIndex < slides.length) {
                setActiveIndex(newIndex);
            }
        }
    };

    // --- 2. Navigation Functions ---
    const scrollToSlide = (index) => {
        if (sliderRef.current) {
            const width = sliderRef.current.clientWidth;
            sliderRef.current.scrollTo({
                left: width * index,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () => {
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        scrollToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        scrollToSlide(prevIndex);
    };

    // --- 3. Autoplay Logic ---
    useEffect(() => {
        // Clear existing timer
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        
        // Set new timer
        autoplayRef.current = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(autoplayRef.current);
    }, [activeIndex]); // Reset timer on interaction

    // Pause Autoplay on Hover/Touch
    const pauseAutoplay = () => clearInterval(autoplayRef.current);
    const resumeAutoplay = () => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(nextSlide, 3000);
    };

    return (
        <section className="relative w-full h-auto lg:h-screen flex items-center py-28 lg:pt-32 lg:pb-12 px-6 lg:px-12 overflow-hidden bg-white z-0">
            
            {/* --- BACKGROUND BLOBS (Reduced Blur for Performance) --- */}
            <div 
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[60px] opacity-60 transition-colors duration-1000 ease-linear -z-10 transform-gpu"
                style={{ backgroundColor: slides[activeIndex].blobColor1 }}
            ></div>
            
            <div 
                className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[60px] opacity-60 transition-colors duration-1000 ease-linear -z-10 transform-gpu"
                style={{ backgroundColor: slides[activeIndex].blobColor2 }}
            ></div>

            {/* Main Content */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center relative z-10">
                
                {/* --- LEFT TEXT --- */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500">New Collection</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-gray-900 mb-6">
                        Let Beauty <br /> 
                        <span className="text-pink-500 italic">Bloom Today.</span>
                    </h1>
                    <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Hand-crafted bouquets that speak the language of love. Delivered fresh from our garden to your special moments.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-gray-900/20 hover:bg-pink-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                            <span>Shop Now</span>
                        </button>
                        <button className="group bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-medium shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                            <span>Watch Story</span>
                        </button>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-200 flex items-center justify-center md:justify-start gap-8">
                        <div><p className="text-2xl font-bold">15k+</p><p className="text-xs text-gray-500">Happy Users</p></div>
                        <div><p className="text-2xl font-bold">4.9</p><p className="text-xs text-gray-500">Ratings</p></div>
                    </div>
                </div>
                
                {/* --- NATIVE CSS SLIDER SECTION --- */}
                <div className="order-1 md:order-2 relative flex justify-center md:justify-end h-full select-none">
                    
                    <div 
                        className="group relative w-full max-w-md md:max-w-none rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl shadow-pink-900/20 translate-z-0"
                        onMouseEnter={pauseAutoplay}
                        onMouseLeave={resumeAutoplay}
                        onTouchStart={pauseAutoplay}
                        onTouchEnd={resumeAutoplay}
                    >
                        
                        {/* --- SCROLL CONTAINER (The Magic Part) --- */}
                        {/* 'snap-x', 'snap-mandatory', 'overflow-x-auto' - these do the heavy lifting */}
                        <div 
                            ref={sliderRef}
                            onScroll={handleScroll}
                            className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
                        >
                            {slides.map((slide, index) => (
                                <div 
                                    key={slide.id} 
                                    className="min-w-full snap-center relative bg-white"
                                >
                                    <img 
                                        src={slide.img} 
                                        alt="Flower Bouquet"
                                        loading={index === 0 ? "eager" : "lazy"}
                                        decoding="async"
                                        width="600"
                                        height="750"
                                        // Simple hover scale, no JS interaction
                                        className="w-full h-[450px] md:h-[600px] lg:h-[650px] object-cover object-top transition-transform duration-700 ease-in-out lg:group-hover:scale-105 block"
                                    />
                                    
                                    {/* Dark Overlay (CSS Only) */}
                                    <div className="absolute inset-0 bg-black/10 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>

                        {/* --- ARROWS --- */}
                        <button 
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 p-3 rounded-full transition-all duration-300 z-40"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        
                        <button 
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 p-3 rounded-full transition-all duration-300 z-40"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </button>

                        {/* --- DOTS --- */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => { e.stopPropagation(); scrollToSlide(index); }}
                                    className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                                        activeIndex === index 
                                        ? 'w-6 bg-pink-500' 
                                        : 'w-2 bg-white/70 hover:bg-pink-500'
                                    }`}
                                ></button>
                            ))}
                        </div>

                        {/* --- FLOATING CARDS (CSS Animation Only) --- */}
                        <div className="absolute top-8 -left-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/60 animate-float z-30 hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="user"/>
                                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/65.jpg" alt="user"/>
                                </div>
                                <div>
                                    <div className="flex text-yellow-400 text-[10px]">★★★★★</div>
                                    <p className="text-[10px] font-bold text-gray-600">
                                        {slides[activeIndex].topText}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-10 -right-4 md:right-[-10px] bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3 animate-float z-30 hidden md:flex" style={{ animationDelay: '1s' }}>
                            <div className="bg-pink-500 p-2 rounded-full text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold">
                                    {slides[activeIndex].bottomLabel}
                                </p>
                                <p className="text-base font-serif font-bold text-gray-900">
                                    {slides[activeIndex].bottomValue}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;