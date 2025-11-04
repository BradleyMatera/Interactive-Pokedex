// SearchBar.tsx
"use client";

import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons/SearchIcon";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 animate-fade-in">
      <Input
        aria-label="Search Pokémon"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1"
        startContent={<SearchIcon />}
      />
      <Button type="submit" color="primary" className="hover:scale-105 transition-transform">
        Search
      </Button>
    </form>
  );
}
