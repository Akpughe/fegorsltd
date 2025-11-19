'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animationType?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale';
    delay?: number;
}

export default function ScrollAnimation({
    children,
    className = '',
    animationType = 'fade-up',
    delay = 0
}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    const animationClass = {
        'fade-up': 'animate-fade-in-up',
        'fade-in': 'animate-fade-in',
        'slide-left': 'animate-slide-in-left',
        'slide-right': 'animate-slide-in-right',
        'scale': 'animate-scale-in'
    }[animationType];

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${
                isVisible ? `opacity-100 ${animationClass}` : 'opacity-0 translate-y-8'
            } ${className}`}
        >
            {children}
        </div>
    );
}
