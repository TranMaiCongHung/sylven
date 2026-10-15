"use client";

import * as React from "react";
import Image from "next/image";
import { Eye, Heart, Clock, ArrowUpRight } from "lucide-react";
import { Card, Badge } from "@/components/ui";
import { formatDate, formatNumber } from "@/utils";
import type { Item } from "../types";

export interface ItemCardProps {
  item: Item;
  isLiked?: boolean;
  onLikeToggle?: (id: string, e: React.MouseEvent) => void;
  onSelect?: (item: Item) => void;
}

export function ItemCard({
  item,
  isLiked = false,
  onLikeToggle,
  onSelect,
}: ItemCardProps) {
  return (
    <Card
      onClick={() => onSelect?.(item)}
      className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-500/30 cursor-pointer"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="brand" className="backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-xs">
            {item.categoryLabel}
          </Badge>
        </div>

        {/* Like Button */}
        <button
          type="button"
          onClick={(e) => onLikeToggle?.(item.id, e)}
          className={`absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-transform active:scale-90 ${
            isLiked
              ? "bg-rose-50 text-rose-600 shadow-sm dark:bg-rose-950/80 dark:text-rose-400"
              : "bg-white/80 text-slate-700 hover:bg-white hover:text-rose-600 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-900"
          }`}
          aria-label={isLiked ? "Bỏ yêu thích" : "Yêu thích"}
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isLiked ? "fill-rose-600 text-rose-600 dark:fill-rose-400 dark:text-rose-400" : ""
            }`}
          />
        </button>

        {/* Read Time */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-medium text-white/90 drop-shadow-sm">
          <Clock className="h-3.5 w-3.5" />
          <span>{item.readTime} đọc</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 leading-snug">
          {item.title}
        </h3>

        {/* Summary */}
        <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {item.summary}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              #{tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="text-[11px] text-slate-400 self-center">
              +{item.tags.length - 3}
            </span>
          )}
        </div>

        {/* Author & Footer Meta */}
        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-slate-200 dark:ring-slate-700">
              <Image
                src={item.author.avatar}
                alt={item.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                {item.author.name}
              </span>
              <span className="text-[11px] text-slate-400">
                {formatDate(item.publishDate)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1" title="Lượt xem">
              <Eye className="h-3.5 w-3.5" />
              <span>{formatNumber(item.viewsCount)}</span>
            </div>
            <div className="flex items-center gap-1 text-brand-600 font-semibold group-hover:translate-x-0.5 transition-transform dark:text-brand-400">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
