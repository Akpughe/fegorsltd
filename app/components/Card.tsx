import React from 'react';

export interface CardProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    className?: string;
    hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    icon,
    title,
    description,
    className = '',
    hoverable = true
}) => {
    const hoverClass = hoverable ? 'hover-lift' : '';

    return (
        <div className={`card ${hoverClass} ${className}`}>
            {icon && (
                <div className="mb-4 text-eco-green">
                    {icon}
                </div>
            )}

            {title && (
                <h3 className="text-xl font-semibold mb-3 text-brand-black">
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
};

export default Card;
