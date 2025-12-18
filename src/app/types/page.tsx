"use client";

import { Card, CardBody, CardHeader, Button, Link } from "@nextui-org/react";

// Pokemon types data
const pokemonTypes = [
  { name: "Normal", icon: "🐾" },
  { name: "Fire", icon: "🔥" },
  { name: "Water", icon: "💧" },
  { name: "Electric", icon: "⚡" },
  { name: "Grass", icon: "🌿" },
  { name: "Ice", icon: "❄️" },
  { name: "Fighting", icon: "💪" },
  { name: "Poison", icon: "☠️" },
  { name: "Ground", icon: "🏔️" },
  { name: "Flying", icon: "🦅" },
  { name: "Psychic", icon: "🧠" },
  { name: "Bug", icon: "🐛" },
  { name: "Rock", icon: "🪨" },
  { name: "Ghost", icon: "👻" },
  { name: "Dragon", icon: "🐉" },
  { name: "Dark", icon: "🌙" },
  { name: "Steel", icon: "⚙️" },
  { name: "Fairy", icon: "🧚" },
];

export default function TypesPage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Pokemon Types</h1>
      <p className="text-center mb-8 text-default-600">
        Discover the 18 different types of Pokemon and their unique characteristics.
      </p>

      <div className="flex justify-center mb-6">
        <Button
          as={Link}
          href="/"
          variant="flat"
          color="default"
          className="min-h-12 w-full max-w-xs font-medium"
          radius="full"
        >
          ← Back to Pokédex
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonTypes.map((type) => (
          <Card 
            key={type.name} 
            className={`type-${type.name.toLowerCase()} text-white transition-transform hover:scale-105`}
          >
            <CardHeader className="flex items-center gap-3 pb-2">
              <span className="text-2xl">{type.icon}</span>
              <h2 className="text-xl font-bold">{type.name}</h2>
            </CardHeader>
            <CardBody>
              <p className="text-white/90">
                {type.name} type Pokemon have unique strengths and weaknesses in battle.
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-default-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Type Effectiveness</h2>
        <p className="mb-4">
          In Pokemon battles, each type has specific strengths and weaknesses against other types.
          Understanding these relationships is key to building a strong team:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Some types are super effective against others (deal double damage)</li>
          <li>Some types are not very effective (deal half damage)</li>
          <li>Some types have no effect on others (deal no damage)</li>
          <li>Same-type attack bonus (STAB) gives Pokemon a boost when using their own type moves</li>
        </ul>
      </div>
    </div>
  );
}
