"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { isChristmasSeason } from "../utils/christmas";

const SCROLL_MILESTONES = [0.3, 0.6, 0.9]; // 30%, 60%, 90% of page height
const STORAGE_KEY = "partyHardModalShown";
const TIMER_DELAY = 15000; // 15 seconds (reduced from 45 for better UX)
const CHRISTMAS_MODAL_DELAY = 3000; // 3 seconds delay to avoid conflict with ChristmasModal

export default function PartyHardModal() {
  const [isOpen, setIsOpen] = useState(false);
  const hasShownRef = useRef<Set<number>>(new Set());
  const timerShownRef = useRef(false);
  const isOpenRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const componentMountedRef = useRef(false);
  const scrollListenerAddedRef = useRef(false);
  const christmasModalClosedRef = useRef(false);

  useEffect(() => {
    // Only track scroll during Christmas season
    if (!isChristmasSeason()) return;
    if (scrollListenerAddedRef.current) return;

    // Mark component as mounted after delay to avoid conflict with ChristmasModal
    const mountTimer = setTimeout(() => {
      componentMountedRef.current = true;

      // Check if ChristmasModal has closed (body overflow is not hidden)
      // If it's closed, mark it so we can show PartyHardModal
      if (document.body.style.overflow !== "hidden") {
        christmasModalClosedRef.current = true;
      }
    }, CHRISTMAS_MODAL_DELAY);

    // Monitor for ChristmasModal closing
    const checkChristmasModal = setInterval(() => {
      if (document.body.style.overflow !== "hidden") {
        christmasModalClosedRef.current = true;
      }
    }, 500); // Check every 500ms

    // Load previously shown milestones from sessionStorage
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const shownArray = JSON.parse(stored);
        hasShownRef.current = new Set(shownArray);
      } catch {
        // Invalid storage, start fresh
        hasShownRef.current = new Set();
      }
    }

    const handleScroll = () => {
      // Don't process scroll until component is ready (after ChristmasModal delay)
      if (!componentMountedRef.current) return;

      // Cancel timer if user scrolls (they're engaging with the page)
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      // Don't show if already showing or if we've shown at all milestones
      if (
        isOpenRef.current ||
        hasShownRef.current.size >= SCROLL_MILESTONES.length
      )
        return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      // Handle short pages or pages that don't scroll much
      // If page is scrollable, use percentage; otherwise use absolute scroll position
      let scrollPercentage = 0;
      if (maxScroll > 100) {
        // Normal scrolling page
        scrollPercentage = scrollPosition / maxScroll;
      } else if (scrollPosition > 50) {
        // Short page - trigger at any scroll
        scrollPercentage = 0.3; // Treat as if at 30% milestone
      } else {
        return; // Not scrolled enough
      }

      // Don't show if ChristmasModal is open (check if body scroll is prevented)
      // ChristmasModal sets overflow to "hidden" when open, "unset" when closed
      // Only check this if ChristmasModal hasn't been closed yet
      if (
        !christmasModalClosedRef.current &&
        document.body.style.overflow === "hidden"
      ) {
        return;
      }

      // Check each milestone
      for (const milestone of SCROLL_MILESTONES) {
        if (
          scrollPercentage >= milestone &&
          !hasShownRef.current.has(milestone) &&
          Math.random() < 0.9
        ) {
          // 90% chance to show at this milestone
          hasShownRef.current.add(milestone);
          sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(Array.from(hasShownRef.current))
          );
          isOpenRef.current = true;
          setIsOpen(true);
          break; // Only show one at a time
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    scrollListenerAddedRef.current = true;

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(mountTimer);
      clearInterval(checkChristmasModal);
      scrollListenerAddedRef.current = false;
    };
  }, []);

  // Timer-based trigger: show modal if user stays on page without scrolling
  useEffect(() => {
    // Only track timer during Christmas season
    if (!isChristmasSeason()) return;

    // Don't set timer if already shown via timer or if modal is already open
    if (timerShownRef.current || isOpenRef.current) {
      return;
    }

    // Wait for component to be ready (after ChristmasModal delay) before starting timer
    const readyTimer = setTimeout(() => {
      // Double-check conditions after delay
      if (!componentMountedRef.current) return;
      if (timerShownRef.current || isOpenRef.current) return;

      // Set timer to show modal after delay
      timerRef.current = setTimeout(() => {
        // Check if modal is already open or if timer was already shown
        if (isOpenRef.current || timerShownRef.current) return;

        // Don't show if ChristmasModal is open (check if body scroll is prevented)
        // ChristmasModal sets overflow to "hidden" when open, "unset" when closed
        // Only check this if ChristmasModal hasn't been closed yet
        if (
          !christmasModalClosedRef.current &&
          document.body.style.overflow === "hidden"
        ) {
          return;
        }

        // 90% chance to show via timer
        if (Math.random() < 0.9) {
          timerShownRef.current = true;
          isOpenRef.current = true;
          setIsOpen(true);
        }
      }, TIMER_DELAY);
    }, CHRISTMAS_MODAL_DELAY);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      clearTimeout(readyTimer);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  const handleClose = () => {
    isOpenRef.current = false;
    setIsOpen(false);
    // Clear timer if modal is closed before timer fires
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Always render component during Christmas season, but only show modal if isOpen is true
  if (!isChristmasSeason()) return null;
  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[110] flex items-end justify-center p-4 animate-slide-up"
      role="dialog"
      aria-modal="true"
      aria-label="Party Hard greeting"
      tabIndex={-1}>
      <div
        className="relative max-w-2xl w-full bg-white rounded-t-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close modal"
          type="button">
          <svg
            className="w-5 h-5 text-gray-800"
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
            src="https://ik.imagekit.io/r9a7zbqsf/Party%20Hard.webp"
            alt="Party Hard Greeting"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* CTA Button */}
        <div className="p-6 bg-gradient-to-br from-eco-green to-[#45a049]">
          <Link
            href="/contact"
            onClick={handleClose}
            className="block w-full text-center bg-white hover:bg-soft-grey text-eco-green font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105">
            Get In Touch
            <svg
              className="w-5 h-5 inline-block ml-2"
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
    </div>
  );
}
