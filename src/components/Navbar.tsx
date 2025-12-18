"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { SunIcon, MoonIcon } from "lucide-react";
import NextLink from "next/link";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Render a placeholder on the server to prevent hydration errors
  if (!isClient) {
    return (
      <NextUINavbar isBordered className="bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <NavbarContent className="sm:hidden" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">Pokédex</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">Pokédex</p>
          </NavbarBrand>
          <NavbarItem>
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </NavbarItem>
          <NavbarItem>
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    );
  }

  return (
    <NextUINavbar
      isBordered
      className="bg-background/80 backdrop-blur-md sticky top-0 z-50"
    >
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Pokédex</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Pokédex</p>
        </NavbarBrand>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/types">
            Types
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            aria-label="Toggle theme"
            onPress={toggleTheme}
            className="min-w-10"
          >
            {isDark ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={NextLink} color="primary" href="/search" variant="flat">
            Search
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
