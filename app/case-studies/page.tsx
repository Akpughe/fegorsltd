import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-navy to-brand-black py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-eco-green/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <ScrollAnimation animationType="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
                Case Studies
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                See how we support our clients with professional, reliable, and
                eco-friendly cleaning solutions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Case Study 1: Skyscanner */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animationType="slide-right">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Skyscanner Edinburgh Office"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="slide-left">
              <div>
                <div className="inline-block px-4 py-2 bg-eco-green/10 rounded-full mb-6">
                  <span className="text-eco-green font-semibold text-sm uppercase tracking-wide">
                    Commercial Cleaning
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-4">
                  Skyscanner Edinburgh
                </h2>
                <h3 className="text-xl text-gray-700 font-bold mb-6">
                  Daily Office Cleaning with Eco-Friendly Methods
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                  <div>
                    <span className="block text-gray-500 font-semibold">
                      Client
                    </span>
                    <span className="text-brand-black">
                      Skyscanner Edinburgh
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500 font-semibold">
                      Location
                    </span>
                    <span className="text-brand-black">Edinburgh</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-gray-500 font-semibold">
                      Service
                    </span>
                    <span className="text-brand-black">
                      Everyday commercial cleaning
                    </span>
                  </div>
                </div>

                <div className="space-y-6 text-gray-600">
                  <div>
                    <h4 className="font-bold text-brand-black mb-2">
                      Project Overview
                    </h4>
                    <p>
                      Skyscanner&apos;s Edinburgh office required a reliable
                      team to maintain a clean, safe, and healthy workspace for
                      their staff. Fegors was selected to support their facility
                      with daily cleaning routines using eco-friendly products
                      and modern water-based technology.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-2">
                      Our Responsibilities
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Daily general cleaning</li>
                      <li>Workstation and desk hygiene</li>
                      <li>Kitchen & breakroom cleaning</li>
                      <li>Floor and surface cleaning</li>
                      <li>Waste collection and recycling management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-2">Outcome</h4>
                    <p>
                      Consistently clean, fresh, and healthy office environments
                      that enhance productivity and staff wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Case Study 2: Watkin Jones */}
      <section className="py-16 md:py-24 bg-soft-grey/30">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation
              animationType="slide-left"
              className="order-2 lg:order-1">
              <div>
                <div className="inline-block px-4 py-2 bg-sky-blue/10 rounded-full mb-6">
                  <span className="text-sky-blue font-semibold text-sm uppercase tracking-wide">
                    Construction Cleaning
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-4">
                  Watkin Jones — Iona Street
                </h2>
                <h3 className="text-xl text-gray-700 font-bold mb-6">
                  Full New-Build Cleaning Across Multiple Blocks
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                  <div>
                    <span className="block text-gray-500 font-semibold">
                      Client
                    </span>
                    <span className="text-brand-black">Watkin Jones</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 font-semibold">
                      Location
                    </span>
                    <span className="text-brand-black">
                      Iona Street, Edinburgh
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-gray-500 font-semibold">
                      Service
                    </span>
                    <span className="text-brand-black">
                      New-build construction cleaning
                    </span>
                  </div>
                </div>

                <div className="space-y-6 text-gray-600">
                  <div>
                    <h4 className="font-bold text-brand-black mb-2">
                      Project Overview
                    </h4>
                    <p>
                      Watkin Jones required a professional cleaning team capable
                      of completing a full builders’ clean and sparkle clean
                      across newly constructed student accommodation blocks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-2">
                      Our Responsibilities
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Dust extraction & full-site clean</li>
                      <li>Builders’ and sparkle cleans</li>
                      <li>Handover-ready cleaning</li>
                      <li>Surface polishing</li>
                      <li>Waste and debris removal</li>
                      <li>Final-stage presentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-2">Outcome</h4>
                    <p>
                      All areas were handed over on schedule, ready for student
                      occupancy, with high-quality finishing and attention to
                      detail.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animationType="slide-right"
              className="order-1 lg:order-2">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                  alt="Watkin Jones Student Accommodation"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-eco-green to-eco-green-hover relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <ScrollAnimation animationType="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                Whether it's a commercial space or a new development, we have
                the expertise to deliver exceptional results.
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
