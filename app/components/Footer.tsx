import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-deep-navy text-white">
            <div className="container-custom mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Column */}
                    <div>
                        <h4 className="text-xl font-heading font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/sustainability" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xl font-heading font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/residential" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Residential
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/commercial" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Commercial
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/eco-cleaning" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Eco Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/specialist" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Specialist Cleaning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="text-xl font-heading font-semibold mb-4 text-white">Connect</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/quote" className="text-gray-300 hover:text-eco-green transition-colors duration-150">
                                    Request a Quote
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-deep-navy-light pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Fegors Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
