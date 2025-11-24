import React, { useRef } from 'react';

const Categories = () => {
    const scrollContainerRef = useRef(null);

    const categories = [
        {
            id: "01",
            name: "Romantic Love",
            price: "Start from $29",
            image: "/Explore/img-1.webp", // Deep Red Roses
            link: "Shop Collection"
        },
        {
            id: "02",
            name: "Wedding Elegance",
            price: "Start from $150",
            image: "/Explore/img-2.webp", // White & Soft Pink
            link: "Plan Wedding"
        },
        {
            id: "03",
            name: "Sympathy Lilies",
            price: "Start from $45",
            image: "/Explore/img-3.webp", // Peaceful White
            link: "Send Comfort"
        },
        {
            id: "04",
            name: "Luxury Decor",
            price: "Start from $60",
            image: "/Explore/img-4.webp", // Artistic Vase
            link: "View Decor"
        },
        {
            id: "05",
            name: "Spring Bundle",
            price: "Start from $35",
            image: "/Explore/img-5.webp", // Colorful Tulips
            link: "Shop Season"
        }
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 320; 
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Arrow Icons (SVG)
    const ArrowLeft = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    );
    const ArrowRight = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    );

    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12">
                
                {/* --- HEADER ROW --- */}
                <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
                    <div>
                        <p className="text-pink-500 font-bold text-xs tracking-[0.2em] uppercase mb-2">
                            Discover Beauty
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
                            Explore Categories
                        </h2>
                    </div>

                    {/* Navigation Buttons (Square & Minimal) */}
                    <div className="flex gap-3">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
                        >
                            <ArrowLeft />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/* --- SLIDER --- */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-10 scroll-smooth scrollbar-hide select-none"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="min-w-[280px] md:min-w-[320px] h-[450px] relative group rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <img 
                                src={cat.image} 
                                alt={cat.name} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />

                            {/* Dark Overlay (Gradient) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                            {/* Floating Glass Content */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl transition-all duration-500 group-hover:bg-white/20 group-hover:translate-y-[-5px]">
                                    <h3 className="font-serif text-2xl text-white mb-1">
                                        {cat.name}
                                    </h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-pink-200 text-sm font-medium">
                                            {cat.price}
                                        </p>
                                        {/* Small Arrow Button inside card */}
                                        <span className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                            <ArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hide Scrollbar CSS */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Categories;
