// PokemonDetails.tsx
"use client";

import React, { useState } from "react";
import { Card, Chip, Button, Tabs, Tab, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { PokemonDetails as PokemonDetailsType } from "@/utils/fetchPokemon";

export default function PokemonDetails({ pokemon }: { pokemon: PokemonDetailsType }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("desc");
  const primaryType = pokemon.types[0] || "normal";

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        onClick={() => router.back()} 
        variant="light" 
        className="mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        ← Back to Pokédex
      </Button>

      {/* Hero Section */}
      <Card className="mb-8 overflow-hidden">
        <div 
          className="p-8 rounded-t-lg"
          style={{ 
            background: `linear-gradient(135deg, var(--type-${primaryType}), var(--type-${primaryType}50))`
          }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-xl opacity-50"></div>
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={300}
                  height={300}
                  className="relative z-10"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold capitalize mb-4">{pokemon.name}</h1>
              <div className="flex justify-center md:justify-start gap-2 my-4 flex-wrap">
                {pokemon.types.map((type) => (
                  <Chip
                    key={type}
                    className={`type-chip type-${type} text-white`}
                    variant="solid"
                  >
                    {type}
                  </Chip>
                ))}
              </div>
              <p className="text-2xl font-mono">#{pokemon.id.toString().padStart(3, "0")}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-6 bg-white dark:bg-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-300">Weight</p>
              <p className="text-lg font-semibold">{(pokemon.weight / 10).toFixed(1)} kg</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-300">Height</p>
              <p className="text-lg font-semibold">{(pokemon.height / 10).toFixed(1)} m</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg md:col-span-2">
              <p className="text-sm text-gray-500 dark:text-gray-300">Abilities</p>
              <p className="text-lg font-semibold capitalize">
                {pokemon.abilities.join(", ")}
              </p>
            </div>
          </div>

          {/* Stats Bars */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Base Stats</h3>
            {pokemon.stats.map((stat) => (
              <div key={stat.name} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium capitalize">
                    {stat.name.replace("special-", "S-")}
                  </span>
                  <span className="text-sm font-medium">{stat.value}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${Math.min(100, (stat.value / 180) * 100)}%`,
                      backgroundColor: `var(--type-${primaryType})`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs 
        aria-label="Pokemon Details" 
        selectedKey={activeTab} 
        onSelectionChange={(key) => setActiveTab(key as string)}
        variant="underlined"
        className="mb-6"
      >
        <Tab key="desc" title="Description">
          <Card className="p-6 bg-white dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">{pokemon.description}</p>
          </Card>
        </Tab>
        <Tab key="evo" title="Evolution">
          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="flex flex-col items-center">
              {pokemon.evolutionChain.length > 0 ? (
                pokemon.evolutionChain.map((evolution, index) => (
                  <div key={evolution.name} className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-md opacity-50"></div>
                      <Image
                        src={evolution.image}
                        alt={evolution.name}
                        width={100}
                        height={100}
                        className="relative z-10"
                      />
                    </div>
                    <span className="capitalize mt-2 font-medium">{evolution.name}</span>
                    {index < pokemon.evolutionChain.length - 1 && (
                      <div className="flex flex-col items-center my-4">
                        <span className="text-2xl">→</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Evolve</span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">This Pokémon does not evolve.</p>
              )}
            </div>
          </Card>
        </Tab>
        <Tab key="moves" title="Moves">
          <Card className="p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-4">Moves</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pokemon.moves.slice(0, 10).map((move, index) => (
                <div key={index} className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <h4 className="font-bold capitalize mb-2">{move.name.replace("-", " ")}</h4>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>Type: <Chip className={`type-chip type-${move.type} text-xs`} size="sm">{move.type}</Chip></span>
                    <span>Power: {move.power || "N/A"}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <span>Accuracy: {move.accuracy || "N/A"}</span>
                    <span>PP: {move.pp || "N/A"}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Tab>
        <Tab key="breed" title="Breeding">
          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-300">Egg Groups</p>
                <p className="font-semibold capitalize">
                  {pokemon.breeding.eggGroups.map((group) => group.replace("-", " ")).join(", ")}
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-300">Hatch Counter</p>
                <p className="font-semibold">{pokemon.breeding.hatchCounter}</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-300">Gender Ratio</p>
                <p className="font-semibold">
                  {pokemon.breeding.gender.male === "—" 
                    ? "Genderless"
                    : `${pokemon.breeding.gender.male}, ${pokemon.breeding.gender.female}`}
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-300">Growth Rate</p>
                <p className="font-semibold capitalize">
                  {pokemon.breeding.growthRate.replace("-", " ") || "N/A"}
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-300">Capture Rate</p>
                <p className="font-semibold">{pokemon.breeding.captureRate}</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-300">Base Happiness</p>
                <p className="font-semibold">{pokemon.breeding.baseHappiness}</p>
              </div>
            </div>
          </Card>
        </Tab>
        <Tab key="locations" title="Locations">
          <Card className="p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-4">Locations</h3>
            {pokemon.locations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pokemon.locations.map((location, index) => (
                  <div key={index} className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <h4 className="font-bold">{location.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Region: {location.region}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No location data available.</p>
            )}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
