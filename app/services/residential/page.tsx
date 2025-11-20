import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function ResidentialCleaningPage() {
    const services = [
        {
            title: 'Regular Cleaning',
            description: 'Consistent, reliable cleaning services scheduled to fit your lifestyle. Keep your home spotless with weekly, bi-weekly, or monthly visits.',
            icon: '🏠'
        },
        {
            title: 'Deep Cleaning',
            description: 'Thorough, top-to-bottom cleaning that reaches every corner. Perfect for seasonal refreshes or preparing for special occasions.',
            icon: '✨'
        },
        {
            title: 'Move-In/Move-Out',
            description: 'Comprehensive cleaning services for moving transitions. Ensure your old or new home is pristine for a fresh start.',
            icon: '📦'
        }
    ];

    const benefits = [
        'Customized cleaning plans tailored to your home',
        'Eco-friendly products safe for families and pets',
        'Trained and vetted cleaning professionals',
        'Flexible scheduling to fit your lifestyle',
        'Consistent quality with every visit',
        '100% satisfaction guarantee'
    ];

    const process = [
        {
            step: '01',
            title: 'Book Your Service',
            description: 'Choose your cleaning type and schedule a convenient time through our simple booking system.'
        },
        {
            step: '02',
            title: 'We Prepare',
            description: 'Our team reviews your requirements and arrives with all necessary eco-friendly supplies and equipment.'
        },
        {
            step: '03',
            title: 'Expert Cleaning',
            description: 'Our trained professionals clean your home thoroughly following our comprehensive checklist.'
        },
        {
            step: '04',
            title: 'Final Inspection',
            description: 'We conduct a quality check and address any concerns to ensure you\'re completely satisfied.'
        }
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80"
                    alt="Beautiful clean residential interior"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 via-brand-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container-custom mx-auto px-6">
                        <div className="max-w-2xl">
                            <div className="inline-block px-4 py-2 bg-eco-green/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                                <span className="text-eco-green font-semibold text-sm uppercase tracking-wide">
                                    Residential Cleaning
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 animate-fade-in-up">
                                Your Home, Professionally Cleaned
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                                Experience the comfort of a spotless home with our professional residential cleaning services.
                                We bring quality, reliability, and care to every room.
                            </p>
                            <Link
                                href="/quote"
                                className="inline-flex items-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 animate-fade-in-up animation-delay-200"
                            >
                                Get a Free Quote
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom mx-auto px-6">
                    <ScrollAnimation animationType="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                                Our Residential Services
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                From routine maintenance to deep cleaning, we offer flexible services designed to keep your home in pristine condition.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollAnimation key={service.title} animationType="fade-up" delay={index * 100}>
                                <div className="bg-soft-grey/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-eco-green/20">
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-heading font-bold text-brand-black mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-soft-grey/40 to-white">
                <div className="container-custom mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <ScrollAnimation animationType="slide-left">
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                                    alt="Clean modern living room"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </ScrollAnimation>

                        {/* Benefits List */}
                        <ScrollAnimation animationType="slide-right">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-6">
                                    Why Choose Our Residential Cleaning?
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    We understand that your home is your sanctuary. That's why we deliver exceptional
                                    cleaning services with attention to detail and respect for your space.
                                </p>
                                <ul className="space-y-4">
                                    {benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-eco-green/20 flex items-center justify-center mt-1">
                                                <svg className="w-4 h-4 text-eco-green" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 leading-relaxed">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom mx-auto px-6">
                    <ScrollAnimation animationType="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                                Our Simple Process
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Getting your home professionally cleaned has never been easier. Here's how it works:
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <ScrollAnimation key={item.step} animationType="fade-up" delay={index * 100}>
                                <div className="relative">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-eco-green to-eco-green-hover text-white text-2xl font-black mb-6 shadow-lg">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-brand-black mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    {/* Connector Line (hidden on last item and mobile) */}
                                    {index < process.length - 1 && (
                                        <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-eco-green/30 to-transparent"></div>
                                    )}
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-eco-green to-eco-green-hover relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom mx-auto px-6 relative z-10">
                    <ScrollAnimation animationType="fade-up">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6">
                                Ready for a Spotless Home?
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                                Request a free quote today and discover the difference professional residential cleaning can make.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/quote"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-eco-green font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
                                >
                                    Request a Quote
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-200"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
