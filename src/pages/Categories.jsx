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
            const scrollAmount = 350; 
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Icons
    const ArrowLeft = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    );
    const ArrowRight = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    );
    const ArrowDiagonal = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    );

    return (
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
            
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-100/40 dark:bg-rose-900/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                 <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-14 gap-8">
                    
                   
                    <div className="max-w-xl text-center md:text-left">
                      
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <span className="w-10 h-[1px] bg-rose-500"></span>
                            <p className="text-rose-600 dark:text-rose-400 font-semibold tracking-widest text-xs uppercase">
                                Our Collections
                            </p>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white leading-[1.1]">
                            Curated floral <br />
                            <span className="italic font-light text-pink-600">masterpieces.</span>
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300"
                            aria-label="Scroll Left"
                        >
                            <ArrowLeft />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300"
                            aria-label="Scroll Right"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/* --- SLIDER --- */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-12 scroll-smooth scrollbar-hide select-none py-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="min-w-[280px] md:min-w-[320px] h-[460px] relative group rounded-xl overflow-hidden cursor-pointer bg-gray-200 dark:bg-[#1a1a1a]"
                        >
                            {/* Image with Zoom Effect */}
                            <img 
                                src={cat.image} 
                                alt={cat.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Refined Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                            {/* Content Layout */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                
                                {/* Top Line: Name & Price */}
                                <div className="border-b border-white/20 pb-4 mb-4">
                                    <h3 className="font-serif text-2xl mb-1 tracking-wide">
                                        {cat.name}
                                    </h3>
                                    <p className="text-white/70 text-sm font-light">
                                        {cat.price}
                                    </p>
                                </div>

                                {/* Bottom Interaction: Button */}
                                <div className="flex items-center justify-between opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm font-medium tracking-wider uppercase">
                                        {cat.link}
                                    </span>
                                    <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                        <ArrowDiagonal />
                                    </span>
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
            `}</style>
        </section>
    );
};

export default Categories;