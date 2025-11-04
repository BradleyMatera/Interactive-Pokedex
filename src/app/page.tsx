// Main Pokédex landing page with hero section and Pokémon grid
"use client";
import { Button, Divider, Card, CardBody } from "@nextui-org/react";
import { useState, useCallback, useMemo } from "react";
import { PokemonList } from "@/components/PokemonList";
import { usePokemon } from "@/contexts/PokemonContext";
import SearchBar from "@/components/SearchBar";
import { filterPokemon, type PokemonGridItem } from "@/utils/fetchPokemon";
import NextLink from "next/link";

export default function HomePage() {
  // State for search term
  const [search, setSearch] = useState("");
  // Get Pokémon data from context
  const { pokemonList, loading, error } = usePokemon();
  
  // Filter Pokémon based on search term
  const filteredPokemons = useMemo(() => {
    return filterPokemon(pokemonList as PokemonGridItem[], search);
  }, [pokemonList, search]);

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 pb-24">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
  <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
          Discover Pokémon
        </h1>
        <p className="text-lg md:text-xl text-default-600 max-w-2xl mx-auto mb-8">
          Explore the world of Pokémon with our interactive Pokédex. Search, filter, and learn about your favorite Pokémon.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
          <SearchBar onSearch={handleSearch} />
          <Button 
            as={NextLink} 
            href="/types" 
            color="secondary" 
            variant="shadow"
            className="font-medium h-14"
            radius="full"
          >
            Browse Types
          </Button>
        </div>
      </section>

      <Divider className="my-8" />

      {/* Stats Section */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardBody className="text-center py-6">
              <p className="text-3xl font-bold text-primary">{pokemonList?.length || 0}</p>
              <p className="text-default-600">Pokémon</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center py-6">
              <p className="text-3xl font-bold text-secondary">18</p>
              <p className="text-default-600">Types</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center py-6">
              <p className="text-3xl font-bold text-success">100+</p>
              <p className="text-default-600">Abilities</p>
            </CardBody>
          </Card>
        </div>
      </section>

      <Divider className="my-8" />

      {/* Pokémon Grid Section */}
      <section aria-label="Pokémon Collection" className="py-8">
        <div className="flex items-center justify-between mb-6">
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
