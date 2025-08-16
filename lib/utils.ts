import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values and merges Tailwind CSS classes intelligently.
 *
 * This utility function uses clsx to handle conditional classes and twMerge to
 * resolve Tailwind CSS class conflicts by keeping the last conflicting class.
 *
 * @param inputs - Variable number of class values that can be strings, objects, arrays, etc.
 * @returns A string of merged and deduplicated CSS classes
 *
 * @example
 * ```ts
 * cn('px-2 py-1', 'px-4') // returns 'py-1 px-4'
 * cn('text-red-500', { 'text-blue-500': true }) // returns 'text-blue-500'
 * cn(['bg-white', 'text-black'], undefined, 'shadow-lg') // returns 'bg-white text-black shadow-lg'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
