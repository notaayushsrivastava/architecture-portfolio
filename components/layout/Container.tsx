import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'wide' | 'narrow' | 'full';
}

export function Container({
  children,
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl px-5 sm:px-8 lg:px-12',
    wide: 'max-w-[1440px] px-5 sm:px-8 lg:px-10',
    narrow: 'max-w-4xl px-5 sm:px-8',
    full: 'w-full px-4 sm:px-6',
  };

  return (
    <div
      className={cn('mx-auto w-full', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
