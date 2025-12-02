import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-[#FFF0F5] dark:bg-[#0f0f0f] relative overflow-hidden transition-colors duration-300">
            
            {/* --- Decorative Background Blobs --- */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-400/10 dark:bg-pink-500/10 rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[100px] opacity-50 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Border Radius কমিয়ে rounded-2xl বা rounded-3xl করা হয়েছে */}
                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl md:rounded-3xl shadow-2xl shadow-pink-100/50 dark:shadow-none overflow-hidden flex flex-col lg:flex-row border border-white dark:border-gray-800">
                    
                    {/* --- Left Side: Image --- */}
                    {/* overflow-hidden এখানে দেওয়া হয়েছে যাতে জুম করলে ইমেজ বাইরে না যায় */}
                    <div className="w-full lg:w-5/12 relative h-64 sm:h-80 lg:h-auto group overflow-hidden">
                        
                        {/* Image: z-0 দেওয়া হয়েছে যাতে এটি গ্রাডিয়েন্টের নিচে থাকে */}
                        <img 
                            src="/News/img-1.avif" 
                            alt="Newsletter Floral" 
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 z-0"
                        />
                        
                        {/* Overlay Gradient: z-10 দেওয়া হয়েছে যাতে এটি সবসময় ইমেজের উপরে থাকে */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30 z-10 pointer-events-none"></div>
                        
                        {/* Text over Image */}
                        <div className="absolute bottom-6 left-6 text-white hidden lg:block z-20">
                            <p className="font-serif italic text-2xl drop-shadow-md">Join the Club</p>
                            <p className="text-sm text-white/90 mt-1 drop-shadow-sm">Get inspired every week.</p>
                        </div>
                    </div>

                    {/* --- Right Side: Content & Form --- */}
                    <div className="w-full lg:w-7/12 p-6 md:p-10 lg:p-14 flex flex-col justify-center text-center lg:text-left relative">
                        
                        {/* Decoration Icon */}
                        <div className="hidden lg:flex absolute top-8 right-8 w-10 h-10 bg-pink-50 dark:bg-pink-900/20 rounded-full items-center justify-center text-pink-600 dark:text-pink-400 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7.171-4.043a2 2 0 011.878 0l7.171 4.043a2 2 0 01.89 1.664V19a2 2 0 01-2 2h-14a2 2 0 01-2-2z" />
                            </svg>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                            <span className="w-6 h-[2px] bg-pink-500 inline-block"></span>
                            <span className="text-pink-600 dark:text-pink-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                                Newsletter
                            </span>
                        </div>

                        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight">
                            Unlock <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">15% OFF</span> <br/> 
                            Your First Order
                        </h2>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 font-light">
                            Sign up for our newsletter to receive exclusive floral tips, new collection alerts, and special discounts directly to your inbox.
                        </p>

                        {/* --- Modern Form --- */}
                        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto lg:mx-0">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="w-full pl-10 md:pl-11 pr-4 py-3 md:py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-full focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 block transition-all outline-none"
                                    required
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full shadow-lg shadow-gray-900/20 dark:shadow-white/10 hover:bg-pink-600 dark:hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 text-sm whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="text-gray-400 dark:text-gray-500 text-[10px] md:text-xs mt-4">
                            *We promise not to spam your inbox. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;