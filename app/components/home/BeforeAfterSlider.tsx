"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Transformation images - each image shows the transformation result
const transformations = [
  {
    src: "https://ik.imagekit.io/r9a7zbqsf/325a3f56-6418-40b5-a9a3-491befe97769%202.JPG",
    alt: "Kitchen deep clean transformation",
  },
  {
    src: "https://ik.imagekit.io/r9a7zbqsf/15a0543a-5a63-46f5-8d02-68c1e929e697%202.JPG",
    alt: "Commercial space transformation",
  },
  {
    src: "https://ik.imagekit.io/r9a7zbqsf/3dc93692-72ca-402c-b20c-26e18be9e3aa%202.JPG",
    alt: "Office cleaning transformation",
  },
  {
    src: "https://ik.imagekit.io/r9a7zbqsf/2d260a3b-ec1c-488c-8054-d6c330617ff5%202.JPG",
    alt: "Residential cleaning transformation",
  },
  {
    src: "https://ik.imagekit.io/r9a7zbqsf/1c79d9dd-87f6-4c9e-8d28-dcd5f8ab9d7f%202.JPG",
    alt: "End of tenancy transformation",
  },
];

export default function BeforeAfterSlider() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(transformations[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % transformations.length
        : (currentIndex - 1 + transformations.length) % transformations.length;
    setCurrentIndex(newIndex);
    setSelectedImage(transformations[newIndex]);
  };

  return (
    <section className="py-24 bg-linear-to-b from-soft-grey to-white relative overflow-hidden">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
          onClick={closeLightbox}>
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] p-2"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
            {currentIndex + 1} / {transformations.length}
          </div>

          {/* Main image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}

      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-eco-green/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-eco-green font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black mb-6">
            Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Real results from real projects across Scotland.
            Each image tells the story of spaces renewed.
          </p>
        </div>

        {/* Gallery Grid - Elegant Masonry-inspired layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {transformations.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}>
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover content */}
                  <div className="absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <span className="text-white text-sm font-medium tracking-wide">View Full Image</span>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 transition-colors duration-500 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/0 group-hover:border-white/40 transition-colors duration-500 rounded-bl-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <Link
            href="/transformations"
            className="inline-flex items-center gap-3 text-gray-500 hover:text-brand-black font-medium transition-colors group">
            <span className="text-sm uppercase tracking-[0.15em]">View All Transformations</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Stats Row - Refined */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Projects", value: "2,500+" },
              { label: "Satisfaction", value: "99.8%" },
              { label: "Repeat Clients", value: "87%" },
              { label: "Avg. Duration", value: "2-4 hrs" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-eco-green mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-3 bg-eco-green hover:bg-eco-green-hover text-white font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-lg shadow-eco-green/25 hover:shadow-xl hover:shadow-eco-green/35 hover:scale-[1.02]">
            Transform Your Space
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
