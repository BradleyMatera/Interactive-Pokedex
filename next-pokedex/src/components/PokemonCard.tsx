// Reusable Pokémon Card component for grid/list views
"use client";
import { Card, Chip } from "@nextui-org/react";
import Link from "next/link";

export type PokemonCardProps = {
  name: string;
  image: string;
  types: string[];
  number: number | string;
  onClick?: () => void;
};

export default function PokemonCard({ name, image, types, number, onClick }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${name}`} passHref>
      <Card
        isPressable
        onPress={onClick}
        className="grid-card rounded-2xl p-4 relative overflow-hidden text-left focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition-shadow duration-300"
        role="listitem"
        aria-label={name}
      >
        <div className="pk-number absolute right-3 top-2 text-xs font-bold text-gray-500">#{number}</div>
        <div className="mb-12"> {/* Added margin to create space for image */}
          <h3 className="capitalize font-extrabold text-lg mb-2">{name}</h3>
          <div className="flex gap-1 flex-wrap">
            {types.map((type) => (
              <Chip key={type} color="primary" variant="solid" radius="full" className={`type-chip type-${type} text-xs`}>
                {type}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex justify-end"> {/* Changed to flex container for better positioning */}
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
