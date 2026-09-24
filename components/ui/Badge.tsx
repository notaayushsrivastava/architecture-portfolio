import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'frosted' | 'outline' | 'surface' | 'dark';
  children: React.ReactNode;
}

export function Badge({
  variant = 'frosted',
  className,
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    frosted: 'bg-black/40 backdrop-blur-md text-white border border-white/10',
    outline: 'bg-transparent text-ink-primary border border-line-hairline',
    surface: 'bg-canvas-surface text-ink-secondary',
    dark: 'bg-ink-primary text-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium tracking-wide transition-colors select-none',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
