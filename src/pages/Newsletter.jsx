import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-[#FDF2F8] relative overflow-hidden">
            
            {/* --- Decorative Background Blobs --- */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto relative z-10">
                <div className="bg-white rounded-[20px] md:rounded-[3rem] shadow-2xl shadow-pink-900/10 overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">
                    
                    {/* --- Left Side: Image (Mobile: Top Banner) --- */}
                    <div className="w-full lg:w-5/12 relative h-[250px] lg:h-auto group">
                        <img 
                            src="/News/img-1.avif" 
                            alt="Newsletter Floral" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
                        
                        {/* Mobile Only Text Overlay (Optional) */}
                        <div className="absolute bottom-4 left-4 text-white lg:hidden">
                            <p className="font-serif italic text-lg">Join the club</p>
                        </div>
                    </div>

                    {/* --- Right Side: Content & Form --- */}
                    <div className="w-full lg:w-7/12 p-6 md:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left relative">
                        
                        {/* Decoration Icon */}
                        <div className="hidden lg:flex absolute top-10 right-10 w-12 h-12 bg-pink-50 rounded-full items-center justify-center text-pink-500 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7.171-4.043a2 2 0 011.878 0l7.171 4.043a2 2 0 01.89 1.664V19a2 2 0 01-2 2h-14a2 2 0 01-2-2z" />
                            </svg>
                        </div>

                        <span className="text-pink-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
                            Newsletter
                        </span>

                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">15% OFF</span> <br/> 
                            Your First Order
                        </h2>
                        
                        <p className="text-gray-500 text-sm md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
                            Sign up for our newsletter to receive exclusive floral tips, new collection alerts, and special discounts directly to your inbox.
                        </p>

                        {/* --- Modern Form --- */}
                        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto lg:mx-0">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-full focus:ring-2 focus:ring-pink-500 focus:border-pink-500 block transition-all outline-none"
                                    required
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-gray-900/20 hover:shadow-pink-600/30 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="text-gray-400 text-xs mt-5">
                            *We promise not to spam your inbox. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
