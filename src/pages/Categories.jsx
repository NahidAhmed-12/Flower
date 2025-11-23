import React from 'react';

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: "Wedding Floral",
            items: "120+ Products",
            price: "From $59",
            image: "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?q=80&w=800&auto=format&fit=crop",
            color: "bg-pink-100"
        },
        {
            id: 2,
            title: "Home Decor",
            items: "85 Products",
            price: "From $29",
            image: "https://images.unsplash.com/photo-1533616688419-07a58529e2e4?q=80&w=800&auto=format&fit=crop",
            color: "bg-purple-100"
        },
        {
            id: 3,
            title: "Gift Bundles",
            items: "50+ Sets",
            price: "From $45",
            image: "https://images.unsplash.com/photo-1595231916356-a86217efd123?q=80&w=800&auto=format&fit=crop",
            color: "bg-orange-100"
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
            
            {/* --- Background Decorative Text (Optional) --- */}
            <div className="absolute top-10 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03]">
                <h1 className="text-[10rem] md:text-[15rem] font-serif font-bold whitespace-nowrap text-gray-900 leading-none">
                    BLOOMING BLOOMING
                </h1>
            </div>

            <div className="container mx-auto relative z-10">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="h-[1px] w-8 bg-pink-500"></span>
                            <span className="text-pink-500 font-bold uppercase tracking-widest text-xs">Shop By Category</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            Curated <span className="italic font-light text-gray-400">Collections</span>
                        </h2>
                    </div>
                    
                    {/* View All Button */}
                    <a href="#" className="hidden md:flex items-center gap-3 text-sm font-bold uppercase tracking-wider hover:text-pink-500 transition-colors group">
                        See All Collections
                        <span className="bg-gray-100 p-2 rounded-full group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                    </a>
                </div>

                {/* --- CARDS GRID (ARCH SHAPE) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {categories.map((cat, index) => (
                        <div 
                            key={cat.id} 
                            className={`group relative flex flex-col items-center cursor-pointer ${index === 1 ? 'md:-translate-y-12' : ''}`} // মাঝখানের কার্ডটি একটু উপরে থাকবে
                        >
                            
                            {/* IMAGE CONTAINER (ARCH SHAPE) */}
                            <div className="relative w-full h-[450px] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-gray-200 border-4 border-white transition-all duration-500 ease-in-out transform group-hover:-translate-y-2">
                                
                                {/* Image */}
                                <img 
                                    src={cat.image} 
                                    alt={cat.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>

                                {/* Floating Tag (Top Right) */}
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    {cat.items}
                                </div>

                                {/* Bottom Glassmorphism Info (Initially hidden or minimal) */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-3xl p-5 flex justify-between items-center shadow-lg transform translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Starting at</p>
                                        <p className="text-xl font-serif font-bold text-pink-500">{cat.price}</p>
                                    </div>
                                    <div className="h-10 w-10 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:bg-pink-500 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* TITLE BELOW IMAGE */}
                            <div className="mt-6 text-center">
                                <h3 className="font-serif text-3xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors duration-300">
                                    {cat.title}
                                </h3>
                                <div className="h-1 w-12 bg-gray-200 mx-auto mt-3 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Mobile Only Button */}
                <div className="mt-12 text-center md:hidden">
                    <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium shadow-lg w-full">View All Collections</button>
                </div>

            </div>
        </section>
    );
};

export default Categories;
