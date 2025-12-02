import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#FFFBF7] dark:bg-[#050505] text-gray-900 dark:text-white pt-20 pb-10 relative overflow-hidden font-sans border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
            
            {/* --- Background Decorative Blobs --- */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-400/5 dark:bg-pink-900/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/5 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                
                {/* --- Main Grid Content --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* 1. Brand & About */}
                    <div className="space-y-6">
                        <a href="#" className="flex items-center gap-2 group">
                            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                                LUXE<span className="text-pink-600">.</span>
                            </h2>
                        </a>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
                            Crafting emotions with nature's finest blooms. We deliver happiness, one bouquet at a time, straight to your doorstep.
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                                <a 
                                    key={social} 
                                    href="#" 
                                    className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-pink-600 hover:border-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span className="capitalize text-[10px] font-bold">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-gray-900 dark:text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Shop Collection', 'Our Story', 'Blog', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 group font-light">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-pink-600 dark:bg-pink-400 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Customer Care */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-gray-900 dark:text-white">Customer Care</h3>
                        <ul className="space-y-3">
                            {['FAQ', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 font-light">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Contact Info */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4 group">
                                <div className="text-pink-600 dark:text-pink-400 shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 font-light">
                                    <p>123 Garden Street,</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="text-pink-600 dark:text-pink-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <a href="mailto:hello@bloom.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-light">
                                    hello@bloom.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="text-pink-600 dark:text-pink-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <a href="tel:+880123456789" className="text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-light">
                                    +880 1234 567 89
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Divider --- */}
                <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>

                {/* --- Bottom Section --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 dark:text-gray-500 text-xs text-center md:text-left font-light">
                        © {new Date().getFullYear()} <span className="text-gray-900 dark:text-white font-bold">LOXE </span>. All rights reserved.
                    </p>
                    
                    {/* Payment Icons */}
                    <div className="flex gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        {['Visa', 'Mastercard', 'PayPal', 'Bkash'].map((pay) => (
                            <div key={pay} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded text-[10px] text-gray-500 dark:text-gray-400 font-bold">
                                {pay}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;