'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

interface ImmersiveShowcaseProps {
  projectSlug?: string;
}

export function ImmersiveShowcase({ projectSlug = 'jungle-villa-housing' }: ImmersiveShowcaseProps) {
  const project = projects.find((p) => p.slug === projectSlug) || projects[3] || projects[0];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-canvas">
      <Container size="wide">
        {/* Full-Bleed Immersive Card Frame */}
        <div className="relative w-full h-[70vh] min-h-[500px] max-h-[760px] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-neutral-950 shadow-2xl flex flex-col justify-between p-6 sm:p-10 md:p-14 text-white group">
          
          {/* Background Architectural Image with Restrained Motion */}
          <div className="absolute inset-0 z-0">
            <Image
              src={project.heroImage.url}
              alt={project.heroImage.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 95vw, 1500px"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Multi-layered Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 transition-opacity duration-700 group-hover:opacity-90" />
          </div>

          {/* Top Row: Section Label & Area/Year Metadata */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-200 font-semibold bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                FEATURED PROJECT
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-300 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
              <span>{project.area.split('/')[1]?.trim() || project.area}</span>
              <span className="text-neutral-500">·</span>
              <span>{project.location.city}, {project.location.country}</span>
            </div>
          </div>

          {/* Center / Lower Typography Display */}
          <div className="relative z-10 my-auto sm:my-0 sm:mt-auto sm:mb-6 text-center flex flex-col items-center">
            <h2 className="text-display-hero text-white font-extrabold tracking-tight drop-shadow-lg select-none max-w-5xl leading-[0.9] uppercase">
              {project.title}
            </h2>
          </div>

          {/* Bottom Row: Category Badges, Short Narrative & Action Affordance */}
          <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15">
            {/* Left: Category Badges */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-start">
              {project.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="frosted">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Center: Short Narrative */}
            <p className="text-xs sm:text-sm text-neutral-200 max-w-md text-center line-clamp-1 font-normal leading-relaxed">
              {project.subtitle}
            </p>

            {/* Right: Circular Navigation Affordance Button */}
            <div className="flex items-center justify-end w-full sm:w-auto">
              <Link
                href={`#project-${project.slug}`}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-ink-primary flex items-center justify-center hover:bg-neutral-200 transition-transform duration-300 active:scale-90 shadow-lg shrink-0"
                aria-label={`Explore ${project.title}`}
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
