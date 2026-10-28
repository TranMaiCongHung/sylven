"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout";
import { Breadcrumbs } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";
import { productRepository } from "@/data";
import type { Product, ProductCategory, ProductMaterial } from "@/types/product";
import { motion, AnimatePresence } from "motion/react";

export default function ProductsPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = React.useState<ProductCategory | "all">("all");
  const [selectedMaterial, setSelectedMaterial] = React.useState<ProductMaterial | "all">("all");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const [materialDropdownOpen, setMaterialDropdownOpen] = React.useState(false);
  const categoryDropdownRef = React.useRef<HTMLDivElement>(null);
  const materialDropdownRef = React.useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  // Pagination: maximum 12 products per page
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = React.useState(1);

  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Reset to page 1 whenever filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedMaterial, searchQuery]);

  // Close dropdowns on click outside or Escape
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(target)
      ) {
        setCategoryDropdownOpen(false);
      }
      if (
        materialDropdownRef.current &&
        !materialDropdownRef.current.contains(target)
      ) {
        setMaterialDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCategoryDropdownOpen(false);
        setMaterialDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Fetch from Mock Database Repository
  React.useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    productRepository
      .getAllProducts({
        category: selectedCategory,
        material: selectedMaterial,
        search: searchQuery,
      })
      .then((items) => {
        if (!isCancelled) {
          setProducts(items);
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [selectedCategory, selectedMaterial, searchQuery]);

  const categories = React.useMemo(
    () => [
      { key: "all" as const, label: t.productsPage.categories.all },
      { key: "necklaces" as const, label: t.productsPage.categories.necklaces },
      { key: "bracelets" as const, label: t.productsPage.categories.bracelets },
      { key: "earrings" as const, label: t.productsPage.categories.earrings },
      { key: "rings" as const, label: t.productsPage.categories.rings },
    ],
    [t.productsPage.categories]
  );

  const materials = React.useMemo(
    () => [
      { key: "all" as const, label: t.productsPage.materialsFilter?.all || "Tất cả bộ sưu tập" },
      { key: "silver" as const, label: t.productsPage.materialsFilter?.silver || "Silver Collection" },
      { key: "titanium" as const, label: t.productsPage.materialsFilter?.titanium || "F136 Titanium Collection" },
      { key: "gold" as const, label: t.productsPage.materialsFilter?.gold || "Gold 18K" },
    ],
    [t.productsPage.materialsFilter]
  );

  // Pagination calculation (Max 12 products per page)
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = React.useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [products, currentPage, ITEMS_PER_PAGE]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const galleryElement = document.getElementById("gallery");
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-14 pt-24 sm:pt-28 pb-32 w-full max-w-full overflow-hidden bg-white">
      {/* HEADER & ATELIER TITLE */}
      <section className="px-4">
        <Container size="lg">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto pt-2">
            {/* BREADCRUMB TREE (MATCHING IMAGE 1: HOME / CREATIONS) */}
            <Breadcrumbs
              items={[
                { label: "HOME", href: "/" },
                { label: "CREATIONS", isActiveCollection: true },
              ]}
              className="mb-4 sm:mb-6"
            />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-oranienbaum font-medium text-[#18181B] tracking-[0.03em] uppercase leading-tight text-balance">
              {t.productsPage.title}
            </h1>
          </div>

          {/* UNIFIED LUXURY FILTER BAR (MATCHING IMAGE 1 EXACTLY: FILTER | CATEGORIES | MATERIAL) */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 py-3.5 border-b border-[#E5DFD5] font-lexend">
            {/* Left: FILTER | DANH MỤC ∨ | CHẤT LIỆU ∨ */}
            <div className="flex items-center gap-6 sm:gap-10 w-full sm:w-auto flex-wrap">
              <span className="text-xs uppercase tracking-[0.22em] font-medium text-stone-900 select-none font-lexend">
                FILTER
              </span>

              {/* Category Dropdown (PRODUCT TYPE ∨) */}
              <div className="relative" ref={categoryDropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    setCategoryDropdownOpen(!categoryDropdownOpen);
                    setMaterialDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-normal text-stone-800 hover:text-stone-950 transition-colors cursor-pointer py-1 group font-lexend"
                >
                  <span className={selectedCategory !== "all" ? "font-semibold text-stone-950" : ""}>
                    {selectedCategory === "all"
                      ? (language === "vi" ? "DANH MỤC" : "PRODUCT TYPE")
                      : categories.find((c) => c.key === selectedCategory)?.label.toUpperCase()}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-stone-500 group-hover:text-stone-900 transition-transform duration-200 ${
                      categoryDropdownOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                {/* Category Dropdown Popover */}
                <AnimatePresence>
                  {categoryDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2.5 w-52 bg-white border border-[#E5DFD5] shadow-xl py-2 z-30"
                    >
                      {categories.map((cat) => {
                        const isActive = selectedCategory === cat.key;
                        return (
                          <button
                            key={cat.key}
                            type="button"
                            onClick={() => {
                              setSelectedCategory(cat.key);
                              setCategoryDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer font-lexend ${
                              isActive
                                ? "text-stone-900 font-semibold bg-stone-100/70"
                                : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                            }`}
                          >
                            <span>{cat.label}</span>
                            {isActive && <Check className="w-3.5 h-3.5 text-stone-900" strokeWidth={2} />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Material Dropdown (SIZE ∨ / MATERIAL ∨) */}
              <div className="relative" ref={materialDropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    setMaterialDropdownOpen(!materialDropdownOpen);
                    setCategoryDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-normal text-stone-800 hover:text-stone-950 transition-colors cursor-pointer py-1 group font-lexend"
                >
                  <span className={selectedMaterial !== "all" ? "font-semibold text-stone-950" : ""}>
                    {selectedMaterial === "all"
                      ? (language === "vi" ? "CHẤT LIỆU" : "MATERIAL")
                      : materials.find((m) => m.key === selectedMaterial)?.label.toUpperCase()}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-stone-500 group-hover:text-stone-900 transition-transform duration-200 ${
                      materialDropdownOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                {/* Material Dropdown Popover */}
                <AnimatePresence>
                  {materialDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2.5 w-60 bg-white border border-[#E5DFD5] shadow-xl py-2 z-30"
                    >
                      {materials.map((mat) => {
                        const isActive = selectedMaterial === mat.key;
                        return (
                          <button
                            key={mat.key}
                            type="button"
                            onClick={() => {
                              setSelectedMaterial(mat.key);
                              setMaterialDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer font-lexend ${
                              isActive
                                ? "text-stone-900 font-semibold bg-stone-100/70"
                                : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                            }`}
                          >
                            <span>{mat.label}</span>
                            {isActive && <Check className="w-3.5 h-3.5 text-stone-900" strokeWidth={2} />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Clear Active Filters */}
              {(selectedCategory !== "all" || selectedMaterial !== "all" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterial("all");
                    setSearchQuery("");
                  }}
                  className="text-[11px] uppercase tracking-[0.16em] text-stone-400 hover:text-stone-900 transition-colors cursor-pointer font-lexend"
                >
                  {language === "vi" ? "[Xóa tất cả lọc]" : "[Reset all]"}
                </button>
              )}
            </div>

            {/* Right: Minimalist Search & Item Count */}
            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-0" strokeWidth={1.5} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === "vi" ? "TÌM KIẾM..." : "SEARCH..."}
                  className="pl-6 pr-2 py-1 text-xs uppercase tracking-[0.18em] bg-transparent placeholder:text-stone-400 text-stone-900 focus:outline-hidden border-b border-transparent focus:border-stone-800 transition-colors w-36 sm:w-48 font-lexend"
                />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-stone-400 shrink-0 font-lexend">
                {products.length} {language === "vi" ? "TÁC PHẨM" : "ITEMS"}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* PRODUCTS GALLERY GRID */}
      <section id="gallery" className="px-4 scroll-mt-28">
        <Container size="lg">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 animate-pulse">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[4/5] w-full rounded-none bg-stone-200/50" />
                  <div className="h-4 bg-stone-200 rounded-none w-2/3" />
                  <div className="h-3 bg-stone-100 rounded-none w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="py-24 text-center text-stone-400 font-lexend text-base">
              {t.productsPage.emptyCategory}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {paginatedProducts.map((artwork, idx) => (
                  <Link
                    key={artwork.id}
                    href={`/san-pham/${artwork.slug}`}
                    className="group block cursor-pointer transition-transform duration-500 hover:-translate-y-1 min-w-0 w-full"
                  >
                    {/* Pure Image Container: No Background, No Badges */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-none">
                      {/* Default Angle */}
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={idx < 3}
                        className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                      />
                      {/* Hover Crossfade Angle */}
                      <Image
                        src={artwork.hoverImage}
                        alt={`${artwork.title} - angle`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>

                    {/* Clean Typography: Title & Subtitle Only */}
                    <div className="mt-3.5 sm:mt-4 text-left space-y-1">
                      <h3 className="font-oranienbaum text-lg sm:text-xl font-medium text-stone-900 tracking-[0.03em] uppercase transition-colors duration-300 group-hover:text-stone-700">
                        {artwork.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-lexend text-stone-500 font-normal tracking-wide line-clamp-1">
                        {artwork.subtitle[language]}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Minimalist Luxury Pagination (Max 12 products per page) */}
              {totalPages > 1 && (
                <nav
                  aria-label="Phân trang sản phẩm"
                  className="mt-16 sm:mt-20 pt-8 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-6 font-lexend text-xs uppercase tracking-[0.2em]"
                >
                  {/* Info Range */}
                  <span className="text-stone-400 text-[11px] tracking-[0.18em] font-lexend">
                    {language === "vi"
                      ? `Hiển thị ${(currentPage - 1) * ITEMS_PER_PAGE + 1}–${Math.min(
                          currentPage * ITEMS_PER_PAGE,
                          products.length
                        )} trên ${products.length} tác phẩm`
                      : `Showing ${(currentPage - 1) * ITEMS_PER_PAGE + 1}–${Math.min(
                          currentPage * ITEMS_PER_PAGE,
                          products.length
                        )} of ${products.length} pieces`}
                  </span>

                  {/* Page Switcher with 01 / 02 Numbers */}
                  <div className="flex items-center gap-6 sm:gap-8">
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      aria-label={language === "vi" ? "Trang trước" : "Previous page"}
                      className={`transition-colors cursor-pointer p-1 text-sm ${
                        currentPage === 1
                          ? "text-stone-300 cursor-not-allowed opacity-40"
                          : "text-stone-600 hover:text-stone-950"
                      }`}
                    >
                      ←
                    </button>

                    <div className="flex items-center gap-3 sm:gap-4">
                      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => {
                        const isActive = currentPage === page;
                        return (
                          <button
                            key={page}
                            type="button"
                            onClick={() => handlePageChange(page)}
                            className={`min-w-6 py-1 text-center transition-colors cursor-pointer font-lexend ${
                              isActive
                                ? "text-stone-950 font-semibold border-b-[1.5px] border-stone-950"
                                : "text-stone-400 hover:text-stone-900"
                            }`}
                          >
                            {page.toString().padStart(2, "0")}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      aria-label={language === "vi" ? "Trang sau" : "Next page"}
                      className={`transition-colors cursor-pointer p-1 text-sm ${
                        currentPage === totalPages
                          ? "text-stone-300 cursor-not-allowed opacity-40"
                          : "text-stone-600 hover:text-stone-950"
                      }`}
                    >
                      →
                    </button>
                  </div>
                </nav>
              )}
            </>
          )}
        </Container>
      </section>
    </div>
  );
}
