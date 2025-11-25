import React from 'react';

const BestSelling = () => {
    
    // ডামি প্রোডাক্ট ডেটা
    const products = [
        {
            id: 1,
            name: "Pink Elegance",
            price: "$45.00",
            oldPrice: "$55.00",
            rating: 5.0,
            img: "/Selling/img-1.webp",
            tag: "Sale"
        },
        {
            id: 2,
            name: "Summer Breeze",
            price: "$38.00",
            oldPrice: null,
            rating: 4.8,
            img: "/Selling/img-2.webp",
            tag: "New"
        },
        {
            id: 3,
            name: "Red Romance",
            price: "$65.00",
            oldPrice: "$80.00",
            rating: 4.9,
            img: "/Selling/img-3.webp",
            tag: "Popular"
        },
        {
            id: 4,
            name: "White Purity",
            price: "$42.00",
            oldPrice: null,
            rating: 4.7,
            img: "/Selling/img-4.webp",
            tag: null
        }
    ];

    return (
        <section className="py-20 px-6 lg:px-12 bg-gray-50 relative overflow-hidden">
            
            {/* --- Background Blobs (Matching Hero Style) --- */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse delay-700"></div>

            <div className="container mx-auto">
                
                {/* --- Header Section --- */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-pink-500 font-bold tracking-wider uppercase text-sm mb-2 block">Customer Favorites</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Best Selling <span className="text-pink-500 italic">Blooms</span>
                    </h2>
                    <p className="text-gray-500">
                        Explore our most loved floral arrangements, hand-picked and crafted with love for your special occasions.
                    </p>
                </div>

                {/* --- Product Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl hover:shadow-pink-900/10 transition-all duration-500 relative top-0 hover:-top-2">
                            
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-2xl h-80 w-full">
                                {/* Tag */}
                                {product.tag && (
                                    <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        {product.tag}
                                    </div>
                                )}

                                {/* Main Image - Lazy Load Added */}
                                <img 
                                    src={product.img} 
                                    alt={product.name}
                                    loading="lazy"      // স্ক্রল করলে লোড হবে
                                    decoding="async"    // ব্রাউজারকে স্লো হতে দেবে না
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay & Actions */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                                    
                                    {/* Add to Cart */}
                                    <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-colors" title="Add to Cart">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                    </button>
                                    
                                    {/* Wishlist */}
                                    <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-colors" title="Add to Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </button>

                                    {/* Quick View */}
                                    <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-colors" title="Quick View">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-5 px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors cursor-pointer">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        <span className="text-gray-400 font-sans ml-1">({product.rating})</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                    {product.oldPrice && (
                                        <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- View All Button --- */}
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
                        View All Collection
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BestSelling;