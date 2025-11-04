// src/app/pokemon/[name]/page.tsx
import PokemonDetails from "@/components/PokemonDetails";
import { fetchPokemonDetails } from "@/utils/fetchPokemon";

// This function generates static params for all pokemon at build time
export async function generateStaticParams() {
  // In a real app, you would fetch all pokemon names here
  // For now, we'll use a smaller subset
  const pokemonNames = [
    'bulbasaur', 'ivysaur', 'venusaur',
    'charmander', 'charmeleon', 'charizard',
    'squirtle', 'wartortle', 'blastoise',
    'caterpie', 'metapod', 'butterfree',
    'weedle', 'kakuna', 'beedrill',
    'pidgey', 'pidgeotto', 'pidgeot',
    'rattata', 'raticate', 'spearow'
  ];

  return pokemonNames.map((name) => ({
    name,
  }));
}

export default async function PokemonPage({ params }: { params: Promise<{ name: string }> }) {
  // In Next.js App Router, params is a Promise that needs to be awaited
  const { name } = await params;
  const pokemon = await fetchPokemonDetails(name);
  if (!pokemon) {
    return <div className="container mx-auto px-4 py-8">Failed to load Pokémon data</div>;
  }
  return <PokemonDetails pokemon={pokemon} />;
}
