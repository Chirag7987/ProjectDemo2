import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  CallToAction,
  Features,
  Footer,
  Guides,
  Hero,
  NoCodeFeatures,
  AnimatedStatsPage,
  Pricing,
  Testimonial,
  AIPage,
  MovingImages
} from '@/sections/index';

const Home = () => {
  return (
    <LandingLayout>
      <Meta
        title="NextJS SaaS Boilerplate"
        description="A boilerplate for your NextJS SaaS projects."
      />
      <Hero />
      <NoCodeFeatures />
      <AnimatedStatsPage />
      <Features />
      <AIPage />
      <Pricing />
      <Guides />
      <MovingImages />
      <Testimonial />
      <CallToAction />
      <Footer />
    </LandingLayout>
  );
};

export default Home;
