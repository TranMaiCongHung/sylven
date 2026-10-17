"use client";

import * as React from "react";
import Image from "next/image";
import {
  X,
  Sparkles,
  Search,
  Film,
  ChevronDown,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout";
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
  const [selectedArtwork, setSelectedArtwork] = React.useState<Product | null>(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [showVideo, setShowVideo] = React.useState(false);

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

  // Reset active image index when artwork changes
  React.useEffect(() => {
    setActiveImageIndex(0);
    setShowVideo(false);
  }, [selectedArtwork]);

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
      { key: "all" as const, label: t.productsPage.materialsFilter?.all || "Tất cả chất liệu" },
      { key: "titanium" as const, label: "Titanium ASTM F136" },
      { key: "silver" as const, label: "Bạc 925 Tái Sinh" },
      { key: "gold" as const, label: "Vàng 18K (Au750)" },
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
    <div className="flex flex-col gap-10 sm:gap-14 pt-24 sm:pt-28 pb-32 w-full max-w-full overflow-hidden bg-[#FAF9F6]">
      {/* HEADER & ATELIER TITLE */}
      <section className="px-4">
        <Container size="lg">
          <div className="flex flex-col items-center text-center space-y-3.5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#E5DFD5] text-stone-600 text-[11px] font-sans font-medium tracking-[0.18em] uppercase shadow-2xs">
              <Sparkles className="w-3 h-3 text-stone-700" />
              <span>Sylven Haute Joaillerie Archive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#18181B] tracking-tight leading-tight">
              {t.productsPage.title}
            </h1>
            <p className="text-sm sm:text-base text-stone-500 font-normal leading-relaxed max-w-xl font-sans">
              {t.productsPage.subtitle}
            </p>
          </div>

          {/* UNIFIED LUXURY FILTER BAR (MATCHING IMAGE 1 EXACTLY: FILTER | CATEGORIES | MATERIAL) */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 py-3.5 border-b border-[#E5DFD5] font-sans">
            {/* Left: FILTER | DANH MỤC ∨ | CHẤT LIỆU ∨ */}
            <div className="flex items-center gap-6 sm:gap-10 w-full sm:w-auto flex-wrap">
              <span className="text-xs uppercase tracking-[0.22em] font-medium text-stone-900 select-none">
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
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-normal text-stone-800 hover:text-stone-950 transition-colors cursor-pointer py-1 group"
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
                      className="absolute left-0 top-full mt-2.5 w-52 bg-[#FAF9F6] border border-[#E5DFD5] shadow-xl py-2 z-30"
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
                            className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer ${
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
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-normal text-stone-800 hover:text-stone-950 transition-colors cursor-pointer py-1 group"
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
                      className="absolute left-0 top-full mt-2.5 w-60 bg-[#FAF9F6] border border-[#E5DFD5] shadow-xl py-2 z-30"
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
                            className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer ${
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
                  className="text-[11px] uppercase tracking-[0.16em] text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
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
                  className="pl-6 pr-2 py-1 text-xs uppercase tracking-[0.18em] bg-transparent placeholder:text-stone-400 text-stone-900 focus:outline-hidden border-b border-transparent focus:border-stone-800 transition-colors w-36 sm:w-48 font-sans"
                />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-stone-400 shrink-0 font-sans">
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
                  <div className="aspect-[4/5] w-full rounded-2xl bg-stone-200/50" />
                  <div className="h-4 bg-stone-200 rounded w-2/3" />
                  <div className="h-3 bg-stone-100 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="py-24 text-center text-stone-400 font-sans text-base">
              {t.productsPage.emptyCategory}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {paginatedProducts.map((artwork, idx) => (
                  <div
                    key={artwork.id}
                    onClick={() => setSelectedArtwork(artwork)}
                    className="group block cursor-pointer transition-transform duration-500 hover:-translate-y-1 min-w-0 w-full"
                  >
                    {/* Pure Image Container: No Background, No Badges */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
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
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-900 tracking-tight transition-colors duration-300 group-hover:text-stone-700">
                        {artwork.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-sans text-stone-500 font-normal tracking-normal line-clamp-1">
                        {artwork.subtitle[language]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimalist Luxury Pagination (Max 12 products per page) */}
              {totalPages > 1 && (
                <nav
                  aria-label="Phân trang sản phẩm"
                  className="mt-16 sm:mt-20 pt-8 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-6 font-sans text-xs uppercase tracking-[0.2em]"
                >
                  {/* Info Range */}
                  <span className="text-stone-400 text-[11px] tracking-[0.18em]">
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
                            className={`min-w-6 py-1 text-center transition-colors cursor-pointer ${
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

      {/* PRODUCT DETAIL MODAL (CLEAN, 2 FONTS ONLY, NO UNREQUESTED CERTS/FOOTERS) */}
      {selectedArtwork && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto md:overflow-hidden bg-[#FAF9F6] rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedArtwork(null)}
              aria-label={t.productsPage.closeModal}
              className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* LEFT: MAIN IMAGE */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#F4F1EA] border border-stone-200 flex items-center justify-center">
                {showVideo && selectedArtwork.video ? (
                  <video
                    src={selectedArtwork.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={selectedArtwork.images[activeImageIndex] || selectedArtwork.image}
                    alt={selectedArtwork.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4 transition-opacity duration-200"
                  />
                )}
              </div>

              {/* RIGHT: DETAILS (2 FONTS: SERIF FOR TITLE, SANS FOR CONTENT) */}
              <div className="flex flex-col justify-center space-y-5 font-sans">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal tracking-tight">
                    {selectedArtwork.title}
                  </h2>
                  <p className="mt-2.5 text-sm text-stone-600 leading-relaxed font-sans">
                    {selectedArtwork.description[language]}
                  </p>
                </div>

                {/* SPECS */}
                <div className="border-t border-b border-stone-200/80 py-3.5 space-y-2.5 text-xs font-sans">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="text-stone-500 shrink-0 font-normal">Chất liệu:</span>
                    <span className="text-stone-900 font-medium text-right">
                      {selectedArtwork.specs.material[language]}
                    </span>
                  </div>

                  {selectedArtwork.specs.gemstones && (
                    <div className="flex justify-between items-baseline gap-4 pt-2 border-t border-stone-100">
                      <span className="text-stone-500 shrink-0 font-normal">Đá quý:</span>
                      <span className="text-stone-900 font-medium text-right">
                        {selectedArtwork.specs.gemstones[language]}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-baseline gap-4 pt-2 border-t border-stone-100">
                    <span className="text-stone-500 shrink-0 font-normal">Vi mạch:</span>
                    <span className="text-stone-900 font-medium text-right line-clamp-1">
                      {selectedArtwork.specs.silicon[language]}
                    </span>
                  </div>
                </div>

                {/* THUMBNAILS (GÓC CHỤP KHÁC) */}
                <div>
                  <span className="block text-xs text-stone-500 font-medium mb-2.5 font-sans">
                    {language === "vi" ? "Góc chụp khác" : "Alternative Angles"} ({selectedArtwork.images.length})
                  </span>

                  <div className="flex items-center gap-2.5 flex-wrap">
                    {selectedArtwork.images.map((imgUrl, i) => {
                      const isActive = !showVideo && activeImageIndex === i;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setActiveImageIndex(i);
                            setShowVideo(false);
                          }}
                          className={`relative w-14 h-14 rounded-lg overflow-hidden bg-[#F4F1EA] border transition-all cursor-pointer ${
                            isActive
                              ? "border-stone-900 ring-2 ring-stone-900/20 scale-105"
                              : "border-stone-200 opacity-60 hover:opacity-100 hover:border-stone-400"
                          }`}
                        >
                          <Image
                            src={imgUrl}
                            alt={`Góc chụp ${i + 1}`}
                            fill
                            sizes="56px"
                            className="object-contain p-1"
                          />
                        </button>
                      );
                    })}

                    {/* Optional Video Button */}
                    {selectedArtwork.video && (
                      <button
                        type="button"
                        onClick={() => setShowVideo(true)}
                        className={`relative w-14 h-14 rounded-lg overflow-hidden border transition-all cursor-pointer flex flex-col items-center justify-center bg-stone-900 text-amber-300 ${
                          showVideo
                            ? "border-amber-400 ring-2 ring-amber-400/30 scale-105"
                            : "border-stone-400 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Film className="w-4 h-4 mb-0.5" />
                        <span className="text-[9px] font-sans">Video</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
