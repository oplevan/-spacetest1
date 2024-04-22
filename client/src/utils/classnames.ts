import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function gridCols(columns: number): string {
  switch (columns) {
    case 1:
      return "lg:grid-cols-1";
    case 2:
      return "lg:grid-cols-2";
    case 3:
      return "lg:grid-cols-3";
    case 4:
      return "lg:grid-cols-4";
    case 5:
      return "lg:grid-cols-5";
    case 6:
      return "lg:grid-cols-6";
    case 7:
      return "lg:grid-cols-7";
    case 8:
      return "lg:grid-cols-8";
    case 9:
      return "lg:grid-cols-9";
    case 10:
      return "lg:grid-cols-10";
    case 11:
      return "lg:grid-cols-11";
    case 12:
      return "lg:grid-cols-12";
    default:
      return "lg:grid-cols-1";
  }
}

export function colSpan(span: number): string {
  switch (span) {
    case 1:
      return "lg:col-span-1";
    case 2:
      return "lg:col-span-2";
    case 3:
      return "lg:col-span-3";
    case 4:
      return "lg:col-span-4";
    case 5:
      return "lg:col-span-5";
    case 6:
      return "lg:col-span-6";
    case 7:
      return "lg:col-span-7";
    case 8:
      return "lg:col-span-8";
    case 9:
      return "lg:col-span-9";
    case 10:
      return "lg:col-span-10";
    case 11:
      return "lg:col-span-11";
    case 12:
      return "lg:col-span-12";
    default:
      return "lg:col-span-1";
  }
}
