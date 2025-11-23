import React from 'react';

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Wedding & Events",
            count: "120+ Items",
            img: "https://images.unsplash.com/photo-1519225468359-29f429ee8a46?q=80&w=800&auto=format&fit=crop",
            colSpan: "md:col-span-2", // বড় কার্ড
            rowSpan: "md:row-span-2", // লম্বা কার্ড
            delay: "0"
        },
        {
            id: 2,
            name: "Birthday Special",
            count: "45 Items",
            img: "https://images.unsplash.com/photo-1563241527-474705407b3f?q=80&w=800&auto=format&fit=crop",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: "100"
        },
        {
            id: 3,
            name: "Love & Romance",
            count: "85 Items",
            img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: "200"
        },
        {
            id: 4,
            name: "Office Decor",
            count: "30 Items",
            img: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=800&auto=format&fit=crop",
            colSpan: "md:col-span-2", // চওড়া কার্ড
            rowSpan: "md:row-span-1",
            delay: "300"
        }
    ];

    return (
        <section className="py-20 px-6 lg:px-12 bg-white relative z-10">
            <div className="container mx-auto">
                
                {/* --- HEADLINE --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <span className="text-pink-500 font-bold tracking-wider uppercase text-sm mb-2 block">Collections</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Shop by <span className="italic text-gray-400">Occasion</span>
                        </h2>
                    </div>
                    
                    <button className="group flex items-center gap-2 text-gray-900 font-medium hover:text-pink-500 transition-colors pb-1 border-b border-gray-300 hover:border-pink-500">
                        View All Categories
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

                {/* --- GRID LAYOUT --- */}
                {/* Masonry Style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
                    
                    {categories.map((cat) => (
                        <div 
                            key={cat.id}
                            className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${cat.colSpan} ${cat.rowSpan}`}
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 w-full h-full bg-gray-200">
                                <img 
                                    src={cat.img} 
                                    alt={cat.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                            </div>

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Content (Text & Button) */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div>
                                    <p className="text-pink-300 text-sm font-medium mb-1 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {cat.count}
                                    </p>
                                    <h3 className="text-white font-serif text-2xl md:text-3xl font-bold">
                                        {cat.name}
                                    </h3>
                                </div>
                                
                                {/* Arrow Circle Button */}
                                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-pink-500 group-hover:border-pink-500 transition-all duration-300 rotate-45 group-hover:rotate-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* --- PROMO CARD (Last block for variety) --- */}
                    <div className="md:col-span-1 md:row-span-1 bg-pink-50 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border border-pink-100 group hover:bg-pink-100 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-pink-500/30 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Custom Bouquet</h3>
                        <p className="text-sm text-gray-500 mb-4">Create your own arrangement.</p>
                        <button className="text-xs font-bold uppercase tracking-widest text-pink-600 border-b border-pink-300 pb-0.5 hover:text-pink-800 hover:border-pink-800 transition-all">Start Now</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Categories;
