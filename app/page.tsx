import HeroSection from './components/home/HeroSection';
import WhyChooseFegors from './components/home/WhyChooseFegors';
import ServicesPreview from './components/home/ServicesPreview';
import SustainabilityCallout from './components/home/SustainabilityCallout';
import Testimonials from './components/home/Testimonials';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseFegors />
      <ServicesPreview />
      <SustainabilityCallout />
      <Testimonials />
      <CTASection />
    </>
  );
}
