// Utility to fetch Pokémon data
const BASE_URL = "https://pokeapi.co/api/v2";

export type PokemonGridItem = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

export type PokemonDetails = {
  id: number;
  name: string;
  image: string;
  types: string[];
  weight: number;
  height: number;
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
  description: string;
  evolutionChain: {
    id: number;
    name: string;
    image: string;
  }[];
  moves: {
    name: string;
    type: string;
    power: number | null;
    accuracy: number | null;
    pp: number | null;
  }[];
  breeding: {
    eggGroups: string[];
    hatchCounter: number;
    gender: {
      male: string;
      female: string;
    };
    growthRate: string;
    captureRate: number;
    baseHappiness: number;
  };
  locations: {
    name: string;
    region: string;
  }[];
};

// Fetch all Pokémon for the grid
export async function fetchAllPokemon(): Promise<PokemonGridItem[]> {
  try {
    // For demo purposes, we'll fetch the first 151 Pokémon (Gen 1)
    const res = await fetch(`${BASE_URL}/pokemon?limit=151`);
    const data = await res.json();
    const results = await Promise.all(
      data.results.map(async (p: { url: string }, index: number) => {
        const res = await fetch(p.url);
        const pokemon = await res.json();
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"]?.front_default || pokemon.sprites.front_default,
          types: pokemon.types.map((t: { type: { name: string } }) => t.type.name),
        };
      })
    );
    return results;
  } catch (error) {
    console.error("Failed to fetch all Pokémon:", error);
    return [];
  }
}

// Fetch detailed Pokémon data
export async function fetchPokemonDetails(name: string): Promise<PokemonDetails | null> {
  try {
    // Handle undefined name
    if (!name) {
      console.error('No Pokémon name provided');
      return null;
    }
    
    // Fetch basic Pokémon data
    const res = await fetch(`${BASE_URL}/pokemon/${name}`);
    const pokemon = await res.json();
    
    // Fetch species data for description and evolution
    const speciesRes = await fetch(`${BASE_URL}/pokemon-species/${pokemon.id}`);
    const species = await speciesRes.json();
    
    // Get English description
    const descriptionEntry = species.flavor_text_entries.find((entry: any) => entry.language.name === 'en');
    const description = descriptionEntry ? descriptionEntry.flavor_text.replace(/\f/g, ' ') : '';
    
    // Fetch evolution chain
    let evolutionChain: { id: number; name: string; image: string }[] = [];
    if (species.evolution_chain) {
      const evoRes = await fetch(species.evolution_chain.url);
      const evoData = await evoRes.json();
      
      // Extract evolution chain
      const chain = evoData.chain;
      const evolutions: string[] = [];
      
      let current = chain;
      while (current) {
        evolutions.push(current.species.name);
        current = current.evolves_to[0];
      }
      
      // Fetch details for each evolution
      evolutionChain = await Promise.all(
        evolutions.map(async (evoName) => {
          const evoDetails = await fetch(`${BASE_URL}/pokemon/${evoName}`);
          const evoPokemon = await evoDetails.json();
          return {
            id: evoPokemon.id,
            name: evoPokemon.name,
            image: evoPokemon.sprites.other["official-artwork"]?.front_default || evoPokemon.sprites.front_default,
          };
        })
      );
    }
    
    // Fetch moves data
    const moves = await Promise.all(
      pokemon.moves.slice(0, 10).map(async (move: any) => {
        const moveRes = await fetch(move.move.url);
        const moveData = await moveRes.json();
        return {
          name: moveData.name,
          type: moveData.type.name,
          power: moveData.power,
          accuracy: moveData.accuracy,
          pp: moveData.pp,
        };
      })
    );
    
    // Fetch breeding data
    const eggGroups = species.egg_groups.map((group: any) => group.name);
    const hatchCounter = species.hatch_counter;
    const male = species.gender_rate === -1 ? '—' : `${Math.round((8 - species.gender_rate)/8*100)}% ♂`;
    const female = species.gender_rate === -1 ? '—' : `${Math.round(species.gender_rate/8*100)}% ♀`;
    const growthRate = species.growth_rate?.name || '—';
    const captureRate = species.capture_rate ?? '—';
    const baseHappiness = species.base_happiness ?? '—';
    
    // For locations, we'll use a placeholder since the API can be slow
    const locations = [
      { name: 'Route 1', region: 'Kanto' },
      { name: 'Viridian Forest', region: 'Kanto' },
      { name: 'Pallet Town', region: 'Kanto' },
    ];
    
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other["official-artwork"]?.front_default || pokemon.sprites.front_default,
      types: pokemon.types.map((t: { type: { name: string } }) => t.type.name),
      weight: pokemon.weight,
      height: pokemon.height,
      abilities: pokemon.abilities.map((a: { ability: { name: string } }) => a.ability.name),
      stats: pokemon.stats.map((s: { stat: { name: string }; base_stat: number }) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
      description,
      evolutionChain,
      moves,
      breeding: {
        eggGroups,
        hatchCounter,
        gender: { male, female },
        growthRate,
        captureRate,
        baseHappiness,
      },
      locations,
    };
  } catch (error) {
    console.error(`Failed to fetch details for ${name}:`, error);
    return null;
  }
}

// Filter Pokémon by search term
export function filterPokemon(pokemons: PokemonGridItem[], searchTerm: string): PokemonGridItem[] {
  if (!searchTerm) return pokemons;
  
  const term = searchTerm.toLowerCase();
  return pokemons.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.id.toString().includes(term) ||
    `#${p.id}`.includes(term)
  );
}
