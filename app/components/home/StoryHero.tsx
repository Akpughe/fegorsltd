"use client";

import React, { useEffect, useState } from "react";
import Button from "../Button";

export default function StoryHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-deep-navy via-deep-navy-light to-deep-navy">
      {/* Parallax Background Layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-eco-green rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-sky-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-eco-green rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Image Layer - moves slower */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: "url(/clean_office_interior.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-6 text-center">
        {/* Eye-catching badge */}
        <div className="inline-flex items-center gap-2 bg-eco-green/20 border border-eco-green/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-fade-in">
          <svg
            className="w-5 h-5 text-eco-green"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white font-medium">
            Scotland&apos;s First 100% Water-Based Cleaning
          </span>
        </div>

        {/* Main headline - HUGE and bold */}
        <h1 className="text-white mb-6 animate-fade-in-up animation-delay-100">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
            Clean Spaces.
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
            <span className="text-eco-green">Clean Planet.</span>
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black leading-none">
            Clean Conscience.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          Join the cleaning revolution. No harsh chemicals. No toxic residues.
          Just pure water, advanced technology, and a commitment to your health
          and our planet.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
          <Button
            href="/quote"
            variant="cta"
            className="text-lg px-8 py-4 bg-eco-green! text-white! hover:bg-eco-green-hover! transform hover:scale-105 transition-transform">
            Start Your Story →
          </Button>
          <button className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Watch How It Works
          </button>
        </div>

        {/* Scroll indicator with animation */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm uppercase tracking-wider">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6"
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
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-eco-green rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-sky-blue rounded-full animate-pulse animation-delay-100"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-eco-green rounded-full animate-pulse animation-delay-200"></div>
      </div>
    </section>
  );
}
