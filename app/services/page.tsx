import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../components/ScrollAnimation';

export default function ServicesPage() {
    const services = [
        {
            title: 'Residential Cleaning',
            slug: 'residential',
            description: 'Keep your home spotless with our regular cleaning services, deep cleaning, and move-in/move-out solutions tailored to your needs.',
            icon: '🏠',
            image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
            features: ['Regular Cleaning', 'Deep Cleaning', 'Move-in/Move-out', 'Customized Plans'],
            bgColor: 'bg-white',
            accentColor: 'eco-green'
        },
        {
            title: 'Commercial Cleaning',
            slug: 'commercial',
            description: 'Professional cleaning services for offices, retail spaces, and facilities that create a welcoming environment for your business.',
            icon: '🏢',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            features: ['Office Cleaning', 'Retail Spaces', 'Facility Maintenance', 'Flexible Scheduling'],
            bgColor: 'bg-deep-navy/5',
            accentColor: 'deep-navy'
        },
        {
            title: 'Eco Water-Based Cleaning',
            slug: 'eco-cleaning',
            description: 'Chemical-free cleaning using our advanced Tennant T300 machine. Safe for pets, children, and the environment.',
            icon: '🌱',
            image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80',
            features: ['Chemical-Free', 'Tennant T300', 'Safe for Pets & Kids', 'Eco-Friendly'],
            bgColor: 'bg-eco-green/5',
            accentColor: 'eco-green'
        },
        {
            title: 'Specialist Cleaning',
            slug: 'specialist',
            description: 'Expert solutions for floor treatment, post-construction cleanup, sanitisation, and other specialized cleaning needs.',
            icon: '⚡',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
            features: ['Floor Treatment', 'Post-Construction', 'Sanitisation', 'Custom Solutions'],
            bgColor: 'bg-sky-blue/5',
            accentColor: 'sky-blue'
        }
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-white via-soft-grey/40 to-white py-20 md:py-28 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-eco-green/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl animate-float-delayed"></div>
                </div>

                <div className="container-custom mx-auto px-6 relative z-10">
                    <ScrollAnimation animationType="fade-up">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-black mb-6">
                                Our Services
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                At Fegors, we provide high-quality residential and commercial cleaning using modern,
                                eco-friendly methods designed to protect your space — and the planet. Explore our range
                                of professional cleaning services tailored to meet your unique needs.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {services.map((service, index) => (
                            <ScrollAnimation
                                key={service.slug}
                                animationType="fade-up"
                                delay={index * 100}
                            >
                                <div className={`group relative ${service.bgColor} rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-${service.accentColor} transition-all duration-300 hover:shadow-2xl`}>
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={800}
                                            height={400}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Icon Overlay */}
                                        <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-black mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-5 h-5 text-eco-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-2 text-eco-green font-semibold hover:gap-4 transition-all duration-200 group/link"
                                        >
                                            Learn More
                                            <svg className="w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-deep-navy to-deep-navy-light relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom mx-auto px-6 relative z-10">
                    <ScrollAnimation animationType="fade-up">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6">
                                Ready for a Cleaner Space?
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                                Get a personalized quote for your cleaning needs. Our team is ready to help you
                                create a cleaner, healthier environment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/quote"
                                    className="inline-flex items-center justify-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
                                >
                                    Request a Quote
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-200"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
