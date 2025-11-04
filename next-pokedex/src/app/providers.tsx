"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PokemonProvider } from "@/contexts/PokemonContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider 
        attribute="class" 
        defaultTheme="light" 
        themes={['light', 'dark']}
      >
        <PokemonProvider>
          {children}
        </PokemonProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
