import React from 'react';

export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Water Ionization',
            description: 'Our Tennant equipment ionizes pure water, creating powerful cleaning molecules that break down dirt at a molecular level.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: 'bg-sky-blue'
        },
        {
            number: '02',
            title: 'Deep Penetration',
            description: 'The ionized water penetrates surfaces deeper than traditional chemicals, lifting embedded dirt, bacteria, and contaminants.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
            ),
            color: 'bg-eco-green'
        },
        {
            number: '03',
            title: 'Bacteria Elimination',
            description: 'Removes 99.9% of bacteria and pathogens without leaving any chemical residue - just pure, clean surfaces.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'bg-eco-green-light'
        },
        {
            number: '04',
            title: 'Safe to Use Immediately',
            description: 'No waiting for chemicals to dry or fumes to clear. Your space is ready to use instantly, safe for everyone.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'bg-yellow-400'
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-eco-green/5 to-transparent"></div>

            <div className="container-custom mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">The Science</span>
                    <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-6 leading-tight">
                        How pure water
                        <span className="block text-eco-green">cleans better than chemicals</span>
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        It sounds too good to be true, but it&apos;s science. Our advanced water-based technology revolutionizes cleaning with four simple steps.
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="relative">
                    {/* Connection Line - Hidden on mobile, visible on desktop */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-sky-blue via-eco-green to-yellow-400 opacity-20"></div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-eco-green/20 h-full">
                                    {/* Number Badge */}
                                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-deep-navy to-deep-navy-light rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-brand-black mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow - Only show between steps on desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 text-eco-green/30 z-20">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-eco-green/10 to-sky-blue/10 rounded-3xl p-8 border-2 border-eco-green/20">
                        <p className="text-xl font-semibold text-brand-black">
                            Want to see it in action?
                        </p>
                        <button className="bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center gap-2 group">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span className="group-hover:underline">Watch Demo Video</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
