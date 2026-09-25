'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/lib/utils';

export function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('architecture');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(1); // Defaults to Project 02 (The Obsidian Pavilion)

  // Filter projects by category or fallback to all
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === selectedCategory.toLowerCase()) ||
        p.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projects;
  const currentProject = displayProjects[activeProjectIndex % displayProjects.length] || projects[0];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % displayProjects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setActiveProjectIndex(0);
  };

  return (
    <section id="projects" className="w-full py-12 sm:py-16 md:py-20 bg-canvas scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">

        {/* Enclosed Surface Container Card */}
        <div className="w-full bg-canvas-surface rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 border border-line-hairline shadow-sm">
          
          {/* Section Header: Section Tag + Two-Tone Title + 'Explore All' Button */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
            {/* Left Monospace Tag */}
            <div className="lg:col-span-3 flex items-center gap-3 text-mono-meta text-ink-primary pt-1">
              <span className="font-bold">02</span>
              <span className="text-neutral-300">──</span>
              <span className="tracking-widest">PROJECTS</span>
            </div>

            {/* Center Main Title */}
            <div className="lg:col-span-6">
              <h2 className="text-display-title font-extrabold tracking-tight text-ink-primary leading-[1.05]">
                SOME OF OUR LATEST{' '}
                <span className="text-ink-two-tone font-semibold block sm:inline">
                  PROJECTS
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted mt-2 font-normal">
                Curated monographs examining climate-responsive tectonics, structural rhythm, and material integrity across Indian terrains.
              </p>
            </div>

            {/* Right 'Explore All' Button */}
            <div className="lg:col-span-3 flex justify-start lg:justify-end pt-1">
              <Link
                href="#archive"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-ink-primary text-white text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-all duration-300 active:scale-95"
              >
                Explore All
              </Link>
            </div>
          </div>

          {/* Asymmetric Content Layout: Category Rail (Left) & Large Image Canvas (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Category Filter List + Slider Navigation Controls */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full py-2">
              {/* Category Tab List */}
              <div className="flex lg:flex-col flex-wrap gap-2 sm:gap-3">
                {projectCategories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id)}
                      className={cn(
                        'text-left py-1.5 px-3 sm:px-0 text-base sm:text-lg md:text-xl font-medium transition-all duration-300 rounded-full lg:rounded-none cursor-pointer',
                        isActive
                          ? 'text-ink-primary font-bold sm:translate-x-2'
                          : 'text-neutral-400 hover:text-ink-primary'
                      )}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Slider Controls with Connecting Line Indicator */}
              <div className="hidden lg:flex items-center gap-4 mt-16 pt-8 border-t border-line-subtle/50">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-line-hairline text-ink-primary flex items-center justify-center hover:bg-ink-primary hover:text-white transition-all duration-300 active:scale-90 shadow-sm"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex-1 h-[2px] bg-line-hairline relative rounded-full overflow-hidden">
                  <div
                    className="h-full bg-ink-primary transition-all duration-500 ease-out"
                    style={{
                      width: `${((activeProjectIndex % displayProjects.length + 1) / displayProjects.length) * 100}%`,
                    }}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-line-hairline text-ink-primary flex items-center justify-center hover:bg-ink-primary hover:text-white transition-all duration-300 active:scale-90 shadow-sm"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Large Architectural Image Frame & Metadata Row */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Image Frame with Restrained Hover Zoom & Reveal */}
              <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md group">
                <Image
                  key={currentProject.id}
                  src={currentProject.heroImage.url}
                  alt={currentProject.heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient & Tag Inset */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider border border-white/10">
                    {currentProject.category} · {currentProject.year}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white font-mono text-xs opacity-90">
                  <span>{currentProject.location.city}, {currentProject.location.country}</span>
                </div>
              </div>

              {/* Lower Metadata Row & Navigation Arrow */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-ink-primary tracking-tight">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary mt-0.5 line-clamp-1">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Circular Navigation Affordance Button */}
                <Link
                  href={`#project-${currentProject.slug}`}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-line-subtle bg-white flex items-center justify-center text-ink-primary hover:bg-ink-primary hover:text-white hover:border-ink-primary transition-all duration-300 active:scale-90 shrink-0 shadow-sm"
                  aria-label={`View ${currentProject.title} details`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Slider Controls */}
              <div className="flex lg:hidden items-center justify-between gap-4 pt-4 border-t border-line-hairline mt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full bg-white border border-line-hairline text-ink-primary flex items-center justify-center hover:bg-ink-primary hover:text-white transition-all active:scale-90"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full bg-white border border-line-hairline text-ink-primary flex items-center justify-center hover:bg-ink-primary hover:text-white transition-all active:scale-90"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="font-mono text-xs text-ink-muted">
                  0{activeProjectIndex % displayProjects.length + 1} / 0{displayProjects.length}
                </span>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
