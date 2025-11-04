// Reusable Pokémon Card component for grid/list views
"use client";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import { useTypeColors } from "@/hooks/useTypeColors";
import { TypeBadge } from "@/components/TypeBadge";

export type PokemonCardProps = {
  name: string;
  image: string;
  types: string[];
  number: number | string;
};

export default function PokemonCard({ name, image, types, number }: PokemonCardProps) {
  const { getTypeColor } = useTypeColors();

  return (
    <Link href={`/pokemon/${name}`} passHref>
      <Card
        isPressable
        className="grid-card rounded-2xl p-0 relative overflow-hidden text-left focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
        role="listitem"
        aria-label={name}
        as="div"
      >
        <div 
          className="p-4 rounded-t-lg"
          style={{ 
            background: `linear-gradient(135deg, ${getTypeColor(types[0])}, ${getTypeColor(types[0])}80)`
          }}
        >
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
          <img
            src={image}
            alt={name}
            className="thumb w-20 h-20 object-contain pointer-events-none"
            loading="lazy"
          />
        </div>
      </Card>
    </Link>
  );
}
