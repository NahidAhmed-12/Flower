import React, { useRef } from 'react';

const Categories = () => {
    // স্লাইডারের জন্য Ref ব্যবহার করা হচ্ছে
    const scrollContainerRef = useRef(null);

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
        },
        // স্লাইডার বোঝানোর জন্য আরও ২টা এক্সট্রা ক্যাটাগরি দিলাম
        {
            id: "05",
            name: "Birthday Bash",
            count: "50 Items",
            image: "https://images.unsplash.com/photo-1530299156074-25d973a60b8e?q=80&w=800&auto=format&fit=crop",
            link: "Celebrate"
        },
        {
            id: "06",
            name: "Office Plants",
            count: "12 Items",
            image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop",
            link: "Greenery"
        }
    ];

    // স্ক্রল করার ফাংশন
    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            // কার্ডের প্রস্থ (320px) + গ্যাপ (24px) = ৩৪৫ পিক্সেল সরাবে
            const scrollAmount = 345; 
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // আইকন কম্পোনেন্ট (SVG)
    const ArrowLeft = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
        </svg>
    );

    const ArrowRight = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
        </svg>
    );

    return (
        <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                
                {/* --- HEADER SECTION WITH BUTTONS --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl mb-6 md:mb-0">
                        <span className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2 block">
                            Our Collections
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-medium text-stone-800 leading-tight">
                            Fresh Blooms <span className="text-stone-400 italic">For You</span>
                        </h2>
                    </div>

                    {/* NAVIGATION BUTTONS */}
                    <div className="flex gap-4">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 active:scale-95"
                        >
                            <ArrowLeft />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 active:scale-95"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/* --- SLIDER CONTAINER --- */}
                {/* scrollbar-hide ক্লাসটি কাস্টম CSS, নিচে স্টাইল দেওয়া আছে */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 scroll-smooth scrollbar-hide select-none cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Firefox & IE Hide Scrollbar
                >
                    {categories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="min-w-[300px] md:min-w-[340px] group flex flex-col gap-4"
                        >
                            {/* Image Container - Arch Shape */}
                            <div className="relative overflow-hidden rounded-t-[120px] rounded-b-2xl h-[420px] w-full bg-gray-100 shadow-sm">
                                <img 
                                    src={cat.image} 
                                    alt={cat.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                                
                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500"></div>

                                {/* Bottom Text inside Image (Optional Look) */}
                                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-serif text-2xl text-white mb-1">
                                        {cat.name}
                                    </h3>
                                    <p className="text-white/80 text-sm font-medium flex items-center gap-2">
                                        {cat.count} 
                                        <span className="w-8 h-[1px] bg-white/50 inline-block"></span>
                                        {cat.link}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
            {/* Hide Scrollbar Style Injection for Webkit Browsers (Chrome/Safari) */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Categories;
