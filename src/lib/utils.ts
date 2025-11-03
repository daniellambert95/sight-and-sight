import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns true if the email format is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  // Basic email regex pattern that checks for:
  // - At least one character before @
  // - @ symbol
  // - At least one character after @
  // - At least one dot
  // - At least one character after the dot
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(email.trim());
}
