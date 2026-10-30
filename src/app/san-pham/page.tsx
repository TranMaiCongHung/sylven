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
      { key: "all" as const, label: t.productsPage.materialsFilter?.all || (language === "vi" ? "Tất cả bộ sưu tập" : "All Collections") },
      { key: "silver" as const, label: t.productsPage.materialsFilter?.silver || "Silver" },
      { key: "titanium" as const, label: t.productsPage.materialsFilter?.titanium || "F136 Titanium" },
      { key: "gold" as const, label: t.productsPage.materialsFilter?.gold || "Gold 18K" },
    ],
    [t.productsPage.materialsFilter, language]
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
          {/* BREADCRUMB TREE: ALIGNED TO THE LEFT */}
          <div className="w-full flex justify-start mb-4 sm:mb-6">
            <Breadcrumbs
              items={[
                { label: "HOME", href: "/" },
                { label: "CREATIONS", isActiveCollection: true },
              ]}
            />
          </div>

          {/* HERO SPLIT BANNER: CONNECTION SALVAGED (Replacing Contemporary Title) */}
          <div className="w-full mb-8 sm:mb-10 overflow-hidden bg-[#dbbfb2] shadow-xs">
            <h1 className="sr-only">{t.productsPage.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-[#dbbfb2]">
              {/* Left: Component with peach background, left-aligned title & justified content */}
              <div className="w-full md:aspect-[1.5/1] bg-[#dbbfb2] flex flex-col justify-center items-center p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12">
                <div className="w-full max-w-[460px] flex flex-col items-start">
                  <h2 className="font-oranienbaum text-2xl sm:text-3xl md:text-[26px] lg:text-[30px] xl:text-[32px] text-[#051933] font-normal tracking-[0.04em] uppercase leading-[1.18] text-left mb-3 sm:mb-4">
                    <span>{t.manifesto.titleMain || "FINDING BEAUTY IN"}</span>
                    <span className="block mt-0.5 sm:mt-1">{t.manifesto.titleSub || "THE ABANDONED"}</span>
                  </h2>
                  <p
                    style={{ textAlign: "justify" }}
                    className="font-lexend font-light text-[11.5px] sm:text-[12px] md:text-[12.5px] lg:text-[13px] text-stone-800 leading-[1.75] sm:leading-[1.8] text-justify w-full"
                  >
                    {t.manifesto.description}
                  </p>
                </div>
              </div>

              {/* Right: Editorial Campaign Photo */}
              <div className="relative w-full aspect-[1.5/1] bg-stone-100 overflow-hidden">
                <Image
                  src="/images/about/connection-salvaged-models.webp"
                  alt="Sylven Connection Salvaged Editorial Campaign"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* UNIFIED LUXURY FILTER BAR (MATCHING IMAGE 1 EXACTLY: FILTER | CATEGORIES | MATERIAL) */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 py-3.5 border-b border-[#E5DFD5] font-lexend">
            {/* Left: FILTER | DANH MỤC ∨ | CHẤT LIỆU ∨ */}
            <div className="flex items-center gap-6 sm:gap-10 w-full sm:w-auto flex-wrap">
              <span className="text-xs uppercase tracking-[0.22em] font-normal text-stone-400 select-none font-lexend">
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
                    {selectedMaterial === "all" ? (language === "vi" ? "BỘ SƯU TẬP" : "COLLECTIONS")
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

      {/* PRODUCTS GALLERY GRID (OUSHABA ASYMMETRICAL 2-COLUMN STAGGERED LAYOUT) */}
      <section id="gallery" className="px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <Container size="lg" className="max-w-[1360px]">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-20 lg:gap-x-28 xl:gap-x-36 gap-y-16 sm:gap-y-24 md:gap-y-28 lg:gap-y-36 items-start animate-pulse">
              {[0, 1, 2, 3].map((idx) => {
                const isTall = Math.floor(idx / 2) % 2 === 0 ? idx % 2 === 0 : idx % 2 === 1;
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`w-full flex flex-col ${
                      isLeft ? "sm:items-start sm:pr-2 md:pr-6" : "sm:items-end sm:pl-2 md:pl-6"
                    }`}
                  >
                    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] space-y-4">
                      <div
                        className="w-full rounded-none bg-stone-200/50"
                        style={{ aspectRatio: isTall ? "3 / 4.2" : "1 / 1" }}
                      />
                      <div className="h-4 bg-stone-200 rounded-none w-1/2" />
                      <div className="h-3 bg-stone-100 rounded-none w-1/3" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : products.length === 0 ? (
            <div className="py-24 text-center text-stone-400 font-lexend text-base">
              {t.productsPage.emptyCategory}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-20 lg:gap-x-28 xl:gap-x-36 gap-y-16 sm:gap-y-24 md:gap-y-28 lg:gap-y-36 items-start">
                {paginatedProducts.map((artwork, idx) => {
                  // Bố cục so le Oushaba: Trong cùng 1 hàng, 1 ảnh DỌC và 1 ảnh NGANG/VUÔNG
                  // Row 0: Left = Dọc (aspect 3/4.2), Right = Vuông (aspect 1/1)
                  // Row 1: Left = Vuông, Right = Dọc
                  const row = Math.floor(idx / 2);
                  const col = idx % 2;
                  const isTall = (row + col) % 2 === 0;
                  const isLeft = col === 0;

                  return (
                    <div
                      key={artwork.id}
                      className={`w-full flex flex-col ${
                        isLeft ? "sm:items-start sm:pr-2 md:pr-6" : "sm:items-end sm:pl-2 md:pl-6"
                      }`}
                    >
                      <Link
                        href={`/san-pham/${artwork.slug}`}
                        className="group block cursor-pointer transition-transform duration-500 hover:-translate-y-1 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px]"
                      >
                        {/* Pure Image Container: Preserves authentic length and height (aspect ratio) with studio backdrop */}
                        <div
                          className="relative w-full overflow-hidden rounded-none bg-transparent"
                          style={{
                            aspectRatio: isTall ? "3 / 4.2" : "1 / 1",
                          }}
                        >
                          {/* Default Angle */}
                          <Image
                            src={artwork.image}
                            alt={artwork.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 380px"
                            priority={idx < 4}
                            className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                          />
                          {/* Hover Crossfade Angle */}
                          <Image
                            src={artwork.hoverImage}
                            alt={`${artwork.title} - angle`}
                            fill
                            sizes="(max-width: 640px) 100vw, 380px"
                            className="object-cover object-center opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                          />
                        </div>

                        {/* Clean Typography: Title & Subtitle Only (Refined, Concise, Like Reference Image) */}
                        <div className="mt-3.5 sm:mt-4 text-left space-y-1">
                          <h3 className="font-lexend text-sm sm:text-[14.5px] font-normal text-stone-900 tracking-[0.01em] transition-colors duration-200 group-hover:text-stone-600">
                            {artwork.title}
                          </h3>
                          <p className="text-xs sm:text-[12.5px] font-lexend text-stone-500 font-normal tracking-normal line-clamp-2 leading-relaxed">
                            {artwork.subtitle[language]}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
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
