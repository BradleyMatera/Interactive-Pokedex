// Main Pokédex grid page using NextUI and Tailwind
"use client";
import { Card, Chip, Input, Button, Divider } from "@nextui-org/react";
import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { filterPokemon, type PokemonGridItem } from "../utils/fetchPokemon";
import { usePokemon } from "@/contexts/PokemonContext";

export default function PokedexPage() {
  // State for search term
  const [search, setSearch] = useState("");
  // Get Pokémon data from context
  const { pokemonList, loading, error } = usePokemon();
  
  // Filter Pokémon based on search term
  const filteredPokemons = useMemo(() => {
    return filterPokemon(pokemonList as PokemonGridItem[], search);
  }, [pokemonList, search]);

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
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading Pokémon...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p>Error loading Pokémon: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" role="list">
            {filteredPokemons.map((p) => (
              <div key={p.id} role="listitem">
                <PokemonCard
                  name={p.name}
                  image={p.image}
                  types={p.types}
                  number={p.id}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
