"use client";

import * as React from "react";
import Image from "next/image";
import { X, Clock, Eye, Heart, Share2, Check, Sparkles } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { formatDate, formatNumber } from "@/utils";
import type { Item } from "../types";

export interface ItemDetailModalProps {
  item: Item | null;
  isOpen: boolean;
  onClose: () => void;
  isLiked?: boolean;
  onLikeToggle?: (id: string) => void;
}

export function ItemDetailModal({
  item,
  isOpen,
  onClose,
  isLiked = false,
  onLikeToggle,
}: ItemDetailModalProps) {
  const [copied, setCopied] = React.useState(false);

  // Close on ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside to close backdrop */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200 scrollbar-thin">
        {/* Close Button Header */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md transition-colors hover:bg-slate-900 focus:outline-none"
          aria-label="Đóng cửa sổ chi tiết"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800">
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <Badge variant="brand" size="md" className="bg-white/90 text-brand-700 backdrop-blur-md">
              {item.categoryLabel}
            </Badge>

            <div className="flex items-center gap-3 text-xs font-medium text-white/90 drop-shadow">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {item.readTime} đọc
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" /> {formatNumber(item.viewsCount)} lượt xem
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title */}
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white leading-tight">
            {item.title}
          </h2>

          {/* Author info & Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-y border-slate-100 py-4 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand-500/30">
                <Image
                  src={item.author.avatar}
                  alt={item.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.author.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.author.role} • {formatDate(item.publishDate)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={isLiked ? "destructive" : "outline"}
                size="sm"
                onClick={() => onLikeToggle?.(item.id)}
                leftIcon={<Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />}
              >
                {isLiked ? "Đã thích" : "Yêu thích"} ({formatNumber(item.likesCount)})
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                leftIcon={copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Share2 className="h-4 w-4" />}
              >
                {copied ? "Đã chép link!" : "Chia sẻ"}
              </Button>
            </div>
          </div>

          {/* Summary Callout */}
          <div className="rounded-2xl bg-brand-50/70 p-4 border border-brand-200/60 dark:bg-brand-950/40 dark:border-brand-800">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 mb-1">
              <Sparkles className="h-3.5 w-3.5" /> Tóm tắt nội dung cốt lõi
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {item.summary}
            </p>
          </div>

          {/* Full Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 text-base whitespace-pre-line">
              {item.content}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Từ khóa chủ đề:
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 flex justify-end">
            <Button variant="secondary" onClick={onClose}>
              Đóng lại
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
