// Utility to fetch a sample list of Pokémon for grid rendering
export type PokemonGridItem = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

export async function fetchSamplePokemon(): Promise<PokemonGridItem[]> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
  const { results } = await res.json();
  const items: PokemonGridItem[] = [];
  for (const p of results) {
    const pokeRes = await fetch(p.url);
    const pokeData = await pokeRes.json();
    items.push({
      id: pokeData.id,
      name: pokeData.name,
      image: pokeData.sprites.other["official-artwork"].front_default,
      types: pokeData.types.map((t: any) => t.type.name),
    });
  }
  return items;
}
