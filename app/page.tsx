import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { StudioIntro } from '@/components/sections/StudioIntro';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Services } from '@/components/sections/Services';
import { ImmersiveShowcase } from '@/components/sections/ImmersiveShowcase';
import { Testimonials } from '@/components/sections/Testimonials';
import { ProjectArchive } from '@/components/sections/ProjectArchive';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <StudioIntro />
      <FeaturedProjects />
      <Services />
      <ImmersiveShowcase />
      <Testimonials />
      <ProjectArchive />
      <Footer />
    </div>
  );
}


