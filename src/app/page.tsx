'use client';

import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import MilestonesSection from '../components/landing/MilestonesSection';
import PhotoGallerySection from '../components/landing/PhotoGallerySection';
import GrowthStatsSection from '../components/landing/GrowthStatsSection';
import MemoryBookSection from '../components/landing/MemoryBookSection';
import FooterSection from '../components/landing/FooterSection';

const BabyLandingPage: React.FC = () => {
  return (
    <div className="pb-10">
      <HeroSection />
      <AboutSection />
      <MilestonesSection />
      <PhotoGallerySection />
      <GrowthStatsSection />
      <MemoryBookSection />
      <FooterSection />
    </div>
  );
};

export default BabyLandingPage;
