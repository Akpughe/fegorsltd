import React from 'react';
import Link from 'next/link';

export default function BoldCTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-eco-green via-eco-green-light to-sky-blue"></div>

            {/* Animated Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-navy/10 rounded-full blur-3xl animate-pulse animation-delay-100"></div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Content */}
            <div className="container-custom mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white font-semibold">Limited Availability This Month</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
                        Ready to make
                        <span className="block mt-2">the switch?</span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Join hundreds of homes and businesses across Scotland choosing healthier, safer, smarter cleaning.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link
                            href="/quote"
                            className="group bg-white text-eco-green hover:bg-soft-grey px-10 py-5 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl flex items-center gap-3"
                        >
                            <span>Get Your Free Quote</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <Link
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-eco-green px-10 py-5 rounded-xl font-bold text-lg transition-all duration-200"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">No contracts</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">100% satisfaction guarantee</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Same-day quotes</span>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="mt-12 text-white/80 text-sm">
                        <p>Questions? Call us at <a href="tel:+441234567890" className="underline hover:text-white font-semibold">01234 567 890</a> or email <a href="mailto:hello@fegors.com" className="underline hover:text-white font-semibold">hello@fegors.com</a></p>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.1"/>
                </svg>
            </div>
        </section>
    );
}
