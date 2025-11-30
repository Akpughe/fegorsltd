import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";

export default function AboutPage() {
  const values = [
    {
      title: "Care for People",
      description:
        "Every space we clean belongs to someone. We work with respect — for families, students, staff, and communities.",
      icon: "❤️",
    },
    {
      title: "Quality Without Compromise",
      description:
        "We don't rush. We don't cut corners. We deliver cleaning that is visibly better and consistently reliable.",
      icon: "⭐",
    },
    {
      title: "Honest, Human Service",
      description:
        "No pressure, no complicated contracts, no exaggerated claims. Just genuine, friendly service.",
      icon: "🤝",
    },
    {
      title: "Health-Conscious Choices",
      description:
        "Whenever possible, we use low-chemical or water-based cleaning to support healthier indoor environments.",
      icon: "🌱",
    },
  ];

  const experience = [
    "Family homes",
    "Luxury apartments & student housing",
    "Offices and technology companies",
    "Large-scale new-build developments",
    "Community and shared-use buildings",
  ];

  const experienceClients = [
    "Skyscanner Edinburgh (daily commercial cleaning)",
    "Watkin Jones (Iona Street student accommodation — full site clean)",
  ];

  const teamQualities = [
    { quality: "Respectful, professional service", icon: "👔" },
    { quality: "High-quality cleaning", icon: "✨" },
    { quality: "Safe working practices", icon: "🛡️" },
    { quality: "Clear communication", icon: "💬" },
    { quality: "Community-minded work ethic", icon: "🤝" },
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
                Cleaning Spaces. Supporting Lives.
              </h1>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                Fegors was founded on a simple belief: clean spaces improve
                wellbeing, productivity, and community life.
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
                  We started as a small local team cleaning homes and community
                  spaces across Edinburgh. Over time, our work and reputation
                  grew, leading us to support major organisations and
                  construction developers — while still caring deeply about
                  everyday families and local residents.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We are proud to serve both individual clients and commercial
                  partners who value quality, trust, and consistency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/sustainability"
                    className="inline-flex items-center gap-2 text-eco-green font-semibold hover:gap-4 transition-all duration-200 group/link">
                    Learn more about our eco-friendly cleaning approach
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
                These principles guide everything we do, from how we train our
                team to how we serve our clients.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation
                key={value.title}
                animationType="fade-up"
                delay={index * 100}>
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

      {/* Our Experience */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-6">
                Our Experience
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We have worked across a wide range of cleaning environments
                including:
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {experience.map((item, index) => (
              <ScrollAnimation
                key={index}
                animationType="fade-up"
                delay={index * 100}>
                <div className="bg-soft-grey/30 rounded-xl p-6 flex items-center gap-4 hover:bg-eco-green/10 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-eco-green shrink-0"></div>
                  <span className="text-lg font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animationType="fade-up">
            <div className="bg-deep-navy rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Our team has supported clients such as:
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                {experienceClients.map((client, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-xl font-bold text-eco-green mb-2">
                      {client.split(" (")[0]}
                    </div>
                    <div className="text-white/80 text-sm">
                      ({client.split(" (")[1].replace(")", "")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-eco-green/10 to-white">
        <div className="container-custom mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animationType="scale">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-8">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                &quot;To provide dependable, high-quality cleaning services that
                make life easier, healthier, and more comfortable for every
                client we serve.&quot;
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Team */}
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
                  Our Team
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We are a trained, friendly, and reliable team committed to
                  delivering:
                </p>
                <div className="space-y-4">
                  {teamQualities.map((item) => (
                    <div
                      key={item.quality}
                      className="flex items-center gap-4 bg-soft-grey/20 p-4 rounded-xl hover:bg-eco-green/5 transition-colors duration-300">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-lg font-semibold text-gray-800">
                        {item.quality}
                      </span>
                    </div>
                  ))}
                </div>
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
                Ready to Experience the Fegors Difference?
              </h2>
              <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                Let us show you what professional, eco-friendly cleaning can do
                for your space. Get in touch today to learn more or request a
                quote.
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
