import React from "react";
import Link from "next/link";

export default function MagazineServices() {
  const services = [
    {
      title: "Residential",
      subtitle: "Home Cleaning",
      description:
        "Transform your home into a sanctuary. From weekly maintenance to deep cleans, we keep your space spotless and safe.",
      href: "/services/residential",
      color: "from-eco-green to-eco-green-light",
      icon: "🏡",
      size: "large", // Takes 2 columns on desktop
    },
    {
      title: "Commercial",
      subtitle: "Office & Retail",
      description:
        "First impressions matter. Create healthy, productive environments that wow clients and inspire teams.",
      href: "/services/commercial",
      color: "from-sky-blue to-blue-400",
      icon: "🏢",
      size: "medium",
    },
    {
      title: "Eco Water-Based",
      subtitle: "Revolutionary Tech",
      description:
        "Experience the future of cleaning. Advanced eco equipment. Zero chemicals. 100% results.",
      href: "/services/eco-cleaning",
      color: "from-eco-green-light to-sky-blue",
      icon: "💧",
      size: "medium",
    },
    {
      title: "Deep Cleaning",
      subtitle: "Specialist Services",
      description:
        "Intensive floor treatments, post-construction cleanup, and comprehensive sanitization projects.",
      href: "/services/specialist",
      color: "from-deep-navy to-deep-navy-light",
      icon: "✨",
      size: "large",
    },
  ];

  return (
    <section className="py-20 bg-soft-grey">
      <div className="container-custom mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black text-brand-black leading-tight">
              Services designed for
              <span className="block text-eco-green">your unique needs</span>
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-black hover:text-eco-green transition-colors font-semibold text-lg group">
              View All Services
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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

        {/* Magazine Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isLarge = service.size === "large";
            const colSpan = isLarge ? "lg:col-span-2" : "lg:col-span-1";

            return (
              <Link
                key={index}
                href={service.href}
                className={`group relative overflow-hidden rounded-3xl ${colSpan} ${
                  isLarge ? "min-h-[400px]" : "min-h-[300px]"
                } transform hover:scale-[1.02] transition-all duration-300`}>
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-9xl transform rotate-12">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <span className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-2 block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <svg
                      className="w-6 h-6"
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
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/20 rounded-3xl transition-all"></div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-white rounded-3xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-brand-black mb-2">
                Not sure which service you need?
              </h3>
              <p className="text-gray-600">
                Let&apos;s chat! We&apos;ll help you find the perfect cleaning
                solution.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-eco-green hover:bg-eco-green-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
              Get Expert Advice →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
