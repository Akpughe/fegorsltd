import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import Button from '../Button';

export default function SustainabilityCallout() {
    const benefits = [
        'Zero harsh chemicals - safe for children, pets, and sensitive individuals',
        'Reduced water consumption compared to traditional methods',
        'Lower carbon footprint with energy-efficient equipment',
        'Supports Scotland&apos;s Net Zero goals and UN SDGs',
        'Improved indoor air quality without chemical residues',
        'Verified cleanliness with measurable results',
    ];

    return (
        <Section backgroundColor="eco" id="sustainability-callout">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="animate-slide-in-left">
                    <Image
                        src="/eco_cleaning_equipment.webp"
                        alt="Eco-friendly water-based cleaning equipment"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
                    />
                </div>

                {/* Content */}
                <div className="animate-slide-in-right">
                    <h2 className="text-brand-black mb-6">
                        Sustainable Cleaning for a Healthier Future
                    </h2>

                    <p className="text-gray-700 mb-6 text-lg">
                        Our eco-friendly water-based cleaning technology represents the future of professional cleaning - delivering exceptional results while protecting what matters most.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 animate-fade-in-up"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <svg
                                    className="w-6 h-6 text-eco-green flex-shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-gray-700">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <Button href="/sustainability" variant="primary">
                        View Sustainability Page
                    </Button>
                </div>
            </div>
        </Section>
    );
}
