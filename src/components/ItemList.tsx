"use client";

import React, { useMemo, useState } from "react";
import { Input, Pagination } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { ItemCard } from "@/components/ItemCard";
import type { ItemDexEntry } from "@/utils/fetchItems";

interface ItemListProps {
  items: ItemDexEntry[];
  loading: boolean;
  error: string | null;
}

const ITEMS_PER_PAGE = 24;

export function ItemList({ items, loading, error }: ItemListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return items;
    }
    return items.filter((item) => {
      const inName = item.name.toLowerCase().includes(term);
      const inCategory = item.category.toLowerCase().includes(term);
      const inAttributes = item.attributes.some((attribute) => attribute.toLowerCase().includes(term));
      const inEffect = item.effect.toLowerCase().includes(term) || item.shortEffect.toLowerCase().includes(term);
      return inName || inCategory || inAttributes || inEffect;
    });
  }, [items, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading items...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-danger">Error loading items: {error}</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>No items available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          isClearable
          radius="lg"
          classNames={{
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50 dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70 dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50 dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Search items..."
          startContent={
            <div className="text-black/50 dark:text-white/90 pointer-events-none shrink-0">
              <SearchIcon />
            </div>
          }
          value={searchTerm}
          onClear={() => setSearchTerm("")}
          onChange={handleSearchChange}
        />
      </div>

      {filteredItems.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <p>No items match that search.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {paginatedItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <Pagination
                total={totalPages}
                initialPage={1}
                page={currentPage}
                onChange={setCurrentPage}
                classNames={{
                  wrapper: "gap-2",
                  item: "w-8 h-8 text-small rounded-full shadow-lg",
                  cursor: "shadow-lg",
                }}
                showControls
                disableAnimation
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
