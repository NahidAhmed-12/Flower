import React from 'react';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Fresh From Garden",
            description: "We source our flowers directly from the best local gardens every morning.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 1 4.5 4.5M7.5 12H9m3 4.5a4.5 4.5 0 1 1 4.5-4.5M12 16.5V15m0-12v3m0 12v3M3 12h3m12 0h3M4.929 4.929l2.121 2.121m9.9 9.9l2.121 2.121M4.929 19.071l2.121-2.121m9.9-9.9l2.121-2.121"/></svg>
            ),
            bg: "bg-pink-50"
        },
        {
            id: 2,
            title: "Handmade with Love",
            description: "Every bouquet is artistically arranged by our expert florists.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            ),
            bg: "bg-purple-50"
        },
        {
            id: 3,
            title: "Same Day Delivery",
            description: "Order before 2 PM and get your happiness delivered today.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            ),
            bg: "bg-orange-50"
        },
        {
            id: 4,
            title: "7-Day Freshness",
            description: "We guarantee our flowers will stay fresh for at least 7 days.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
            ),
            bg: "bg-blue-50"
        }
    ];

    return (
        <section className="py-20 px-6 lg:px-12 bg-[#faf9f6] relative overflow-hidden">
            {/* Decorative Background Blur similar to Hero */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-100/40 blur-3xl rounded-full -z-10 opacity-60"></div>

            <div className="container mx-auto">
                {/* --- SECTION HEADER --- */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why We Are <span className="text-pink-500 italic">Special?</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We don't just sell flowers, we create moments. Experience the premium quality that sets us apart.
                    </p>
                </div>

                {/* --- FEATURES GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item) => (
                        <div 
                            key={item.id} 
                            className="group bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-pink-900/5 hover:-translate-y-2 transition-all duration-300 cursor-default"
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- PROMO BANNER (Optional Bridge to next section) --- */}
                <div className="mt-20 rounded-[2.5rem] bg-gray-900 overflow-hidden relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 shadow-2xl shadow-gray-900/20">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                         <svg className="h-full w-full text-gray-700" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                             <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                         </svg>
                    </div>

                    <div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="font-serif text-3xl text-white mb-2">Get <span className="text-pink-400 italic">15% Off</span> Your First Order</h3>
                        <p className="text-gray-400">Subscribe to our newsletter and start blooming today.</p>
                    </div>

                    <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:bg-white/20 transition-all w-full md:w-64 backdrop-blur-sm"
                        />
                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-pink-500/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
