// Next.js config for Bun workflows and GitHub Pages static export
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Set basePath if deploying to a subfolder (e.g., /repo-name)
  // basePath: "/Interactive-Pokedex", // Commented out for local development
};

export default nextConfig;
