import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { studioStats, studioInfo } from '@/data/studio';

export function StudioIntro() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 md:py-36 bg-canvas scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">

        {/* Section Header & Strong Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
          {/* Left Metadata Column: Section Tag */}
          <div className="lg:col-span-3 flex items-center gap-3 text-mono-meta text-ink-primary pt-1 sm:pt-2">
            <span className="font-bold">01</span>
            <span className="text-neutral-300">──</span>
            <span className="tracking-widest">ABOUT US</span>
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
