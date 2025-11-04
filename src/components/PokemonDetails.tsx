// PokemonDetails.tsx
"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
  Card,
  Button,
  Tabs,
  Tab,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Chip,
} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  PokemonDetails as PokemonDetailsType,
  FALLBACK_SPRITE,
  SpriteAsset,
} from "@/utils/fetchPokemon";
import { useTypeColors } from "@/hooks/useTypeColors";
import { TypeBadge } from "@/components/TypeBadge";

type PokemonDetailsProps = {
  pokemon: PokemonDetailsType;
};

const ITEM_SPRITES = {
  egg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/egg.png",
  loveBall: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/love-ball.png",
  sootheBell: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/soothe-bell.png",
  townMap: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/town-map.png",
  expShare: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/exp-share.png",
} as const;


export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("desc");
  const { typeColors } = useTypeColors();
  const supportedTypes = useMemo(() => new Set(Object.keys(typeColors)), [typeColors]);
  const primaryType = (pokemon.types[0] || "normal").toLowerCase();
  const safePrimaryType = supportedTypes.has(primaryType) ? primaryType : "normal";
  const gradientClass = `type-card-gradient-${safePrimaryType}`;
  const progressClass = `type-progress-${safePrimaryType}`;

  const fallbackSprite = useMemo<SpriteAsset>(
    () => ({
      key: "fallback",
      label: "Fallback Sprite",
      url: FALLBACK_SPRITE,
      category: "fallback",
      selectable: false,
    }),
    [],
  );

  const spriteRoster = useMemo(
    () => (pokemon.sprites.length ? pokemon.sprites : [fallbackSprite]),
    [pokemon.sprites, fallbackSprite],
  );
  const visibleSprites = useMemo(() => {
    const filtered = spriteRoster.filter((asset) => asset.selectable);
    return filtered.length ? filtered : spriteRoster;
  }, [spriteRoster]);
  const spriteKeys = useMemo(() => visibleSprites.map((asset) => asset.key), [visibleSprites]);
  const spriteMap = useMemo(() => new Map(spriteRoster.map((asset) => [asset.key, asset])), [spriteRoster]);
  const rosterFallbackSprite = useMemo(
    () => spriteRoster.find((asset) => !asset.selectable),
    [spriteRoster],
  );

  const formatLabel = useCallback((value: string) => value.replace(/-/g, " "), []);

  const evolutionStages = useMemo(() => {
    const stageMap = new Map<number, typeof pokemon.evolutionChain>();
    pokemon.evolutionChain.forEach((entry) => {
      const bucket = stageMap.get(entry.stage);
      if (bucket) {
        bucket.push(entry);
      } else {
        stageMap.set(entry.stage, [entry]);
      }
    });

    return Array.from(stageMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([stage, entries]) => ({
        stage,
        entries: [...entries].sort((a, b) => a.id - b.id),
      }));
  }, [pokemon]);

  type SpriteSelectionState = { pokemonId: number; spriteKey: string };
  const [spriteSelection, setSpriteSelection] = useState<SpriteSelectionState>({
    pokemonId: pokemon.id,
    spriteKey: pokemon.primarySpriteKey,
  });
  const [evolutionSpriteSelection, setEvolutionSpriteSelection] = useState<Record<number, string>>({});
  const breedingHighlights = useMemo(
    () => [
      {
        key: "egg-groups",
        title: "Egg Groups",
        value: pokemon.breeding.eggGroups.map((group) => group.replace("-", " ")).join(", ") || "Unknown",
        helper: "Breeding compatibility",
        sprite: ITEM_SPRITES.egg,
      },
      {
        key: "hatch",
        title: "Hatch Counter",
        value: pokemon.breeding.hatchCounter,
        helper: "Steps ×256",
        sprite: ITEM_SPRITES.expShare,
      },
      {
        key: "gender",
        title: "Gender Ratio",
        value:
          pokemon.breeding.gender.male === "—"
            ? "Genderless"
            : `${pokemon.breeding.gender.male} / ${pokemon.breeding.gender.female}`,
        helper: "♂ / ♀",
        sprite: ITEM_SPRITES.loveBall,
      },
      {
        key: "growth",
        title: "Growth Rate",
        value: pokemon.breeding.growthRate.replace("-", " ") || "Unknown",
        helper: "Leveling curve",
        sprite: ITEM_SPRITES.expShare,
      },
      {
        key: "capture",
        title: "Capture Rate",
        value: pokemon.breeding.captureRate ?? "—",
        helper: "Out of 255",
        sprite: ITEM_SPRITES.loveBall,
      },
      {
        key: "happiness",
        title: "Base Happiness",
        value: pokemon.breeding.baseHappiness ?? "—",
        helper: "Friendship",
        sprite: ITEM_SPRITES.sootheBell,
      },
    ],
    [pokemon.breeding],
  );

  const locationEntries = useMemo(
    () =>
      pokemon.locations.map((location, index) => ({
        ...location,
        key: `${location.name}-${index}`,
        sprite: ITEM_SPRITES.townMap,
      })),
    [pokemon.locations],
  );

  const selectedKey = spriteSelection.pokemonId === pokemon.id ? spriteSelection.spriteKey : pokemon.primarySpriteKey;
  const activeSpriteKey = spriteKeys.includes(selectedKey)
    ? selectedKey
    : selectedKey && spriteMap.has(selectedKey)
      ? selectedKey
      : spriteKeys[0];
  const activeSprite = spriteMap.get(activeSpriteKey) ?? spriteRoster[0];

  const setActiveSpriteKey = useCallback(
    (nextKey: string) => {
      if (!spriteKeys.includes(nextKey)) {
        return;
      }
      setSpriteSelection({ pokemonId: pokemon.id, spriteKey: nextKey });
    },
    [pokemon.id, spriteKeys],
  );

  const advanceSprite = useCallback(() => {
    if (!spriteKeys.length) {
      return;
    }
    const currentIndex = spriteKeys.indexOf(activeSpriteKey);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % spriteKeys.length : 0;
    const nextKey = spriteKeys[nextIndex] ?? spriteKeys[0];
    setActiveSpriteKey(nextKey);
  }, [activeSpriteKey, setActiveSpriteKey, spriteKeys]);

  const handleSpriteError = useCallback(() => {
    if (spriteKeys.length > 1) {
      advanceSprite();
      return;
    }
    if (rosterFallbackSprite && rosterFallbackSprite.key !== activeSpriteKey) {
      setSpriteSelection({ pokemonId: pokemon.id, spriteKey: rosterFallbackSprite.key });
    }
  }, [advanceSprite, activeSpriteKey, pokemon.id, rosterFallbackSprite, spriteKeys]);

  const handleSpriteSelection = useCallback(
    (selection: Selection) => {
      const [nextKey] = Array.from(selection);
      if (typeof nextKey === "string") {
        setActiveSpriteKey(nextKey);
      }
    },
    [setActiveSpriteKey],
  );

  const setEvolutionActiveSprite = useCallback((id: number, key: string) => {
    setEvolutionSpriteSelection((previous) => ({ ...previous, [id]: key }));
  }, []);

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
                  src={activeSprite.url}
                  alt={`${pokemon.name} ${activeSprite.label}`}
                  width={300}
                  height={300}
                  className="relative z-10 h-[300px] w-[300px] object-contain animate-fade-in"
                  priority
                  onError={handleSpriteError}
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
              <p className="mt-4 text-2xl font-mono animate-fade-in">
                #{pokemon.id.toString().padStart(3, "0")}
              </p>
              <div className="mt-4 flex flex-col items-center md:items-start gap-2">
                <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Sprite Style
                </span>
                {spriteKeys.length > 1 ? (
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="flat"
                        size="sm"
                        className="font-semibold"
                        endContent={<span className="text-xs">▾</span>}
                      >
                        {activeSprite.label}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Sprite styles"
                      selectionMode="single"
                      disallowEmptySelection
                      selectedKeys={new Set([
                        spriteKeys.includes(activeSpriteKey) ? activeSpriteKey : spriteKeys[0],
                      ])}
                      onSelectionChange={handleSpriteSelection}
                    >
                      {visibleSprites.map((sprite) => (
                        <DropdownItem key={sprite.key} value={sprite.key} aria-label={sprite.label}>
                          {sprite.label}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <span className="text-sm font-semibold capitalize text-gray-900 dark:text-gray-200">
                    {activeSprite.label}
                  </span>
                )}
              </div>
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
            <div className="flex flex-col gap-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {pokemon.description}
              </p>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                  Sprite Gallery
                </h4>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {visibleSprites.map((sprite) => {
                    const isActive = sprite.key === activeSpriteKey;
                    return (
                      <Button
                        key={sprite.key}
                        size="sm"
                        variant={isActive ? "solid" : "flat"}
                        color={isActive ? "primary" : "default"}
                        className="flex items-center gap-2 rounded-xl px-3 py-2"
                        onPress={() => setActiveSpriteKey(sprite.key)}
                      >
                        <Image
                          src={sprite.url}
                          alt={sprite.label}
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain"
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = FALLBACK_SPRITE;
                          }}
                        />
                        <span className="text-xs font-semibold capitalize">{sprite.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </Tab>
        <Tab key="evo" title="Evolution">
          <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center gap-6 w-full">
              {evolutionStages.length > 0 ? (
                evolutionStages.map((group, groupIndex) => (
                  <div key={`stage-${group.stage}`} className="flex flex-col items-center gap-4 w-full">
                    <Chip
                      color="secondary"
                      variant="flat"
                      size="sm"
                      className="uppercase tracking-wide text-xs"
                    >
                      Stage {group.stage}
                    </Chip>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                      {group.entries.map((evolution) => {
                        const displaySprites = evolution.sprites.filter((asset) => asset.selectable);
                        const fallbackSprites = displaySprites.length ? displaySprites : evolution.sprites;
                        const defaultKey = fallbackSprites.some((asset) => asset.key === evolution.primarySpriteKey)
                          ? evolution.primarySpriteKey
                          : fallbackSprites[0]?.key ?? evolution.primarySpriteKey;
                        const selectedKey = evolutionSpriteSelection[evolution.id] ?? defaultKey;
                        const activeKey = fallbackSprites.some((asset) => asset.key === selectedKey)
                          ? selectedKey
                          : defaultKey;
                        const activeSprite = evolution.sprites.find((asset) => asset.key === activeKey) ?? fallbackSprites[0];

                        return (
                          <div
                            key={`${evolution.id}-${evolution.primarySpriteKey}`}
                            className="flex flex-col items-center animate-fade-in-up w-full md:w-auto max-w-xs"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-md opacity-50 animate-pulse" />
                              <Image
                                src={activeSprite?.url ?? FALLBACK_SPRITE}
                                alt={evolution.name}
                                width={120}
                                height={120}
                                className="relative z-10 hover:scale-110 transition-transform"
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src = FALLBACK_SPRITE;
                                }}
                              />
                            </div>
                            <span className="capitalize mt-3 font-semibold text-lg text-center">{evolution.name}</span>
                            {evolution.from && (
                              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                From {formatLabel(evolution.from)}
                              </span>
                            )}
                            {fallbackSprites.length > 1 && (
                              <div className="mt-3 flex flex-wrap justify-center gap-2">
                                {fallbackSprites.map((sprite) => {
                                  const isActive = sprite.key === activeKey;
                                  return (
                                    <Button
                                      key={`${evolution.id}-${sprite.key}`}
                                      size="sm"
                                      variant={isActive ? "solid" : "flat"}
                                      color={isActive ? "primary" : "default"}
                                      className="flex items-center gap-2 rounded-xl px-2 py-1"
                                      onPress={() => setEvolutionActiveSprite(evolution.id, sprite.key)}
                                    >
                                      <Image
                                        src={sprite.url}
                                        alt={sprite.label}
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 object-contain"
                                        onError={({ currentTarget }) => {
                                          currentTarget.onerror = null;
                                          currentTarget.src = FALLBACK_SPRITE;
                                        }}
                                      />
                                      <span className="text-[10px] font-semibold capitalize">{sprite.label}</span>
                                    </Button>
                                  );
                                })}
                              </div>
                            )}
                            {evolution.requirements.length > 0 && (
                              <div className="mt-3 flex flex-wrap justify-center gap-2">
                                {evolution.requirements.map((requirement, reqIndex) => (
                                  <Chip
                                    key={`${evolution.id}-req-${reqIndex}`}
                                    size="sm"
                                    variant="flat"
                                    className="bg-white/70 dark:bg-gray-900/40 text-xs font-semibold"
                                  >
                                    {requirement}
                                  </Chip>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {groupIndex < evolutionStages.length - 1 && (
                      <div className="flex flex-col items-center gap-2 py-2">
                        <span className="text-3xl animate-bounce">⇩</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Evolves to Stage {evolutionStages[groupIndex + 1].stage}
                        </span>
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
                  className={`move-card type-${move.type.toLowerCase()} p-4 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 shrink-0">
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-md opacity-60" />
                      <Image
                        src={move.icon}
                        alt={`${move.type} type move badge`}
                        width={64}
                        height={64}
                        className="relative z-10 h-16 w-16 object-contain"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = FALLBACK_SPRITE;
                        }}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold capitalize text-lg">{move.name.replace(/-/g, " ")}</h4>
                        <Chip size="sm" variant="shadow" className={`type-chip type-${move.type.toLowerCase()}`}>
                          {move.type}
                        </Chip>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        <span>Damage Class:</span>
                        <Chip
                          size="sm"
                          variant="flat"
                          className="bg-white/50 dark:bg-gray-900/50 text-xs font-semibold capitalize"
                        >
                          {move.damageClass}
                        </Chip>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-gray-700 dark:text-gray-200">
                        <div className="flex flex-col gap-1 p-2 rounded-lg bg-white/60 dark:bg-gray-800/80">
                          <span className="uppercase text-[10px] tracking-wide text-gray-500 dark:text-gray-400">
                            Power
                          </span>
                          <span>{move.power ?? "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-2 rounded-lg bg-white/60 dark:bg-gray-800/80">
                          <span className="uppercase text-[10px] tracking-wide text-gray-500 dark:text-gray-400">
                            Accuracy
                          </span>
                          <span>{move.accuracy ?? "—"}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-2 rounded-lg bg-white/60 dark:bg-gray-800/80">
                          <span className="uppercase text-[10px] tracking-wide text-gray-500 dark:text-gray-400">
                            PP
                          </span>
                          <span>{move.pp ?? "—"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Tab>
        <Tab key="breed" title="Breeding">
          <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {breedingHighlights.map((highlight) => (
                <div
                  key={highlight.key}
                  className="relative flex items-center gap-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 p-4 hover:-translate-y-1 hover:shadow-lg transition-all animate-fade-in-up"
                >
                  <div className="relative h-14 w-14 shrink-0">
                    <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 blur-md opacity-60" />
                    <Image
                      src={highlight.sprite}
                      alt={highlight.title}
                      width={56}
                      height={56}
                      className="relative z-10 h-14 w-14 object-contain"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = FALLBACK_SPRITE;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {highlight.title}
                    </p>
                    <p className="text-lg font-semibold capitalize text-gray-900 dark:text-gray-100">
                      {highlight.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      {highlight.helper}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Tab>
        <Tab key="locations" title="Locations">
          <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">Locations</h3>
            {locationEntries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {locationEntries.map((location) => (
                  <div
                    key={location.key}
                    className="relative flex items-center gap-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 p-4 hover:-translate-y-1 hover:shadow-lg transition-all"
                  >
                    <div className="relative h-12 w-12 shrink-0">
                      <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 blur-md opacity-60" />
                      <Image
                        src={location.sprite}
                        alt={location.name}
                        width={48}
                        height={48}
                        className="relative z-10 h-12 w-12 object-contain"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = FALLBACK_SPRITE;
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{location.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{location.region}</p>
                    </div>
                    <div className="hidden md:block opacity-40">
                      <Image
                        src={activeSprite.url}
                        alt={`${pokemon.name} marker`}
                        width={64}
                        height={64}
                        className="h-16 w-16 object-contain"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = FALLBACK_SPRITE;
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Locations unavailable for this Pokémon.</p>
            )}
          </Card>
        </Tab>
        {pokemon.itemInteractions.length > 0 && (
          <Tab key="items" title="Items">
            <Card className="p-6 bg-white dark:bg-gray-800 animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Item Interactions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pokemon.itemInteractions.map((item) => {
                  const readableName = item.name.replace(/-/g, " ");
                  const readableCategory = item.category.replace(/-/g, " ");
                  return (
                    <div
                      key={item.id}
                      className="relative flex flex-col gap-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 p-4 hover:-translate-y-1 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative h-16 w-16 shrink-0">
                          <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 blur-md opacity-60" />
                          <Image
                            src={item.sprite || FALLBACK_SPRITE}
                            alt={`${readableName} sprite`}
                            width={64}
                            height={64}
                            className="relative z-10 h-16 w-16 object-contain"
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src = FALLBACK_SPRITE;
                            }}
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-bold text-lg capitalize">{readableName}</h4>
                            <div className="flex items-center gap-2">
                              <Chip size="sm" variant="flat" className="capitalize bg-default-100/70 dark:bg-default-50/40">
                                {readableCategory || "misc"}
                              </Chip>
                              <Chip size="sm" color="secondary" variant="flat" className="font-semibold">
                                {item.cost ? `${item.cost}¥` : "No Cost"}
                              </Chip>
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                            {item.shortEffect || item.effect}
                          </p>
                          {item.attributes.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {item.attributes.map((attribute) => (
                                <Chip
                                  key={`${item.id}-${attribute}`}
                                  size="sm"
                                  variant="bordered"
                                  className="capitalize"
                                >
                                  {attribute.replace(/-/g, " ")}
                                </Chip>
                              ))}
                            </div>
                          )}
                          {item.contexts.length > 0 && (
                            <div className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
                              {item.contexts.map((context, contextIndex) => (
                                <span key={`${item.id}-context-${contextIndex}`} className="leading-snug">
                                  {context}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {item.flingEffect && <span>Fling Effect: {item.flingEffect.replace(/-/g, " ")}</span>}
                        {item.flingPower && <span>Fling Power: {item.flingPower}</span>}
                      </div>
                      {item.versions.length > 0 && (
                        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {item.versions.map((version) => (
                            <Chip
                              key={`${item.id}-${version.version}`}
                              size="sm"
                              variant="flat"
                              className="bg-white/50 dark:bg-gray-900/50 text-[11px] font-semibold capitalize"
                            >
                              {version.version.replace(/-/g, " ")}: {version.rarity}
                            </Chip>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
