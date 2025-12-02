import React, { useRef } from 'react';

const Categories = () => {
    const scrollContainerRef = useRef(null);

    const categories = [
        {
            id: "01",
            name: "Romantic Love",
            price: "Start from $29",
            image: "/Explore/img-1.avif", 
            link: "Shop Collection"
        },
        {
            id: "02",
            name: "Wedding Elegance",
            price: "Start from $150",
            image: "/Explore/img-2.avif", 
            link: "Plan Wedding"
        },
        {
            id: "03",
            name: "Sympathy Lilies",
            price: "Start from $45",
            image: "/Explore/img-3.avif", 
            link: "Send Comfort"
        },
        {
            id: "04",
            name: "Luxury Decor",
            price: "Start from $60",
            image: "/Explore/img-4.avif", 
            link: "View Decor"
        },
        {
            id: "05",
            name: "Spring Bundle",
            price: "Start from $35",
            image: "/Explore/img-5.webp", 
            link: "Shop Season"
        }
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 340; 
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Arrow Icons
    const ArrowLeft = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    );
    const ArrowRight = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    );

    return (
        <section className="py-20 lg:py-28 bg-[#FFF0F5] dark:bg-[#0f0f0f] relative transition-colors duration-300 overflow-hidden">
            
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                
                {/* --- HEADER ROW --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                            <p className="text-pink-600 dark:text-pink-400 font-bold tracking-[0.2em] text-xs uppercase">
                                Discover Beauty
                            </p>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight">
                            Explore <span className="italic font-light text-pink-600">Categories</span>
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-pink-200 dark:border-pink-900 text-gray-600 dark:text-gray-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white dark:hover:bg-pink-600 transition-all duration-300 shadow-sm"
                            aria-label="Scroll Left"
                        >
                            <ArrowLeft />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-pink-200 dark:border-pink-900 text-gray-600 dark:text-gray-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white dark:hover:bg-pink-600 transition-all duration-300 shadow-sm"
                            aria-label="Scroll Right"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/* --- SLIDER --- */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-10 scroll-smooth scrollbar-hide select-none py-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="min-w-[280px] md:min-w-[340px] h-[480px] relative group rounded-[2rem] overflow-hidden cursor-pointer bg-white dark:bg-[#1a1a1a] shadow-lg shadow-pink-100/50 dark:shadow-none border border-white/50 dark:border-gray-800"
                        >
                            {/* Image */}
                            <img 
                                src={cat.image} 
                                alt={cat.name}
                                width="340" 
                                height="480"
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Floating Glass Content Card */}
                            <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/30 p-5 rounded-2xl shadow-xl overflow-hidden relative">
                                    
                                    {/* Shimmer Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

                                    <h3 className="font-serif text-2xl text-white mb-1 relative z-10">
                                        {cat.name}
                                    </h3>
                                    
                                    <div className="flex justify-between items-center mt-3 relative z-10">
                                        <div>
                                            <p className="text-pink-200 text-xs uppercase tracking-wider font-semibold">
                                                From
                                            </p>
                                            <p className="text-white font-medium">
                                                {cat.price}
                                            </p>
                                        </div>
                                        
                                        <span className="w-10 h-10 bg-white text-pink-600 rounded-full flex items-center justify-center transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                                            <ArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
};

export default Categories;