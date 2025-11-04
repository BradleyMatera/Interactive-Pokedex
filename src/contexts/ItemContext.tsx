"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchAllItems, type ItemDexEntry } from "@/utils/fetchItems";

interface ItemContextValue {
  items: ItemDexEntry[];
  loading: boolean;
  error: string | null;
}

const ItemContext = createContext<ItemContextValue | undefined>(undefined);

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ItemDexEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        setLoading(true);
        const data = await fetchAllItems();
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load items");
      } finally {
        setLoading(false);
      }
    };

    void loadItems();
  }, []);

  return (
    <ItemContext.Provider value={{ items, loading, error }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = (): ItemContextValue => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItems must be used within an ItemProvider");
  }
  return context;
};
