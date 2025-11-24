import React from 'react';

const Testimonials = () => {
    
    const reviews = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Wedding Planner",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            text: "I have ordered flowers for multiple events, and they never disappoint! The flowers are always fresh, and the arrangements are even more beautiful in person than in the pictures."
        },
        {
            id: 2,
            name: "Michael Ross",
            role: "Regular Customer",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            text: "The delivery was super fast! I ordered a bouquet for my wife's anniversary at the last minute, and it arrived within 3 hours. She absolutely loved the 'Pink Elegance' bouquet."
        },
        {
            id: 3,
            name: "Emily Watson",
            role: "Interior Designer",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 4,
            text: "Beautiful packaging and very aromatic flowers. It added a perfect touch to my living room. The customer support team was also very helpful in guiding me to choose the right scent."
        }
    ];

    // স্টার রেন্ডার করার ফাংশন
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg 
                key={index} 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
        ));
    };

    return (
        <section className="py-20 px-6 lg:px-12 bg-[#FDF8F9] relative overflow-hidden">
            
            {/* --- Background Elements (Matching Hero) --- */}
            {/* Top Left Blob */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            {/* Bottom Right Blob */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

            <div className="container mx-auto relative z-10">
                
                {/* --- Section Header --- */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-pink-500 font-bold tracking-widest uppercase text-xs mb-3 block">Testimonials</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Love Notes from <br />
                        <span className="text-pink-500 italic">Happy Clients</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        We don't just deliver flowers; we deliver happiness. Here is what our cherished customers have to say about us.
                    </p>
                </div>

                {/* --- Reviews Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div 
                            key={review.id} 
                            className="group bg-white p-8 rounded-[2rem] shadow-lg border border-pink-50 hover:shadow-2xl hover:shadow-pink-900/10 hover:-translate-y-2 transition-all duration-300 relative"
                        >
                            {/* Quote Icon Background */}
                            <div className="absolute top-8 right-8 text-pink-100 group-hover:text-pink-500/20 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
                            </div>

                            {/* User Info */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-1 rounded-full border-2 border-pink-100 group-hover:border-pink-500 transition-colors duration-300">
                                    <img 
                                        src={review.img} 
                                        alt={review.name} 
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 font-serif text-lg">{review.name}</h4>
                                    <p className="text-xs text-pink-500 uppercase font-bold tracking-wider">{review.role}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {renderStars(review.rating)}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-500 leading-relaxed relative z-10 italic">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- Bottom Stats (Optional) --- */}
                <div className="mt-16 border-t border-pink-100 pt-10 flex flex-wrap justify-center gap-10 md:gap-20 text-center">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 font-serif">5000+</h3>
                        <p className="text-gray-500 text-sm mt-1">Bouquets Delivered</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 font-serif">98%</h3>
                        <p className="text-gray-500 text-sm mt-1">Happy Customers</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 font-serif">15+</h3>
                        <p className="text-gray-500 text-sm mt-1">Years Experience</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
