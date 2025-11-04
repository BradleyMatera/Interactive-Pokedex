// Utility to fetch Pokémon data
const BASE_URL = "https://pokeapi.co/api/v2";
export const FALLBACK_SPRITE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

type RemoteResource<T> = {
  url: string;
} & T;

type PokemonSpriteRef = { front_default: string | null } | undefined;

type PokemonApiSprites = {
  front_default: string | null;
  front_shiny: string | null;
  other?: {
    [key: string]: PokemonSpriteRef;
    ["official-artwork"]?: PokemonSpriteRef;
    home?: PokemonSpriteRef;
    ["dream_world"]?: PokemonSpriteRef;
    showdown?: PokemonSpriteRef;
  };
};

type PokemonApiMoveEntry = {
  move: RemoteResource<Record<string, unknown>>;
};

type PokemonApiResponse = {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: PokemonApiSprites;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  moves: PokemonApiMoveEntry[];
};

type FlavorTextEntry = {
  flavor_text: string;
  language: { name: string };
};

type SpeciesResponse = {
  flavor_text_entries: FlavorTextEntry[];
  evolution_chain?: RemoteResource<Record<string, unknown>>;
  egg_groups: { name: string }[];
  hatch_counter: number;
  gender_rate: number;
  growth_rate?: { name: string };
  capture_rate?: number;
  base_happiness?: number;
};

type EvolutionChainLink = {
  species: { name: string };
  evolves_to: EvolutionChainLink[];
};

type EvolutionChainResponse = {
  chain: EvolutionChainLink;
};

type MoveResponse = {
  name: string;
  type: { name: string };
  power: number | null;
  accuracy: number | null;
  pp: number | null;
};

export type PokemonGridItem = {
  id: number;
  name: string;
  image: string;
  imageVariants: string[];
  types: string[];
};

export type PokemonDetails = {
  id: number;
  name: string;
  image: string;
  imageVariants?: string[];
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
    captureRate: number | null;
    baseHappiness: number | null;
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
    const data: { results: { url: string }[] } = await res.json();
    const results = await Promise.all(
      data.results.map(async (p: { url: string }) => {
        const res = await fetch(p.url);
        const pokemon: PokemonApiResponse = await res.json();

        const spriteCandidates = [
          pokemon.sprites.other?.["official-artwork"]?.front_default,
          pokemon.sprites.other?.home?.front_default,
          pokemon.sprites.other?.["dream_world"]?.front_default,
          pokemon.sprites.front_default,
          pokemon.sprites.other?.showdown?.front_default,
          pokemon.sprites.front_shiny,
        ].filter((src: string | null | undefined): src is string => Boolean(src));

        const uniqueSprites = Array.from(new Set(spriteCandidates));
        const primaryImage = uniqueSprites[0] ?? FALLBACK_SPRITE;
        const imageVariants = uniqueSprites.slice(1);

        return {
          id: pokemon.id,
          name: pokemon.name,
          image: primaryImage,
          imageVariants,
          types: pokemon.types.map((t: { type: { name: string } }) => t.type.name),
        } satisfies PokemonGridItem;
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
  const pokemon: PokemonApiResponse = await res.json();
    
    const detailSpriteCandidates = [
      pokemon.sprites.other?.["official-artwork"]?.front_default,
      pokemon.sprites.other?.home?.front_default,
      pokemon.sprites.other?.["dream_world"]?.front_default,
      pokemon.sprites.front_default,
      pokemon.sprites.other?.showdown?.front_default,
      pokemon.sprites.front_shiny,
    ].filter((src: string | null | undefined): src is string => Boolean(src));

    const uniqueDetailSprites = Array.from(new Set(detailSpriteCandidates));
    const primaryImage = uniqueDetailSprites[0] ?? FALLBACK_SPRITE;
    const imageVariants = uniqueDetailSprites.slice(1);

    // Fetch species data for description and evolution
  const speciesRes = await fetch(`${BASE_URL}/pokemon-species/${pokemon.id}`);
  const species: SpeciesResponse = await speciesRes.json();
    
    // Get English description
  const descriptionEntry = species.flavor_text_entries.find((entry) => entry.language.name === "en");
  const description = descriptionEntry ? descriptionEntry.flavor_text.replace(/\f/g, " ") : "";
    
    // Fetch evolution chain
    let evolutionChain: { id: number; name: string; image: string }[] = [];
    if (species.evolution_chain) {
      const evoRes = await fetch(species.evolution_chain.url);
      const evoData: EvolutionChainResponse = await evoRes.json();
      
      // Extract evolution chain
      const chain = evoData.chain;
      const evolutions: string[] = [];
      
      let current: EvolutionChainLink | undefined = chain;
      while (current) {
        evolutions.push(current.species.name);
        current = current.evolves_to[0];
      }
      
      // Fetch details for each evolution
      evolutionChain = await Promise.all(
        evolutions.map(async (evoName) => {
          const evoDetails = await fetch(`${BASE_URL}/pokemon/${evoName}`);
          const evoPokemon: PokemonApiResponse = await evoDetails.json();
          return {
            id: evoPokemon.id,
            name: evoPokemon.name,
            image:
              evoPokemon.sprites.other?.["official-artwork"]?.front_default ??
              evoPokemon.sprites.front_default ??
              FALLBACK_SPRITE,
          };
        })
      );
    }
    
    // Fetch moves data
    const moves = await Promise.all(
      pokemon.moves.slice(0, 10).map(async (move: PokemonApiMoveEntry) => {
        const moveRes = await fetch(move.move.url);
        const moveData: MoveResponse = await moveRes.json();
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
  const eggGroups = species.egg_groups.map((group) => group.name);
    const hatchCounter = species.hatch_counter;
    const male = species.gender_rate === -1 ? '—' : `${Math.round((8 - species.gender_rate)/8*100)}% ♂`;
    const female = species.gender_rate === -1 ? '—' : `${Math.round(species.gender_rate/8*100)}% ♀`;
    const growthRate = species.growth_rate?.name || '—';
  const captureRate = species.capture_rate ?? null;
  const baseHappiness = species.base_happiness ?? null;
    
    // For locations, we'll use a placeholder since the API can be slow
    const locations = [
      { name: 'Route 1', region: 'Kanto' },
      { name: 'Viridian Forest', region: 'Kanto' },
      { name: 'Pallet Town', region: 'Kanto' },
    ];
    
    return {
      id: pokemon.id,
      name: pokemon.name,
  image: primaryImage,
  imageVariants,
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
