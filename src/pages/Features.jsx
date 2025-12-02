import React from 'react';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Fresh From Garden",
            description: "We source our flowers directly from the best local gardens every morning for maximum freshness.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 1 4.5 4.5M7.5 12H9m3 4.5a4.5 4.5 0 1 1 4.5-4.5M12 16.5V15m0-12v3m0 12v3M3 12h3m12 0h3M4.929 4.929l2.121 2.121m9.9 9.9l2.121 2.121M4.929 19.071l2.121-2.121m9.9-9.9l2.121-2.121"/></svg>
            )
        },
        {
            id: 2,
            title: "Handmade with Love",
            description: "Every bouquet is artistically arranged by our expert florists with attention to every detail.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            )
        },
        {
            id: 3,
            title: "Same Day Delivery",
            description: "Order before 2 PM and get your happiness delivered today within the city area.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            )
        },
        {
            id: 4,
            title: "7-Day Freshness",
            description: "We guarantee our flowers will stay fresh and vibrant for at least 7 days.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
            )
        }
    ];

    return (
        <section className="py-20 lg:py-28 px-6 bg-[#FFF0F5] dark:bg-[#0f0f0f] relative overflow-hidden transition-colors duration-300">
            
            {/* Soft Background Glows (Pink/Purple Theme matching Hero) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-400/5 dark:bg-pink-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- SECTION HEADER --- */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
                    
                    {/* Tagline */}
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                        <p className="text-pink-600 dark:text-pink-400 font-bold tracking-[0.2em] text-xs uppercase">
                            Our Promise
                        </p>
                        <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-3xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight">
                        Why Choose Our <br />
                        <span className="relative inline-block mt-2">
                            {/* Gradient Text Pink to Purple */}
                            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500">
                                Premium Service?
                            </span>
                            {/* Brush Stroke (Pink) */}
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-500/40 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00025 6.99999C45.5002 1.5 130 -2.5 198.5 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto">
                        We don't just sell products; we curate experiences. Discover the standard of excellence that defines us.
                    </p>
                </div>

                {/* --- FEATURES GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-pink-200 dark:hover:border-pink-900/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-900/5 dark:hover:shadow-none"
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 rounded-xl bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                {item.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-light">
                                {item.description}
                            </p>

                            {/* Decorative Corner Dot */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 rounded-full bg-pink-500/20"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;