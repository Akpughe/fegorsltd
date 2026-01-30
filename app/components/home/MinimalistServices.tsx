import React from "react";
import Link from "next/link";

export default function MinimalistServices() {
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Keep your home fresh, healthy, and comfortable with routine cleaning or deep cleans. Perfect for families, shared flats, and landlords.",
      features: [
        "Routine cleaning",
        "Deep cleaning",
        "End-of-tenancy",
        "Move-in/move-out",
      ],
      image: "https://ik.imagekit.io/r9a7zbqsf/IMG_8253.HEIC",
      href: "/services/residential",
    },
    {
      title: "Commercial Cleaning",
      description:
        "Reliable, flexible cleaning for offices, tech spaces, and retail. From small offices to large corporate spaces.",
      features: [
        "Daily/weekly office cleaning",
        "Workstation cleaning",
        "Breakroom & kitchen cleaning",
        "Floor care",
      ],
      image:
        "https://ik.imagekit.io/r9a7zbqsf/PHOTO-2026-01-14-12-43-49%204.jpg",
      href: "/services/commercial",
    },
    {
      title: "New-Build & Construction Cleaning",
      description:
        "Preparing newly built or renovated spaces for handover. Specialist cleaning for developers and contractors.",
      features: [
        "Builders' clean",
        "Sparkle clean",
        "Snagging-ready cleaning",
        "Final polishing",
      ],
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
      href: "/services/specialist",
    },
    {
      title: "Low-Chemical & Water-Based Cleaning",
      description:
        "A safer approach for families, allergy sufferers, and workplaces. Safe for children and pets, no strong smells, environmentally responsible.",
      features: [
        "Safe for children and pets",
        "No strong smells",
        "Good for sensitive environments",
        "Effective on floors and surfaces",
      ],
      image:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
      href: "/services/eco-cleaning",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container-custom mx-auto px-6">
        {/* Header - Minimalist */}
        <div className="max-w-3xl mb-20">
          <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-brand-black mb-6 leading-tight">
            Cleaning solutions for every space
          </h2>
          <p className="text-xl text-gray-600">
            From homes to offices, we deliver exceptional results using the
            safest, most sustainable methods available.
          </p>
        </div>

        {/* Services Grid - Clean & Spacious */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}>
                {/* Image */}
                <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${
                    !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}>
                  <div>
                    <h3 className="text-4xl font-black text-brand-black mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List - Clean */}
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-eco-green/10 rounded-full flex items-center justify-center">
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
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA - Minimal */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-eco-green hover:text-eco-green-hover font-semibold text-lg group">
                    <span>Learn More</span>
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
            );
          })}
        </div>

        {/* Bottom CTA Card - Clean Design */}
        <div className="mt-20 bg-soft-grey rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black text-brand-black mb-4">
            Not sure which service you need?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;ll help you find the perfect cleaning solution for your
            space and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200">
              Get Free Consultation
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
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-eco-green text-brand-black hover:text-eco-green font-semibold px-8 py-4 rounded-xl transition-all duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
