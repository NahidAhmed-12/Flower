import React, { useState, useEffect } from 'react';

const Offer = () => {
    // স্লাইডারের জন্য ছবির লিস্ট
    const images = [
        "/Special/img-1.webp",
        "/Special/img-2.webp",
        "/Special/img-3.webp"
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // স্লাইডার নেভিগেশন লজিক
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // অটো প্লে স্লাইডার (অপশনাল - ৩ সেকেন্ড পর পর)
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
        <div className="flex flex-col items-center bg-white border border-pink-100 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-md shadow-pink-900/5 min-w-[65px] md:min-w-[90px]">
            <span className="text-xl md:text-4xl font-bold text-gray-900 font-serif">
                {value < 10 ? `0${value}` : value}
            </span>
            <span className="text-[9px] md:text-xs uppercase tracking-wider text-gray-500 font-medium mt-1">
                {label}
            </span>
        </div>
    );

    return (
        <section className="py-10 md:py-20 px-4 md:px-6 lg:px-12 bg-white relative overflow-hidden">
            
            {/* --- Background Decoration --- */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>

            <div className="container mx-auto">
                <div className="bg-[#FFF5F7] md:bg-[#FFF5F7] bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-12 lg:p-16 relative overflow-hidden shadow-lg md:shadow-sm border border-pink-50 md:border-pink-100">
                    
                    {/* Floating Leaf Decoration */}
                    <div className="absolute top-10 right-10 w-20 h-20 bg-pink-200 rounded-full blur-2xl opacity-40 animate-pulse hidden md:block"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
                        
                        {/* --- Left Side: Slider (Mobile: Top, Desktop: Left) --- */}
                        <div className="relative order-1">
                            {/* Slider Frame */}
                            <div className="relative z-10 rounded-2xl md:rounded-[2rem] overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl shadow-pink-900/10 group h-[300px] md:h-[500px] w-full">
                                
                                {/* Images */}
                                {images.map((img, index) => (
                                    <div 
                                        key={index}
                                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <img 
                                            src={img} 
                                            alt={`Slide ${index}`} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                
                                {/* Discount Badge */}
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur text-gray-900 px-3 py-2 md:px-5 md:py-3 rounded-full font-bold shadow-lg z-20 text-xs md:text-base">
                                    <span className="text-pink-500">30%</span> OFF
                                </div>

                                {/* Slider Controls (Arrows) */}
                                <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 p-2 rounded-full text-white hover:text-gray-900 transition-all backdrop-blur-sm z-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 p-2 rounded-full text-white hover:text-gray-900 transition-all backdrop-blur-sm z-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>

                                {/* Dots Indicators */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                                    {images.map((_, idx) => (
                                        <button 
                                            key={idx} 
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-pink-500 w-6' : 'bg-white/70'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Background Pattern (Desktop Only) */}
                            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-pink-200 rounded-[2.5rem] -z-10 hidden md:block"></div>
                        </div>

                        {/* --- Right Side: Content & Timer (Mobile: Bottom, Desktop: Right) --- */}
                        <div className="order-2 text-center lg:text-left mt-2 md:mt-0">
                            <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 md:mb-6">
                                Deal of the Day
                            </span>
                            
                            <h2 className="font-serif text-3xl md:text-6xl font-bold text-gray-900 leading-tight mb-3 md:mb-6">
                                Special Wedding <br />
                                <span className="text-pink-500 italic">Anniversary</span> Bouquet
                            </h2>
                            
                            <p className="text-gray-500 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed px-2 md:px-0">
                                Surprise your loved ones with our premium "Eternal Love" collection. 
                                Freshly picked red roses combined with elegant white lilies.
                                Use code <span className="font-bold text-gray-800 bg-white px-2 rounded border border-gray-200 dashed">LOVE30</span>
                            </p>

                            {/* Countdown Timer */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-10">
                                <TimeBox value={timeLeft.days} label="Days" />
                                <TimeBox value={timeLeft.hours} label="Hours" />
                                <TimeBox value={timeLeft.minutes} label="Mins" />
                                <TimeBox value={timeLeft.seconds} label="Secs" />
                            </div>

                            {/* CTA Button */}
                            <button className="w-full md:w-auto bg-gray-900 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-medium shadow-lg shadow-gray-900/20 hover:bg-pink-500 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-3 group">
                                <span>Order Now</span>
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
