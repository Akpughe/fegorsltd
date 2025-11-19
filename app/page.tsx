// Hybrid Design Components - Best of All Approaches
import HybridHero from './components/home/HybridHero';
import TrustComparison from './components/home/TrustComparison';
import MinimalistServices from './components/home/MinimalistServices';
import BeforeAfterSlider from './components/home/BeforeAfterSlider';
import HowItWorks from './components/home/HowItWorks';
import EcoGlassmorphism from './components/home/EcoGlassmorphism';
import CustomerStories from './components/home/CustomerStories';
import BoldCTA from './components/home/BoldCTA';

export default function Home() {
  return (
    <>
      <HybridHero />
      <TrustComparison />
      <MinimalistServices />
      <BeforeAfterSlider />
      <HowItWorks />
      <EcoGlassmorphism />
      <CustomerStories />
      <BoldCTA />
    </>
  );
}
