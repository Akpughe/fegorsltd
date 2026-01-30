import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../../components/ScrollAnimation";

export default function SpecialistCleaningPage() {
  const services = [
    {
      title: "Builders' clean",
      description:
        "Initial clean to remove construction dust, debris, and leftover materials.",
      icon: "🏗️",
      features: [
        "Dust removal",
        "Debris clearance",
        "Surface wiping",
        "Safety compliance",
      ],
    },
    {
      title: "Sparkle clean",
      description:
        "Final detailed cleaning to ensure the property is pristine for handover.",
      icon: "✨",
      features: [
        "Detailed polishing",
        "Glass cleaning",
        "Fixture shining",
        "Ready for occupancy",
      ],
    },
    {
      title: "Debris removal",
      description:
        "Safe removal and disposal of construction waste and packaging.",
      icon: "🗑️",
      features: [
        "Waste disposal",
        "Recycling",
        "Site clearance",
        "Hazard safety",
      ],
    },
    {
      title: "Window & glass cleaning",
      description:
        "Removing stickers, paint, and plaster from windows and glass surfaces.",
      icon: "🪟",
      features: [
        "Sticker removal",
        "Paint removal",
        "Streak-free finish",
        "Frame cleaning",
      ],
    },
    {
      title: "Floor preparation",
      description:
        "Cleaning and preparing all types of flooring for final use.",
      icon: "🧹",
      features: ["Vacuuming", "Mopping", "Buffing", "Sealing"],
    },
  ];

  const benefits = [
    "Specialized equipment and expertise",
    "Trained technicians for complex tasks",
    "Industry-compliant safety protocols",
    "Eco-friendly products available",
    "Flexible scheduling including emergency service",
    "Comprehensive insurance coverage",
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      description:
        "We evaluate your unique cleaning challenge and determine the best approach and equipment needed.",
    },
    {
      step: "02",
      title: "Custom Plan",
      description:
        "We create a detailed action plan with timeline, methods, and safety protocols specific to your project.",
    },
    {
      step: "03",
      title: "Expert Execution",
      description:
        "Our specialist team executes the plan using advanced equipment and proven techniques.",
    },
    {
      step: "04",
      title: "Verification",
      description:
        "We conduct thorough quality checks and ensure all objectives are met to your satisfaction.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
          alt="Professional specialist cleaning equipment"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
        {/* Overlay with Sky Blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-deep-navy/60 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom mx-auto px-6">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-2 bg-sky-blue/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                <span className="text-sky-blue font-semibold text-sm uppercase tracking-wide">
                  ⚡ Specialist Cleaning
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 animate-fade-in-up">
                New-Build & Construction Cleaning
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                Preparing newly built or renovated spaces for handover.
                Experience includes full-site cleaning for Watkin Jones student
                accommodation.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 animate-fade-in-up animation-delay-200">
                Get Specialist Quote
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

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                Construction Cleaning Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ideal for: Developers, construction firms, private builds.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation
                key={service.title}
                animationType="fade-up"
                delay={index * 100}>
                <div className="bg-gradient-to-br from-sky-blue/5 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-sky-blue/10 hover:border-sky-blue/30">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-brand-black mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-sky-blue mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                  alt="Professional cleaning specialist at work"
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
                  Why Choose Our Specialist Services?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  When standard cleaning isn&apos;t enough, our specialist team
                  brings advanced skills and equipment to solve your most
                  challenging cleaning needs.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-blue/20 flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4 text-sky-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-6">
                Common Specialist Scenarios
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our specialist cleaning services are perfect for these
                situations and more:
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Renovation Cleanup",
                description: "Post-construction dust and debris removal",
                icon: "🔨",
              },
              {
                title: "Floor Restoration",
                description: "Restore shine and protect all floor types",
                icon: "✨",
              },
              {
                title: "Deep Sanitisation",
                description: "Hospital-grade disinfection and sanitisation",
                icon: "🧪",
              },
              {
                title: "Emergency Cleanup",
                description: "Rapid response for urgent cleaning needs",
                icon: "🚨",
              },
              {
                title: "Industrial Spaces",
                description: "Heavy-duty cleaning for manufacturing areas",
                icon: "🏭",
              },
              {
                title: "High-Reach Areas",
                description: "Specialized equipment for difficult access",
                icon: "🪜",
              },
            ].map((useCase, index) => (
              <ScrollAnimation
                key={useCase.title}
                animationType="scale"
                delay={index * 50}>
                <div className="bg-soft-grey/30 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">{useCase.icon}</div>
                  <h3 className="text-lg font-heading font-bold text-brand-black mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sky-blue/5 to-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                Our Specialist Process
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every specialist project follows a rigorous process to ensure
                outstanding results.
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
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sky-blue to-deep-navy text-white text-2xl font-black mb-6 shadow-lg">
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
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-sky-blue/30 to-transparent"></div>
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
                Have a Complex Cleaning Challenge?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Our specialist team is ready to assess your unique situation and
                provide expert solutions. Get a free consultation and quote
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105">
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-200">
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
