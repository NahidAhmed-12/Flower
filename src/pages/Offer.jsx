import React, { useState, useEffect } from 'react';

const Offer = () => {
    // স্লাইডারের জন্য ছবির লিস্ট
    const images = [
        "/Special/img-1.avif",
        "/Special/img-2.avif",
        "/Special/img-3.avif",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // স্লাইডার নেভিগেশন লজিক
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // অটো প্লে স্লাইডার
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 4000);
        return () => clearInterval(slideInterval);
    }, []);

    // কাউন্টডাউন টাইমার লজিক
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 45,
        seconds: 10
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // টাইমার কার্ড কম্পোনেন্ট
    const TimeBox = ({ value, label }) => (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 p-3 md:p-4 rounded-2xl shadow-lg shadow-pink-100/50 dark:shadow-none min-w-[70px] md:min-w-[90px]">
            <span className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white font-serif">
                {value < 10 ? `0${value}` : value}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold mt-1">
                {label}
            </span>
        </div>
    );

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
            
            {/* --- Background Decoration --- */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-400/5 dark:bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="bg-[#FFFBF7] dark:bg-[#111] rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-hidden border border-pink-100 dark:border-gray-800 shadow-sm">
                    
                    {/* Floating Leaf Decoration */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
                        
                        {/* --- Left Side: Slider --- */}
                        <div className="relative order-1">
                            {/* Slider Frame */}
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-900/10 dark:shadow-black/50 h-[350px] md:h-[500px] w-full bg-white dark:bg-gray-800">
                                
                                {/* Images */}
                                {images.map((img, index) => (
                                    <div 
                                        key={index}
                                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <img 
                                            src={img} 
                                            alt={`Slide ${index}`}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Dark Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    </div>
                                ))}
                                
                                {/* Discount Badge */}
                                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur text-gray-900 dark:text-white px-4 py-2 rounded-full font-bold shadow-lg z-20 text-sm md:text-base border border-white/50 dark:border-gray-700">
                                    <span className="text-pink-600 dark:text-pink-400">30%</span> OFF
                                </div>

                                {/* Slider Controls (Arrows) */}
                                <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                                    <button onClick={prevSlide} className="bg-white/20 hover:bg-white text-white hover:text-black p-2 rounded-full transition-all backdrop-blur-md border border-white/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    <button onClick={nextSlide} className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-all shadow-lg shadow-pink-600/30 border border-transparent">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>

                                {/* Dots Indicators */}
                                <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                                    {images.map((_, idx) => (
                                        <button 
                                            key={idx} 
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50 w-2 hover:bg-white'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Offset Border Decoration */}
                            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-pink-200 dark:border-pink-900/30 rounded-[2.5rem] -z-10 hidden md:block"></div>
                        </div>

                        {/* --- Right Side: Content & Timer --- */}
                        <div className="order-2 text-center lg:text-left mt-4 md:mt-0">
                            
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                                <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                                <span className="text-pink-600 dark:text-pink-400 font-bold tracking-[0.2em] uppercase text-xs">
                                    Limited Time Offer
                                </span>
                            </div>
                            
                            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6">
                                Special Wedding <br />
                                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600">Anniversary</span> Bouquet
                            </h2>
                            
                            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                                Surprise your loved ones with our premium "Eternal Love" collection. 
                                Freshly picked red roses combined with elegant white lilies. <br/>
                                Use code: <span className="font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-2 py-0.5 rounded border border-dashed border-gray-300 dark:border-gray-600 ml-1">LOVE30</span>
                            </p>

                            {/* Countdown Timer */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-10">
                                <TimeBox value={timeLeft.days} label="Days" />
                                <TimeBox value={timeLeft.hours} label="Hours" />
                                <TimeBox value={timeLeft.minutes} label="Mins" />
                                <TimeBox value={timeLeft.seconds} label="Secs" />
                            </div>

                            {/* CTA Button */}
                            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold shadow-lg shadow-gray-900/20 dark:shadow-white/10 hover:bg-pink-600 dark:hover:bg-pink-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                Order Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;