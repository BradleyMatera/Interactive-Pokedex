// PokemonContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchAllPokemon } from "@/utils/fetchPokemon";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  // Add other properties as needed
}

interface PokemonContextType {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string | null;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const data = await fetchAllPokemon();
        setPokemonList(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};
