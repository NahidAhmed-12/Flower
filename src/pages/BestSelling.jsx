import React, { useState } from 'react';

const BestSelling = () => {
    
    // ডামি প্রোডাক্ট ডেটা
    const products = [
        {
            id: 1,
            name: "Pink Elegance",
            price: "$45.00",
            oldPrice: "$55.00",
            rating: 5.0,
            img: "/Selling/img-1.avif",
            tag: "Sale"
        },
        {
            id: 2,
            name: "Summer Breeze",
            price: "$38.00",
            oldPrice: null,
            rating: 4.8,
            img: "/Selling/img-2.avif",
            tag: "New"
        },
        {
            id: 3,
            name: "Red Romance",
            price: "$65.00",
            oldPrice: "$80.00",
            rating: 4.9,
            img: "/Selling/img-3.avif",
            tag: "Popular"
        },
        {
            id: 4,
            name: "White Purity",
            price: "$42.00",
            oldPrice: null,
            rating: 4.7,
            img: "/Selling/img-4.avif",
            tag: null
        }
    ];

    // --- State Management ---
    const [selectedImage, setSelectedImage] = useState(null); // বড় ছবির জন্য স্টেট
    const [wishlist, setWishlist] = useState([]); // লাভ রিঅ্যাক্টের জন্য স্টেট

    // লাভ বাটনে ক্লিক হ্যান্ডলার
    const toggleWishlist = (id) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id));
        } else {
            setWishlist([...wishlist, id]);
        }
    };

    return (
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FFF0F5] dark:bg-[#0f0f0f] relative overflow-hidden transition-colors duration-300">
            
            {/* --- Background Blobs --- */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-pink-400/10 dark:bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* --- Header Section --- */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                        <p className="text-pink-600 dark:text-pink-400 font-bold tracking-[0.2em] text-xs uppercase">
                            Customer Favorites
                        </p>
                        <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight">
                        Best Selling <span className="italic font-light text-pink-600">Blooms</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-light">
                        Explore our most loved floral arrangements, hand-picked and crafted with love for your special occasions.
                    </p>
                </div>

                {/* --- Product Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        // --- UPDATED UI: Reduced Border Radius & Premium Shadow ---
                        <div key={product.id} className="group bg-white dark:bg-[#1a1a1a] rounded-2xl p-3 border border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-pink-100/40 dark:hover:shadow-pink-900/10 transition-all duration-500 relative top-0 hover:-top-1">
                            
                            {/* Image Container - Radius Reduced for Premium Look */}
                            <div className="relative overflow-hidden rounded-xl h-80 w-full bg-gray-50 dark:bg-gray-800">
                                {/* Tag */}
                                {product.tag && (
                                    <div className="absolute top-3 left-3 z-20 bg-white/95 dark:bg-black/80 backdrop-blur text-gray-900 dark:text-white text-[10px] font-bold px-3 py-1 rounded-md shadow-sm tracking-widest uppercase">
                                        {product.tag}
                                    </div>
                                )}

                                {/* Main Image - Subtler Zoom */}
                                <img 
                                    src={product.img} 
                                    alt={product.name}
                                    loading="lazy"      
                                    decoding="async"    
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Hover Overlay & Actions */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 px-4">
                                    
                                    {/* Action Buttons */}
                                    <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2.5 rounded-full shadow-lg hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500 transition-colors" title="Add to Cart">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                    </button>
                                    
                                    <button 
                                        onClick={() => toggleWishlist(product.id)}
                                        className={`p-2.5 rounded-full shadow-lg transition-all duration-300 transform active:scale-90 ${
                                            wishlist.includes(product.id) 
                                            ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400' 
                                            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500'
                                        }`} 
                                        title="Add to Wishlist"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={wishlist.includes(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>

                                    <button 
                                        onClick={() => setSelectedImage(product.img)}
                                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2.5 rounded-full shadow-lg hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500 transition-colors" 
                                        title="Quick View"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Content (Text kept same as requested) */}
                            <div className="pt-5 px-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors cursor-pointer">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm bg-yellow-400/10 px-2 py-0.5 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        <span className="text-gray-700 dark:text-gray-300 font-sans font-medium">{product.rating}</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 mt-3">
                                    <span className="text-lg font-bold text-pink-600 dark:text-pink-400">{product.price}</span>
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
                    <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-bold tracking-wide hover:bg-pink-600 dark:hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg shadow-gray-900/20 dark:shadow-white/10 hover:-translate-y-0.5">
                        View All Collection
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

                {/* --- Image Modal --- */}
                {selectedImage && (
                    <div 
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div 
                            className="relative max-w-4xl w-full h-auto bg-transparent rounded-2xl overflow-hidden shadow-2xl transform transition-all scale-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-black p-2 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <img 
                                src={selectedImage} 
                                alt="Product Detail" 
                                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                            />
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default BestSelling;