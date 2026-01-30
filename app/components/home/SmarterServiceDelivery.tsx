import Link from "next/link";
import ScrollAnimation from "../ScrollAnimation";

export default function SmarterServiceDelivery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom mx-auto px-6">
        <ScrollAnimation animationType="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-eco-green/10 rounded-full mb-6">
              <span className="text-eco-green font-bold text-sm uppercase tracking-wider">
                Digital Service Excellence
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-black mb-8">
              A Smarter Way to Deliver Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Fegors operates through a structured digital service system that ensures consistency, accountability, and measurable quality. We combine professional service delivery with digital workflows, performance tracking, and quality monitoring to deliver reliable results for homes and businesses.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Unlike traditional service providers, our approach allows services to be managed, verified, and continuously improved through structured operational processes.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-eco-green font-semibold hover:gap-4 transition-all duration-200 group/link">
              Read More
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
        </ScrollAnimation>
      </div>
    </section>
  );
}
