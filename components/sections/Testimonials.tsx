'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { clientTestimonials, associatedClients } from '@/data/studio';
import { projects } from '@/data/projects';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = clientTestimonials[currentIndex] || clientTestimonials[0];
  const linkedProject = projects.find((p) => p.slug === current.projectSlug) || projects[3] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clientTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  // Duplicate the client list to create an infinite seamless loop
  const marqueeClients = [...associatedClients, ...associatedClients];

  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 md:py-32 bg-canvas overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">

        {/* Section Header: Section Tag + Two-Tone Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14 sm:mb-18 lg:mb-24">
          {/* Left Monospace Tag */}
          <div className="lg:col-span-3 flex items-center gap-3 text-mono-meta text-ink-primary pt-1">
            <span className="font-bold">04</span>
            <span className="text-neutral-300">──</span>
            <span className="tracking-widest">TESTIMONIALS</span>
          </div>

          {/* Center Main Title */}
          <div className="lg:col-span-9">
            <h2 className="text-display-title font-extrabold tracking-tight text-ink-primary leading-[1.05]">
              FIND WHAT OUR CLIENTS{' '}
              <span className="text-ink-two-tone font-semibold block sm:inline">
                SAY ABOUT US .
              </span>
            </h2>
          </div>
        </div>

        {/* Asymmetrical 2-Column Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Quote Card + Rating Starburst + Author Metadata */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full py-4 relative">
            
            {/* Quote Mark Icon */}
            <div className="text-5xl lg:text-6xl font-serif text-ink-primary select-none leading-none mb-6">
              “
            </div>

            {/* Large Editorial Pull-Quote */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-ink-primary leading-snug mb-10 max-w-xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Info + 5 Star Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-line-hairline">
              <div>
                <div className="font-bold text-base sm:text-lg text-ink-primary tracking-tight">
                  {current.author}
                </div>
                <div className="text-xs font-mono text-ink-muted mt-0.5">
                  {current.location} · {current.role}
                </div>
              </div>

              {/* 5-Star Rating Icons */}
              <div className="flex items-center gap-1 text-ink-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            {/* Floating Starburst Rating Badge (Centered / Inset) */}
            {current.ratingBadgeText && (
              <div className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {/* Multi-Pointed Starburst SVG Badge */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full fill-ink-primary animate-spin-slow"
                  >
                    <path d="M50 0 L58 35 L93 20 L75 50 L100 65 L65 72 L70 100 L45 78 L20 95 L30 62 L0 50 L32 35 L15 5 L45 25 Z" />
                  </svg>
                  <span className="relative z-10 text-white font-mono text-[11px] font-bold text-center leading-tight">
                    {current.ratingBadgeText.split(' ')[0]}<br />
                    <span className="text-[8px] font-normal uppercase tracking-widest text-neutral-300">Rating</span>
                  </span>
                </div>
              </div>
            )}

            {/* Slider Controls */}
            <div className="flex items-center gap-3 mt-8">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-line-hairline text-ink-primary flex items-center justify-center hover:bg-ink-primary hover:text-white transition-all duration-300 active:scale-90 shadow-sm cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-line-hairline text-ink-primary flex items-center justify-center hover:bg-ink-primary hover:text-white transition-all duration-300 active:scale-90 shadow-sm cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-ink-muted ml-2">
                0{currentIndex + 1} / 0{clientTestimonials.length}
              </span>
            </div>

          </div>

          {/* Right Column: Architectural Space & Material Frame (No Human Faces) */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-neutral-900 shadow-xl group">
              <Image
                key={current.id}
                src={current.image}
                alt={current.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

              {/* Linked Project Inset Tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                    Commission Architecture
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {linkedProject.title} ({linkedProject.year})
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {linkedProject.location.city}, {linkedProject.location.country}
                  </span>
                </div>

                <Link
                  href={`#project-${linkedProject.slug}`}
                  className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-md text-white hover:bg-white hover:text-ink-primary flex items-center justify-center transition-all duration-300 shadow-sm"
                  aria-label={`View ${linkedProject.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Associated Clients & Institutions: Horizontally Scrolling Marquee Carousel */}
        <div className="w-full mt-20 sm:mt-28 pt-12 border-t border-line-hairline flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-8 font-semibold text-center">
            150+ ASSOCIATED CLIENTS & INSTITUTIONS
          </span>

          {/* Infinite Horizontal Marquee Track with Gradient Edge Fades */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left & Right Edge Vignette Fades */}
            <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-scroll flex items-center gap-6 sm:gap-10">
              {marqueeClients.map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="w-32 h-20 sm:w-40 sm:h-24 px-4 rounded-2xl sm:rounded-3xl border border-line-hairline bg-canvas-surface/80 flex items-center justify-center hover:border-ink-primary hover:bg-white transition-all duration-300 shrink-0 shadow-2xs group cursor-pointer"
                >
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-ink-secondary group-hover:text-ink-primary text-center transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
