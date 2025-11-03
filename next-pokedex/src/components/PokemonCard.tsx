// Reusable Pokémon Card component for grid/list views
"use client";
import { Card, Chip } from "@nextui-org/react";

export type PokemonCardProps = {
  name: string;
  image: string;
  types: string[];
  number: number | string;
  onClick?: () => void;
};

export default function PokemonCard({ name, image, types, number, onClick }: PokemonCardProps) {
  return (
    <Card
      isPressable
      onPress={onClick}
      className="grid-card rounded-2xl p-4 relative overflow-hidden text-left focus:ring-2 focus:ring-indigo-500"
      role="listitem"
      aria-label={name}
    >
      <div className="pk-number absolute right-3 top-2 text-xs font-bold text-gray-500">#{number}</div>
      <h3 className="capitalize font-extrabold text-lg mb-1">{name}</h3>
      <div className="mt-1 flex gap-1">
        {types.map((type) => (
          <Chip key={type} color="primary" variant="solid" radius="full" className={`type-chip type-${type}`}>
            {type}
          </Chip>
        ))}
      </div>
      <img
        src={image}
        alt={name}
        className="thumb absolute right-2 bottom-2 w-20 h-20 object-contain pointer-events-none"
        loading="lazy"
      />
    </Card>
  );
}
