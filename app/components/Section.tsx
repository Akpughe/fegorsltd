import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    backgroundColor?: 'white' | 'mist' | 'seafoam';
    id?: string;
}

export default function Section({
    children,
    className = '',
    backgroundColor = 'white',
    id
}: SectionProps) {
    const bgClass =
        backgroundColor === 'mist' ? 'bg-fegors-mist' :
            backgroundColor === 'seafoam' ? 'bg-fegors-seafoam' :
                'bg-white';

    return (
        <section
            id={id}
            className={`section-padding ${bgClass} ${className}`}
        >
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
}
