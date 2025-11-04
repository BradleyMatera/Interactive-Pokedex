// Search page
"use client";

import React, { useState } from "react";
import { Input, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePokemon } from "@/contexts/PokemonContext";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { pokemonList } = usePokemon();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
  router.push(`/pokemon/${searchTerm.toLowerCase()}/`);
    }
  };

  const filteredPokemon = pokemonList.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pokemon.types.some(type => type.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Pokémon</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <Input
            placeholder="Search by name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            startContent={<SearchIcon className="text-gray-400" />}
            className="flex-1"
          />
          <Button color="primary" type="submit">
            Search
          </Button>
        </div>
      </form>

      {searchTerm && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          {filteredPokemon.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPokemon.map((pokemon) => (
                <Card 
                  key={pokemon.id} 
                  isPressable
                  onPress={() => router.push(`/pokemon/${pokemon.name}/`)}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny font-bold uppercase">#{pokemon.id.toString().padStart(3, "0")}</p>
                    <h4 className="font-bold text-large capitalize">{pokemon.name}</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <div className="flex gap-2">
                      {pokemon.types.map((type) => (
                        <span 
                          key={type} 
                          className={`type-chip type-${type} text-xs px-2 py-1 rounded-full`}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No Pokémon found matching your search.</p>
          )}
        </div>
      )}
    </div>
  );
}
