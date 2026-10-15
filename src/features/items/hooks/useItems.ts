"use client";

import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "@/hooks";
import { itemService } from "../services";
import type { Item, ItemFilterState } from "../types";

export function useItems(filters: ItemFilterState) {
  const [items, setItems] = useState<Item[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [likedItemIds, setLikedItemIds] = useState<Set<string>>(new Set());
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // Debounce search string by 250ms
  const debouncedSearch = useDebounce(filters.search, 250);

  const fetchItemsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await itemService.getItems({
        search: debouncedSearch,
        category: filters.category,
        tag: filters.tag,
        sortBy: filters.sortBy,
      });
      setItems(response.items);
      setAllTags(response.allTags);
    } catch (err) {
      console.error("Error loading mock items:", err);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedSearch, filters.category, filters.tag, filters.sortBy]);

  useEffect(() => {
    fetchItemsData();
  }, [fetchItemsData]);

  const toggleLike = useCallback((itemId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    setLikedItemIds((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });

    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const isCurrentlyLiked = likedItemIds.has(itemId);
          return {
            ...item,
            likesCount: isCurrentlyLiked
              ? item.likesCount - 1
              : item.likesCount + 1,
          };
        }
        return item;
      })
    );
  }, [likedItemIds]);

  const openDetailModal = useCallback((item: Item) => {
    setSelectedItem(item);
  }, []);

  const closeDetailModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return {
    items,
    allTags,
    isLoading,
    likedItemIds,
    selectedItem,
    openDetailModal,
    closeDetailModal,
    toggleLike,
    refetch: fetchItemsData,
  };
}
