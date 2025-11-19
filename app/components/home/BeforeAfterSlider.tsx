'use client';

import React, { useState } from 'react';

export default function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    const beforeAfterPairs = [
        {
            before: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
            after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            location: 'Edinburgh Office Complex',
            service: 'Commercial Deep Clean'
        },
        {
            before: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80',
            after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
            location: 'Glasgow Residential',
            service: 'Home Eco-Clean'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-soft-grey">
            <div className="container-custom mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">Real Results</span>
                    <h2 className="text-5xl font-black text-brand-black mb-6">
                        See the transformation
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Before and after results from real Fegors cleaning projects across Scotland
                    </p>
                </div>

                {/* Before/After Slider */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
                        {/* Before Image */}
                        <img
                            src={beforeAfterPairs[activeIndex].before}
                            alt="Before cleaning"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* After Image with Clip Path */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <img
                                src={beforeAfterPairs[activeIndex].after}
                                alt="After cleaning"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Slider Line */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            {/* Slider Handle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
                                <svg className="w-6 h-6 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </div>

                        {/* Range Input */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderPosition}
                            onChange={handleSliderChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing z-10"
                        />

                        {/* Labels */}
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold text-sm">
                            BEFORE
                        </div>
                        <div className="absolute bottom-4 right-4 bg-eco-green/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold text-sm">
                            AFTER
                        </div>

                        {/* Location Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <div className="text-xs text-gray-600 font-medium">{beforeAfterPairs[activeIndex].service}</div>
                            <div className="text-sm font-bold text-brand-black flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {beforeAfterPairs[activeIndex].location}
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="flex gap-4 mt-6 justify-center">
                        {beforeAfterPairs.map((pair, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                    activeIndex === index
                                        ? 'border-eco-green shadow-lg scale-110'
                                        : 'border-gray-300 hover:border-eco-green/50'
                                }`}
                            >
                                <img
                                    src={pair.after}
                                    alt={pair.location}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                        { label: 'Average Time', value: '2-4 hrs' },
                        { label: 'Satisfaction Rate', value: '99.8%' },
                        { label: 'Repeat Clients', value: '87%' },
                        { label: 'Projects Completed', value: '2,500+' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
                            <div className="text-3xl font-black text-eco-green mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
