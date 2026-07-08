import { describe, expect, test } from "bun:test";
import {
  answerQuizQuestion,
  closePokedexWindow,
  createQuizQuestion,
  focusPokedexWindow,
  filterPokemonRows,
  mapDetailsToStatRows,
  openPokedexWindow,
  POKEDEX_SECTIONS,
  summarizeDashboard,
  toggleSetValue,
  type PokedexWindowState,
} from "./pokedex-model";
import type { PokemonDetails, PokemonGridItem } from "@/utils/fetchPokemon";

const pokemonRows = [
  { id: 1, name: "bulbasaur", types: ["grass", "poison"], image: "", imageVariants: [], sprites: [], primarySpriteKey: "" },
  { id: 4, name: "charmander", types: ["fire"], image: "", imageVariants: [], sprites: [], primarySpriteKey: "" },
  { id: 7, name: "squirtle", types: ["water"], image: "", imageVariants: [], sprites: [], primarySpriteKey: "" },
] satisfies PokemonGridItem[];

const charizardDetails = {
  id: 6,
  name: "charizard",
  image: "",
  types: ["fire", "flying"],
  sprites: [],
  primarySpriteKey: "",
  weight: 905,
  height: 17,
  abilities: ["blaze", "solar-power"],
  stats: [
    { name: "hp", value: 78 },
    { name: "attack", value: 84 },
    { name: "defense", value: 78 },
    { name: "special-attack", value: 109 },
    { name: "special-defense", value: 85 },
    { name: "speed", value: 100 },
  ],
  description: "Fire dragon",
  evolutionChain: [],
  moves: [],
  breeding: {
    eggGroups: [],
    hatchCounter: 0,
    gender: { male: "", female: "" },
    growthRate: "",
    captureRate: null,
    baseHappiness: null,
  },
  locations: [],
  itemInteractions: [],
} satisfies PokemonDetails;

describe("pokedex model helpers", () => {
  test("filters pokemon by query and type together", () => {
    expect(filterPokemonRows(pokemonRows, "char", "Fire").map((pokemon) => pokemon.name)).toEqual(["charmander"]);
    expect(filterPokemonRows(pokemonRows, "1", "All").map((pokemon) => pokemon.name)).toEqual(["bulbasaur"]);
    expect(filterPokemonRows(pokemonRows, "", "Water").map((pokemon) => pokemon.name)).toEqual(["squirtle"]);
  });

  test("maps API stat names into display rows without losing values", () => {
    expect(mapDetailsToStatRows(charizardDetails)).toEqual([
      { label: "HP", value: 78 },
      { label: "Attack", value: 84 },
      { label: "Defense", value: 78 },
      { label: "Sp. Atk", value: 109 },
      { label: "Sp. Def", value: 85 },
      { label: "Speed", value: 100 },
    ]);
  });

  test("summarizes connected dashboard counts", () => {
    expect(summarizeDashboard(pokemonRows, 251, 2)).toEqual({
      pokemon: 3,
      types: 4,
      moves: 2,
      items: 251,
      locations: 0,
    });
  });

  test("toggles ids in a set immutably", () => {
    const first = toggleSetValue(new Set<number>(), 6);
    expect(first.has(6)).toBe(true);
    const second = toggleSetValue(first, 6);
    expect(first.has(6)).toBe(true);
    expect(second.has(6)).toBe(false);
  });

  test("exposes every real application section including About", () => {
    expect(POKEDEX_SECTIONS).toContain("About");
    expect(POKEDEX_SECTIONS).toEqual([
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
    ]);
  });

  test("creates a quiz question with one correct answer and four real options", () => {
    const rows = [
      ...pokemonRows,
      { id: 25, name: "pikachu", types: ["electric"], image: "", imageVariants: [], sprites: [], primarySpriteKey: "" },
      { id: 39, name: "jigglypuff", types: ["normal", "fairy"], image: "", imageVariants: [], sprites: [], primarySpriteKey: "" },
    ] satisfies PokemonGridItem[];
    const rolls = [0.2, 0.8, 0.4, 0.6, 0.1, 0.3, 0.7];
    const question = createQuizQuestion(rows, 2, 5, () => rolls.shift() ?? 0);

    expect(question).not.toBeNull();
    expect(question?.answer).toBe("charmander");
    expect(question?.pokemonId).toBe(4);
    expect(question?.options).toHaveLength(4);
    expect(new Set(question?.options).size).toBe(4);
    expect(question?.options).toContain("charmander");
    expect(question?.correct).toBe(2);
    expect(question?.total).toBe(5);
  });

  test("scores quiz answers and records whether the user was correct", () => {
    const question = {
      pokemonId: 1,
      answer: "bulbasaur",
      options: ["bulbasaur", "charmander", "squirtle", "pikachu"],
      selected: null,
      correct: 0,
      total: 0,
      wasCorrect: null,
    };

    expect(answerQuizQuestion(question, "squirtle")).toMatchObject({
      selected: "squirtle",
      wasCorrect: false,
      correct: 0,
      total: 1,
    });
    expect(answerQuizQuestion(question, "bulbasaur")).toMatchObject({
      selected: "bulbasaur",
      wasCorrect: true,
      correct: 1,
      total: 1,
    });
  });

  test("opens one focused tool workspace at a time", () => {
    const initial: PokedexWindowState[] = [];
    const pokemon = openPokedexWindow(initial, { kind: "PokemonProfile", title: "Charizard", pokemonId: 6 });
    expect(pokemon).toEqual([{ id: "PokemonProfile:6", kind: "PokemonProfile", title: "Charizard", pokemonId: 6 }]);

    const moves = openPokedexWindow(pokemon, { kind: "Moves", title: "Move Dex" });
    expect(moves.map((window) => window.id)).toEqual(["Moves"]);

    const focused = openPokedexWindow(moves, { kind: "PokemonProfile", title: "Charizard", pokemonId: 6 });
    expect(focused.map((window) => window.id)).toEqual(["PokemonProfile:6"]);
    expect(focused).toHaveLength(1);

    const manuallyFocused = focusPokedexWindow(focused, "Moves");
    expect(manuallyFocused.map((window) => window.id)).toEqual(["PokemonProfile:6"]);

    const closed = closePokedexWindow(manuallyFocused, "PokemonProfile:6");
    expect(closed).toEqual([]);
  });
});
