import React from 'react';
import Button from '../Button';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/clean_office_interior.webp)',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                {/* Overlay - Deep Navy gradient */}
                <div className="absolute inset-0 bg-gradient-hero"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom mx-auto px-6 text-left max-w-3xl">
                <h1 className="text-white mb-6 animate-fade-in-up">
                    Professional Cleaning for a Cleaner Future.
                </h1>

                <p className="text-white/90 text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up animation-delay-100">
                    At Fegors, we provide high-quality residential and commercial cleaning using modern, eco-friendly methods designed to protect your space — and the planet.
                </p>

                <div className="animate-fade-in-up animation-delay-200">
                    <Button href="/quote" variant="cta">
                        Request a Quote
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <svg
                    className="w-6 h-6 text-white opacity-75"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
}
