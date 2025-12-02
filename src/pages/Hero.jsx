import React, { useState, useRef, useEffect, useCallback } from 'react';

const Hero = () => {
    // --- স্লাইডার ডেটা ---
    const slides = [
        {
            id: 0,
            img: "/Hero/img-0.avif", 
            topText: "Best Seller",
            bottomLabel: "Collection",
            bottomValue: "Spring Vibe",
            blobColor1: "#e1f5f3", 
            blobColor2: "#ffd5e5"  
        },
        {
            id: 1,
            img: "/Hero/img-3.avif", 
            topText: "Top Rated",
            bottomLabel: "Exclusive",
            bottomValue: "Royal Rose",
            blobColor1: "#fbcfe8", 
            blobColor2: "#e9d5ff"  
        },
        {
            id: 2,
            img: "/Hero/img-2.avif", 
            topText: "Customer Choice",
            bottomLabel: "Delivery",
            bottomValue: "Express",
            blobColor1: "#fee2e2", 
            blobColor2: "#ffedd5"  
        },
        {
            id: 3,
            img: "/Hero/img-1.avif",
            topText: "New Arrival",
            bottomLabel: "Starting",
            bottomValue: "$49.00",
            blobColor1: "#fef9c3", 
            blobColor2: "#f0d8bb"  
        },
        {
            id: 4,
            img: "/Hero/img-4.avif", 
            topText: "Aromatic",
            bottomLabel: "Limited",
            bottomValue: "Bundle Deal",
            blobColor1: "#e0f2fe", 
            blobColor2: "#fff1d9"  
        },
        {
            id: 5,
            img: "/Hero/img-5.avif", 
            topText: "Premium",
            bottomLabel: "Quality",
            bottomValue: "100% Fresh",
            blobColor1: "#f3e8ff", 
            blobColor2: "#eeffe3"  
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const heroSectionRef = useRef(null);
    const autoplayTimerRef = useRef(null);
    const isInteracting = useRef(false);
    
    // Touch handling state
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    
    const [showControls, setShowControls] = useState(true); 
    const sliderContainerRef = useRef(null); 

    // --- Controls Hide Logic ---
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowControls(false);
        }, 15000);

        const handleClickOutside = (event) => {
            if (sliderContainerRef.current && !sliderContainerRef.current.contains(event.target)) {
                setShowControls(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // --- Slider Logic ---
    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    // --- Autoplay Logic ---
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isInteracting.current) {
                nextSlide();
            }
        }, 3500); 

        return () => clearInterval(interval);
    }, [nextSlide]);


    // --- Interaction Handlers ---
    const handleInteractionStart = () => {
        isInteracting.current = true;
        if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    };

    const handleInteractionEnd = () => {
        if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
        autoplayTimerRef.current = setTimeout(() => {
            isInteracting.current = false;
        }, 5000);
    };

    // --- Touch / Swipe Logic ---
    const onTouchStart = (e) => {
        handleInteractionStart();
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
        handleInteractionEnd();
    };

    return (
        <section 
            ref={heroSectionRef} 
            // UPDATE: Added 'select-none' here to prevent text selection
            className="relative w-full min-h-screen flex items-center py-20 lg:py-28 px-6 lg:px-12 overflow-hidden bg-white z-0 select-none"
        >
            
            {/* --- WATERMARK TEXT --- */}
            <div className="absolute top-20 left-0 lg:left-20 pointer-events-none -z-10 opacity-[0.03]">
                <h1 className="text-[15vw] leading-none font-black text-gray-900 tracking-tighter">
                    BLOOM
                </h1>
            </div>

            {/* --- BACKGROUND BLOBS --- */}
            <div 
                className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full mix-blend-multiply filter blur-[80px] -z-10 animate-float transition-colors duration-1000 ease-linear opacity-50"
                style={{ backgroundColor: slides[activeIndex].blobColor1 }}
            ></div>
            
            <div 
                className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[80px] -z-10 animate-float transition-colors duration-1000 ease-linear opacity-50"
                style={{ 
                    backgroundColor: slides[activeIndex].blobColor2,
                    animationDelay: '3s' 
                }}
            ></div>

            {/* Main Content Container */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center relative z-10">
                
                {/* --- LEFT TEXT CONTENT --- */}
                <div className="text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start space-y-8">
                    
                    {/* Brand Tag Line */}
                    <div className="flex items-center gap-3 animate-fade-in-up">
                        <div className="h-[1px] w-12 bg-gray-400"></div>
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500">Since 2024</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[1] text-gray-900 tracking-tight">
                        Nature’s <br />
                        <span className="font-serif italic font-light text-pink-500 block mt-2 relative z-10">
                            Masterpiece
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    {/* Description */}
                    <div className="border-l-4 border-pink-500/30 pl-6 text-left max-w-lg">
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            Discover the art of gifting with our hand-picked floral arrangements. 
                            Curated for elegance, delivered with <span className="font-medium text-gray-900">love & care.</span>
                        </p>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4">
                        <button className="group relative px-8 py-4 rounded-full bg-gray-900 text-white font-medium overflow-hidden shadow-2xl shadow-gray-900/30 hover:shadow-pink-500/40 transition-all duration-300 hover:-translate-y-1">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Shop Collection
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        <button className="group flex items-center justify-center gap-3 px-6 py-4 rounded-full text-gray-700 hover:text-pink-600 transition-colors font-medium">
                            <span className="relative flex h-10 w-10">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-20"></span>
                                <span className="relative inline-flex rounded-full h-10 w-10 bg-white border border-gray-200 items-center justify-center shadow-sm group-hover:border-pink-200 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                </span>
                            </span>
                            <span className="underline decoration-transparent group-hover:decoration-pink-300 underline-offset-4 transition-all">How we work</span>
                        </button>
                    </div>

                    {/* Trusted Section */}
                    <div className="flex items-center gap-4 pt-6">
                        <div className="flex -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" />
                            <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                            <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-900 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                                +2k
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">Trusted by Clients</p>
                            <div className="flex text-yellow-400 text-xs">
                                ★★★★★ <span className="text-gray-400 ml-1 font-normal">(4.9/5)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* --- IMAGE SLIDER SECTION --- */}
                <div className="order-1 md:order-2 relative flex justify-center md:justify-end h-full">
                    
                    <div 
                        ref={sliderContainerRef} 
                        className="group relative w-full h-[450px] md:h-[600px] lg:h-[650px] max-h-[80vh] max-w-md md:max-w-none rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl shadow-pink-900/10 cursor-grab active:cursor-grabbing transform-gpu translate-z-0 bg-white"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        
                        {/* --- SLIDES --- */}
                        <div className="relative w-full h-full">
                            {slides.map((slide, index) => (
                                <div 
                                    key={slide.id}
                                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out bg-white overflow-hidden
                                        ${index === activeIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-110'}
                                    `}
                                >
                                    {/* UPDATE: Added hover:scale-110 and transition for hover zoom effect */}
                                    <img 
                                        src={slide.img} 
                                        alt="Premium Flower Bouquet" 
                                        loading={index === 0 ? "eager" : "lazy"}
                                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out hover:scale-110"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>

                        {/* --- ARROWS --- */}
                        <div className={`absolute inset-0 flex items-center justify-between px-4 z-40 pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            <button 
                                onClick={() => { handleInteractionStart(); prevSlide(); handleInteractionEnd(); }}
                                className="pointer-events-auto w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            
                            <button 
                                onClick={() => { handleInteractionStart(); nextSlide(); handleInteractionEnd(); }}
                                className="pointer-events-auto w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        {/* --- DOTS --- */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-40 pointer-events-auto p-2 rounded-full bg-black/10 backdrop-blur-sm border border-white/10">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => { handleInteractionStart(); goToSlide(index); handleInteractionEnd(); }}
                                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                                        activeIndex === index 
                                        ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                                        : 'w-2 bg-white/40 hover:bg-white/80'
                                    }`}
                                ></button>
                            ))}
                        </div>

                        {/* --- FLOATING CARD: Top Left --- */}
                        <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/80 backdrop-blur-xl p-3 pr-5 rounded-2xl shadow-lg border border-white/50 animate-float z-30 transition-transform duration-500 hover:scale-105 pointer-events-none md:pointer-events-auto">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden flex items-center justify-center bg-pink-100 text-[10px] font-bold text-pink-600">
                                        +99
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex text-yellow-400 text-xs tracking-tighter">★★★★★</div>
                                    <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide mt-0.5">
                                        {slides[activeIndex].topText}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* --- FLOATING CARD: Bottom Right (Hidden on Mobile) --- */}
                        <div 
                            className="hidden md:flex absolute bottom-12 right-8 bg-white/90 backdrop-blur-xl p-4 pl-5 rounded-2xl shadow-xl border border-white/60 items-center gap-4 animate-float z-30 transition-transform duration-500 hover:-translate-y-1 pointer-events-none md:pointer-events-auto" 
                            style={{ animationDelay: '1.5s' }}
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/30">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">
                                    {slides[activeIndex].bottomLabel}
                                </p>
                                <p className="text-xl font-serif font-bold text-gray-900">
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