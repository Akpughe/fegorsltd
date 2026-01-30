"use client";

import React, { useState } from "react";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cleaningType: "",
    preferredDate: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactMethods = [
    {
      title: "Phone",
      value: "07874079166",
      icon: "📞",
      link: "tel:07874079166",
      description: "Mon–Fri: 9am-7pm, Sat: 10am-2pm, Closed Sundays",
    },
    {
      title: "Email",
      value: "hello@fegors.co.uk",
      icon: "✉️",
      link: "mailto:hello@fegors.co.uk",
      description: "We respond within 24 hours",
    },
  ];

  const serviceAreas = [
    "Edinburgh",
    "Glasgow",
    "Aberdeen",
    "Dundee",
    "Inverness",
    "Perth",
    "Stirling",
    "Falkirk",
    "Paisley",
    "East Lothian",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center bg-linear-to-br from-eco-green/5 to-white">
        <div className="container-custom mx-auto px-6 py-16">
          <ScrollAnimation animationType="scale">
            <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-eco-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
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
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-4">
                Message Sent Successfully!
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Thank you for contacting Fegors. We&apos;ve received your
                message and will get back to you within 24 hours.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg">
                Back to Home
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-deep-navy to-deep-navy-light py-16 md:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <ScrollAnimation animationType="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                We&rsquo;re here to help — whether it&rsquo;s your home, office,
                or new development.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <ScrollAnimation
                key={method.title}
                animationType="fade-up"
                delay={index * 100}>
                <a
                  href={method.link}
                  target={method.title === "Address" ? "_blank" : undefined}
                  rel={
                    method.title === "Address"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block bg-linear-to-br from-soft-grey/30 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-eco-green/20">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-brand-black mb-2">
                    {method.title}
                  </h3>
                  <p className="text-eco-green font-semibold mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Service Areas */}
      <section className="py-16 md:py-24 bg-linear-to-br from-soft-grey/20 to-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollAnimation animationType="slide-left">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-heading font-black text-brand-black mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        } focus:border-eco-green focus:outline-none transition-colors`}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 ${
                            errors.email ? "border-red-500" : "border-gray-200"
                          } focus:border-eco-green focus:outline-none transition-colors`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-eco-green focus:outline-none transition-colors"
                          placeholder="+44 123 456 7890"
                        />
                      </div>
                    </div>

                    {/* Type of Cleaning & Preferred Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="cleaningType"
                          className="block text-sm font-semibold text-gray-700 mb-2">
                          Type of Cleaning Required
                        </label>
                        <select
                          id="cleaningType"
                          name="cleaningType"
                          value={formData.cleaningType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-eco-green focus:outline-none transition-colors bg-white">
                          <option value="">Select a service...</option>
                          <option value="residential">
                            Residential Cleaning
                          </option>
                          <option value="commercial">
                            Commercial Cleaning
                          </option>
                          <option value="construction">
                            New-Build & Construction
                          </option>
                          <option value="eco">Eco-Friendly Cleaning</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="preferredDate"
                          className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-eco-green focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2">
                        Message / Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.message ? "border-red-500" : "border-gray-200"
                        } focus:border-eco-green focus:outline-none transition-colors resize-none`}
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields
                    </p>
                  </form>
                </div>
              </ScrollAnimation>
            </div>

            {/* Service Areas */}
            <div className="lg:col-span-1">
              <ScrollAnimation animationType="slide-right">
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                  <h3 className="text-2xl font-heading font-bold text-brand-black mb-6">
                    Service Areas
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We proudly serve communities across Scotland:
                  </p>
                  <div className="space-y-3">
                    {serviceAreas.map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-2 text-gray-700">
                        <svg
                          className="w-5 h-5 text-eco-green shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-6">
                    Don&apos;t see your area?{" "}
                    <Link
                      href="/quote"
                      className="text-eco-green font-semibold hover:underline">
                      Contact us
                    </Link>{" "}
                    to check availability.
                  </p>
                </div>

                {/* Quick Links */}
                <ScrollAnimation animationType="fade-up" delay={100}>
                  <div className="bg-linear-to-br from-eco-green to-eco-green-hover rounded-3xl shadow-xl p-8 text-white">
                    <h3 className="text-xl font-heading font-bold mb-4">
                      Need a Quote?
                    </h3>
                    <p className="text-white/90 mb-6">
                      Get a detailed, personalized quote for your cleaning needs
                      in 24 hours.
                    </p>
                    <Link
                      href="/quote"
                      className="block text-center bg-white text-eco-green font-bold px-6 py-3 rounded-xl hover:bg-soft-grey transition-all duration-200">
                      Request a Quote
                    </Link>
                  </div>
                </ScrollAnimation>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto px-6">
          <ScrollAnimation animationType="fade-up">
            <div className="max-w-4xl mx-auto text-center bg-linear-to-br from-soft-grey/40 to-white rounded-3xl p-12 border-2 border-eco-green/10">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you need residential, commercial, or specialist cleaning
                services, we&apos;re here to deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg">
                  View Our Services
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
                  href="/sustainability"
                  className="inline-flex items-center justify-center gap-2 bg-soft-grey hover:bg-gray-200 text-brand-black font-semibold px-8 py-4 rounded-xl transition-all duration-200">
                  Our Sustainability
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
