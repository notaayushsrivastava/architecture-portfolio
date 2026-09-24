'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { studioInfo } from '@/data/studio';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

export function ContactCTA() {
  // Use the latest commission project (The Perch Residence) from data model
  const latestProject = projects[projects.length - 1] || projects[0];

  // Local Zurich time state
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
        }) + ' CET'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-canvas-dark text-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] pt-20 sm:pt-28 pb-12 px-5 sm:px-10 lg:px-16 overflow-hidden mt-16 sm:mt-24"
    >
      <Container size="wide">
        {/* Section Monospace Tag */}
        <div className="flex items-center justify-between gap-3 text-mono-meta text-neutral-400 mb-12 sm:mb-16 border-b border-line-dark pb-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white">06</span>
            <span className="text-neutral-600">──</span>
            <span className="tracking-widest text-neutral-300">INQUIRIES & COMMISSIONS</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            <span>ZÜRICH ATELIER · {timeStr || '17:35 CET'}</span>
          </div>
        </div>

        {/* Featured Commission Preview Card (Data-Driven) */}
        <div className="mb-16 sm:mb-24 bg-canvas-dark-surface border border-line-dark rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-neutral-700 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Frame */}
            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={latestProject.heroImage.url}
                alt={latestProject.heroImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-3 left-3">
                <Badge variant="frosted" className="text-[10px] font-mono uppercase tracking-wider">
                  {latestProject.category} · {latestProject.year}
                </Badge>
              </div>

              <div className="absolute bottom-3 left-3 text-white font-mono text-xs opacity-90">
                {latestProject.location.city}, {latestProject.location.country}
              </div>
            </div>

            {/* Right Project Narrative & Direct Commission Prompt */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">
                  ACCEPTING BESPOKE COMMISSIONS 2026/2027
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                  {latestProject.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mb-6 font-light">
                  {latestProject.summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line-dark">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{latestProject.location.coordinates}</span>
                </div>

                <Link
                  href={`#project-${latestProject.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-300 font-semibold transition-colors"
                >
                  Explore Monograph <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Monumental Display Statement */}
        <div className="flex flex-col items-center text-center my-12 sm:my-16">
          <h2 className="text-display-title font-extrabold tracking-tight text-white max-w-4xl leading-[0.92]">
            ANYTHING IN MIND?
            <br />
            <span className="text-neutral-500">LET&apos;S TALK</span>
          </h2>

          {/* White Pill Action Button */}
          <div className="mt-8 mb-12 sm:mb-16">
            <Link
              href={`mailto:${studioInfo.contact.email}?subject=Architectural%20Commission%20Inquiry`}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-ink-primary text-xs sm:text-sm font-bold tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
            >
              Let&apos;s Discuss
            </Link>
          </div>
        </div>

        {/* 1px Fine Line Divider */}
        <div className="w-full h-px bg-line-dark my-8" />

        {/* Direct Atelier Contact Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-xs text-neutral-400 py-6">
          {/* Left Brand Identity */}
          <div className="text-left font-mono uppercase tracking-widest text-white font-bold text-sm flex flex-col gap-1">
            <span>{studioInfo.name}</span>
            <span className="text-xs text-neutral-500 font-normal">{studioInfo.architect} · {studioInfo.credentials}</span>
          </div>

          {/* Center Direct Email & Phone Number */}
          <div className="flex flex-col items-center text-center gap-1.5">
            <a
              href={`mailto:${studioInfo.contact.email}`}
              className="text-neutral-300 hover:text-white transition-colors font-mono flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{studioInfo.contact.email}</span>
            </a>
            <a
              href={`tel:${studioInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight mt-1 hover:text-neutral-300 transition-colors"
            >
              {studioInfo.contact.phone}
            </a>
          </div>

          {/* Right Back to Top Button */}
          <div className="text-right">
            <button
              type="button"
              onClick={scrollToTop}
              className="font-mono text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        {/* Lower Legal & Geographic Coordinates Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-neutral-400 border-t border-line-dark/60 pt-8 mt-6 font-mono">
          <div>
            © {new Date().getFullYear()} {studioInfo.architect}. All Rights Reserved.
          </div>
          <div className="text-center">
            {studioInfo.address.street}, {studioInfo.address.city}, {studioInfo.address.country}
          </div>
          <div className="flex gap-4">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>/</span>
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>/</span>
            <Link href="#faq" className="hover:text-white transition-colors">
              FAQ&apos;s
            </Link>
          </div>
        </div>

        {/* Giant Bottom Cropped Watermark Typography */}
        <div className="w-full select-none pointer-events-none mt-12 sm:mt-16 overflow-hidden">
          <div className="text-watermark font-black text-white/[0.04] leading-none uppercase tracking-tighter translate-y-6 sm:translate-y-12">
            VALE
          </div>
        </div>
      </Container>
    </section>
  );
}
