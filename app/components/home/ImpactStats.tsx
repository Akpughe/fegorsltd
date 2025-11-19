'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Stat {
    number: string;
    label: string;
    suffix: string;
    color: string;
}

export default function ImpactStats() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats: Stat[] = [
        {
            number: '500',
            suffix: '+',
            label: 'Happy Clients',
            color: 'text-eco-green'
        },
        {
            number: '50K',
            suffix: '+',
            label: 'Litres of Chemicals Avoided',
            color: 'text-sky-blue'
        },
        {
            number: '99.9',
            suffix: '%',
            label: 'Bacteria Removal Rate',
            color: 'text-eco-green'
        },
        {
            number: '5',
            suffix: ' Star',
            label: 'Average Rating',
            color: 'text-yellow-500'
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-deep-navy via-deep-navy-light to-deep-navy text-white relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-eco-green rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-blue rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">Our Impact</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Making a difference,
                        <span className="block text-eco-green">one clean at a time</span>
                    </h2>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto">
                        Every space we clean is a step towards a healthier Scotland and a cleaner planet
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center transform transition-all duration-700 ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-eco-green/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className={`text-5xl md:text-6xl font-black mb-2 ${stat.color}`}>
                                    {stat.number}
                                    <span className="text-3xl">{stat.suffix}</span>
                                </div>
                                <div className="text-white/70 text-lg font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Impact Statement */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-eco-green/20 border border-eco-green/30 backdrop-blur-sm rounded-full px-8 py-4">
                        <svg className="w-6 h-6 text-eco-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white font-semibold text-lg">
                            Contributing to Scotland&apos;s Net Zero 2045 goals
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
