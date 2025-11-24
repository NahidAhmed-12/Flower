import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden font-sans">
            
            {/* --- Background Decorative Blobs (Subtle Glow) --- */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                
                {/* --- Main Grid Content --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* 1. Brand & About */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold">
                            Flower<span className="text-pink-500">Shop.</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting emotions with nature's finest blooms. We deliver happiness, one bouquet at a time, straight to your doorstep.
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                                <a 
                                    key={social} 
                                    href="#" 
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    {/* Icon Placeholder (You can use FontAwesome or HeroIcons here) */}
                                    <span className="capitalize text-[10px] font-bold">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-pink-100">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Shop Collection', 'Our Story', 'Blog', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200 flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[2px] bg-pink-500 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Customer Care */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-pink-100">Customer Care</h3>
                        <ul className="space-y-4">
                            {['FAQ', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200 hover:pl-1">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-pink-100">Get in Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="bg-gray-800 p-3 rounded-full text-pink-500 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">123 Garden Street,</p>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="bg-gray-800 p-3 rounded-full text-pink-500 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <a href="mailto:support@flowershop.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                                    support@flowershop.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="bg-gray-800 p-3 rounded-full text-pink-500 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <a href="tel:+880123456789" className="text-gray-400 text-sm hover:text-white transition-colors">
                                    +880 1234 567 89
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Divider --- */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* --- Bottom Section --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} <span className="text-pink-500 font-bold">FlowerShop</span>. All rights reserved.
                    </p>
                    
                    {/* Payment Icons (Simulated) */}
                    <div className="flex gap-3">
                        {['Visa', 'Mastercard', 'PayPal', 'Bkash'].map((pay) => (
                            <div key={pay} className="px-3 py-1 bg-white/5 border border-white/10 rounded cursor-pointer hover:bg-white/10 transition-colors text-[10px] text-gray-400 font-medium">
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
