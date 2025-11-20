import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../components/ScrollAnimation';

export default function AboutPage() {
    const values = [
        {
            title: 'Excellence',
            description: 'We deliver exceptional cleaning services that exceed expectations every time.',
            icon: '⭐'
        },
        {
            title: 'Sustainability',
            description: 'Environmental responsibility is at the core of everything we do.',
            icon: '🌱'
        },
        {
            title: 'Integrity',
            description: 'We build trust through honesty, transparency, and consistent quality.',
            icon: '🤝'
        },
        {
            title: 'Innovation',
            description: 'We invest in cutting-edge technology and training to stay ahead.',
            icon: '💡'
        }
    ];

    const equipment = [
        {
            name: 'Tennant T300',
            description: 'Industry-leading ec-H2O™ technology for chemical-free cleaning with superior results.',
            icon: '🔧'
        },
        {
            name: 'HEPA Filtration Systems',
            description: 'Advanced air purification systems that capture 99.97% of particles and allergens.',
            icon: '🌬️'
        },
        {
            name: 'Professional Grade Tools',
            description: 'Commercial-quality equipment designed for efficiency and exceptional cleaning power.',
            icon: '⚙️'
        },
        {
            name: 'Eco-Friendly Products',
            description: 'Certified green cleaning products that are safe for people, pets, and the planet.',
            icon: '♻️'
        }
    ];

    const process = [
        {
            step: '01',
            title: 'Consultation',
            description: 'We understand your specific needs, space requirements, and scheduling preferences.'
        },
        {
            step: '02',
            title: 'Customized Plan',
            description: 'We create a tailored cleaning solution with transparent pricing and clear expectations.'
        },
        {
            step: '03',
            title: 'Quality Service',
            description: 'Our trained team delivers consistent, exceptional results using advanced eco-friendly methods.'
        }
    ];

    const serviceAreas = [
        'Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness',
        'Perth', 'Stirling', 'Falkirk', 'Paisley', 'East Lothian'
    ];

    const teamQualities = [
        { quality: 'Fully Trained Professionals', icon: '🎓' },
        { quality: 'Background Checked & Vetted', icon: '✅' },
        { quality: 'Uniformed & Professional', icon: '👔' },
        { quality: 'Insured & Bonded', icon: '🛡️' },
        { quality: 'Eco-Conscious Mindset', icon: '🌍' },
        { quality: 'Customer-Focused Approach', icon: '❤️' }
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
                    alt="Professional cleaning team"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/85 via-deep-navy/70 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container-custom mx-auto px-6">
                        <div className="max-w-2xl">
                            <div className="inline-block px-4 py-2 bg-eco-green/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                                <span className="text-eco-green font-semibold text-sm uppercase tracking-wide">
                                    About Fegors Ltd
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 animate-fade-in-up">
                                Professional Cleaning, Sustainable Future
                            </h1>
                            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                                We're a Scottish cleaning company committed to delivering exceptional service while
                                protecting the environment. Our mission is simple: clean spaces, healthy people, sustainable planet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <ScrollAnimation animationType="slide-left">
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                                    Who We Are
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Fegors Ltd is a professional cleaning company based in Scotland, dedicated to providing
                                    high-quality residential and commercial cleaning services. Founded on the principles of
                                    excellence, sustainability, and innovation, we've built our reputation on delivering
                                    outstanding results while minimizing environmental impact.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    We believe that professional cleaning should never compromise health or the environment.
                                    That's why we've invested in cutting-edge eco-friendly technology and trained our team
                                    to deliver superior results using chemical-free methods that are safe for your family,
                                    employees, and the planet.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/sustainability"
                                        className="inline-flex items-center gap-2 text-eco-green font-semibold hover:gap-4 transition-all duration-200 group/link"
                                    >
                                        Our Sustainability Commitment
                                        <svg className="w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Image */}
                        <ScrollAnimation animationType="slide-right">
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80"
                                    alt="Modern office space"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-soft-grey/40 to-white">
                <div className="container-custom mx-auto px-6">
                    <ScrollAnimation animationType="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                                Our Core Values
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                These principles guide everything we do, from how we train our team to how we serve our clients.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <ScrollAnimation key={value.title} animationType="fade-up" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-eco-green/20">
                                    <div className="text-5xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-heading font-bold text-brand-black mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our People */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <ScrollAnimation animationType="slide-left">
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                    alt="Professional team meeting"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </ScrollAnimation>

                        {/* Content */}
                        <ScrollAnimation animationType="slide-right">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-6">
                                    Our People
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Our team is our greatest asset. Every member of the Fegors family is carefully selected,
                                    thoroughly trained, and committed to delivering exceptional service with integrity and care.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {teamQualities.map((item) => (
                                        <div key={item.quality} className="flex items-center gap-2">
                                            <span className="text-2xl">{item.icon}</span>
                                            <span className="text-sm font-semibold text-gray-700">{item.quality}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Our Equipment */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-eco-green/5 to-white">
                <div className="container-custom mx-auto px-6">
                    <ScrollAnimation animationType="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                                Our Equipment
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We invest in the latest, most advanced cleaning technology to ensure superior results
                                while minimizing environmental impact.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {equipment.map((item, index) => (
                            <ScrollAnimation key={item.name} animationType="fade-up" delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-eco-green/10 hover:border-eco-green/30">
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl">{item.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-heading font-bold text-brand-black mb-2">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom mx-auto px-6">
                    <ScrollAnimation animationType="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                                How We Work
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our streamlined process ensures you get exactly the service you need, delivered with
                                professionalism and care.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                        <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-eco-green/30 to-transparent"></div>
                                    )}
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-deep-navy/5 to-white">
                <div className="container-custom mx-auto px-6">
                    <ScrollAnimation animationType="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                                Service Areas in Scotland
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We're proud to serve communities across Scotland with our professional cleaning services.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {serviceAreas.map((area, index) => (
                                <ScrollAnimation key={area} animationType="scale" delay={index * 50}>
                                    <div className="bg-white rounded-xl p-4 text-center font-semibold text-gray-700 hover:bg-eco-green/10 hover:text-eco-green transition-all duration-300 border-2 border-transparent hover:border-eco-green/20">
                                        {area}
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                        <ScrollAnimation animationType="fade-up">
                            <p className="text-center text-gray-500 mt-8">
                                Don't see your area? <Link href="/contact" className="text-eco-green font-semibold hover:underline">Contact us</Link> to discuss service availability.
                            </p>
                        </ScrollAnimation>
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
                                Ready to Experience the Fegors Difference?
                            </h2>
                            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                                Let us show you what professional, eco-friendly cleaning can do for your space.
                                Get in touch today to learn more or request a quote.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/quote"
                                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-soft-grey text-eco-green font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
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
