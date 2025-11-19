// New Bold Storytelling Components
import StoryHero from './components/home/StoryHero';
import ProblemSolutionStory from './components/home/ProblemSolutionStory';
import ImpactStats from './components/home/ImpactStats';
import MagazineServices from './components/home/MagazineServices';
import HowItWorks from './components/home/HowItWorks';
import CustomerStories from './components/home/CustomerStories';
import BoldCTA from './components/home/BoldCTA';

export default function Home() {
  return (
    <>
      <StoryHero />
      <ProblemSolutionStory />
      <ImpactStats />
      <MagazineServices />
      <HowItWorks />
      <CustomerStories />
      <BoldCTA />
    </>
  );
}
