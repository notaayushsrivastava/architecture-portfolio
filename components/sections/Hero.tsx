'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = featuredProjects[currentIndex] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="relative w-full pt-20 sm:pt-24 md:pt-28 pb-8 px-3 sm:px-6 md:px-8 max-w-[1520px] mx-auto">
      {/* Outer Hero Card Container with Rounded Corners */}
      <div className="relative w-full h-[84vh] min-h-[580px] max-h-[880px] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-neutral-950 shadow-2xl flex flex-col justify-between p-5 sm:p-8 md:p-12 text-white">
        
        {/* Background Architectural Image with Transition */}
        <div className="absolute inset-0 z-0">
          <Image
            src={currentProject.heroImage.url}
            alt={currentProject.heroImage.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 95vw, 1500px"
            className="object-cover object-center transition-all duration-1000 ease-out"
          />
          {/* Multi-layered Cinematic Gradient Vignette for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25" />
        </div>

        {/* Top Floating Context Bar */}
        <div className="relative z-10 flex items-center justify-between w-full pt-1 sm:pt-2">
          <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-200 font-medium">
              FEATURED MONOGRAPH · 0{currentIndex + 1}/0{featuredProjects.length}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-neutral-300 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>VIT VELLORE · B.ARCH PORTFOLIO</span>
            <span className="text-neutral-500">·</span>
            <span>{currentProject.location.city}, {currentProject.location.country}</span>
          </div>
        </div>

        {/* Center / Lower Main Typography Area */}
        <div className="relative z-10 my-auto sm:my-0 sm:mt-auto sm:mb-8 text-center flex flex-col items-center">
          <h1 className="text-display-hero text-white font-extrabold tracking-tight drop-shadow-md select-none max-w-5xl leading-[0.9] uppercase">
            {currentProject.title}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-2xl font-light leading-relaxed hidden sm:block">
            &ldquo;An investigation into tectonic permanence, regional microclimates, and experiential spatial poetry.&rdquo;
          </p>
        </div>

        {/* Bottom Metadata & Interaction Bar */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15">
          {/* Left: Project Category Badges */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-start">
            {currentProject.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="frosted">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Center: Subtitle / Architectural Narrative */}
          <p className="text-xs sm:text-sm text-neutral-200 max-w-md text-center font-normal leading-relaxed">
            {currentProject.subtitle}
          </p>

          {/* Right: Interactive Navigation Controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handlePrev}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-white hover:text-ink-primary text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer"
              aria-label="Previous Featured Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-white hover:text-ink-primary text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer"
              aria-label="Next Featured Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Architectural Scroll Indicator */}
      <div className="flex justify-center mt-6">
        <Link
          href="#about"
          className="group inline-flex flex-col items-center gap-2 text-ink-muted hover:text-ink-primary transition-colors focus:outline-none"
          aria-label="Scroll to Studio Introduction"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-neutral-400 group-hover:text-ink-primary transition-colors">
            EXPLORE ARCHITECTURAL MONOGRAPHS
          </span>
          <div className="w-5 h-8 rounded-full border border-neutral-300 group-hover:border-ink-primary flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-1.5 rounded-full bg-ink-primary animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
