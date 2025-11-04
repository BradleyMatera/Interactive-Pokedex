import { BASE_URL, FALLBACK_SPRITE } from "@/utils/fetchPokemon";

const DEFAULT_ITEM_LIMIT = 200;

type ItemListResponse = {
  results: {
    name: string;
    url: string;
  }[];
};

type ItemSprites = {
  default: string | null;
};

type ItemEffectEntry = {
  effect: string;
  short_effect: string;
  language: { name: string };
};

type ItemFlavorTextEntry = {
  text: string;
  language: { name: string };
  version_group: { name: string };
};

type ItemApiResponse = {
  id: number;
  name: string;
  cost: number;
  sprites: ItemSprites;
  fling_power: number | null;
  fling_effect?: { name: string } | null;
  attributes: { name: string }[];
  category: { name: string };
  effect_entries: ItemEffectEntry[];
  flavor_text_entries: ItemFlavorTextEntry[];
};

export type ItemDexEntry = {
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
};

const sanitizeText = (value: string | null | undefined): string =>
  value ? value.replace(/[\f\n\r]+/g, " ").replace(/\s+/g, " ").trim() : "";

export async function fetchAllItems(limit: number = DEFAULT_ITEM_LIMIT): Promise<ItemDexEntry[]> {
  try {
    const response = await fetch(`${BASE_URL}/item?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch items: ${response.status}`);
    }

    const data: ItemListResponse = await response.json();

    const items = await Promise.all(
      data.results.map(async ({ url }) => {
        try {
          const itemRes = await fetch(url);
          if (!itemRes.ok) {
            throw new Error(`Failed to fetch item detail ${url}`);
          }

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
            flingPower: itemData.fling_power ?? null,
            flingEffect: itemData.fling_effect?.name ?? null,
          } satisfies ItemDexEntry;
        } catch (detailError) {
          console.error(detailError);
          return null;
        }
      })
    );

    return items
      .filter((item): item is ItemDexEntry => item !== null)
      .sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error("Failed to fetch item dex:", error);
    return [];
  }
}

export function filterItems(items: ItemDexEntry[], searchTerm: string): ItemDexEntry[] {
  if (!searchTerm) {
    return items;
  }
  const term = searchTerm.toLowerCase();
  return items.filter((item) =>
    item.name.toLowerCase().includes(term) ||
    item.category.toLowerCase().includes(term) ||
    item.attributes.some((attribute) => attribute.toLowerCase().includes(term)) ||
    item.effect.toLowerCase().includes(term)
  );
}
