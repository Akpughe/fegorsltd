import React from 'react';

interface CardProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    className?: string;
    hoverable?: boolean;
}

export default function Card({
    children,
    icon,
    title,
    description,
    className = '',
    hoverable = true
}: CardProps) {
    const hoverClass = hoverable ? 'hover-lift' : '';

    return (
        <div className={`card ${hoverClass} ${className}`}>
            {icon && (
                <div className="mb-4 text-fegors-green">
                    {icon}
                </div>
            )}

            {title && (
                <h3 className="text-xl font-semibold mb-3 text-fegors-black">
                    {title}
                </h3>
            )}

            {description && (
                <p className="text-gray-600 mb-4">
                    {description}
                </p>
            )}

            {children}
        </div>
    );
}
