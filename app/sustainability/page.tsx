import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";

export default function SustainabilityPage() {
  const investingPoints = [
    "Ongoing staff training in modern, eco-friendly technologies",
    "Education on safe cleaning practices",
    "Upskilling teams to support the UK’s pathway to Net Zero",
    "Practical knowledge aligned with the UN Sustainable Development Goals (SDGs)",
  ];

  const sustainabilityPriorities = [
    {
      text: "Reduced use of harmful chemicals, promoting safer indoor environments",
      icon: "🧪",
    },
    {
      text: "Lower water consumption through modern cleaning systems",
      icon: "💧",
    },
    {
      text: "Eco-conscious best practices that minimise environmental impact",
      icon: "🌍",
    },
    {
      text: "Responsible waste handling across all our operations",
      icon: "♻️",
    },
  ];

  const netZeroGoals = [
    "Reduced carbon footprint across our services",
    "Environmentally responsible maintenance practices",
    "Cleaner, safer public and private facilities",
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/r9a7zbqsf/Sustainable,%20Chemical-Reduced%20Cleaning.webp"
          alt="Green sustainable environment"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
        {/* Overlay - Stronger on mobile, gradient on desktop */}
        <div className="absolute inset-0 bg-black/50 lg:bg-linear-to-r lg:from-black/80 lg:via-black/40 lg:to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom mx-auto px-6">
            <div className="max-w-3xl text-left">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in border border-white/10">
                <span className="text-white font-semibold text-xs md:text-sm uppercase tracking-wider">
                  People First. Community Always.
                </span>
              </div>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 animate-fade-in-up leading-tight drop-shadow-2xl">
                OUR COMMITMENT TO COMMUNITY & CLEANER FUTURES
              </h1>
              <p className="text-sm md:text-xl text-white/95 leading-relaxed mb-8 animate-fade-in-up animation-delay-100 font-medium drop-shadow-md">
                Our work is built on one simple belief: the health, dignity and
                wellbeing of the people of Scotland and the wider UK must be
                protected in every space we clean.
              </p>
              <div className="text-white/90 text-xs md:text-lg animate-fade-in-up animation-delay-200 drop-shadow-md">
                <p>
                  Every decision we make, every service we deliver, and every
                  innovation we adopt is guided by our responsibility to the
                  communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Cleaner Scotland / Safer Spaces */}
      <section className="py-12 md:py-28 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollAnimation animationType="slide-right">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Cleaner Scotland"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="slide-left">
              <div>
                <span className="text-eco-green font-bold text-xs md:text-sm tracking-widest uppercase mb-2 block">
                  A Cleaner Scotland Starts With Us All
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                  Championing Safer Spaces
                </h2>
                <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed lg:text-justify">
                  <p>
                    We are committed to creating environments where families,
                    workers, patients, and visitors can feel safe.
                  </p>
                  <p>
                    That means using modern, science-led cleaning techniques
                    that reduce the presence of harmful substances and support
                    better indoor air quality.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Investing in People */}
      <section className="py-12 md:py-28 bg-soft-grey/30 relative">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-brand-black mb-4 px-4 md:px-0">
                Investing in People, Skills & Future Technologies
              </h2>
              <p className="text-lg md:text-xl text-eco-green font-bold">
                Training for Tomorrow
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <ScrollAnimation animationType="slide-right">
              <div className="space-y-8">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We believe Scotland deserves a workforce equipped with the
                  latest skills in sustainable cleaning. That’s why we invest
                  heavily in:
                </p>
                <div className="grid gap-4">
                  {investingPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-eco-green/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-eco-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium text-brand-black">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium text-brand-black italic border-l-4 border-eco-green pl-4">
                  &ldquo;Our people are not just cleaners, they are community
                  protectors, trained in advanced methods that keep environments
                  healthier.&rdquo;
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="slide-left">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Training for Tomorrow"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Sustainability at the Heart */}
      <section className="py-12 md:py-28 bg-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <span className="text-eco-green font-bold text-xs md:text-sm tracking-widest uppercase mb-2 block">
                Sustainability at the Heart of Our Service
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-black mb-6">
                Protecting What Matters Most
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our sustainability journey begins with the people we serve.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityPriorities.map((item, index) => (
              <ScrollAnimation
                key={index}
                animationType="fade-up"
                delay={index * 100}>
                <div className="bg-linear-to-br from-soft-grey/10 to-white p-8 rounded-2xl h-full border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animationType="fade-up">
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-xl font-medium text-brand-black">
                By embracing innovation, we help communities enjoy cleaner
                spaces without compromising the planet they depend on.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Supporting Net Zero */}
      <section className="py-12 md:py-28 bg-brand-black text-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eco-green/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-blue/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollAnimation animationType="fade-up">
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
                  alt="Supporting Net Zero"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-8">
                  <p className="text-white text-lg font-medium">
                    Contributing to the UK’s wider target of achieving Net Zero.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="slide-left">
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black mb-6">
                  Supporting the UK’s Net Zero Vision
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                  Our methods align with national environmental goals,
                  contributing to the UK’s wider target of achieving Net Zero.
                  Through efficient cleaning solutions and community-first
                  policies, we actively support:
                </p>
                <div className="space-y-4">
                  {netZeroGoals.map((goal, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-eco-green text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg font-medium">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* United for Tomorrow - Conclusion */}
      <section className="py-12 md:py-28 bg-linear-to-br from-eco-green/10 to-white">
        <div className="container-custom mx-auto px-6 text-center">
          <ScrollAnimation animationType="scale">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-8">
                United for a Healthier Tomorrow
              </h2>
              <div className="space-y-6 text-lg md:text-2xl text-gray-700 leading-relaxed font-light">
                <p>
                  The heart of our sustainability commitment isn’t a machine or
                  a technology,{" "}
                  <span className="font-bold text-eco-green">it’s people.</span>
                </p>
                <p>
                  It’s Scotland’s families, workers, students, communities and
                  businesses who deserve a safe and healthy environment every
                  single day.
                </p>
                <p className="font-bold text-brand-black mt-8 text-2xl md:text-3xl">
                  And we’re proud to play our part.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 text-lg">
                  Partner With Us
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
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
