import React from "react";

export default function TrustComparison() {
  const comparisons = [
    {
      feature: "Cleaning Method",
      traditional: "Harsh chemical cleaners",
      fegors: "Pure ionized water technology",
      fegorsWins: true,
    },
    {
      feature: "Safety",
      traditional: "Toxic fumes & residues",
      fegors: "Safe for children, pets & staff",
      fegorsWins: true,
    },
    {
      feature: "Environmental Impact",
      traditional: "Pollutes water systems",
      fegors: "Zero harmful runoff",
      fegorsWins: true,
    },
    {
      feature: "Effectiveness",
      traditional: "95-98% bacteria removal",
      fegors: "99.9% bacteria removal",
      fegorsWins: true,
    },
    {
      feature: "Drying Time",
      traditional: "30-60 minutes",
      fegors: "Ready to use immediately",
      fegorsWins: true,
    },
    {
      feature: "Indoor Air Quality",
      traditional: "Degrades with chemical VOCs",
      fegors: "Improves - no chemical fumes",
      fegorsWins: true,
    },
  ];

  const certifications = [
    { name: "ISO 14001", desc: "Environmental Management", icon: "🌍" },
    { name: "Green Seal", desc: "Certified Eco-Friendly", icon: "✓" },
    { name: "Scotland Net Zero", desc: "2045 Commitment", icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
    { name: "5-Star Rated", desc: "Google Reviews", icon: "⭐" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom mx-auto px-6">
        {/* Section Header - Minimalist */}
        <div className="max-w-3xl mb-16">
          <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Water-Based?
          </span>
          <h2 className="text-5xl font-black text-brand-black mb-6 leading-tight">
            See the difference for yourself
          </h2>
          <p className="text-xl text-gray-600">
            An honest comparison between traditional chemical cleaning and our
            revolutionary water-based approach.
          </p>
        </div>

        {/* Comparison Table - Trust & Transparency */}
        <div className="mb-16">
          {/* Mobile - Card Layout */}
          <div className="lg:hidden space-y-6">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-lg">
                <div className="bg-soft-grey p-4">
                  <h4 className="font-bold text-brand-black">{item.feature}</h4>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-bold text-gray-500 uppercase">
                        Traditional
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-7">
                      {item.traditional}
                    </p>
                  </div>
                  <div className="bg-eco-green/5 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
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
                      <span className="text-xs font-bold text-eco-green uppercase">
                        Fegors
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-brand-black pl-7">
                      {item.fegors}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop - Table Layout */}
          <div className="hidden lg:block overflow-hidden rounded-3xl border-2 border-gray-100 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-soft-grey">
                    <th className="text-left p-6 font-bold text-brand-black text-lg">
                      Feature
                    </th>
                    <th className="text-left p-6 font-bold text-gray-600 text-lg">
                      Traditional Cleaning
                    </th>
                    <th className="text-left p-6 font-bold text-eco-green text-lg bg-eco-green/5">
                      Fegors Water-Based
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t border-gray-100 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}>
                      <td className="p-6 font-semibold text-brand-black">
                        {item.feature}
                      </td>
                      <td className="p-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-red-500 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item.traditional}
                        </div>
                      </td>
                      <td className="p-6 bg-eco-green/5">
                        <div className="flex items-center gap-2 font-semibold text-brand-black">
                          <svg
                            className="w-5 h-5 text-eco-green flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item.fegors}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Certifications & Trust Badges - Premium Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-eco-green/30 hover:shadow-lg transition-all duration-200">
              <div className="text-4xl mb-3">{cert.icon}</div>
              <div className="font-bold text-brand-black mb-1">{cert.name}</div>
              <div className="text-sm text-gray-600">{cert.desc}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ready to experience the Fegors difference?
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200">
            Get Your Free Quote
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
          </a>
        </div>
      </div>
    </section>
  );
}
