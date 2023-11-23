"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider(
  /** @type {import("next-themes/dist/types").ThemeProviderProps} */
  { children, ...props },
  // : ThemeProviderProps
) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
