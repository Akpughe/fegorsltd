"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { isChristmasSeason } from "../utils/christmas";

export default function ChristmasModal() {
  const [mounted, setMounted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isOpen = mounted && !isClosed && isChristmasSeason();
  const closeModal = () => setIsClosed(true);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={closeModal}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Christmas greeting"
      tabIndex={-1}>
      <div
        className="relative max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden rounded-lg shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        }}>
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close modal"
          type="button">
          <svg
            className="w-6 h-6 text-gray-800"
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

        {/* Image */}
        <div className="relative w-full h-auto">
          <Image
            src="https://ik.imagekit.io/r9a7zbqsf/Christmas.webp"
            alt="Christmas Greeting"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
