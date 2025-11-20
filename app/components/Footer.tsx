import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-deep-navy text-white">
            <div className="container-custom mx-auto px-6 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                src="/fegors-logo.jpg"
                                alt="FEGORS Ltd Logo"
                                width={45}
                                height={45}
                                className="rounded-lg"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-heading font-black text-white leading-none">
                                    FEGORS
                                </span>
                                <span className="text-xs text-eco-green font-semibold uppercase tracking-wide leading-none">
                                    Eco Cleaning
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Scotland&apos;s trusted eco-friendly cleaning service. 100% water-based technology, zero harsh chemicals.
                        </p>
                        {/* Trust Badges */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-gray-400 font-semibold">4.9/5 Rating</span>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-sm font-heading font-bold mb-4 text-white uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/sustainability" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-sm font-heading font-bold mb-4 text-white uppercase tracking-wider">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services/residential" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Residential
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/commercial" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Commercial
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/eco-cleaning" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Eco Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/specialist" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Specialist Cleaning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="text-sm font-heading font-bold mb-4 text-white uppercase tracking-wider">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/quote" className="text-gray-400 hover:text-eco-green transition-colors duration-150 text-sm">
                                    Request a Quote
                                </Link>
                            </li>
                        </ul>

                        {/* Contact Info */}
                        <div className="mt-6">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-400">
                                    <svg className="w-5 h-5 text-eco-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+441234567890" className="hover:text-eco-green transition-colors">
                                        01234 567 890
                                    </a>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-400">
                                    <svg className="w-5 h-5 text-eco-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:hello@fegors.com" className="hover:text-eco-green transition-colors">
                                        hello@fegors.com
                                    </a>
                                </li>
                            </ul>

                            {/* Social Media */}
                            <div className="mt-6">
                                <h5 className="text-xs font-bold mb-3 text-gray-400 uppercase tracking-wider">Follow Us</h5>
                                <div className="flex gap-3">
                                    <a href="https://instagram.com/thebrandfegors" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-eco-green rounded-lg flex items-center justify-center transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a href="https://tiktok.com/@fegorsltd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-eco-green rounded-lg flex items-center justify-center transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} Fegors Ltd. All Rights Reserved.
                        </p>
                        <div className="flex flex-wrap gap-6 text-xs text-gray-400">
                            <Link href="/privacy" className="hover:text-eco-green transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-eco-green transition-colors">
                                Terms of Service
                            </Link>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-eco-green" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Net Zero Committed
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
