'use client';

import { Spinner } from '@nextui-org/react';

export function PokemonLoadingIndicator() {
  return (
    <main className="container mx-auto px-4 sm:px-6 py-24 flex flex-col items-center justify-center gap-4 min-h-[50vh]">
      <Spinner color="primary" label="Loading Pokémon data..." labelColor="primary" size="lg" />
      <p className="text-sm text-default-500">Catching everything we need for your Pokédex entry.</p>
    </main>
  );
}
