// File: src/lib/utils.ts
import { clsx } from "clsx";
import { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs); // No Tailwind-specific merging needed
}
