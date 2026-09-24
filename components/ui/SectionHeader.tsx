import React from 'react';
import { cn } from '@/lib/utils';
import { PillButton } from './PillButton';

interface SectionHeaderProps {
  number?: string;
  tag?: string;
  titlePrimary: string;
  titleSecondary?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function SectionHeader({
  number,
  tag,
  titlePrimary,
  titleSecondary,
  ctaText,
  ctaHref,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'w-full flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 lg:mb-16',
        className
      )}
    >
      {/* Left Monospace Tag */}
      {(number || tag) && (
        <div className="flex items-center gap-3 text-mono-meta text-ink-primary shrink-0 pt-2">
          {number && <span>{number}</span>}
          {number && tag && <span className="text-neutral-300">──</span>}
          {tag && <span className="tracking-widest">{tag}</span>}
        </div>
      )}

      {/* Center/Main Title Area */}
      <div className="flex-1 max-w-3xl">
        <h2 className="text-display-title font-extrabold tracking-tight text-ink-primary">
          {titlePrimary}{' '}
          {titleSecondary && (
            <span className="text-ink-two-tone font-semibold block sm:inline">
              {titleSecondary}
            </span>
          )}
        </h2>
      </div>

      {/* Right Optional CTA */}
      {ctaText && ctaHref && (
        <div className="shrink-0 pt-2">
          <PillButton variant="black" href={ctaHref}>
            {ctaText}
          </PillButton>
        </div>
      )}
    </div>
  );
}
