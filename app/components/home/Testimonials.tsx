import React from 'react';
import Section from '../Section';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Fegors transformed our office space. The water-based cleaning is remarkable - no harsh smells, just pristine results. Our team notices the difference every day.",
            author: "Sarah Mitchell",
            role: "Facilities Manager, Edinburgh Tech Hub",
        },
        {
            quote: "As someone with chemical sensitivities, finding Fegors was a game-changer. My home has never been cleaner, and I can breathe easy knowing it's completely safe for my family.",
            author: "James Robertson",
            role: "Glasgow Homeowner",
        },
        {
            quote: "Professional, reliable, and truly eco-conscious. Fegors helps us meet our sustainability targets while maintaining the highest standards of cleanliness.",
            author: "Emma Watson",
            role: "Operations Director, Green Retail Ltd",
        },
    ];

    return (
        <Section id="testimonials">
            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-brand-black mb-4">What Our Clients Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Don&apos;t just take our word for it - hear from the clients who trust us with their spaces.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 animate-scale-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="mb-6">
                            <svg
                                className="w-10 h-10 text-eco-green/20"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        <p className="text-gray-700 mb-6 italic">
                            &quot;{testimonial.quote}&quot;
                        </p>

                        <div className="border-t border-soft-grey pt-4">
                            <p className="font-semibold text-brand-black">
                                {testimonial.author}
                            </p>
                            <p className="text-sm text-gray-600">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
