import React, { useState, useEffect } from 'react';

const Offer = () => {
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

    // টাইমার কার্ড কম্পোনেন্ট (রিইউজেবল)
    const TimeBox = ({ value, label }) => (
        <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm border border-pink-100 p-3 md:p-4 rounded-2xl shadow-lg shadow-pink-900/5 min-w-[70px] md:min-w-[90px]">
            <span className="text-2xl md:text-4xl font-bold text-gray-900 font-serif">
                {value < 10 ? `0${value}` : value}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 font-medium mt-1">
                {label}
            </span>
        </div>
    );

    return (
        <section className="py-20 px-6 lg:px-12 bg-white relative overflow-hidden">
            
            {/* --- Background Decoration (Consistent with Hero) --- */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>

            <div className="container mx-auto">
                <div className="bg-[#FFF5F7] rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-sm border border-pink-100">
                    
                    {/* Floating Leaf/Element Decoration */}
                    <div className="absolute top-10 right-10 w-20 h-20 bg-pink-200 rounded-full blur-2xl opacity-40 animate-pulse"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* --- Left Side: Image Composition --- */}
                        <div className="relative order-2 lg:order-1">
                            {/* Main Image Frame */}
                            <div className="relative z-10 rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl shadow-pink-900/15 group">
                                <img 
                                    src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Special Offer Bouquet" 
                                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Discount Badge */}
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur text-gray-900 px-5 py-3 rounded-full font-bold shadow-lg z-20">
                                    <span className="text-pink-500">30%</span> OFF
                                </div>
                            </div>

                            {/* Background Pattern/Shape behind image */}
                            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-pink-200 rounded-[2.5rem] -z-10 hidden md:block"></div>
                        </div>

                        {/* --- Right Side: Content & Timer --- */}
                        <div className="order-1 lg:order-2 text-center lg:text-left">
                            <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-600 text-xs font-bold tracking-widest uppercase mb-6">
                                Deal of the Day
                            </span>
                            
                            <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Special Wedding <br />
                                <span className="text-pink-500 italic">Anniversary</span> Bouquet
                            </h2>
                            
                            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                                Surprise your loved ones with our premium "Eternal Love" collection. 
                                Freshly picked red roses combined with elegant white lilies.
                                Use code <span className="font-bold text-gray-800 bg-white px-2 rounded border border-gray-200">LOVE30</span> at checkout.
                            </p>

                            {/* Countdown Timer */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                                <TimeBox value={timeLeft.days} label="Days" />
                                <TimeBox value={timeLeft.hours} label="Hours" />
                                <TimeBox value={timeLeft.minutes} label="Mins" />
                                <TimeBox value={timeLeft.seconds} label="Secs" />
                            </div>

                            {/* CTA Button (Matching Hero) */}
                            <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-medium shadow-xl shadow-gray-900/20 hover:bg-pink-500 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
                                <span>Order Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
