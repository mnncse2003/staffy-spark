import { cn } from '@/lib/utils';

interface GeometricDecorationsProps {
  variant?: 'hero' | 'features' | 'pricing' | 'default';
  className?: string;
}

export const GeometricDecorations = ({ variant = 'default', className }: GeometricDecorationsProps) => {
  if (variant === 'hero') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-float-delayed" />
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-primary/60 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 border border-accent/40 rotate-12 animate-bounce-slow" />
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-primary/80 rounded-full animate-pulse" />
        <div className="absolute top-1/3 left-[15%] w-1 h-1 bg-accent/60 rounded-full animate-pulse" />
        {/* Scan line */}
        <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-float" />
      </div>
    );
  }

  if (variant === 'features') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/3 rounded-full blur-[80px]" />
        <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 border border-accent/20 rotate-45" />
      </div>
    );
  }

  if (variant === 'pricing') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-10 right-1/4 w-40 h-40 bg-accent/3 rounded-full blur-[60px]" />
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-primary/30 rotate-45 animate-spin-slow" />
      </div>
    );
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/3 rounded-full blur-[60px]" />
      <div className="absolute bottom-10 left-10 w-1.5 h-1.5 bg-accent/30 rotate-45" />
    </div>
  );
};
