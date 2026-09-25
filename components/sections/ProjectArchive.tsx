'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export function ProjectArchive() {
  // We showcase selected archive projects (projects 4, 5, 6, 7 from catalog)
  const archiveProjects = projects.slice(4, 8).concat(projects.slice(0, 2));
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="archive" className="w-full py-16 sm:py-24 md:py-32 bg-canvas scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">

        {/* Section Header: Section Tag + Two-Tone Title + 'Explore All' Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Left Monospace Tag */}
          <div className="lg:col-span-3 flex items-center gap-3 text-mono-meta text-ink-primary pt-1">
            <span className="font-bold">05</span>
            <span className="text-neutral-300">──</span>
            <span className="tracking-widest">SELECTED ARCHIVE</span>
          </div>

          {/* Center Main Title */}
          <div className="lg:col-span-6">
            <h2 className="text-display-title font-extrabold tracking-tight text-ink-primary leading-[1.05]">
              MONOGRAPHS &amp;{' '}
              <span className="text-ink-two-tone font-semibold block sm:inline">
                BUILT ARCHIVE
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-2 font-normal">
              Analytical design monographs exploring vernacular morphology, structural honesty, and adaptive reuse.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end pt-1">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-ink-primary text-white text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-all duration-300 active:scale-95"
            >
              Explore All
            </Link>
          </div>
        </div>

        {/* 3-Column Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {archiveProjects.slice(0, 3).map((project, idx) => {
            const isFirst = idx === 0;

            return (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex flex-col justify-between bg-canvas-surface/70 border border-line-hairline rounded-3xl p-5 sm:p-6 transition-all duration-500 hover:bg-canvas-surface hover:shadow-md"
              >
                {/* Architectural Image Container with Inset Badges */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] rounded-2xl sm:rounded-[1.75rem] overflow-hidden bg-neutral-900 mb-6 shadow-xs">
                  <Image
                    src={project.heroImage.url}
                    alt={project.heroImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

                  {/* Top-Right Frosted Category Tag */}
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4">
                    <Badge variant="frosted" className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Bottom Inset Location Coordinates */}
                  <div className="absolute bottom-3 left-3.5 text-white font-mono text-[11px] opacity-85">
                    {project.location.coordinates}
                  </div>
                </div>

                {/* Metadata & Title Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Timestamp & Location Header */}
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider mb-2">
                      <span>{project.location.city}, {project.location.country}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink-primary group-hover:text-black leading-snug">
                      <Link
                        href={`#project-${project.slug}`}
                        className="hover:underline transition-all"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mt-2 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Bottom Action Affordance Button */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-line-hairline/80">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
                      <span>Area:</span>
                      <span className="font-semibold text-ink-primary">{project.area.split('/')[0]?.trim()}</span>
                    </div>

                    <Link
                      href={`#project-${project.slug}`}
                      className={cn(
                        'w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 shadow-sm shrink-0',
                        isFirst
                          ? 'bg-ink-primary text-white hover:bg-neutral-800'
                          : 'bg-white border border-line-hairline text-ink-primary hover:bg-ink-primary hover:text-white hover:border-ink-primary'
                      )}
                      aria-label={`View ${project.title} monograph`}
                    >
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
