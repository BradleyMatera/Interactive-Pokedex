// Next.js config for Bun workflows and GitHub Pages static export
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Apply GitHub Pages base path only in production to keep local dev on /
  basePath: isProd ? "/Interactive-Pokedex" : undefined,
  assetPrefix: isProd ? "/Interactive-Pokedex/" : undefined,
};

export default nextConfig;
