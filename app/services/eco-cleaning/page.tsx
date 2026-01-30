import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../../components/ScrollAnimation";

export default function EcoCleaningPage() {
  const features = [
    {
      title: "Safer for staff & residents",
      description:
        "Eliminating exposure to harsh chemicals for a healthier environment.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Better air quality",
      description:
        "No chemical fumes or residues, improving indoor air quality.",
      icon: "🌬️",
    },
    {
      title: "No chemical residue",
      description:
        "Surfaces are left clean and safe, with no sticky or harmful residues.",
      icon: "✨",
    },
    {
      title: "Reduced environmental impact",
      description: "Zero chemical runoff means zero harm to the planet.",
      icon: "🌍",
    },
  ];

  const benefits = [
    "No harsh chemicals or toxic fumes",
    "Safe for pets, children, and sensitive individuals",
    "Reduces water usage compared to traditional methods",
    "Eliminates chemical residue and allergens",
    "Certified eco-friendly cleaning technology",
    "Effective against bacteria and viruses",
    "Better air quality for your space",
    "Contributes to a sustainable future",
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We assess your space and discuss how our eco-cleaning technology can meet your specific needs.",
    },
    {
      step: "02",
      title: "Preparation",
      description:
        "Our team arrives with advanced eco-cleaning equipment and prepares the area for chemical-free cleaning.",
    },
    {
      step: "03",
      title: "Eco Cleaning",
      description:
        "Using advanced water-based technology, we deep clean and sanitize every surface effectively.",
    },
    {
      step: "04",
      title: "Quality Check",
      description:
        "We inspect the results and ensure you're satisfied with our environmentally conscious service.",
    },
  ];

  const stats = [
    { number: "0", label: "Chemicals Used", suffix: "" },
    { number: "99.9", label: "Bacteria Elimination", suffix: "%" },
    { number: "100", label: "Eco-Friendly", suffix: "%" },
    { number: "500", label: "Happy Clients", suffix: "+" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1600&q=80"
          alt="Eco-friendly cleaning with nature"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
        {/* Overlay with Eco Green gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-eco-green/80 via-eco-green/60 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom mx-auto px-6">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                <span className="text-white font-semibold text-sm uppercase tracking-wide">
                  🌱 Eco Water-Based Cleaning
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 animate-fade-in-up">
                Low-Chemical & Water-Based Cleaning
              </h1>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                We use advanced water-based technology to clean effectively
                without harsh chemicals.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-white hover:bg-soft-grey text-eco-green font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 animate-fade-in-up animation-delay-200">
                Request Eco Cleaning Quote
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 md:py-24 bg-eco-green/5">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                The Future of Cleaning
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ideal for: Schools, healthcare, offices, homes with
                pets/children.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation
                key={feature.title}
                animationType="fade-up"
                delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-eco-green/20 hover:border-eco-green/50">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-brand-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-br from-eco-green to-eco-green-hover">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation
                key={stat.label}
                animationType="scale"
                delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-white/90 font-semibold text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollAnimation animationType="slide-left">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                  alt="Advanced eco-cleaning equipment"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-eco-green text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                  Advanced Eco Technology
                </div>
              </div>
            </ScrollAnimation>

            {/* Content */}
            <ScrollAnimation animationType="slide-right">
              <div>
                <div className="inline-block px-4 py-2 bg-eco-green/10 rounded-full mb-4">
                  <span className="text-eco-green font-semibold text-sm uppercase tracking-wide">
                    Revolutionary Technology
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-6">
                  Powered by Pure Water Innovation
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our industry-leading cleaning technology uses innovative water
                  ionization to convert pure water into a powerful cleaning
                  solution — without any chemicals.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  This revolutionary technology electrically converts water into
                  an activated solution that cleans effectively, dries quickly,
                  and leaves no chemical residue. It&apos;s proven to eliminate
                  99.9% of bacteria while being completely safe for humans,
                  pets, and the environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/sustainability"
                    className="inline-flex items-center gap-2 text-eco-green font-semibold hover:gap-4 transition-all duration-200 group/link">
                    Learn About Our Sustainability
                    <svg
                      className="w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-eco-green/5 to-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <ScrollAnimation animationType="slide-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-6">
                  Benefits of Eco Water-Based Cleaning
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Choose eco-cleaning for a healthier home, office, or facility
                  that&apos;s free from toxic chemicals and harmful fumes.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-eco-green/20 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-4 h-4 text-eco-green"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Image */}
            <ScrollAnimation animationType="slide-right">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                  alt="Healthy family in clean home"
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
                How It Works
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our eco-cleaning process is simple, effective, and designed to
                give you peace of mind.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <ScrollAnimation
                key={item.step}
                animationType="fade-up"
                delay={index * 100}>
                <div className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-eco-green to-eco-green-hover text-white text-2xl font-black mb-6 shadow-lg">
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
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-linear-to-r from-eco-green/30 to-transparent"></div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-eco-green to-eco-green-hover relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <ScrollAnimation animationType="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6">
                Make the Switch to Eco-Cleaning
              </h2>
              <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                Join hundreds of satisfied clients who&apos;ve made the smart
                choice for their health and the environment. Get a free quote
                for chemical-free cleaning today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-soft-grey text-eco-green font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105">
                  Request a Quote
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-200">
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
