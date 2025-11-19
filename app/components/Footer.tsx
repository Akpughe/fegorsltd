import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-fegors-black text-white">
            <div className="container-custom mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Column */}
                    <div>
                        <h4 className="text-xl font-heading font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/sustainability" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xl font-heading font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/residential" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Residential
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/commercial" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Commercial
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/eco-cleaning" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Eco Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/specialist" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Specialist Cleaning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="text-xl font-heading font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/quote" className="text-gray-300 hover:text-fegors-green transition-colors duration-200">
                                    Request a Quote
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Fegors Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
