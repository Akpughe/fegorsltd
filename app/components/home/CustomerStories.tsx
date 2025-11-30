import React from "react";

export default function CustomerStories() {
  const stories = [
    {
      quote: "Delivered on time with excellent attention to detail.",
      author: "Watkin Jones",
      role: "Property Developer",
      location: "Iona Street, Edinburgh",
      highlight: "Professional Service",
      stat: "On Schedule Delivery",
      gradient: "from-eco-green to-eco-green-light",
    },
    {
      quote: "Offices feel fresher and well cared for.",
      author: "Skyscanner",
      role: "Technology Company",
      location: "Edinburgh Office",
      highlight: "Healthier Workspace",
      stat: "Daily Cleaning",
      gradient: "from-sky-blue to-blue-400",
    },
    {
      quote: "Our home is healthier for our children.",
      author: "Residential Client",
      role: "Edinburgh Homeowner",
      location: "Edinburgh",
      highlight: "Family-Safe Cleaning",
      stat: "Chemical-Free",
      gradient: "from-eco-green-light to-yellow-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-soft-grey">
      <div className="container-custom mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-eco-green font-bold text-sm uppercase tracking-wider mb-4 block">
            Real Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-6">
            Transforming spaces.
            <span className="block text-eco-green">Transforming lives.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Hear from real people across Scotland who made the switch to safer,
            smarter cleaning
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="group relative">
              {/* Card with gradient background */}
              <div
                className={`relative bg-gradient-to-br ${story.gradient} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 min-h-[450px] flex flex-col`}>
                {/* Stat Badge - Floating */}
                <div className="absolute -top-4 -right-4 bg-white text-brand-black rounded-2xl px-6 py-3 shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform">
                  <div className="text-2xl font-black text-eco-green">
                    {story.stat.split(" ")[0]}
                  </div>
                  <div className="text-xs font-semibold">
                    {story.stat.split(" ").slice(1).join(" ")}
                  </div>
                </div>

                {/* Quote Mark */}
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-white/30"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="text-lg leading-relaxed mb-6 flex-grow">
                  &quot;{story.quote}&quot;
                </blockquote>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">
                    {story.highlight}
                  </span>
                </div>

                {/* Author Info */}
                <div className="border-t border-white/20 pt-6">
                  <div className="font-bold text-lg mb-1">{story.author}</div>
                  <div className="text-white/80 text-sm mb-1">{story.role}</div>
                  <div className="flex items-center gap-1 text-white/60 text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {story.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Row */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-eco-green mb-2">
                4.9/5
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray-600">Google Reviews</div>
            </div>

            <div className="w-px h-16 bg-gray-200 hidden md:block"></div>

            <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-eco-green mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600 font-semibold">
                Happy Clients
              </div>
            </div>

            <div className="w-px h-16 bg-gray-200 hidden md:block"></div>

            <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-eco-green mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 font-semibold">
                Eco-Friendly
              </div>
            </div>

            <div className="w-px h-16 bg-gray-200 hidden md:block"></div>

            <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-eco-green mb-2">7</div>
              <div className="text-sm text-gray-600 font-semibold">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
