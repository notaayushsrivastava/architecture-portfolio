import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Compass, Layers, Sun } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { studioStats, studioInfo } from '@/data/studio';

export function StudioIntro() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 md:py-36 bg-canvas scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">

        {/* Section Header & Strong Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
          {/* Left Metadata Column: Section Tag */}
          <div className="lg:col-span-3 flex flex-col gap-2 pt-1 sm:pt-2">
            <div className="flex items-center gap-3 text-mono-meta text-ink-primary">
              <span className="font-bold">01</span>
              <span className="text-neutral-300">──</span>
              <span className="tracking-widest">ABOUT US</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              <BookOpen className="w-3 h-3 text-neutral-400" />
              <span>English Architectural Treatise</span>
            </div>
          </div>

          {/* Center Main Statement: Two-Tone Typography */}
          <div className="lg:col-span-7">
            <h2 className="text-display-title font-extrabold tracking-tight text-ink-primary leading-[1.05]">
              INNOVATIVE{' '}
              <span className="text-ink-two-tone font-semibold">
                ARCHITECTURE ATELIER
              </span>{' '}
              SPECIALIZING IN MODERN, SUSTAINABLE & TECTONIC DESIGNS.
            </h2>
            <p className="mt-6 text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl">
              {studioInfo.manifesto}
            </p>
          </div>

          {/* Right Action: Understated Pill CTA */}
          <div className="lg:col-span-2 flex justify-start lg:justify-end pt-1 sm:pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-ink-primary text-white text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-all duration-300 active:scale-95"
            >
              More About us
            </Link>
          </div>
        </div>

        {/* Academic English Discourse on Architecture (Assignment Exposition) */}
        <div className="mb-16 bg-canvas-surface border border-line-hairline rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-line-hairline pb-6 lg:pb-0 lg:pr-8">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                ACADEMIC DISCOURSE · ESSAY THEME
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight leading-snug">
                The Semiotics of Space: Architecture as a Non-Verbal Language
              </h3>
              <p className="text-xs text-ink-muted mt-3 leading-relaxed">
                Authored by Aayush Srivastava (B.Arch, Vellore Institute of Technology, Vellore).
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-ink-secondary leading-relaxed">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono font-bold text-ink-primary uppercase tracking-wider text-xs">
                  <Layers className="w-4 h-4 text-ink-primary" />
                  <span>1. Tectonic Mass</span>
                </div>
                <p className="font-light">
                  Architecture begins where structural necessity meets human emotion. The deliberate articulation of heavy basalt, stabilized rammed earth, and slender steel reveals how materials dialogue with gravity over decades.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono font-bold text-ink-primary uppercase tracking-wider text-xs">
                  <Sun className="w-4 h-4 text-ink-primary" />
                  <span>2. Bioclimatic Light</span>
                </div>
                <p className="font-light">
                  Natural daylight is not merely an illuminant; it is a dynamic spatial sculpting instrument. Deep verandas, perforated jali screens, and sun-tracking light wells choreograph microclimates that eliminate artificial energy dependencies.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono font-bold text-ink-primary uppercase tracking-wider text-xs">
                  <Compass className="w-4 h-4 text-ink-primary" />
                  <span>3. Vernacular Context</span>
                </div>
                <p className="font-light">
                  A building is an extension of its immediate terrain. By synthesizing regional Indian craftsmanship with contemporary tectonic minimalism, built spaces achieve cultural permanence without historical imitation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Four Key Statistics: Editorial 2x2 Hairline Grid */}
        <div className="w-full border-t border-line-hairline">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-line-hairline">
            
            {/* Top Row: Stat 01 & Stat 02 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-line-hairline col-span-1 sm:col-span-2 border-b border-line-hairline">
              {/* Stat 01: Client Satisfaction */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between group hover:bg-canvas-surface/50 transition-colors duration-500">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink-secondary mb-10">
                  <span>{studioStats[0].label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-stat-number text-ink-primary font-bold tracking-tight">
                    {studioStats[0].value}
                  </div>
                  <div className="text-xs font-mono text-ink-muted mt-2 uppercase tracking-wider">
                    {studioStats[0].subtext}
                  </div>
                </div>
              </div>

              {/* Stat 02: Award & Achievement */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between group hover:bg-canvas-surface/50 transition-colors duration-500">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink-secondary mb-10">
                  <span>{studioStats[1].label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-stat-number text-ink-primary font-bold tracking-tight">
                    {studioStats[1].value}
                  </div>
                  <div className="text-xs font-mono text-ink-muted mt-2 uppercase tracking-wider">
                    {studioStats[1].subtext}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Stat 03 & Stat 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-line-hairline col-span-1 sm:col-span-2 border-b border-line-hairline">
              {/* Stat 03: Expertise & Experience */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between group hover:bg-canvas-surface/50 transition-colors duration-500">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink-secondary mb-10">
                  <span>{studioStats[2].label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-stat-number text-ink-primary font-bold tracking-tight">
                    {studioStats[2].value}
                  </div>
                  <div className="text-xs font-mono text-ink-muted mt-2 uppercase tracking-wider">
                    {studioStats[2].subtext}
                  </div>
                </div>
              </div>

              {/* Stat 04: Completed Projects */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between group hover:bg-canvas-surface/50 transition-colors duration-500">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink-secondary mb-10">
                  <span>{studioStats[3].label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-stat-number text-ink-primary font-bold tracking-tight">
                    {studioStats[3].value}
                  </div>
                  <div className="text-xs font-mono text-ink-muted mt-2 uppercase tracking-wider">
                    {studioStats[3].subtext}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
