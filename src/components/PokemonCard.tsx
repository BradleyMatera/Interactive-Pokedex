// Reusable Pokémon Card component for grid/list views
"use client";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { useTypeColors } from "@/hooks/useTypeColors";
import { TypeBadge } from "@/components/TypeBadge";
import { SpriteAsset } from "@/utils/fetchPokemon";

export type PokemonCardProps = {
  id: number;
  name: string;
  types: string[];
  sprites: SpriteAsset[];
  primarySpriteKey: string;
  dexNumber: number;
};

export default function PokemonCard({ id, name, types, sprites, primarySpriteKey, dexNumber }: PokemonCardProps) {
  const { typeColors } = useTypeColors();
  const supportedTypes = useMemo(() => new Set(Object.keys(typeColors)), [typeColors]);
  const primaryType = useMemo(() => {
    const detected = types[0]?.toLowerCase() ?? "normal";
    return supportedTypes.has(detected) ? detected : "normal";
  }, [types, supportedTypes]);
  const gradientClass = `type-card-gradient-${primaryType}`;
  const visibleSprites = useMemo(() => {
    const filtered = sprites.filter((asset) => asset.selectable);
    return filtered.length ? filtered : sprites;
  }, [sprites]);
  const visibleKeys = useMemo(() => visibleSprites.map((asset) => asset.key), [visibleSprites]);
  const spriteMap = useMemo(() => new Map(sprites.map((asset) => [asset.key, asset])), [sprites]);
  const fallbackSprite = useMemo(() => sprites.find((asset) => !asset.selectable), [sprites]);

  type SpriteState = { pokemonId: number; key: string };
  const [spriteState, setSpriteState] = useState<SpriteState>({ pokemonId: id, key: primarySpriteKey });

  const candidateKey = spriteState.pokemonId === id ? spriteState.key : primarySpriteKey;
  const effectiveSpriteKey = visibleKeys.includes(candidateKey)
    ? candidateKey
    : candidateKey && spriteMap.has(candidateKey)
      ? candidateKey
      : visibleKeys[0];
  const activeSprite = spriteMap.get(effectiveSpriteKey) ?? visibleSprites[0] ?? sprites[0];

  const selectSprite = useCallback(
    (nextKey: string) => {
      if (!visibleKeys.includes(nextKey)) {
        return;
      }
      setSpriteState({ pokemonId: id, key: nextKey });
    },
    [id, visibleKeys],
  );

  const advanceSprite = useCallback(() => {
    if (!visibleKeys.length) {
      return;
    }
    const currentIndex = visibleKeys.indexOf(effectiveSpriteKey ?? visibleKeys[0]);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % visibleKeys.length : 0;
    const nextKey = visibleKeys[nextIndex] ?? visibleKeys[0];
    selectSprite(nextKey);
  }, [effectiveSpriteKey, selectSprite, visibleKeys]);

  const handleImageError = useCallback(() => {
    if (visibleKeys.length > 1) {
      advanceSprite();
      return;
    }
    if (fallbackSprite && fallbackSprite.key !== effectiveSpriteKey) {
      setSpriteState({ pokemonId: id, key: fallbackSprite.key });
    }
  }, [advanceSprite, effectiveSpriteKey, fallbackSprite, id, visibleKeys]);

  const handleToggleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      advanceSprite();
    },
    [advanceSprite],
  );

  return (
  <Link href={`/pokemon/${name}/`} passHref>
      <Card
        isPressable
        className="grid-card rounded-2xl p-0 relative overflow-hidden text-left focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
        role="listitem"
        aria-label={name}
        as="div"
      >
        <div className={`p-4 rounded-t-lg ${gradientClass}`}>
          <div className="pk-number absolute right-3 top-2 text-xs font-bold text-white">#{dexNumber}</div>
          <div className="mb-12"> {/* Added margin to create space for image */}
            <h3 className="capitalize font-extrabold text-lg mb-2 text-white">{name}</h3>
            <div className="flex gap-1 flex-wrap">
              {types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between p-4 pt-0">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">Sprite</span>
            <span className="text-sm font-semibold capitalize text-gray-900 dark:text-gray-100">
              {activeSprite.label}
            </span>
          </div>
          <div className="relative">
            <Image
              src={activeSprite.url}
              alt={`${name} ${activeSprite.label}`}
              width={80}
              height={80}
              className="thumb h-20 w-20 object-contain pointer-events-none"
              onError={handleImageError}
              loading="lazy"
            />
            {visibleKeys.length > 1 && (
              <button
                type="button"
                onClick={handleToggleClick}
                className="absolute -top-2 -right-2 rounded-full bg-white/80 px-2 py-1 text-[10px] font-semibold text-slate-700 shadow focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
                aria-label="Show next sprite option"
              >
                Toggle
              </button>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
