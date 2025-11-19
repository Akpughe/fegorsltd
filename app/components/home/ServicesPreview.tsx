import React from 'react';
import Link from 'next/link';
import Section from '../Section';
import Card from '../Card';

export default function ServicesPreview() {
    const services = [
        {
            title: 'Residential Cleaning',
            description: 'From regular maintenance to deep cleans, we keep your home spotless and healthy. Perfect for busy families and professionals.',
            href: '/services/residential',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
        {
            title: 'Commercial Cleaning',
            description: 'Professional office and retail cleaning that creates positive first impressions and healthy work environments for your team.',
            href: '/services/commercial',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            title: 'Eco Water-Based Cleaning',
            description: 'Revolutionary chemical-free cleaning using advanced Tennant equipment. Safe for children, pets, and the environment.',
            href: '/services/eco-cleaning',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
        },
        {
            title: 'Deep / Specialist Cleaning',
            description: 'Intensive cleaning for floor treatments, post-construction cleanup, and comprehensive sanitization projects.',
            href: '/services/specialist',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
        },
    ];

    return (
        <Section backgroundColor="grey" id="services">
            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-brand-black mb-4">Our Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Comprehensive cleaning solutions tailored to your unique needs, from homes to commercial spaces.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <Card
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        >
                            <Link
                                href={service.href}
                                className="inline-flex items-center text-eco-green font-semibold hover:text-eco-green-hover transition-colors duration-150 group"
                            >
                                Learn More
                                <svg className="w-4 h-4 ml-2 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    );
}
