'use client';

import React from 'react';
import Link from 'next/link';

export default function EcoGlassmorphism() {
    return (
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-deep-navy via-deep-navy-light to-deep-navy">
            {/* Animated Particle Background - Dark Mode Element */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eco-green/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-blue/20 rounded-full blur-3xl animate-pulse animation-delay-100"></div>

                {/* Floating Particles */}
                <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-eco-green/40 rounded-full animate-pulse"></div>
                <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-sky-blue/40 rounded-full animate-pulse animation-delay-200"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-eco-green-light/40 rounded-full animate-pulse animation-delay-100"></div>
            </div>

            <div className="container-custom mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">Environmental Impact</span>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Every clean makes
                        <span className="block text-eco-green">a difference</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Real-time environmental impact from choosing water-based cleaning
                    </p>
                </div>

                {/* Glassmorphism Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        {
                            icon: (
                                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            ),
                            number: '15',
                            unit: 'tons',
                            label: 'CO₂ Emissions Prevented'
                        },
                        {
                            icon: (
                                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            ),
                            number: '50K+',
                            unit: 'liters',
                            label: 'Chemicals Not Used'
                        },
                        {
                            icon: (
                                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            ),
                            number: '98%',
                            unit: '',
                            label: 'Water Waste Reduced'
                        },
                        {
                            icon: (
                                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            ),
                            number: '100%',
                            unit: '',
                            label: 'Biodegradable Process'
                        }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-eco-green/30 transition-all duration-300 transform hover:scale-105"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-eco-green/0 to-sky-blue/0 group-hover:from-eco-green/10 group-hover:to-sky-blue/10 transition-all duration-300"></div>

                            <div className="relative">
                                {/* Icon */}
                                <div className="w-16 h-16 text-eco-green mb-6">
                                    {stat.icon}
                                </div>

                                {/* Number */}
                                <div className="text-5xl font-black text-white mb-2">
                                    {stat.number}
                                    <span className="text-2xl text-eco-green ml-1">{stat.unit}</span>
                                </div>

                                {/* Label */}
                                <div className="text-white/70 font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SDG Goals Section - Glassmorphism */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                                Aligned with UN Sustainable Development Goals
                            </h3>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                Our water-based cleaning technology directly supports Scotland&apos;s Net Zero 2045 commitment and global sustainability objectives.
                            </p>

                            {/* SDG Icons */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                {[
                                    { num: '3', name: 'Good Health', color: 'bg-green-500' },
                                    { num: '6', name: 'Clean Water', color: 'bg-sky-400' },
                                    { num: '11', name: 'Sustainable Cities', color: 'bg-orange-400' },
                                    { num: '12', name: 'Responsible Consumption', color: 'bg-yellow-500' },
                                    { num: '13', name: 'Climate Action', color: 'bg-emerald-600' }
                                ].map((sdg, index) => (
                                    <div key={index} className="group relative">
                                        <div className={`w-16 h-16 ${sdg.color} rounded-lg flex items-center justify-center text-white font-black text-2xl shadow-lg hover:scale-110 transition-transform cursor-pointer`}>
                                            {sdg.num}
                                        </div>
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-brand-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                            SDG {sdg.num}: {sdg.name}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/sustainability"
                                className="inline-flex items-center gap-2 text-eco-green hover:text-eco-green-light font-semibold transition-colors"
                            >
                                <span>Read Our Full Sustainability Report</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Right - Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                                alt="Green sustainable environment"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
