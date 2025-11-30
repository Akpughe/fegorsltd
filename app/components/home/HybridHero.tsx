"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function HybridHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-soft-grey/60 to-eco-green/5 pt-20 lg:pt-0">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Organic Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-eco-green/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-sky-blue/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-eco-green-light/20 rounded-full blur-3xl animate-float-slow"></div>

        {/* Geometric Accents */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-eco-green/10 rounded-2xl rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-sky-blue/10 rounded-full"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(76_175_80_/_0.08)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      {/* Split Layout - Premium Minimalist meets Storytelling */}
      <div className="container-custom mx-auto px-6 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content (Premium Minimalist) */}
          <div className="relative z-10 space-y-8 animate-fade-in-up">
            {/* Trust Badge - Transparency Element */}
            <div className="inline-flex items-center gap-2 bg-eco-green/10 border border-eco-green/20 rounded-full px-5 py-2">
              <svg
                className="w-5 h-5 text-eco-green"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-brand-black">
                Local • Reliable • Professional • Eco-Conscious
              </span>
            </div>

            {/* Headline - Bold but Cleaner */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black text-brand-black leading-none tracking-tight">
                Clean Spaces.
                <span className="block text-eco-green mt-2">
                  Healthy Living. Trusted Service.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Fegors is a local, people-focused cleaning company providing
                residential, commercial, and new-build cleaning across Edinburgh
                — with a commitment to quality, care, and healthier
                environments.
              </p>
            </div>

            {/* Trust Indicators - Minimalist */}
            <div className="flex flex-wrap items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-eco-green border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-sky-blue border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-eco-green-light border-2 border-white"></div>
                </div>
                <span className="text-gray-600 font-medium">
                  500+ Happy Clients
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600 font-medium">4.9/5</span>
              </div>
            </div>

            {/* CTAs - Clean Design */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get a Free Quote
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
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-eco-green text-brand-black hover:text-eco-green font-semibold px-8 py-4 rounded-xl transition-all duration-200">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Book a Visit
              </Link>
            </div>
          </div>

          {/* Right Side - Image with Parallax (Minimalist meets Storytelling) */}
          <div className="relative h-[400px] lg:h-[600px] hidden lg:block animate-fade-in animation-delay-200">
            {/* Main Image - High Quality Unsplash */}
            <div
              className="relative h-full rounded-3xl overflow-hidden shadow-2xl"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="Modern clean office interior with natural light"
                className="w-full h-full object-cover"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-eco-green/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card - Glassmorphism (Dark Mode Element) */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl animate-slide-in-right animation-delay-400">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-black text-eco-green">
                    99.9%
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    Bacteria Removed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-eco-green">0</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Harsh Chemicals
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-eco-green">100%</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Eco-Friendly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
