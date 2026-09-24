'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Project', href: '#projects' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none">
      <div className="w-full max-w-5xl bg-white/85 backdrop-blur-md border border-black/5 shadow-sm rounded-full py-2.5 px-4 sm:px-6 flex items-center justify-between pointer-events-auto transition-all duration-300">
        {/* Brand Wordmark & Inverted Monogram 'A' */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Aayush Srivastava Architecture Atelier"
        >
          <div className="w-7 h-7 rounded-full bg-ink-primary flex items-center justify-center text-white font-extrabold text-xs tracking-tight group-hover:scale-105 transition-transform shadow-xs">
            A
          </div>
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-ink-primary uppercase">
            Aayush<span className="text-ink-two-tone font-medium">.Arch</span>
          </span>
        </Link>

        {/* Center Nav Links with Slash Separators */}
        <nav className="hidden md:flex items-center gap-3 text-xs sm:text-sm font-medium text-ink-secondary">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  'transition-colors hover:text-ink-primary px-1 py-0.5',
                  idx === 0 && 'text-ink-primary font-semibold'
                )}
              >
                {link.label}
              </Link>
              {idx < navLinks.length - 1 && (
                <span className="text-neutral-300 select-none">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right Action: Let's Talks & Hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-ink-primary text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
          >
            Let&apos;s Talks
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-ink-primary hover:bg-neutral-100 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden pointer-events-auto flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-ink-primary py-2 border-b border-neutral-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-ink-muted">→</span>
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-2 py-3 rounded-full bg-ink-primary text-white text-center text-sm font-semibold"
            >
              Let&apos;s Talks
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
