import { cn } from '@/lib/utils';

interface GeometricDecorationsProps {
  variant?: 'hero' | 'features' | 'pricing' | 'default';
  className?: string;
}

export const GeometricDecorations = ({ variant = 'default', className }: GeometricDecorationsProps) => {
  if (variant === 'hero') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        {/* Large gradient circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        {/* Small accent circle */}
        <div className="absolute top-1/3 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float-delayed" />
        {/* Geometric shapes */}
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-primary/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-accent/30 rotate-12 animate-bounce-slow" />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-accent/40 rounded-full animate-pulse" />
      </div>
    );
  }

  if (variant === 'features') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-4 h-4 border border-accent/20 rotate-45" />
        <div className="absolute top-1/3 left-10 w-8 h-8 border-2 border-primary/10 rounded-full" />
      </div>
    );
  }

  if (variant === 'pricing') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-10 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-3 h-3 bg-primary/30 rotate-45 animate-spin-slow" />
        <div className="absolute top-1/4 right-20 w-2 h-2 bg-accent/50 rounded-full animate-bounce-slow" />
      </div>
    );
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-accent/30 rotate-45" />
    </div>
  );
};
