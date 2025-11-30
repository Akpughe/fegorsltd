import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";

export default function SustainabilityPage() {
  const sdgGoals = [
    {
      number: 3,
      title: "Good Health & Well-being",
      icon: "❤️",
      description: "Reducing chemical exposure for safer indoor environments.",
    },
    {
      number: 11,
      title: "Sustainable Cities",
      icon: "🏙️",
      description:
        "Eco-friendly urban cleaning contributing to greener communities.",
    },
    {
      number: 12,
      title: "Responsible Consumption",
      icon: "♻️",
      description:
        "Minimizing waste and chemicals in our production processes.",
    },
  ];

  const philosophy = [
    {
      title: "Low-Chemical Cleaning Where Possible",
      description:
        "We prioritise gentler, non-harsh products and modern water-based cleaning technology. This reduces chemical exposure in homes, student accommodations, and offices.",
      icon: "💧",
      points: ["Safer for families", "Allergy-friendly", "Better for pets"],
    },
    {
      title: "Supporting UK Net Zero Goals",
      description:
        "The UK aims to reach Net Zero emissions by 2050. Our contribution includes reducing chemical waste, minimising plastic use, and efficient water-based floor cleaning.",
      icon: "🇬🇧",
      points: [
        "Reducing waste",
        "Minimising plastic",
        "Extending surface lifespan",
      ],
    },
    {
      title: "SDG-Aligned Daily Practices",
      description:
        "Our work supports key UN Sustainable Development Goals: Good Health & Wellbeing (SDG 3), Sustainable Cities (SDG 11), and Responsible Consumption (SDG 12).",
      icon: "🇺🇳",
      points: [
        "Healthier air quality",
        "Safer shared facilities",
        "Reduced chemical usage",
      ],
    },
    {
      title: "Waste Awareness & Responsible Disposal",
      description:
        "For both homes and commercial clients, we ensure proper rubbish sorting, reduced plastic liner usage, and safe disposal of cleaning waste.",
      icon: "♻️",
      points: ["Proper sorting", "Reduced plastic", "Recycling encouragement"],
    },
    {
      title: "Healthier Indoor Environments",
      description:
        "A clean space should feel refreshing, not chemical-heavy. Our methods aim to create fresher air and safer breathing spaces without irritation.",
      icon: "🏠",
      points: ["Fresher air", "Safer breathing", "Better experience"],
    },
  ];

  const benefits = [
    {
      title: "Chemical-Free Technology",
      description:
        "Our Tennant T300 ec-H2O system converts water into a powerful cleaning solution without any chemicals, protecting your health and the environment.",
      icon: "🚫",
      stats: ["0% Chemicals", "100% Effective"],
    },
    {
      title: "Water Conservation",
      description:
        "Advanced cleaning technology uses up to 70% less water than traditional methods while achieving superior results.",
      icon: "💧",
      stats: ["70% Less Water", "Superior Clean"],
    },
    {
      title: "Improved Air Quality",
      description:
        "No harsh chemical fumes or residues means cleaner, healthier air for you, your family, and employees.",
      icon: "🌬️",
      stats: ["Zero VOCs", "Fresh Air"],
    },
    {
      title: "Reduced Carbon Footprint",
      description:
        "By eliminating chemical production, packaging, and transportation, we significantly reduce environmental impact.",
      icon: "🌱",
      stats: ["Lower Emissions", "Green Future"],
    },
  ];

  const impactStats = [
    { number: "10,000+", label: "Liters of Water Saved Monthly", icon: "💧" },
    { number: "0", label: "Toxic Chemicals Used", icon: "🚫" },
    { number: "500+", label: "Healthier Indoor Spaces", icon: "🏠" },
    { number: "100%", label: "Commitment to Sustainability", icon: "✅" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80"
          alt="Green sustainable environment"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-eco-green/85 via-eco-green/70 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom mx-auto px-6">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                <span className="text-white font-semibold text-sm uppercase tracking-wide">
                  🌍 Our Commitment to Sustainability
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 animate-fade-in-up">
                Committed to a Cleaner Future
              </h1>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                Sustainability isn&apos;t just a buzzword for us—it&apos;s how
                we operate every day.
              </p>
              <Link
                href="/services/eco-cleaning"
                className="inline-flex items-center gap-2 bg-white hover:bg-soft-grey text-eco-green font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 animate-fade-in-up animation-delay-200">
                Explore Eco Cleaning
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

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <ScrollAnimation
                key={stat.label}
                animationType="scale"
                delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-eco-green mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Tennant Technology Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-eco-green/5 to-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <ScrollAnimation animationType="slide-left">
              <div>
                <div className="inline-block px-4 py-2 bg-eco-green/10 rounded-full mb-4">
                  <span className="text-eco-green font-semibold text-sm uppercase tracking-wide">
                    Revolutionary Technology
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                  The Tennant T300 Advantage
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At the heart of our sustainability commitment is the Tennant
                  T300 with ec-H2O™ technology. We believe that effective
                  cleaning shouldn&apos;t come at a cost to the environment or
                  your health. That&apos;s why we&apos;ve invested in
                  chemical-free technologies and sustainable practices across
                  our operations.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-eco-green/20 flex items-center justify-center">
                      <span className="text-eco-green font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">
                        Scientifically Proven
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Eliminates 99.9% of bacteria without chemicals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-eco-green/20 flex items-center justify-center">
                      <span className="text-eco-green font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">
                        Environmentally Safe
                      </h4>
                      <p className="text-gray-600 text-sm">
                        No chemical runoff or environmental contamination
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-eco-green/20 flex items-center justify-center">
                      <span className="text-eco-green font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">
                        Cost Effective
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Reduces water and chemical costs significantly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Image */}
            <ScrollAnimation animationType="slide-right">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                  alt="Advanced eco-cleaning technology"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                Environmental Benefits
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our eco-friendly approach delivers measurable benefits for your
                health, your space, and the planet.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation
                key={benefit.title}
                animationType="fade-up"
                delay={index * 100}>
                <div className="bg-gradient-to-br from-soft-grey/30 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-eco-green/10 hover:border-eco-green/30">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-brand-black mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="flex gap-4">
                    {benefit.stats.map((stat) => (
                      <div
                        key={stat}
                        className="px-4 py-2 bg-eco-green/10 rounded-full">
                        <span className="text-eco-green font-bold text-sm">
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                Our Eco-Friendly Philosophy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe every cleaning decision — from detergents to
                equipment to daily habits — can contribute to a healthier
                society.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <ScrollAnimation
                key={item.title}
                animationType="fade-up"
                delay={index * 100}>
                <div className="bg-gradient-to-br from-soft-grey/30 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-eco-green/10 hover:border-eco-green/30 h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-brand-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="px-3 py-1 bg-eco-green/10 rounded-full text-xs font-bold text-eco-green">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-eco-green/5 to-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                Aligned with UN Sustainable Development Goals
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our sustainability practices contribute directly to the United
                Nations' global goals for a better future.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgGoals.map((goal, index) => (
              <ScrollAnimation
                key={goal.number}
                animationType="scale"
                delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-eco-green/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{goal.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-eco-green mb-1">
                        SDG {goal.number}
                      </div>
                      <h3 className="text-lg font-heading font-bold text-brand-black">
                        {goal.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-16 md:py-24 bg-soft-grey/30">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animationType="slide-right">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Modern Sustainable Office"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-lg">
                    Partnering with forward-thinking companies like Skyscanner &
                    Watkin Jones
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="slide-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-6">
                  Why Businesses Choose Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Organisations such as Skyscanner and developers like Watkin
                  Jones are increasingly choosing suppliers who align with
                  responsible, future-focused practices.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Fegors fits naturally into that vision:
                </p>
                <ul className="space-y-4">
                  {[
                    "Consistent eco-friendly routines",
                    "Human-centred cleaning",
                    "Health-conscious methods",
                    "A local team committed to better practices",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-eco-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-16 md:py-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animationType="fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-black mb-8">
                Looking Ahead
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                As Fegors grows, we aim to further enhance our sustainable
                approach by:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                  "Exploring more biodegradable products",
                  "Reducing equipment energy usage",
                  "Increasing water-efficient cleaning",
                  "Supporting community-focused environmental initiatives",
                ].map((goal) => (
                  <div
                    key={goal}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <span className="text-lg font-semibold text-eco-green">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-2xl p-8 md:p-12 border border-white/20">
                <p className="text-2xl md:text-3xl font-heading font-bold leading-tight">
                  &quot;Our goal is simple: deliver excellent cleaning while
                  contributing positively to the spaces and communities we
                  serve.&quot;
                </p>
              </div>
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
                Join Us in Creating a Sustainable Future
              </h2>
              <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                Choose eco-friendly cleaning that's better for your health, your
                space, and our planet. Request a quote for chemical-free
                cleaning today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-soft-grey text-eco-green font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105">
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
                <Link
                  href="/services/eco-cleaning"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-200">
                  Learn More
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
