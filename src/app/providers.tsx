"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PokemonProvider } from "@/contexts/PokemonContext";
import { ItemProvider } from "@/contexts/ItemContext";
import { useEffect } from "react";

function LegacyServiceWorkerCleanup() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          const scope = registration.scope;
          if (scope && scope.includes("Interactive-Pokedex")) {
            registration.unregister().catch(() => {
              /* ignore failures */
            });
          }
        });
      });
    }

    if ("caches" in window) {
      caches.keys().then((keys) => {
        keys
          .filter((key) => key.startsWith("pokedex"))
          .forEach((key) => {
            caches.delete(key).catch(() => {
              /* ignore failures */
            });
          });
      });
    }
  }, []);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider 
        attribute="class" 
        defaultTheme="light" 
        themes={['light', 'dark']}
      >
        <LegacyServiceWorkerCleanup />
        <ItemProvider>
          <PokemonProvider>
            {children}
          </PokemonProvider>
        </ItemProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
