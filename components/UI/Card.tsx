import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

export default function Card({
  children,
  variant = 'default',
  hover = false,
  className,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';

  const variantStyles = {
    default: 'bg-nardiha-bg-card border border-nardiha-purple/20',
    glass: 'glass',
    gradient: 'bg-gradient-cosmic border border-nardiha-purple/30',
  };

  const hoverStyles = hover
    ? 'perspective-card hover:shadow-glow-purple cursor-pointer'
    : '';

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
