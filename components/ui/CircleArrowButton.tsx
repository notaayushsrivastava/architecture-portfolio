import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CircleArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: 'left' | 'right' | 'up-right';
  variant?: 'outline' | 'black' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  ariaLabel?: string;
}

export function CircleArrowButton({
  direction = 'right',
  variant = 'outline',
  size = 'md',
  href,
  ariaLabel,
  className,
  ...props
}: CircleArrowButtonProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 sm:w-11 sm:h-11 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const variantClasses = {
    outline:
      'border border-line-hairline bg-white text-ink-primary hover:bg-ink-primary hover:text-white hover:border-ink-primary',
    black:
      'border border-ink-primary bg-ink-primary text-white hover:bg-neutral-800',
    white:
      'border border-transparent bg-white text-ink-primary hover:bg-neutral-100 shadow-sm',
  };

  const renderIcon = () => {
    switch (direction) {
      case 'left':
        return <ArrowLeft className={iconSizes[size]} />;
      case 'up-right':
        return <ArrowUpRight className={iconSizes[size]} />;
      case 'right':
      default:
        return <ArrowRight className={iconSizes[size]} />;
    }
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-90 cursor-pointer',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        aria-label={ariaLabel || `Navigate ${direction}`}
      >
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      aria-label={ariaLabel || `Button ${direction}`}
      {...props}
    >
      {renderIcon()}
    </button>
  );
}
