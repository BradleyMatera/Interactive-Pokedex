"use client";

import React from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";
import Image from "next/image";
import { FALLBACK_SPRITE } from "@/utils/fetchPokemon";
import type { ItemDexEntry } from "@/utils/fetchItems";

interface ItemCardProps {
  item: ItemDexEntry;
}

export function ItemCard({ item }: ItemCardProps) {
  const fallbackSrc = item.sprite || FALLBACK_SPRITE;
  const readableName = item.name.replace(/-/g, " ");
  const readableCategory = item.category.replace(/-/g, " ");

  return (
    <Card className="h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-200 bg-white/80 dark:bg-gray-900/80">
      <CardBody className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full bg-white/70 dark:bg-gray-800/70 blur-md" />
            <Image
              src={fallbackSrc}
              alt={`${readableName} sprite`}
              width={64}
              height={64}
              className="relative z-10 h-16 w-16 object-contain"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = FALLBACK_SPRITE;
              }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold capitalize">{readableName}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{readableCategory || "misc"}</p>
          </div>
          <Chip color="secondary" variant="flat" size="sm" className="font-semibold">
            {item.cost ? `${item.cost}¥` : "No Cost"}
          </Chip>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.shortEffect || item.effect}</p>

        {item.attributes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.attributes.map((attribute) => (
              <Chip key={attribute} size="sm" variant="flat" className="capitalize bg-default-100/70 dark:bg-default-50/40">
                {attribute.replace(/-/g, " ")}
              </Chip>
            ))}
          </div>
        )}

        {(item.flingEffect || item.flingPower) && (
          <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {item.flingEffect && <span>Fling: {item.flingEffect.replace(/-/g, " ")}</span>}
            {item.flingPower && <span>Power: {item.flingPower}</span>}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
