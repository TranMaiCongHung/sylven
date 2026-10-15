"use client";

import { useState, useCallback } from "react";
import type { ItemCategory } from "@/mock/items.data";
import type { ItemFilterState, SortOption } from "../types";

export const initialFilterState: ItemFilterState = {
  search: "",
  category: "all",
  tag: null,
  sortBy: "newest",
};

export function useItemFilter() {
  const [filters, setFilters] = useState<ItemFilterState>(initialFilterState);

  const setSearch = useCallback((search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  }, []);

  const setCategory = useCallback((category: ItemCategory | "all") => {
    setFilters((prev) => ({ ...prev, category }));
  }, []);

  const setTag = useCallback((tag: string | null) => {
    setFilters((prev) => ({ ...prev, tag }));
  }, []);

  const setSortBy = useCallback((sortBy: SortOption) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilterState);
  }, []);

  const hasActiveFilters =
    filters.search !== "" ||
    filters.category !== "all" ||
    filters.tag !== null ||
    filters.sortBy !== "newest";

  return {
    filters,
    setSearch,
    setCategory,
    setTag,
    setSortBy,
    resetFilters,
    hasActiveFilters,
  };
}
