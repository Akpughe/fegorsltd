'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/sustainability', label: 'Sustainability' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white shadow-lg border-b border-gray-100'
                    : 'bg-white/90 backdrop-blur-md'
            }`}
        >
            <nav className="container-custom mx-auto px-4 md:px-6 py-3 md:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                        <Image
                            src="/fegors-logo.jpg"
                            alt="FEGORS Ltd Logo"
                            width={45}
                            height={45}
                            className="rounded-lg transition-transform duration-200 group-hover:scale-105"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-heading font-black text-brand-black leading-none">
                                FEGORS
                            </span>
                            <span className="text-[10px] md:text-xs text-eco-green font-semibold uppercase tracking-wide leading-none">
                                Eco Cleaning
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-eco-green transition-colors duration-150 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-eco-green transition-all duration-200 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Trust Badge + CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Trust Badge */}
                        <div className="flex items-center gap-1.5 text-xs text-gray-600">
                            <div className="flex -space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="font-semibold">4.9</span>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/quote"
                            className="inline-flex items-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-150 shadow-sm hover:shadow-md"
                        >
                            Get Quote
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Mobile CTA + Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <Link
                            href="/quote"
                            className="inline-flex items-center bg-eco-green text-white font-semibold px-4 py-2 rounded-lg text-sm"
                        >
                            Quote
                        </Link>
                        <button
                            className="text-brand-black p-1"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-down shadow-lg">
                    <div className="container-custom mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-eco-green transition-colors duration-150 font-medium py-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 50}ms` }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-semibold">4.9/5 from 500+ clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
