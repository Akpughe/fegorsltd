import React from 'react';
import Button from '../Button';

export default function CTASection() {
    return (
        <section className="bg-fegors-green text-white section-padding">
            <div className="container-custom mx-auto text-center animate-fade-in-up">
                <h2 className="text-white mb-6">
                    Ready for a cleaner space?
                </h2>

                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                    Get a free quote today and experience the FEGORS difference - professional, eco-friendly cleaning that protects your space and the planet.
                </p>

                <Button
                    href="/quote"
                    variant="secondary"
                    className="!bg-white !text-fegors-green !border-white hover:!bg-fegors-mist !shadow-lg"
                >
                    Request a Quote
                </Button>
            </div>
        </section>
    );
}
