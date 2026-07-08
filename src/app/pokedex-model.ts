import type { PokemonDetails, PokemonGridItem } from "@/utils/fetchPokemon";

export type PokedexSection =
  | "Dashboard"
  | "Pokémon"
  | "Moves"
  | "Items"
  | "Locations"
  | "Types"
  | "Compare"
  | "Favorites"
  | "Team Builder"
  | "Quiz Mode"
  | "About";

export const POKEDEX_SECTIONS: PokedexSection[] = [
  "Dashboard",
  "Pokémon",
  "Moves",
  "Items",
  "Locations",
  "Types",
  "Compare",
  "Favorites",
  "Team Builder",
  "Quiz Mode",
  "About",
];

export type StatRow = {
  label: "HP" | "Attack" | "Defense" | "Sp. Atk" | "Sp. Def" | "Speed";
  value: number;
};

export type DashboardSummary = {
  pokemon: number;
  types: number;
  moves: number;
  items: number;
  locations: number;
};

export type QuizState = {
  pokemonId: number;
  answer: string;
  options: string[];
  selected: string | null;
  correct: number;
  total: number;
  wasCorrect: boolean | null;
};

export type PokedexWindowKind =
  | "PokemonExplorer"
  | "PokemonProfile"
  | "Moves"
  | "Items"
  | "Locations"
  | "Types"
  | "Compare"
  | "Favorites"
  | "TeamBuilder"
  | "QuizMode"
  | "About";

export type PokedexWindowInput = {
  kind: PokedexWindowKind;
  title: string;
  pokemonId?: number;
};

export type PokedexWindowState = PokedexWindowInput & {
  id: string;
};

const STAT_LABELS: Record<string, StatRow["label"]> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

const STAT_ORDER: StatRow["label"][] = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

export function displayName(value: string): string {
  return value
    .split("-")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export function dexNumber(id: number): string {
  return `#${id.toString().padStart(3, "0")}`;
}

export function filterPokemonRows(
  pokemonRows: PokemonGridItem[],
  query: string,
  activeType: string,
): PokemonGridItem[] {
  const normalized = query.trim().toLowerCase();
  const normalizedType = activeType.toLowerCase();

  return pokemonRows.filter((pokemon) => {
    const matchesType =
      normalizedType === "all" || pokemon.types.some((type) => type.toLowerCase() === normalizedType);
    const matchesQuery =
      !normalized ||
      pokemon.name.toLowerCase().includes(normalized) ||
      pokemon.id.toString().includes(normalized) ||
      dexNumber(pokemon.id).toLowerCase().includes(normalized);

    return matchesType && matchesQuery;
  });
}

export function mapDetailsToStatRows(details: PokemonDetails | null): StatRow[] {
  if (!details) {
    return [];
  }

  const rows = details.stats
    .map((stat) => {
      const label = STAT_LABELS[stat.name];
      return label ? { label, value: stat.value } : null;
    })
    .filter((row): row is StatRow => row !== null);

  return rows.sort((a, b) => STAT_ORDER.indexOf(a.label) - STAT_ORDER.indexOf(b.label));
}

export function summarizeDashboard(
  pokemonRows: PokemonGridItem[],
  itemCount: number,
  selectedMoveCount: number,
  selectedLocationCount = 0,
): DashboardSummary {
  return {
    pokemon: pokemonRows.length,
    types: new Set(pokemonRows.flatMap((pokemon) => pokemon.types.map((type) => type.toLowerCase()))).size,
    moves: selectedMoveCount,
    items: itemCount,
    locations: selectedLocationCount,
  };
}

export function toggleSetValue<T>(values: Set<T>, value: T): Set<T> {
  const next = new Set(values);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

export function createQuizQuestion(
  pokemonRows: PokemonGridItem[],
  correct: number,
  total: number,
  random: () => number = Math.random,
): QuizState | null {
  if (pokemonRows.length < 4) {
    return null;
  }

  const answer = pokemonRows[Math.floor(random() * pokemonRows.length)];
  const options = new Set<string>([answer.name]);
  while (options.size < 4) {
    options.add(pokemonRows[Math.floor(random() * pokemonRows.length)].name);
  }

  return {
    pokemonId: answer.id,
    answer: answer.name,
    options: shuffleOptions(Array.from(options), random),
    selected: null,
    correct,
    total,
    wasCorrect: null,
  };
}

export function answerQuizQuestion(question: QuizState, selected: string): QuizState {
  if (question.selected) {
    return question;
  }

  const wasCorrect = selected === question.answer;
  return {
    ...question,
    selected,
    wasCorrect,
    correct: question.correct + (wasCorrect ? 1 : 0),
    total: question.total + 1,
  };
}

export function openPokedexWindow(
  windows: PokedexWindowState[],
  input: PokedexWindowInput,
): PokedexWindowState[] {
  const id = windowIdFor(input);
  const existing = windows.find((window) => window.id === id);
  return [existing ?? { ...input, id }];
}

export function closePokedexWindow(windows: PokedexWindowState[], id: string): PokedexWindowState[] {
  return windows.filter((window) => window.id !== id);
}

export function focusPokedexWindow(windows: PokedexWindowState[], id: string): PokedexWindowState[] {
  const target = windows.find((window) => window.id === id);
  if (!target) {
    return windows;
  }
  return [target];
}

function windowIdFor(input: PokedexWindowInput): string {
  return input.pokemonId ? `${input.kind}:${input.pokemonId}` : input.kind;
}

function shuffleOptions(options: string[], random: () => number): string[] {
  const shuffled = [...options];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}
