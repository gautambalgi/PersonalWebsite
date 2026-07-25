import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges class names — the helper most Tailwind component libraries expect.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}