// src/app/pokemon/[name]/page.tsx
import PokemonDetails from "@/components/PokemonDetails";
import { fetchPokemonDetails } from "@/utils/fetchPokemon";

// This function generates static params for all pokemon at build time
export async function generateStaticParams() {
  // In a real app, you would fetch all pokemon names here
  // For now, we'll use a more comprehensive subset
  const pokemonNames = [
    'bulbasaur', 'ivysaur', 'venusaur',
    'charmander', 'charmeleon', 'charizard',
    'squirtle', 'wartortle', 'blastoise',
    'caterpie', 'metapod', 'butterfree',
    'weedle', 'kakuna', 'beedrill',
    'pidgey', 'pidgeotto', 'pidgeot',
    'rattata', 'raticate', 'spearow',
    'fearow', 'ekans', 'arbok',
    'pikachu', 'raichu', 'sandshrew',
    'sandslash', 'nidoran-f', 'nidorina',
    'nidoqueen', 'nidoran-m', 'nidorino',
    'nidoking', 'clefairy', 'clefable',
    'vulpix', 'ninetales', 'jigglypuff',
    'wigglytuff', 'zubat', 'golbat',
    'oddish', 'gloom', 'vileplume',
    'paras', 'parasect', 'venonat',
    'venomoth', 'diglett', 'dugtrio',
    'meowth', 'persian', 'psyduck',
    'golduck', 'mankey', 'primeape',
    'growlithe', 'arcanine', 'poliwag',
    'poliwhirl', 'poliwrath', 'abra',
    'kadabra', 'alakazam', 'machop',
    'machoke', 'machamp', 'bellsprout',
    'weepinbell', 'victreebel', 'tentacool',
    'tentacruel', 'geodude', 'graveler',
    'golem', 'ponyta', 'rapidash',
    'slowpoke', 'slowbro', 'magnemite',
    'magneton', 'farfetchd', 'doduo',
    'dodrio', 'seel', 'dewgong',
    'grimer', 'muk', 'shellder',
    'cloyster', 'gastly', 'haunter',
    'gengar', 'onix', 'drowzee',
    'hypno', 'krabby', 'kingler',
    'voltorb', 'electrode', 'exeggcute',
    'exeggutor', 'cubone', 'marowak',
    'hitmonlee', 'hitmonchan', 'lickitung',
    'koffing', 'weezing', 'rhyhorn',
    'rhydon', 'chansey', 'tangela',
    'kangaskhan', 'horsea', 'seadra',
    'goldeen', 'seaking', 'staryu',
    'starmie', 'mr-mime', 'scyther',
    'jynx', 'electabuzz', 'magmar',
    'pinsir', 'tauros', 'magikarp',
    'gyarados', 'lapras', 'ditto',
    'eevee', 'vaporeon', 'jolteon',
    'flareon', 'porygon', 'omanyte',
    'omastar', 'kabuto', 'kabutops',
    'aerodactyl', 'snorlax', 'articuno',
    'zapdos', 'moltres', 'dratini',
    'dragonair', 'dragonite', 'mewtwo',
    'mew'
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
