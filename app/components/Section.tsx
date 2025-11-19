import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    backgroundColor?: 'white' | 'grey' | 'eco' | 'sky';
    id?: string;
}

export default function Section({
    children,
    className = '',
    backgroundColor = 'white',
    id
}: SectionProps) {
    const bgClass =
        backgroundColor === 'grey' ? 'bg-soft-grey' :
        backgroundColor === 'eco' ? 'bg-gradient-eco' :
        backgroundColor === 'sky' ? 'bg-gradient-sky' :
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
