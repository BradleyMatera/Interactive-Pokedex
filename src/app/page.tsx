// Main Pokédex landing page with hero section and Pokémon grid
"use client";
import { Button, Divider, Card, CardBody } from "@nextui-org/react";
import { useState, useMemo, useEffect } from "react";
import { PokemonList } from "@/components/PokemonList";
import { usePokemon } from "@/contexts/PokemonContext";
import SearchBar from "@/components/SearchBar";
import { filterPokemon, type PokemonGridItem } from "@/utils/fetchPokemon";
import NextLink from "next/link";
import Image from "next/image";

const HERO_BACKGROUNDS = [1, 4, 6, 25, 94, 131].map(
  (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
);

export default function HomePage() {
  // State for search term
  const [search, setSearch] = useState("");
  const [activeBackground, setActiveBackground] = useState(0);
  // Get Pokémon data from context
  const { pokemonList, loading, error } = usePokemon();
  
  // Filter Pokémon based on search term
  const filteredPokemons = useMemo(() => {
    return filterPokemon(pokemonList as PokemonGridItem[], search);
  }, [pokemonList, search]);

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  useEffect(() => {
    const rotation = setInterval(() => {
      setActiveBackground((current) => (current + 1) % HERO_BACKGROUNDS.length);
    }, 4500);

    return () => clearInterval(rotation);
  }, []);

  return (
    <main className="container mx-auto px-4 sm:px-6 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-default-200 bg-white/80 px-6 py-10 text-center shadow-lg dark:bg-black/60 sm:px-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {HERO_BACKGROUNDS.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                index === activeBackground ? "opacity-40" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt="Pokémon silhouette background"
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-contain object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-linear-to-br from-background via-background/92 to-background/85" />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 md:gap-5">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Discover Pokémon
          </h1>
          <p className="text-base text-default-600 md:text-lg">
            Explore the world of Pokémon with our interactive Pokédex. Search, filter, and learn about your favorite Pokémon.
          </p>
          
          {/* Search Bar */}
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <SearchBar onSearch={handleSearch} />
            <Button
              as={NextLink}
              href="/types"
              color="secondary"
              variant="shadow"
              className="min-h-12 w-full font-medium sm:w-auto"
              radius="full"
            >
              Browse Types
            </Button>
            <Button
              as={NextLink}
              href="/items"
              color="primary"
              variant="bordered"
              className="min-h-12 w-full font-medium sm:w-auto"
              radius="full"
            >
              Item Dex
            </Button>
          </div>
        </div>
      </section>

      <Divider className="my-4" />

      {/* Stats Section */}
      <section className="py-4">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardBody className="py-4 text-center">
              <p className="text-3xl font-bold text-primary">{pokemonList?.length || 0}</p>
              <p className="text-default-600">Pokémon</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="py-4 text-center">
              <p className="text-3xl font-bold text-secondary">18</p>
              <p className="text-default-600">Types</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="py-4 text-center">
              <p className="text-3xl font-bold text-success">100+</p>
              <p className="text-default-600">Abilities</p>
            </CardBody>
          </Card>
        </div>
      </section>

      <Divider className="my-4" />

      {/* Pokémon Grid Section */}
      <section aria-label="Pokémon Collection" className="py-4">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold">Pokémon Collection</h2>
          <p className="text-default-600">{filteredPokemons.length} Pokémon found</p>
        </div>
        
        <PokemonList 
          pokemons={filteredPokemons} 
          loading={loading} 
          error={error} 
        />
      </section>
    </main>
  );
}
