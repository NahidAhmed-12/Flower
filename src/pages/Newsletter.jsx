import React from 'react';

const Newsletter = () => {
    return (
        <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
            
            {/* --- Background Image with Parallax Effect --- */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed' // Parallax effect
                }}
            >
                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
            </div>

            {/* --- Main Content Container (Glassmorphism) --- */}
            <div className="relative z-10 container mx-auto">
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl animate-float">
                    
                    {/* Icon / Decorative Element */}
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-pink-500 animate-bounce-slow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>

                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                        Join Our <span className="text-pink-300 italic">Blooming</span> Community
                    </h2>
                    
                    <p className="text-gray-200 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                        Subscribe to our newsletter and get <span className="font-bold text-white">15% OFF</span> on your first order. Plus, receive weekly tips on flower care.
                    </p>

                    {/* --- Input Form --- */}
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative group">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="w-full px-6 py-4 rounded-full bg-white/90 border-2 border-transparent focus:border-pink-500 focus:bg-white focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-300"
                            required
                        />
                        <button 
                            type="submit" 
                            className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-pink-500/30 whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Spam Disclaimer */}
                    <p className="text-gray-300 text-xs mt-6 opacity-80">
                        We respect your privacy. No spam, ever.
                    </p>
                </div>
            </div>

            {/* --- Floating Blobs for decoration --- */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        </section>
    );
};

export default Newsletter;
