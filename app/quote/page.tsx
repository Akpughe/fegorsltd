'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from '../components/ScrollAnimation';

export default function QuotePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
        address: '',
        postcode: '',
        spaceSize: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const serviceTypes = [
        'Residential Cleaning',
        'Commercial Cleaning',
        'Eco Water-Based Cleaning',
        'Specialist Cleaning',
        'Deep Cleaning',
        'Move-in/Move-out',
        'Post-Construction',
        'Not Sure - Need Advice'
    ];

    const spaceSizes = [
        'Small (1-2 bedrooms / Under 1000 sq ft)',
        'Medium (3-4 bedrooms / 1000-2000 sq ft)',
        'Large (5+ bedrooms / 2000-4000 sq ft)',
        'Extra Large (4000+ sq ft)',
        'Commercial Space (Please specify in message)'
    ];

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.serviceType) {
            newErrors.serviceType = 'Please select a service type';
        }

        if (!formData.postcode.trim()) {
            newErrors.postcode = 'Postcode is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call - Replace with actual API endpoint
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSuccess(true);
            setIsSubmitting(false);
        }, 1500);

        // TODO: Replace with actual API call
        // try {
        //     const response = await fetch('/api/quote', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(formData)
        //     });
        //     if (response.ok) {
        //         setIsSuccess(true);
        //     }
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-eco-green/5 to-white">
                <div className="container-custom mx-auto px-6 py-16">
                    <ScrollAnimation animationType="scale">
                        <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl shadow-2xl p-12">
                            <div className="w-20 h-20 bg-eco-green rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-black mb-4">
                                Thank You for Your Request!
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We've received your quote request and our team will review it shortly. You can expect to
                                hear from us within 24 hours with a detailed quote and next steps.
                            </p>
                            <div className="bg-soft-grey/50 rounded-xl p-6 mb-8">
                                <h3 className="font-bold text-brand-black mb-3">What Happens Next?</h3>
                                <ul className="text-left space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-eco-green mt-1">✓</span>
                                        <span>Our team reviews your requirements</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-eco-green mt-1">✓</span>
                                        <span>We prepare a detailed, personalized quote</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-eco-green mt-1">✓</span>
                                        <span>You'll receive a call or email within 24 hours</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200"
                                >
                                    Back to Home
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-2 bg-soft-grey hover:bg-gray-200 text-brand-black font-semibold px-8 py-4 rounded-xl transition-all duration-200"
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-deep-navy to-deep-navy-light py-16 md:py-24 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom mx-auto px-6 relative z-10">
                    <ScrollAnimation animationType="fade-up">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
                                Request a Free Quote
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                Tell us about your cleaning needs and we'll provide a detailed, personalized quote
                                within 24 hours. No obligation, completely free.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-soft-grey/20 to-white">
                <div className="container-custom mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <ScrollAnimation animationType="fade-up">
                            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                                {/* Personal Information */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-heading font-bold text-brand-black mb-6">
                                        Your Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                    errors.fullName ? 'border-red-500' : 'border-gray-200'
                                                } focus:border-eco-green focus:outline-none transition-colors`}
                                                placeholder="John Smith"
                                            />
                                            {errors.fullName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                    errors.email ? 'border-red-500' : 'border-gray-200'
                                                } focus:border-eco-green focus:outline-none transition-colors`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                            )}
                                        </div>

                                        {/* Phone */}
                                        <div className="md:col-span-2">
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                    errors.phone ? 'border-red-500' : 'border-gray-200'
                                                } focus:border-eco-green focus:outline-none transition-colors`}
                                                placeholder="+44 123 456 7890"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-heading font-bold text-brand-black mb-6">
                                        Service Details
                                    </h3>
                                    <div className="space-y-6">
                                        {/* Service Type */}
                                        <div>
                                            <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Type of Service *
                                            </label>
                                            <select
                                                id="serviceType"
                                                name="serviceType"
                                                value={formData.serviceType}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                    errors.serviceType ? 'border-red-500' : 'border-gray-200'
                                                } focus:border-eco-green focus:outline-none transition-colors`}
                                            >
                                                <option value="">Select a service...</option>
                                                {serviceTypes.map((service) => (
                                                    <option key={service} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.serviceType && (
                                                <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                                            )}
                                        </div>

                                        {/* Space Size */}
                                        <div>
                                            <label htmlFor="spaceSize" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Space Size
                                            </label>
                                            <select
                                                id="spaceSize"
                                                name="spaceSize"
                                                value={formData.spaceSize}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-eco-green focus:outline-none transition-colors"
                                            >
                                                <option value="">Select size...</option>
                                                {spaceSizes.map((size) => (
                                                    <option key={size} value={size}>
                                                        {size}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Address & Postcode */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="md:col-span-2">
                                                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-eco-green focus:outline-none transition-colors"
                                                    placeholder="123 High Street, Edinburgh"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="postcode" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Postcode *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="postcode"
                                                    name="postcode"
                                                    value={formData.postcode}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                        errors.postcode ? 'border-red-500' : 'border-gray-200'
                                                    } focus:border-eco-green focus:outline-none transition-colors`}
                                                    placeholder="EH1 1AA"
                                                />
                                                {errors.postcode && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Additional Information
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-eco-green focus:outline-none transition-colors resize-none"
                                                placeholder="Tell us more about your cleaning needs, preferred schedule, or any special requirements..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                                    </button>
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center justify-center bg-soft-grey hover:bg-gray-200 text-brand-black font-semibold px-8 py-4 rounded-xl transition-all duration-200"
                                    >
                                        View Services
                                    </Link>
                                </div>

                                <p className="text-sm text-gray-500 mt-6 text-center">
                                    * Required fields. We'll never share your information with third parties.
                                </p>
                            </form>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </main>
    );
}
