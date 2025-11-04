// PokemonList.tsx
"use client";

import React, { useState, useMemo } from "react";
import { Input, Pagination } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons/SearchIcon";
import PokemonCard from "@/components/PokemonCard";
import { PokemonGridItem } from "@/utils/fetchPokemon";

interface PokemonListProps {
  pokemons: PokemonGridItem[];
  loading: boolean;
  error: string | null;
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredPokemon = useMemo(() => {
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [pokemons, searchTerm]);

  const paginatedPokemon = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPokemon.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPokemon, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

  // If loading, show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading Pokémon...</p>
      </div>
    );
  }

  // If error, show error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-danger">Error loading Pokémon: {error}</p>
      </div>
    );
  }

  // If no pokemons, show empty state
  if (pokemons.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>No Pokémon found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          isClearable
          radius="lg"
          classNames={{
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50 dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70 dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50 dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Search Pokémon..."
          startContent={
            <div className="text-black/50 dark:text-white/90 pointer-events-none shrink-0">
              <SearchIcon />
            </div>
          }
          value={searchTerm}
          onClear={() => setSearchTerm("")}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {paginatedPokemon.map((pokemon) => (
          <PokemonCard 
            key={pokemon.id} 
            name={pokemon.name}
            image={pokemon.image}
            imageVariants={pokemon.imageVariants}
            types={pokemon.types}
            number={pokemon.id}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination
            total={totalPages}
            initialPage={1}
            page={currentPage}
            onChange={setCurrentPage}
            classNames={{
              wrapper: "gap-2",
              item: "w-8 h-8 text-small rounded-full shadow-lg",
              cursor: "shadow-lg",
            }}
            showControls
            disableAnimation
          />
        </div>
      )}
    </div>
  );
};
