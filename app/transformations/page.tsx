"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";

// Transformation pairs with before/after images
const transformations = [
  {
    before:
      "https://ik.imagekit.io/r9a7zbqsf/325a3f56-6418-40b5-a9a3-491befe97769.JPG",
    after:
      "https://ik.imagekit.io/r9a7zbqsf/325a3f56-6418-40b5-a9a3-491befe97769%202.JPG",
    title: "Deep Clean Transformation",
    description:
      "Professional cleaning that restores surfaces to their original condition",
  },
  {
    before:
      "https://ik.imagekit.io/r9a7zbqsf/15a0543a-5a63-46f5-8d02-68c1e929e697.JPG",
    after:
      "https://ik.imagekit.io/r9a7zbqsf/15a0543a-5a63-46f5-8d02-68c1e929e697%202.JPG",
    title: "Commercial Space Revival",
    description:
      "Complete cleaning solution for commercial and office environments",
  },
  {
    before:
      "https://ik.imagekit.io/r9a7zbqsf/3dc93692-72ca-402c-b20c-26e18be9e3aa.JPG",
    after:
      "https://ik.imagekit.io/r9a7zbqsf/3dc93692-72ca-402c-b20c-26e18be9e3aa%202.JPG",
    title: "Industrial Cleaning Excellence",
    description: "Heavy-duty cleaning for industrial facilities and warehouses",
  },
  {
    before:
      "https://ik.imagekit.io/r9a7zbqsf/2d260a3b-ec1c-488c-8054-d6c330617ff5.JPG",
    after:
      "https://ik.imagekit.io/r9a7zbqsf/2d260a3b-ec1c-488c-8054-d6c330617ff5%202.JPG",
    title: "New Build Finishing",
    description: "Post-construction cleaning that prepares spaces for handover",
  },
  {
    before:
      "https://ik.imagekit.io/r9a7zbqsf/1c79d9dd-87f6-4c9e-8d28-dcd5f8ab9d7f.JPG",
    after:
      "https://ik.imagekit.io/r9a7zbqsf/1c79d9dd-87f6-4c9e-8d28-dcd5f8ab9d7f%202.JPG",
    title: "Precision Detail Cleaning",
    description: "Meticulous attention to detail for a spotless finish",
  },
];

export default function TransformationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen pt-20">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 transition-all duration-300 animate-in fade-in"
          onClick={() => setSelectedImage(null)}>
          <button
            className="absolute top-6 right-6 text-white hover:text-eco-green transition-colors z-110"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}>
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Transformation full view"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-deep-navy via-deep-navy to-brand-black py-20 md:py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-eco-green/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl animate-float-delayed"></div>
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <ScrollAnimation animationType="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-eco-green/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-eco-green font-semibold text-sm uppercase tracking-wide">
                  Real Results
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
                Our Transformations
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
                Witness dramatic before and after results from real Fegors
                cleaning projects across Scotland.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-eco-green mb-2">
                    {transformations.length}
                  </div>
                  <div className="text-white/70 font-medium">
                    Transformations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-eco-green mb-2">
                    2,500+
                  </div>
                  <div className="text-white/70 font-medium">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-eco-green mb-2">
                    99.8%
                  </div>
                  <div className="text-white/70 font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className="py-16 md:py-24 bg-linear-to-b from-white to-soft-grey/30">
        <div className="container-custom mx-auto px-6">
          <div className="space-y-16 max-w-7xl mx-auto">
            {transformations.map((item, index) => (
              <ScrollAnimation
                key={index}
                animationType="fade-up"
                delay={index * 100}>
                <div className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  {/* Header */}
                  <div className="p-6 md:p-8 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <span className="inline-block px-3 py-1.5 bg-eco-green/10 rounded-full text-eco-green font-semibold text-xs uppercase tracking-wide mb-2">
                          Transformation {index + 1}
                        </span>
                        <h2 className="text-xl md:text-2xl font-heading font-black text-brand-black">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-gray-600 md:text-right max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Images */}
                  <div className="grid md:grid-cols-2 relative">
                    {/* Before Image */}
                    <div
                      className="relative aspect-[4/3] overflow-hidden cursor-zoom-in group/img"
                      onClick={() => setSelectedImage(item.before)}>
                      <Image
                        src={item.before}
                        alt={`Before - ${item.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Before Label */}
                      <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center gap-2 shadow-lg">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        Before
                      </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                    </div>

                    {/* Center Arrow - Desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-eco-green rounded-full items-center justify-center shadow-xl shadow-eco-green/40 border-4 border-white">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>

                    {/* Center Arrow - Mobile */}
                    <div className="md:hidden flex justify-center py-4 bg-linear-to-r from-eco-green/5 via-eco-green/20 to-eco-green/5">
                      <div className="w-14 h-14 bg-eco-green rounded-full flex items-center justify-center shadow-xl shadow-eco-green/30 border-2 border-white">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* After Image */}
                    <div
                      className="relative aspect-[4/3] overflow-hidden cursor-zoom-in group/img"
                      onClick={() => setSelectedImage(item.after)}>
                      <Image
                        src={item.after}
                        alt={`After - ${item.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* After Label */}
                      <div className="absolute bottom-4 right-4 bg-eco-green backdrop-blur-sm text-white px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center gap-2 shadow-lg shadow-eco-green/30">
                        After
                        <svg
                          className="w-4 h-4"
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
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-eco-green to-eco-green-hover relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <ScrollAnimation animationType="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6">
                Ready for Your Own Transformation?
              </h2>
              <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                Whether it&apos;s a commercial space, student accommodation, or
                a new development, we have the expertise to deliver exceptional
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-soft-grey text-eco-green font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105">
                  Get a Free Quote
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
                  Contact Us Today
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
