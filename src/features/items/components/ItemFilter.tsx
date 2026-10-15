"use client";

import * as React from "react";
import { Search, X, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Input, Button } from "@/components/ui";
import { mockCategories, type ItemCategory } from "@/mock/items.data";
import type { ItemFilterState, SortOption } from "../types";

export interface ItemFilterProps {
  filters: ItemFilterState;
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: ItemCategory | "all") => void;
  onSortChange: (sort: SortOption) => void;
  onTagChange: (tag: string | null) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
  totalCount: number;
}

export function ItemFilter({
  filters,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onTagChange,
  onReset,
  hasActiveFilters,
  totalCount,
}: ItemFilterProps) {
  return (
    <div className="space-y-6">
      {/* Top Search & Controls Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search input with debounced callback */}
        <div className="relative flex-1 max-w-md">
          <Input
            type="text"
            placeholder="Tìm kiếm theo tiêu đề, tác giả, thẻ tag..."
            value={filters.search}
            onChange={(e) => onSearchChange(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
            rightIcon={
              filters.search ? (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className="rounded-full p-0.5 hover:bg-slate-200 dark:hover:bg-slate-700"
                  aria-label="Xóa tìm kiếm"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              ) : undefined
            }
          />
        </div>

        {/* Sort select & Reset */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center">
            <span className="pointer-events-none absolute left-3 flex items-center text-slate-400">
              <ArrowUpDown className="h-3.5 w-3.5" />
            </span>
            <select
              value={filters.sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="h-10 rounded-lg border border-slate-300 bg-white pl-9 pr-8 text-sm font-medium text-slate-700 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="newest">Mới nhất</option>
              <option value="oldest">Cũ nhất</option>
              <option value="views">Lượt xem nhiều nhất</option>
              <option value="likes">Được yêu thích nhất</option>
            </select>
          </div>

          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onReset}
              leftIcon={<X className="h-3.5 w-3.5" />}
              className="h-10 text-xs"
            >
              Đặt lại
            </Button>
          )}
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">
          <SlidersHorizontal className="h-3.5 w-3.5" /> Chủ đề:
        </span>
        {mockCategories.map((cat) => {
          const isActive = filters.category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-brand-600 text-white shadow-xs font-semibold"
                  : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Active Filter Indicators & Items Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
        <div>
          Hiển thị <span className="font-bold text-slate-900 dark:text-white">{totalCount}</span> bài viết/chủ đề
          {filters.tag && (
            <span className="ml-2 inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-0.5 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
              Thẻ: #{filters.tag}
              <button
                type="button"
                onClick={() => onTagChange(null)}
                className="hover:text-rose-600"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
