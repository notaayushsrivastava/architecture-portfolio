import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'black' | 'white' | 'outline' | 'muted';
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function PillButton({
  variant = 'black',
  href,
  size = 'md',
  className,
  children,
  ...props
}: PillButtonProps) {
  const variantClasses = {
    black: 'bg-ink-primary text-white hover:bg-neutral-800 border-transparent',
    white: 'bg-white text-ink-primary hover:bg-neutral-100 border-transparent shadow-sm',
    outline: 'bg-transparent text-ink-primary border-line-hairline hover:border-ink-primary hover:bg-ink-primary hover:text-white',
    muted: 'bg-canvas-surface text-ink-secondary hover:text-ink-primary hover:bg-neutral-200 border-transparent',
  };

  const sizeClasses = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-xs font-semibold',
    lg: 'px-8 py-3 text-sm font-semibold',
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-full border font-medium tracking-wide transition-all duration-300 active:scale-95 cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
