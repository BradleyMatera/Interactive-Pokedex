# Interactive Pokédex

A modern, interactive Pokédex application built with Next.js 16, Bun, Tailwind CSS, and NextUI.

## Features

- **Comprehensive Pokémon Database**: Browse through all 151 original Pokémon with detailed information
- **Search & Filter**: Easily find Pokémon by name or number
- **Detailed Pokémon Pages**: View comprehensive information including:
  - Stats and abilities
  - Evolution chains
  - Moves and breeding information
  - Locations and more
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Works on all device sizes
- **Static Export**: Ready for deployment to GitHub Pages

## Tech Stack

- **Next.js 16** with App Router and TypeScript
- **Bun** as package manager and runtime
- **Tailwind CSS** v4 for styling
- **NextUI** for components and design system
- **PokeAPI** for Pokémon data

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd next-pokedex
   ```

3. Install dependencies:
   ```bash
   bun install
   ```

### Development

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building

Build the application for production:

```bash
bun run build
```

### Static Export

Export the application as static files for GitHub Pages:

```bash
bun run build:pages
```

The static files will be generated in the `docs/` directory.

## Deployment

### GitHub Pages (Automatic Deployment)

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages:

1. Any push to the `main` branch will automatically trigger the deployment workflow
2. The workflow will build the project and export static files to the `docs/` directory
3. GitHub Pages will automatically serve the content from the `docs/` directory

### Manual Deployment

If you prefer to deploy manually:

1. Build the static files:
   ```bash
   bun run build:pages
   ```

2. Commit and push the `docs/` directory to your GitHub repository

3. In your GitHub repository settings, set the GitHub Pages source to the `docs/` directory

## Project Structure

```
next-pokedex/
├── app/                 # Next.js app router pages
│   ├── pokemon/         # Pokémon list page
│   ├── pokemon/[name]/  # Individual Pokémon detail pages
│   └── globals.css      # Global styles
├── components/          # Reusable UI components
├── utils/               # Utility functions
├── docs/                # Static export output (GitHub Pages)
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run build:pages` - Export the application as static files
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint

## Future Enhancements

See [TODO.md](TODO.md) for planned features and improvements.

## License

This project is licensed under the MIT License.
