// PokemonDetails.tsx
"use client";

import React, { useCallback, useMemo, useState } from "react";
import { Card, Button, Tabs, Tab } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  PokemonDetails as PokemonDetailsType,
  FALLBACK_SPRITE,
} from "@/utils/fetchPokemon";
import { useTypeColors } from "@/hooks/useTypeColors";
import { TypeBadge } from "@/components/TypeBadge";

type PokemonDetailsProps = {
  pokemon: PokemonDetailsType;
};

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("desc");
  const { typeColors } = useTypeColors();
  const supportedTypes = useMemo(() => new Set(Object.keys(typeColors)), [typeColors]);
  const primaryType = (pokemon.types[0] || "normal").toLowerCase();
  const safePrimaryType = supportedTypes.has(primaryType) ? primaryType : "normal";
  const gradientClass = `type-card-gradient-${safePrimaryType}`;
  const progressClass = `type-progress-${safePrimaryType}`;

  const spriteSources = useMemo(() => {
    const pool = [pokemon.image, ...(pokemon.imageVariants ?? []), FALLBACK_SPRITE].filter(Boolean);
    return Array.from(new Set(pool));
  }, [pokemon.image, pokemon.imageVariants]);

  type SpriteState = { key: number; index: number };
  const [spriteState, setSpriteState] = useState<SpriteState>({ key: pokemon.id, index: 0 });

  const spriteIndex = spriteState.key === pokemon.id ? spriteState.index : 0;

  const setSpriteIndex = useCallback(
    (updater: number | ((current: number) => number)) => {
      const maxIndex = Math.max(0, spriteSources.length - 1);
      setSpriteState((previous) => {
        const baseIndex = previous.key === pokemon.id ? previous.index : 0;
        const nextIndex =
          typeof updater === "function" ? (updater as (value: number) => number)(baseIndex) : updater;
        return { key: pokemon.id, index: Math.max(0, Math.min(nextIndex, maxIndex)) };
      });
    },
    [pokemon.id, spriteSources.length],
  );

  const advanceSprite = useCallback(() => {
    setSpriteIndex((current) => (current + 1 < spriteSources.length ? current + 1 : current));
  }, [setSpriteIndex, spriteSources.length]);

  return (
    <div>
      <Button
        onClick={() => router.back()}
        variant="light"
        className="mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors animate-fade-in"
      >
        ← Back to Pokédex
      </Button>

      <Card className="mb-8 overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-300">
        <div className={`p-8 rounded-t-lg ${gradientClass}`}>
          <div className="flex flex-col md:flex-row items-center animate-fade-in-up">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-xl opacity-50 animate-pulse" />
                <Image
                  src={spriteSources[spriteIndex]}
                  alt={pokemon.name}
                  width={300}
                  height={300}
                  className="relative z-10 h-[300px] w-[300px] object-contain animate-fade-in"
                  priority
                  onError={advanceSprite}
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold capitalize mb-4 animate-fade-in">
                {pokemon.name}
              </h1>
              <div className="flex justify-center md:justify-start gap-2 my-4 flex-wrap">
                {pokemon.types.map((type) => (
                  <TypeBadge key={type} type={type} />
                ))}
              </div>
              <p className="text-2xl font-mono animate-fade-in">
                #{pokemon.id.toString().padStart(3, "0")}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm text-gray-500 dark:text-gray-300">Weight</p>
              <p className="text-lg font-semibold">{(pokemon.weight / 10).toFixed(1)} kg</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm text-gray-500 dark:text-gray-300">Height</p>
              <p className="text-lg font-semibold">{(pokemon.height / 10).toFixed(1)} m</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg md:col-span-2 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm text-gray-500 dark:text-gray-300">Abilities</p>
              <p className="text-lg font-semibold capitalize">
                {pokemon.abilities.join(", ")}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Base Stats</h3>
            {pokemon.stats.map((stat) => (
              <div key={stat.name} className="mb-3 animate-fade-in-up">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium capitalize">
                    {stat.name.replace("special-", "S-")}
                  </span>
                  <span className="text-sm font-medium">{stat.value}</span>
                </div>
                <progress
                  className={`stat-progress ${progressClass}`}
                  max={180}
                  value={Math.min(180, stat.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Tabs
        aria-label="Pokemon Details"
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
        variant="underlined"
        className="mb-6 hover:scale-105 transition-transform"
      >
        <Tab key="desc" title="Description">
          <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-700 dark:text-gray-300">{pokemon.description}</p>
          </Card>
        </Tab>
        <Tab key="evo" title="Evolution">
          <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
              {pokemon.evolutionChain.length > 0 ? (
                pokemon.evolutionChain.map((evolution, index) => (
                  <div key={evolution.name} className="flex flex-col items-center animate-fade-in-up">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-md opacity-50 animate-pulse" />
                      <Image
                        src={evolution.image}
                        alt={evolution.name}
                        width={100}
                        height={100}
                        className="relative z-10 hover:scale-110 transition-transform"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = FALLBACK_SPRITE;
                        }}
                      />
                    </div>
                    <span className="capitalize mt-2 font-medium">{evolution.name}</span>
                    {index < pokemon.evolutionChain.length - 1 && (
                      <div className="flex flex-col items-center my-4">
                        <span className="text-2xl animate-bounce">→</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Evolve</span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 animate-fade-in">This Pokémon does not evolve.</p>
              )}
            </div>
          </Card>
        </Tab>
        <Tab key="moves" title="Moves">
          <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">Moves</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pokemon.moves.slice(0, 10).map((move, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <h4 className="font-bold capitalize mb-2">{move.name.replace("-", " ")}</h4>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>
                      Type: <TypeBadge type={move.type} />
                    </span>
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
          <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up">
                <p className="text-sm text-gray-500 dark:text-gray-300">Egg Groups</p>
                <p className="font-semibold capitalize">
                  {pokemon.breeding.eggGroups.map((group) => group.replace("-", " ")).join(", ")}
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up">
                <p className="text-sm text-gray-500 dark:text-gray-300">Hatch Counter</p>
                <p className="font-semibold">{pokemon.breeding.hatchCounter}</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up">
                <p className="text-sm text-gray-500 dark:text-gray-300">Gender Ratio</p>
                <p className="font-semibold">
                  {pokemon.breeding.gender.male === "—"
                    ? "Genderless"
                    : `${pokemon.breeding.gender.male}, ${pokemon.breeding.gender.female}`}
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up">
                <p className="text-sm text-gray-500 dark:text-gray-300">Growth Rate</p>
                <p className="font-semibold capitalize">
                  {pokemon.breeding.growthRate.replace("-", " ") || "N/A"}
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up">
                <p className="text-sm text-gray-500 dark:text-gray-300">Capture Rate</p>
                <p className="font-semibold">{pokemon.breeding.captureRate ?? "—"}</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform animate-fade-in-up">
                <p className="text-sm text-gray-500 dark:text-gray-300">Base Happiness</p>
                <p className="font-semibold">{pokemon.breeding.baseHappiness ?? "—"}</p>
              </div>
            </div>
          </Card>
        </Tab>
        <Tab key="locations" title="Locations">
          <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">Locations</h3>
            {pokemon.locations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pokemon.locations.map((location, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-600"
                  >
                    <h4 className="font-bold">{location.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {location.region}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Locations unavailable for this Pokémon.</p>
            )}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
