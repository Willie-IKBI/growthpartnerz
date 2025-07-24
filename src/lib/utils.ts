import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to conditionally join AND smart-merge Tailwind classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
