import React from 'react';

const Categories = () => {
    const categories = [
        {
            id: "01",
            name: "Romantic Vibes",
            desc: "Red Roses & Lilies",
            image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
            link: "Shop Love"
        },
        {
            id: "02",
            name: "Wedding Exclusive",
            desc: "Bridal Bouquets",
            image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800&auto=format&fit=crop",
            link: "Plan Event"
        },
        {
            id: "03",
            name: "Sympathy & Care",
            desc: "White Lillies & Orchids",
            image: "https://images.unsplash.com/photo-1599818464670-348df8be422e?q=80&w=800&auto=format&fit=crop",
            link: "Send Care"
        },
        {
            id: "04",
            name: "Table Decors",
            desc: "Small Arrangements",
            image: "https://images.unsplash.com/photo-1582794543139-8ac92a9ab5d9?q=80&w=800&auto=format&fit=crop",
            link: "Decorate"
        }
    ];

    return (
        <section className="py-20 px-6 lg:px-12 bg-[#FDFBF7]">
            <div className="container mx-auto">
                
                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-pink-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">
                        Our Collections
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Blooms for Every <br/>
                        <span className="italic text-gray-400 font-light">Emotion</span>
                    </h2>
                </div>

                {/* --- CATEGORIES ROW --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="group relative h-[450px] lg:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg shadow-gray-200 hover:shadow-2xl hover:shadow-pink-900/10 transition-all duration-500"
                        >
                            {/* Background Image */}
                            <img 
                                src={cat.image} 
                                alt={cat.name} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Dark Gradient Overlay (Always visible but light, gets darker on hover) */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                            {/* Top Number Badge */}
                            <div className="absolute top-6 left-6 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white font-serif text-lg backdrop-blur-sm">
                                {cat.id}
                            </div>

                            {/* Bottom Content Area */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                
                                {/* Text Content */}
                                <div className="mb-4">
                                    <h3 className="text-white font-serif text-2xl font-bold mb-1 leading-tight">
                                        {cat.name}
                                    </h3>
                                    <p className="text-pink-200 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                        {cat.desc}
                                    </p>
                                </div>

                                {/* Action Button (Expands on Hover) */}
                                <div className="flex items-center gap-3">
                                    <span className="h-[1px] w-0 bg-white group-hover:w-12 transition-all duration-500 delay-100"></span>
                                    <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80 hover:text-pink-400 transition-colors">
                                        {cat.link}
                                    </span>
                                </div>
                            </div>

                            {/* Center Icon (Appears on Hover) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100 border border-white/40">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>

                        </div>
                    ))}
                </div>

                {/* --- BOTTOM TEXT (Trust Indicator) --- */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm">
                        Can't find what you're looking for? 
                        <a href="#" className="ml-2 font-bold text-gray-900 border-b border-gray-900 hover:text-pink-500 hover:border-pink-500 transition-all">
                            Browse Full Catalog
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Categories;
