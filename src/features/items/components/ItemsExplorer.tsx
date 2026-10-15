"use client";

import * as React from "react";
import { ItemCard } from "./ItemCard";
import { ItemFilter } from "./ItemFilter";
import { ItemDetailModal } from "./ItemDetailModal";
import { Loader, EmptyState } from "@/components/common";
import { Button } from "@/components/ui";
import { useItemFilter, useItems } from "../hooks";

export function ItemsExplorer() {
  const {
    filters,
    setSearch,
    setCategory,
    setSortBy,
    setTag,
    resetFilters,
    hasActiveFilters,
  } = useItemFilter();

  const {
    items,
    isLoading,
    likedItemIds,
    selectedItem,
    openDetailModal,
    closeDetailModal,
    toggleLike,
  } = useItems(filters);

  return (
    <section id="items" className="scroll-mt-20">
      {/* Filter and Search Bar */}
      <div className="mb-8">
        <ItemFilter
          filters={filters}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={setSortBy}
          onTagChange={setTag}
          onReset={resetFilters}
          hasActiveFilters={hasActiveFilters}
          totalCount={items.length}
        />
      </div>

      {/* Items Display Area */}
      {isLoading ? (
        <Loader text="Đang lọc danh mục dữ liệu..." className="py-20" />
      ) : items.length === 0 ? (
        <EmptyState
          title="Không tìm thấy bài viết nào"
          description="Rất tiếc, không có kết quả phù hợp với các tiêu chí tìm kiếm hoặc lọc hiện tại của bạn."
          action={
            hasActiveFilters ? (
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Đặt lại toàn bộ bộ lọc
              </Button>
            ) : undefined
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              isLiked={likedItemIds.has(item.id)}
              onLikeToggle={toggleLike}
              onSelect={openDetailModal}
            />
          ))}
        </div>
      )}

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={Boolean(selectedItem)}
        onClose={closeDetailModal}
        isLiked={selectedItem ? likedItemIds.has(selectedItem.id) : false}
        onLikeToggle={(id) => toggleLike(id)}
      />
    </section>
  );
}
