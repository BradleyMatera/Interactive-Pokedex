import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interactive Pokedex",
  description: "An interactive Pokedex application built with Next.js, Bun, and NextUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Providers>
          <Navbar />
          {children}
          <footer className="border-t border-default-200 bg-background/70 backdrop-blur-sm mt-12">
            <div className="container mx-auto px-4 sm:px-6 py-6 text-sm text-default-600">
              <p className="leading-relaxed">
                This is an unofficial, fan-made project and is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak, or The Pokémon Company. Pokémon and related trademarks are the property of their respective owners.
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
