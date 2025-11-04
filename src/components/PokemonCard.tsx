// Reusable Pokémon Card component for grid/list views
"use client";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import Image from "next/image";
import { useTypeColors } from "@/hooks/useTypeColors";
import { TypeBadge } from "@/components/TypeBadge";
import { FALLBACK_SPRITE } from "@/utils/fetchPokemon";

export type PokemonCardProps = {
  name: string;
  image: string;
  imageVariants?: string[];
  types: string[];
  number: number | string;
};

export default function PokemonCard({ name, image, imageVariants = [], types, number }: PokemonCardProps) {
  const { typeColors } = useTypeColors();
  const supportedTypes = useMemo(() => new Set(Object.keys(typeColors)), [typeColors]);
  const primaryType = useMemo(() => {
    const detected = types[0]?.toLowerCase() ?? "normal";
    return supportedTypes.has(detected) ? detected : "normal";
  }, [types, supportedTypes]);
  const gradientClass = `type-card-gradient-${primaryType}`;
  const sources = useMemo(() => {
    const pool = [image, ...imageVariants, FALLBACK_SPRITE].filter(Boolean);
    return Array.from(new Set(pool));
  }, [image, imageVariants]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageError = () => {
    setActiveIndex((index) => (index < sources.length - 1 ? index + 1 : index));
  };

  return (
    <Link href={`/pokemon/${name}`} passHref>
      <Card
        isPressable
        className="grid-card rounded-2xl p-0 relative overflow-hidden text-left focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
        role="listitem"
        aria-label={name}
        as="div"
      >
        <div className={`p-4 rounded-t-lg ${gradientClass}`}>
          <div className="pk-number absolute right-3 top-2 text-xs font-bold text-white">#{number}</div>
          <div className="mb-12"> {/* Added margin to create space for image */}
            <h3 className="capitalize font-extrabold text-lg mb-2 text-white">{name}</h3>
            <div className="flex gap-1 flex-wrap">
              {types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end p-2"> {/* Added padding for better positioning */}
          <Image
            src={sources[activeIndex]}
            alt={name}
            width={80}
            height={80}
            className="thumb h-20 w-20 object-contain pointer-events-none"
            onError={handleImageError}
            loading="lazy"
          />
        </div>
      </Card>
    </Link>
  );
}
