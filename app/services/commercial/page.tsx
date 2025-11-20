import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CommercialCleaningPage() {
    const services = [
        {
            title: 'Office Cleaning',
            description: 'Create a productive work environment with daily, weekly, or customized office cleaning schedules that keep your workspace professional.',
            icon: '💼'
        },
        {
            title: 'Retail Spaces',
            description: 'Maintain an inviting shopping experience for your customers with our retail cleaning services designed for high-traffic areas.',
            icon: '🏬'
        },
        {
            title: 'Facility Maintenance',
            description: 'Comprehensive cleaning and maintenance for large facilities, industrial spaces, and multi-purpose buildings.',
            icon: '🏭'
        }
    ];

    const benefits = [
        'Flexible scheduling including after-hours service',
        'Trained professionals with commercial expertise',
        'Industry-compliant cleaning protocols',
        'Eco-friendly products safe for employees',
        'Consistent quality and accountability',
        'Customized cleaning plans for your business'
    ];

    const process = [
        {
            step: '01',
            title: 'Site Assessment',
            description: 'We visit your facility to understand your specific needs, traffic patterns, and cleaning requirements.'
        },
        {
            step: '02',
            title: 'Custom Plan',
            description: 'We create a tailored cleaning schedule and checklist that fits your business operations and budget.'
        },
        {
            step: '03',
            title: 'Professional Service',
            description: 'Our experienced team executes the cleaning plan with precision, using commercial-grade equipment.'
        },
        {
            step: '04',
            title: 'Quality Assurance',
            description: 'Regular inspections and feedback loops ensure consistent results and continuous improvement.'
        }
    ];

    const industries = [
        { name: 'Corporate Offices', icon: '🏢' },
        { name: 'Retail Stores', icon: '🛍️' },
        { name: 'Medical Facilities', icon: '🏥' },
        { name: 'Educational Institutions', icon: '🎓' },
        { name: 'Hospitality', icon: '🏨' },
        { name: 'Industrial Buildings', icon: '🏭' }
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                    alt="Modern clean office space"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover"
                />
                {/* Overlay with Deep Navy gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/60 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container-custom mx-auto px-6">
                        <div className="max-w-2xl">
                            <div className="inline-block px-4 py-2 bg-sky-blue/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                                <span className="text-sky-blue font-semibold text-sm uppercase tracking-wide">
                                    Commercial Cleaning
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 animate-fade-in-up">
                                Professional Cleaning for Your Business
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                                Maintain a pristine, professional environment that impresses clients and enhances employee
                                productivity with our comprehensive commercial cleaning services.
                            </p>
                            <Link
                                href="/quote"
                                className="inline-flex items-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 animate-fade-in-up animation-delay-200"
                            >
                                Get a Business Quote
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 md:py-24 bg-deep-navy/5">
                <div className="container-custom mx-auto px-6">
                    <ScrollAnimation animationType="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                                Commercial Cleaning Solutions
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Tailored cleaning services for businesses of all sizes. We understand the unique demands
                                of commercial spaces and deliver results that exceed expectations.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollAnimation key={service.title} animationType="fade-up" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-deep-navy/10 hover:border-deep-navy/30">
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

            {/* Industries Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom mx-auto px-6">
                    <ScrollAnimation animationType="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-6">
                                Industries We Serve
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our commercial cleaning expertise spans across multiple industries with specialized knowledge for each sector.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, index) => (
                            <ScrollAnimation key={industry.name} animationType="scale" delay={index * 50}>
                                <div className="text-center p-6 bg-deep-navy/5 rounded-xl hover:bg-deep-navy/10 transition-all duration-300">
                                    <div className="text-4xl mb-3">{industry.icon}</div>
                                    <p className="text-sm font-semibold text-gray-700">{industry.name}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-deep-navy/5 to-white">
                <div className="container-custom mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Benefits List */}
                        <ScrollAnimation animationType="slide-left">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-6">
                                    Why Businesses Trust Fegors
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    We understand that a clean workspace is essential for productivity, employee morale,
                                    and making the right impression on clients and visitors.
                                </p>
                                <ul className="space-y-4">
                                    {benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-deep-navy/20 flex items-center justify-center mt-1">
                                                <svg className="w-4 h-4 text-deep-navy" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 leading-relaxed">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>

                        {/* Image */}
                        <ScrollAnimation animationType="slide-right">
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&q=80"
                                    alt="Professional office environment"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
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
                                Our Commercial Process
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                A proven approach to commercial cleaning that delivers consistent, reliable results for your business.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <ScrollAnimation key={item.step} animationType="fade-up" delay={index * 100}>
                                <div className="relative">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-deep-navy to-deep-navy-light text-white text-2xl font-black mb-6 shadow-lg">
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
                                        <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-deep-navy/30 to-transparent"></div>
                                    )}
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
                    <div className="absolute top-0 right-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom mx-auto px-6 relative z-10">
                    <ScrollAnimation animationType="fade-up">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6">
                                Elevate Your Workspace
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                                Partner with Fegors for reliable commercial cleaning that enhances your business environment
                                and leaves a lasting impression.
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
