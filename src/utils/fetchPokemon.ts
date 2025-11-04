// Utility to fetch Pokémon data
export const BASE_URL = "https://pokeapi.co/api/v2";
export const FALLBACK_SPRITE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

const MOVE_TYPE_ICON_MAP: Record<string, string> = {
  normal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/silk-scarf.png",
  fire: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/flame-plate.png",
  water: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/splash-plate.png",
  electric: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/zap-plate.png",
  grass: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/meadow-plate.png",
  ice: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/icicle-plate.png",
  fighting: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fist-plate.png",
  poison: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/toxic-plate.png",
  ground: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/earth-plate.png",
  flying: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sky-plate.png",
  psychic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mind-plate.png",
  bug: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/insect-plate.png",
  rock: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/stone-plate.png",
  ghost: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/spooky-plate.png",
  dragon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/draco-plate.png",
  dark: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dread-plate.png",
  steel: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/iron-plate.png",
  fairy: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pixie-plate.png",
};

type SpriteVariantCategory = "sprite" | "shiny" | "artwork" | "fallback";

export type SpriteAsset = {
  key: string;
  label: string;
  url: string;
  category: SpriteVariantCategory;
  selectable: boolean;
};

type RemoteResource<T> = {
  url: string;
} & T;

type PokemonSpriteRef = { front_default: string | null } | undefined;

type PokemonApiSprites = {
  front_default: string | null;
  front_shiny: string | null;
  other?: {
    [key: string]: PokemonSpriteRef;
    ["official-artwork"]?: PokemonSpriteRef;
    home?: PokemonSpriteRef;
    ["dream_world"]?: PokemonSpriteRef;
    showdown?: PokemonSpriteRef;
  };
};

type PokemonApiMoveEntry = {
  move: RemoteResource<Record<string, unknown>>;
};

type PokemonApiResponse = {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: PokemonApiSprites;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  moves: PokemonApiMoveEntry[];
  held_items: PokemonHeldItemEntry[];
};

type PokemonHeldItemEntry = {
  item: RemoteResource<{ name: string }>;
  version_details: {
    rarity: number;
    version: RemoteResource<{ name: string }>;
  }[];
};

type ItemApiSprites = {
  default: string | null;
};

type ItemApiEffectEntry = {
  effect: string;
  short_effect: string;
  language: { name: string };
};

type ItemApiFlavorTextEntry = {
  text: string;
  language: { name: string };
  version_group: { name: string };
};

type ItemApiResponse = {
  id: number;
  name: string;
  cost: number;
  sprites: ItemApiSprites;
  fling_power: number | null;
  fling_effect?: RemoteResource<{ name: string }> | null;
  attributes: RemoteResource<{ name: string }>[];
  category: RemoteResource<{ name: string }>;
  effect_entries: ItemApiEffectEntry[];
  flavor_text_entries: ItemApiFlavorTextEntry[];
};

export type PokemonItemInteraction = {
  id: number;
  name: string;
  sprite: string;
  cost: number;
  category: string;
  attributes: string[];
  effect: string;
  shortEffect: string;
  flavorText: string;
  flingPower: number | null;
  flingEffect: string | null;
  versions: {
    version: string;
    rarity: number;
  }[];
  contexts: string[];
};

type FlavorTextEntry = {
  flavor_text: string;
  language: { name: string };
};

type SpeciesResponse = {
  flavor_text_entries: FlavorTextEntry[];
  evolution_chain?: RemoteResource<Record<string, unknown>>;
  egg_groups: { name: string }[];
  hatch_counter: number;
  gender_rate: number;
  growth_rate?: { name: string };
  capture_rate?: number;
  base_happiness?: number;
};

type EvolutionDetail = {
  item: RemoteResource<{ name: string }> | null;
  held_item: RemoteResource<{ name: string }> | null;
  trigger: RemoteResource<{ name: string }> | null;
  min_level: number | null;
  time_of_day: string;
  known_move: RemoteResource<{ name: string }> | null;
  known_move_type: RemoteResource<{ name: string }> | null;
  location: RemoteResource<{ name: string }> | null;
  needs_overworld_rain: boolean;
  party_species: RemoteResource<{ name: string }> | null;
  party_type: RemoteResource<{ name: string }> | null;
  relative_physical_stats: number | null;
  gender: number | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  trade_species: RemoteResource<{ name: string }> | null;
  turn_upside_down: boolean;
  min_attack: number | null;
  min_defense: number | null;
  min_special_attack: number | null;
  min_special_defense: number | null;
  min_speed: number | null;
};

type EvolutionChainLink = {
  species: { name: string };
  evolves_to: EvolutionChainLink[];
  evolution_details: EvolutionDetail[];
};

type EvolutionChainResponse = {
  chain: EvolutionChainLink;
};

type MoveResponse = {
  name: string;
  type: { name: string };
  power: number | null;
  accuracy: number | null;
  pp: number | null;
  damage_class: { name: string } | null;
};

type SpriteVariantDefinition = {
  key: string;
  label: string;
  category: SpriteVariantCategory;
  getter: (sprites: PokemonApiSprites) => string | null | undefined;
};

const SPRITE_VARIANT_DEFINITIONS: SpriteVariantDefinition[] = [
  {
    key: "front-default",
    label: "Classic Sprite",
    category: "sprite",
    getter: (sprites) => sprites.front_default,
  },
  {
    key: "showdown-default",
    label: "Battle Sprite",
    category: "sprite",
    getter: (sprites) => sprites.other?.showdown?.front_default ?? null,
  },
  {
    key: "front-shiny",
    label: "Shiny Sprite",
    category: "shiny",
    getter: (sprites) => sprites.front_shiny,
  },
  {
    key: "official-artwork",
    label: "Official Artwork",
    category: "artwork",
    getter: (sprites) => sprites.other?.["official-artwork"]?.front_default ?? null,
  },
  {
    key: "home",
    label: "Home Render",
    category: "artwork",
    getter: (sprites) => sprites.other?.home?.front_default ?? null,
  },
  {
    key: "dream-world",
    label: "Dream World Art",
    category: "artwork",
    getter: (sprites) => sprites.other?.["dream_world"]?.front_default ?? null,
  },
];

function collectSpriteAssets(sprites: PokemonApiSprites): SpriteAsset[] {
  const seen = new Set<string>();
  const assets: SpriteAsset[] = [];

  for (const definition of SPRITE_VARIANT_DEFINITIONS) {
    const url = definition.getter(sprites);
    if (!url || seen.has(url)) {
      continue;
    }

    seen.add(url);
    assets.push({
      key: definition.key,
      label: definition.label,
      url,
      category: definition.category,
      selectable: true,
    });
  }

  if (!assets.length) {
    return [
      {
        key: "fallback",
        label: "Fallback Sprite",
        url: FALLBACK_SPRITE,
        category: "fallback",
        selectable: false,
      },
    ];
  }

  if (!seen.has(FALLBACK_SPRITE)) {
    assets.push({
      key: "fallback",
      label: "Fallback Sprite",
      url: FALLBACK_SPRITE,
      category: "fallback",
      selectable: false,
    });
  }

  return assets;
}

function resolvePrimarySprite(assets: SpriteAsset[]): SpriteAsset {
  return assets.find((asset) => asset.category === "sprite") ?? assets[0];
}

function sanitizeText(value: string | null | undefined): string {
  return value ? value.replace(/[\f\n\r]+/g, " ").replace(/\s+/g, " ").trim() : "";
}

function capitalizeWord(value: string): string {
  if (!value) {
    return value;
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function toDisplayName(value: string | null | undefined): string {
  if (!value) {
    return "";
  }
  return value
    .split("-")
    .filter(Boolean)
    .map((segment) => capitalizeWord(segment))
    .join(" ");
}

type EvolutionNode = {
  speciesName: string;
  stage: number;
  parentSpecies: string | null;
  details: EvolutionDetail[];
};

function collectEvolutionNodes(
  link: EvolutionChainLink,
  stage = 1,
  parentSpecies: string | null = null,
  detailsFromParent: EvolutionDetail[] = [],
): EvolutionNode[] {
  const nodes: EvolutionNode[] = [
    {
      speciesName: link.species.name,
      stage,
      parentSpecies,
      details: detailsFromParent,
    },
  ];

  for (const child of link.evolves_to ?? []) {
    nodes.push(
      ...collectEvolutionNodes(child, stage + 1, link.species.name, child.evolution_details ?? []),
    );
  }

  return nodes;
}

function mergeVersionDetails(
  existing: { version: string; rarity: number }[],
  additions: { version: string; rarity: number }[],
): { version: string; rarity: number }[] {
  const map = new Map(existing.map((entry) => [entry.version, entry]));
  for (const addition of additions) {
    if (!map.has(addition.version)) {
      map.set(addition.version, addition);
    }
  }
  return Array.from(map.values()).sort((a, b) => a.version.localeCompare(b.version));
}

type EvolutionDetailMetadata = {
  summaries: string[];
  itemContexts: {
    name: string;
    url: string;
    context: string;
  }[];
};

function describeEvolutionDetail(
  detail: EvolutionDetail,
  parentSpecies: string | null,
  speciesName: string,
): EvolutionDetailMetadata {
  const summaries: string[] = [];
  const itemContexts: EvolutionDetailMetadata["itemContexts"] = [];
  const triggerName = detail.trigger?.name ?? "";
  const triggerDisplay = toDisplayName(triggerName);

  if (triggerName === "use-item" && detail.item) {
    const itemName = toDisplayName(detail.item.name);
    summaries.push(`Use ${itemName}`);
    if (parentSpecies) {
      itemContexts.push({
        name: detail.item.name,
        url: detail.item.url,
        context: `Use ${itemName} on ${toDisplayName(parentSpecies)} to evolve into ${toDisplayName(speciesName)}.`,
      });
    }
  } else if (triggerName === "trade" && detail.item) {
    const itemName = toDisplayName(detail.item.name);
    summaries.push(`Trade while holding ${itemName}`);
    if (parentSpecies) {
      itemContexts.push({
        name: detail.item.name,
        url: detail.item.url,
        context: `Trade ${toDisplayName(parentSpecies)} while it holds ${itemName} to obtain ${toDisplayName(speciesName)}.`,
      });
    }
  } else if (triggerName) {
    summaries.push(triggerDisplay);
  }

  if (detail.held_item) {
    const heldName = toDisplayName(detail.held_item.name);
    summaries.push(`Hold ${heldName}`);
    if (parentSpecies) {
      itemContexts.push({
        name: detail.held_item.name,
        url: detail.held_item.url,
        context: `Have ${toDisplayName(parentSpecies)} hold ${heldName} to evolve into ${toDisplayName(speciesName)}.`,
      });
    }
  }

  if (detail.min_level !== null) {
    summaries.push(`Level ${detail.min_level}+`);
  }
  if (detail.time_of_day) {
    summaries.push(`Time: ${capitalizeWord(detail.time_of_day)}`);
  }
  if (detail.location) {
    summaries.push(`Location: ${toDisplayName(detail.location.name)}`);
  }
  if (detail.known_move) {
    summaries.push(`Knows move ${toDisplayName(detail.known_move.name)}`);
  }
  if (detail.known_move_type) {
    summaries.push(`Knows ${toDisplayName(detail.known_move_type.name)}-type move`);
  }
  if (detail.min_happiness !== null) {
    summaries.push(`Happiness ${detail.min_happiness}+`);
  }
  if (detail.min_affection !== null) {
    summaries.push(`Affection ${detail.min_affection}+`);
  }
  if (detail.min_beauty !== null) {
    summaries.push(`Beauty ${detail.min_beauty}+`);
  }
  if (detail.gender !== null) {
    summaries.push(detail.gender === 1 ? "Female" : "Male");
  }
  if (detail.needs_overworld_rain) {
    summaries.push("During rain");
  }
  if (detail.party_species) {
    summaries.push(`Party: ${toDisplayName(detail.party_species.name)}`);
  }
  if (detail.party_type) {
    summaries.push(`Party type: ${toDisplayName(detail.party_type.name)}`);
  }
  if (detail.min_attack !== null) {
    summaries.push(`Attack ≥ ${detail.min_attack}`);
  }
  if (detail.min_defense !== null) {
    summaries.push(`Defense ≥ ${detail.min_defense}`);
  }
  if (detail.min_special_attack !== null) {
    summaries.push(`Sp. Atk ≥ ${detail.min_special_attack}`);
  }
  if (detail.min_special_defense !== null) {
    summaries.push(`Sp. Def ≥ ${detail.min_special_defense}`);
  }
  if (detail.min_speed !== null) {
    summaries.push(`Speed ≥ ${detail.min_speed}`);
  }
  if (detail.trade_species) {
    summaries.push(`Trade with ${toDisplayName(detail.trade_species.name)}`);
  }
  if (detail.relative_physical_stats !== null) {
    const relation = detail.relative_physical_stats;
    if (relation === 1) {
      summaries.push("Attack > Defense");
    } else if (relation === -1) {
      summaries.push("Attack < Defense");
    } else if (relation === 0) {
      summaries.push("Attack = Defense");
    }
  }
  if (detail.turn_upside_down) {
    summaries.push("Hold system upside-down");
  }

  return { summaries, itemContexts };
}

export type PokemonGridItem = {
  id: number;
  name: string;
  image: string;
  imageVariants: string[];
  types: string[];
  sprites: SpriteAsset[];
  primarySpriteKey: string;
};

export type PokemonDetails = {
  id: number;
  name: string;
  image: string;
  imageVariants?: string[];
  types: string[];
  sprites: SpriteAsset[];
  primarySpriteKey: string;
  weight: number;
  height: number;
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
  description: string;
  evolutionChain: {
    id: number;
    name: string;
    image: string;
    sprites: SpriteAsset[];
    primarySpriteKey: string;
    stage: number;
    from: string | null;
    requirements: string[];
  }[];
  moves: {
    name: string;
    type: string;
    power: number | null;
    accuracy: number | null;
    pp: number | null;
    icon: string;
    damageClass: string;
  }[];
  breeding: {
    eggGroups: string[];
    hatchCounter: number;
    gender: {
      male: string;
      female: string;
    };
    growthRate: string;
    captureRate: number | null;
    baseHappiness: number | null;
  };
  locations: {
    name: string;
    region: string;
  }[];
  itemInteractions: PokemonItemInteraction[];
};

// Fetch all Pokémon for the grid
export async function fetchAllPokemon(): Promise<PokemonGridItem[]> {
  try {
    // For demo purposes, we'll fetch the first 151 Pokémon (Gen 1)
    const res = await fetch(`${BASE_URL}/pokemon?limit=151`);
    const data: { results: { url: string }[] } = await res.json();
    const results = await Promise.all(
      data.results.map(async (p: { url: string }) => {
        const res = await fetch(p.url);
        const pokemon: PokemonApiResponse = await res.json();

        const sprites = collectSpriteAssets(pokemon.sprites);
        const primarySprite = resolvePrimarySprite(sprites);
        const imageVariants = sprites
          .filter((asset) => asset.key !== primarySprite.key)
          .map((asset) => asset.url);

        return {
          id: pokemon.id,
          name: pokemon.name,
          image: primarySprite.url,
          imageVariants,
          types: pokemon.types.map((t: { type: { name: string } }) => t.type.name),
          sprites,
          primarySpriteKey: primarySprite.key,
        } satisfies PokemonGridItem;
      })
    );
    return results;
  } catch (error) {
    console.error("Failed to fetch all Pokémon:", error);
    return [];
  }
}

// Fetch detailed Pokémon data
export async function fetchPokemonDetails(name: string): Promise<PokemonDetails | null> {
  try {
    // Handle undefined name
    if (!name) {
      console.error('No Pokémon name provided');
      return null;
    }
    
    // Fetch basic Pokémon data
    const res = await fetch(`${BASE_URL}/pokemon/${name}`);
    const pokemon: PokemonApiResponse = await res.json();

    const sprites = collectSpriteAssets(pokemon.sprites);
    const primarySprite = resolvePrimarySprite(sprites);
    const imageVariants = sprites
      .filter((asset) => asset.key !== primarySprite.key)
      .map((asset) => asset.url);

    // Fetch species data for description and evolution
    const speciesRes = await fetch(`${BASE_URL}/pokemon-species/${pokemon.id}`);
    const species: SpeciesResponse = await speciesRes.json();

    // Get English description
    const descriptionEntry = species.flavor_text_entries.find((entry) => entry.language.name === "en");
    const description = sanitizeText(descriptionEntry?.flavor_text ?? "");

    type ItemInteractionBuilder = {
      name: string;
      url: string;
      contexts: string[];
      versions: {
        version: string;
        rarity: number;
      }[];
    };

    const itemInteractionBuilders = new Map<string, ItemInteractionBuilder>();

    const ensureItemBuilder = (itemName: string, url: string): ItemInteractionBuilder => {
      const key = itemName.toLowerCase();
      const existing = itemInteractionBuilders.get(key);
      if (existing) {
        return existing;
      }
      const builder: ItemInteractionBuilder = {
        name: itemName,
        url,
        contexts: [],
        versions: [],
      };
      itemInteractionBuilders.set(key, builder);
      return builder;
    };

    const addContext = (builder: ItemInteractionBuilder, context: string) => {
      if (!context) {
        return;
      }
      if (!builder.contexts.includes(context)) {
        builder.contexts.push(context);
      }
    };

    const heldItems = pokemon.held_items ?? [];
    for (const heldItem of heldItems) {
      const builder = ensureItemBuilder(heldItem.item.name, heldItem.item.url);
      builder.versions = mergeVersionDetails(
        builder.versions,
        heldItem.version_details.map((detail) => ({
          version: detail.version.name,
          rarity: detail.rarity,
        })),
      );
      addContext(builder, `Held by ${toDisplayName(pokemon.name)} in the wild.`);
    }

    // Build evolution chain with branching support
    let evolutionChain: {
      id: number;
      name: string;
      image: string;
      sprites: SpriteAsset[];
      primarySpriteKey: string;
      stage: number;
      from: string | null;
      requirements: string[];
    }[] = [];

    if (species.evolution_chain) {
      const evoRes = await fetch(species.evolution_chain.url);
      const evoData: EvolutionChainResponse = await evoRes.json();
      const nodes = collectEvolutionNodes(evoData.chain);
      const handledSpecies = new Set<string>();

      const chainEntries = await Promise.all(
        nodes.map(async (node) => {
          if (handledSpecies.has(node.speciesName)) {
            return null;
          }
          handledSpecies.add(node.speciesName);

          const isCurrent = node.speciesName === pokemon.name;
          const baseSprites = isCurrent ? sprites : undefined;
          const basePrimary = isCurrent ? primarySprite : undefined;

          let evoPokemon: PokemonApiResponse | null = null;
          let evoSprites: SpriteAsset[] = baseSprites ?? [];
          let evoPrimary = basePrimary ?? null;

          if (!isCurrent) {
            const evoDetailsRes = await fetch(`${BASE_URL}/pokemon/${node.speciesName}`);
            const fetchedPokemon: PokemonApiResponse = await evoDetailsRes.json();
            evoPokemon = fetchedPokemon;
            evoSprites = collectSpriteAssets(fetchedPokemon.sprites);
            evoPrimary = resolvePrimarySprite(evoSprites);
          }

          const effectivePokemon = evoPokemon ?? pokemon;
          const effectivePrimary = evoPrimary ?? primarySprite;

          const detailMetadata = node.details.map((detail) =>
            describeEvolutionDetail(detail, node.parentSpecies, node.speciesName),
          );

          const requirementSet = new Set<string>();
          for (const meta of detailMetadata) {
            for (const summary of meta.summaries) {
              if (summary) {
                requirementSet.add(summary);
              }
            }

            const relatesToCurrent = node.speciesName === pokemon.name || node.parentSpecies === pokemon.name;
            if (relatesToCurrent) {
              for (const context of meta.itemContexts) {
                const builder = ensureItemBuilder(context.name, context.url);
                addContext(builder, context.context);
              }
            }
          }

          return {
            id: effectivePokemon.id,
            name: effectivePokemon.name,
            image: effectivePrimary.url,
            sprites: evoSprites.length ? evoSprites : sprites,
            primarySpriteKey: effectivePrimary.key,
            stage: node.stage,
            from: node.parentSpecies,
            requirements: Array.from(requirementSet),
          };
        }),
      );

      evolutionChain = chainEntries.filter((entry): entry is NonNullable<typeof entry> => entry !== null);
      evolutionChain.sort((a, b) => a.stage - b.stage || a.id - b.id);
    }

    // Fetch moves data
    const moves = await Promise.all(
      pokemon.moves.slice(0, 10).map(async (move: PokemonApiMoveEntry) => {
        const moveRes = await fetch(move.move.url);
        const moveData: MoveResponse = await moveRes.json();
        const typeName = moveData.type.name.toLowerCase();
        return {
          name: moveData.name,
          type: typeName,
          power: moveData.power,
          accuracy: moveData.accuracy,
          pp: moveData.pp,
          icon: MOVE_TYPE_ICON_MAP[typeName] ?? FALLBACK_SPRITE,
          damageClass: moveData.damage_class?.name ?? "status",
        };
      })
    );

    const itemInteractions = await Promise.all(
      Array.from(itemInteractionBuilders.values()).map(async (builder) => {
        try {
          const itemRes = await fetch(builder.url);
          const itemData: ItemApiResponse = await itemRes.json();
          const effectEntry = itemData.effect_entries.find((entry) => entry.language.name === "en");
          const flavorEntry = itemData.flavor_text_entries.find((entry) => entry.language.name === "en");

          return {
            id: itemData.id,
            name: itemData.name,
            sprite: itemData.sprites?.default ?? FALLBACK_SPRITE,
            cost: itemData.cost,
            category: itemData.category?.name ?? "",
            attributes: itemData.attributes?.map((attribute) => attribute.name) ?? [],
            effect: sanitizeText(effectEntry?.effect ?? effectEntry?.short_effect ?? ""),
            shortEffect: sanitizeText(effectEntry?.short_effect ?? effectEntry?.effect ?? ""),
            flavorText: sanitizeText(flavorEntry?.text ?? ""),
            flingPower: itemData.fling_power,
            flingEffect: itemData.fling_effect?.name ?? null,
            versions: mergeVersionDetails(builder.versions, []),
            contexts: builder.contexts,
          } satisfies PokemonItemInteraction;
        } catch (itemError) {
          console.error(`Failed to load item ${builder.url}`, itemError);
          return null;
        }
      }),
    );
    const resolvedItemInteractions = itemInteractions.filter(
      (item): item is PokemonItemInteraction => item !== null
    );
    
    // Fetch breeding data
    const eggGroups = species.egg_groups.map((group) => group.name);
    const hatchCounter = species.hatch_counter;
    const male = species.gender_rate === -1 ? "—" : `${Math.round(((8 - species.gender_rate) / 8) * 100)}% ♂`;
    const female = species.gender_rate === -1 ? "—" : `${Math.round((species.gender_rate / 8) * 100)}% ♀`;
    const growthRate = species.growth_rate?.name || "—";
    const captureRate = species.capture_rate ?? null;
    const baseHappiness = species.base_happiness ?? null;
    
    // For locations, we'll use a placeholder since the API can be slow
    const locations = [
      { name: "Route 1", region: "Kanto" },
      { name: "Viridian Forest", region: "Kanto" },
      { name: "Pallet Town", region: "Kanto" },
    ];
    
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: primarySprite.url,
      imageVariants,
      types: pokemon.types.map((t: { type: { name: string } }) => t.type.name),
      sprites,
      primarySpriteKey: primarySprite.key,
      weight: pokemon.weight,
      height: pokemon.height,
      abilities: pokemon.abilities.map((a: { ability: { name: string } }) => a.ability.name),
      stats: pokemon.stats.map((s: { stat: { name: string }; base_stat: number }) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
      description,
      evolutionChain,
      moves,
      breeding: {
        eggGroups,
        hatchCounter,
        gender: { male, female },
        growthRate,
        captureRate,
        baseHappiness,
      },
      locations,
      itemInteractions: resolvedItemInteractions,
    };
  } catch (error) {
    console.error(`Failed to fetch details for ${name}:`, error);
    return null;
  }
}

// Filter Pokémon by search term
export function filterPokemon(pokemons: PokemonGridItem[], searchTerm: string): PokemonGridItem[] {
  if (!searchTerm) return pokemons;
  
  const term = searchTerm.toLowerCase();
  return pokemons.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.id.toString().includes(term) ||
    `#${p.id}`.includes(term)
  );
}
