'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassButton({ children, className }: GlassButtonProps) {
  return (
    <Button
      className={cn(
        'rounded-full bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF] px-6 py-1 text-white text-sm md:text-base font-medium hover:opacity-90 transition-all duration-200',
        className
      )}
    >
      {children}
    </Button>
  );
}
