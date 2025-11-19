import React from 'react';
import Button from '../Button';

export default function CTASection() {
    return (
        <section className="bg-eco-green text-white section-padding">
            <div className="container-custom mx-auto text-center">
                <h2 className="text-white mb-6 animate-fade-in-up">
                    Ready for a cleaner space?
                </h2>

                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
                    Get a free quote today and experience the FEGORS difference - professional, eco-friendly cleaning that protects your space and the planet.
                </p>

                <div className="animate-fade-in-up animation-delay-200">
                    <Button
                        href="/quote"
                        variant="secondary"
                        className="!bg-white !text-eco-green !border-white hover:!bg-soft-grey hover:!text-deep-navy !shadow-lg"
                    >
                        Request a Quote
                    </Button>
                </div>
            </div>
        </section>
    );
}
