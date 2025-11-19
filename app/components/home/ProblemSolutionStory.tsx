import React from 'react';
import Image from 'next/image';

export default function ProblemSolutionStory() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container-custom mx-auto px-6">
                {/* The Problem - Left aligned, asymmetric */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-24 bg-red-500"></div>
                            <span className="text-red-500 font-bold text-sm uppercase tracking-wider mb-4 block">The Problem</span>
                            <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-6 leading-tight">
                                Traditional cleaning is
                                <span className="block text-red-500">poisoning our spaces</span>
                            </h2>
                            <div className="space-y-4 text-lg text-gray-700">
                                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong>Harsh chemicals</strong> leave toxic residues that harm your family, pets, and staff
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong>Poor indoor air quality</strong> from chemical fumes causes headaches and respiratory issues
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong>Environmental damage</strong> as chemicals wash into our water systems and soil
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-red-100 rounded-3xl -rotate-3"></div>
                            <div className="relative bg-white rounded-2xl p-2 shadow-xl transform rotate-2">
                                <div className="aspect-square bg-gradient-to-br from-red-200 to-red-400 rounded-xl flex items-center justify-center">
                                    <svg className="w-32 h-32 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Transition Arrow */}
                <div className="flex justify-center mb-32">
                    <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-eco-green to-sky-blue rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                        <div className="absolute -inset-2 bg-eco-green/20 rounded-full animate-ping"></div>
                    </div>
                </div>

                {/* The Solution - Right aligned, asymmetric */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-eco-green/10 rounded-3xl rotate-3"></div>
                            <div className="relative bg-white rounded-2xl p-2 shadow-xl transform -rotate-2">
                                <Image
                                    src="/eco_cleaning_equipment.webp"
                                    alt="Advanced water-based cleaning technology"
                                    width={500}
                                    height={500}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-24 bg-eco-green"></div>
                            <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">The Fegors Solution</span>
                            <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-6 leading-tight">
                                Pure water technology.
                                <span className="block text-eco-green">Zero chemicals.</span>
                                <span className="block text-sky-blue">100% effective.</span>
                            </h2>
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                Our revolutionary Tennant water-based cleaning system uses advanced ionization to clean at the molecular level - delivering hospital-grade cleanliness with nothing but pure water.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-eco-green/10 to-transparent rounded-lg border-l-4 border-eco-green">
                                    <svg className="w-6 h-6 text-eco-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong className="text-brand-black">Safe for everyone:</strong> Perfect for families with children, pets, and people with sensitivities
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sky-blue/10 to-transparent rounded-lg border-l-4 border-sky-blue">
                                    <svg className="w-6 h-6 text-sky-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong className="text-brand-black">Better for the planet:</strong> Zero harmful runoff into Scotland's water systems
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-eco-green/10 to-transparent rounded-lg border-l-4 border-eco-green">
                                    <svg className="w-6 h-6 text-eco-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong className="text-brand-black">Proven results:</strong> Removes 99.9% of bacteria without a single harsh chemical
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
