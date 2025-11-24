import React from 'react';

const Categories = () => {
    const categories = [
        {
            id: "01",
            name: "Romantic Vibes",
            count: "45 Items",
            image: "https://images.unsplash.com/photo-1561547538-d3a8d9d436b9?q=80&w=800&auto=format&fit=crop",
            link: "Shop Love"
        },
        {
            id: "02",
            name: "Wedding Bloom",
            count: "28 Items",
            image: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=800&auto=format&fit=crop",
            link: "Plan Event"
        },
        {
            id: "03",
            name: "Sympathy & Care",
            count: "16 Items",
            image: "https://images.unsplash.com/photo-1603621766051-42c748c91828?q=80&w=800&auto=format&fit=crop",
            link: "Send Care"
        },
        {
            id: "04",
            name: "Home Decor",
            count: "32 Items",
            image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=800&auto=format&fit=crop",
            link: "Decorate"
        }
    ];

    // Reusable Arrow Icon Component (SVG)
    const ArrowIcon = ({ className }) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );

    return (
        <section className="py-24 px-6 lg:px-12 bg-[#FAF9F6]">
            <div className="container mx-auto">
                
                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2 block">
                            Curated Collections
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl font-medium text-stone-800 leading-[1.1]">
                            Choose the perfect <br />
                            <span className="text-stone-400 italic">blooms for you.</span>
                        </h2>
                    </div>
                    
                    {/* View All Button (Desktop) */}
                    <a href="#" className="hidden md:flex items-center gap-2 text-stone-800 hover:text-pink-600 transition-colors font-medium border-b border-stone-300 pb-1 hover:border-pink-600">
                        View Full Catalog
                        <ArrowIcon className="w-5 h-5" />
                    </a>
                </div>

                {/* --- CATEGORIES GRID --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="group cursor-pointer flex flex-col gap-4"
                        >
                            {/* Image Container - Arch Shape Design */}
                            <div className="relative overflow-hidden rounded-t-[120px] rounded-b-2xl h-[400px] w-full shadow-sm">
                                {/* Image with Zoom Effect */}
                                <img 
                                    src={cat.image} 
                                    alt={cat.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                                
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Floating Action Button */}
                                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                    <ArrowIcon className="w-5 h-5 text-pink-500" />
                                </div>
                            </div>

                            {/* Content Under Image */}
                            <div className="text-center mt-2 space-y-1">
                                <h3 className="font-serif text-2xl text-stone-800 group-hover:text-pink-600 transition-colors">
                                    {cat.name}
                                </h3>
                                <p className="text-stone-500 text-sm font-light tracking-wide">
                                    {cat.count}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-stone-800 font-medium border-b border-stone-800 pb-1">
                        View Full Catalog
                        <ArrowIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Categories;
