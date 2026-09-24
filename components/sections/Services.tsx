'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

export function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

  return (
    <section id="services" className="w-full py-16 sm:py-24 md:py-32 bg-canvas border-b border-line-hairline scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">

        {/* Section Header: Section Tag + Two-Tone Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16 lg:mb-20">
          {/* Left Monospace Tag */}
          <div className="lg:col-span-3 flex items-center gap-3 text-mono-meta text-ink-primary pt-1">
            <span className="font-bold">03</span>
            <span className="text-neutral-300">──</span>
            <span className="tracking-widest">SERVICES</span>
          </div>

          {/* Center Main Title */}
          <div className="lg:col-span-9">
            <h2 className="text-display-title font-extrabold tracking-tight text-ink-primary leading-[1.05]">
              WE OFFER WIDE RANGE{' '}
              <span className="text-ink-two-tone font-semibold block sm:inline">
                OF SERVICES
              </span>
            </h2>
          </div>
        </div>

        {/* Desktop View: 4-Column Expandable Interactive Accordion */}
        <div className="hidden lg:flex w-full min-h-[560px] max-h-[640px] border border-line-hairline divide-x divide-line-hairline rounded-3xl overflow-hidden bg-canvas-surface/40">
          {services.map((service) => {
            const isActive = activeServiceId === service.id;
            const linkedProject = projects.find((p) => p.slug === service.featuredProjectSlug) || projects[0];

            return (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={cn(
                  'relative h-full transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between p-6 xl:p-8',
                  isActive
                    ? 'flex-[3.8] bg-canvas-surface'
                    : 'flex-[1] hover:bg-canvas-surface/80 group'
                )}
              >
                {/* Top Row: Index Number & Circular Action Button */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-base font-bold text-ink-primary">
                    {service.index}
                  </span>

                  {isActive && (
                    <Link
                      href={`#project-${linkedProject.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full bg-ink-primary text-white flex items-center justify-center hover:bg-neutral-800 transition-transform duration-300 active:scale-90 shadow-sm"
                      aria-label={`Explore ${service.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                {/* Expanded Content View */}
                {isActive ? (
                  <div className="flex flex-col gap-6 my-auto pt-4 animate-in fade-in duration-500">
                    {/* Short Description */}
                    <div className="max-w-md">
                      <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Architectural Image Frame */}
                    <div className="relative w-full h-56 xl:h-64 rounded-2xl overflow-hidden shadow-md group/img">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1440px) 50vw, 600px"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                      
                      {/* Image Inset Badges */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/10">
                          {linkedProject.location.city}, {linkedProject.location.country} · {linkedProject.year}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Active Horizontal Label */}
                    <div className="pt-2 flex items-center justify-between border-t border-line-subtle/50">
                      <span className="font-extrabold text-lg xl:text-xl tracking-tight text-ink-primary uppercase">
                        {service.title}
                      </span>
                      <span className="font-mono text-xs text-ink-muted">
                        {service.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Collapsed Vertical Ribbon View */
                  <div className="h-full flex items-center justify-center my-auto py-12">
                    <span className="font-bold text-sm xl:text-base text-ink-secondary group-hover:text-ink-primary tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 transition-colors">
                      {service.verticalLabel}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet View: Vertical Collapsible Drawers */}
        <div className="flex lg:hidden flex-col divide-y divide-line-hairline border-y border-line-hairline">
          {services.map((service) => {
            const isActive = activeServiceId === service.id;
            const linkedProject = projects.find((p) => p.slug === service.featuredProjectSlug) || projects[0];

            return (
              <div
                key={service.id}
                className="py-5 sm:py-6 transition-colors"
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => setActiveServiceId(isActive ? '' : service.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-ink-muted">
                      {service.index}
                    </span>
                    <span className="font-bold text-lg sm:text-xl tracking-tight text-ink-primary uppercase">
                      {service.title}
                    </span>
                  </div>

                  <div className={cn(
                    'w-8 h-8 rounded-full border border-line-hairline flex items-center justify-center text-ink-primary transition-transform duration-300',
                    isActive ? 'rotate-90 bg-ink-primary text-white' : 'hover:bg-canvas-surface'
                  )}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Collapsible Content Body */}
                {isActive && (
                  <div className="pt-5 pb-2 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {service.description}
                    </p>

                    <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden shadow-sm mt-2">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider">
                          {linkedProject.title} · {linkedProject.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-mono text-xs text-ink-muted">
                        {service.category} · {linkedProject.location.city}
                      </span>
                      <Link
                        href={`#project-${linkedProject.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-primary hover:underline"
                      >
                        View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
