// Main Pokédex grid page using NextUI and Tailwind
"use client";
import { Card, Chip, Input, Button, Divider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import type { PokemonGridItem } from "../utils/fetchPokemon";

export default function PokedexPage() {
  // Placeholder for search/filter state
  const [search, setSearch] = useState("");
  // State for Pokémon list
  const [pokemons, setPokemons] = useState<PokemonGridItem[]>([]);
  // Fetch Pokémon data on mount
  useEffect(() => {
    import("../utils/fetchPokemon").then(({ fetchSamplePokemon }) => {
      fetchSamplePokemon().then(setPokemons);
    });
  }, []);

  return (
    <main className="container mx-auto px-5 pb-24">
      <header className="flex items-center justify-between gap-3 pt-6 pb-4">
        <Button variant="light" className="font-extrabold text-2xl" aria-label="Home">
          Pokédex
        </Button>
        <div className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search Pokémon or #"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <Button variant="light" aria-label="Toggle favorites">
            <span className="sr-only">Favorites</span>
            <Chip color="warning" variant="solid" radius="full">
              <span className="font-bold">★</span>
            </Chip>
          </Button>
        </div>
      </header>
      <Divider className="my-4" />
      <section aria-label="Pokémon Grid" className="mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" role="list">
          {pokemons.map((p) => (
            <PokemonCard
              key={p.id}
              name={p.name}
              image={p.image}
              types={p.types}
              number={p.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
