"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { BrandLogo } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";

interface NavItem {
  label: string;
  href: string;
  matchPrefix?: boolean;
}

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [scrollY, setScrollY] = React.useState(0);
  const [isOverHero, setIsOverHero] = React.useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);
  const langDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        setScrollY(currentScroll);

        if (pathname === "/") {
          const heroEl = document.getElementById("top");
          if (heroEl) {
            const rect = heroEl.getBoundingClientRect();
            // Header is 72px tall. While hero bottom is below 72px, header is within the hero background.
            setIsOverHero(rect.bottom > 72);
          } else {
            setIsOverHero(currentScroll < 800);
          }
        } else {
          setIsOverHero(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  // Close menus on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  // Click outside to close language dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Removed "Trang chủ" tab: landing page is accessed by clicking brand name/logo
  const navItems: NavItem[] = [
    { label: t.nav.products, href: "/san-pham", matchPrefix: true },
  ];

  const isTabActive = (item: NavItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    if (item.matchPrefix) {
      return (
        pathname === item.href ||
        pathname.startsWith(`${item.href}/`) ||
        pathname === "/products" ||
        pathname.startsWith("/products/")
      );
    }
    return pathname === item.href;
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Header remains transparent with white text while within the hero background range.
  // When scrolled past the background or on other pages, it transitions to solid luxury navbar with dark text.
  const isLandingPage = pathname === "/";
  const isTransparent = isLandingPage && isOverHero;

  const languages = [
    { code: "vi" as const, label: "Tiếng Việt", short: "VI", flag: "🇻🇳" },
    { code: "en" as const, label: "English", short: "EN", flag: "🇬🇧" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 select-none transition-all duration-300 ease-out ${
        isTransparent
          ? "bg-transparent border-b border-transparent shadow-none"
          : "bg-white/92 backdrop-blur-md border-b border-stone-200/80 shadow-xs"
      }`}
      style={{ height: "72px" }}
    >
      <div className="mx-auto w-full max-w-7xl h-full px-4 sm:px-8 flex items-center justify-between">
        {/* LEFT: Brand Logo + Brand Name "SYLVEN" (hidden on initial view so it doesn't duplicate bottom text, fades in as user scrolls) */}
        <Link
          href="/"
          onClick={handleBrandClick}
          className={`flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden transition-all duration-300 ${
            isLandingPage && scrollY < 200
              ? "opacity-0 pointer-events-none -translate-x-2"
              : "opacity-100 pointer-events-auto translate-x-0"
          }`}
          aria-label="Sylven Atelier - Landing Page"
        >
          <div className="relative flex items-center justify-center">
            <BrandLogo
              size={36}
              className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-stone-900/5 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span
            className={`font-yavimayan text-xl sm:text-2xl font-bold tracking-[0.22em] whitespace-nowrap transition-colors ${
              isTransparent
                ? "text-white group-hover:text-stone-200 drop-shadow-sm"
                : "text-[#18181B] group-hover:text-stone-700"
            }`}
          >
            SYLVEN
          </span>
        </Link>

        {/* RIGHT GROUP: Menu Tabs aligned to the right + Language Dropdown + Mobile Hamburger */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* Navigation Tabs (right-aligned) */}
          <nav
            aria-label="Thanh điều hướng chính"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {navItems.map((item) => {
              const active = isTabActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-2.5 px-2 focus:outline-hidden group"
                >
                  <span
                    className={`text-sm lg:text-[15px] font-medium tracking-[0.08em] transition-colors duration-200 ${
                      isTransparent
                        ? "text-white/90 hover:text-white drop-shadow-sm font-medium"
                        : active
                        ? "text-[#18181B] font-semibold"
                        : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Underline Component marking current page with fluid sliding motion */}
                  {active ? (
                    <motion.span
                      layoutId="headerNavUnderline"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className={`absolute -bottom-0.5 left-0 right-0 h-[2.5px] rounded-none shadow-xs ${
                        isTransparent ? "bg-white" : "bg-[#18181B]"
                      }`}
                    />
                  ) : (
                    <span
                      className={`absolute -bottom-0.5 left-0 right-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-none ${
                        isTransparent ? "bg-white/80" : "bg-stone-300"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language Dropdown & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-sans font-medium transition-all duration-200 cursor-pointer shadow-2xs group focus:outline-hidden ${
                  isTransparent
                    ? "bg-black/25 hover:bg-black/40 text-white border border-white/30 backdrop-blur-sm"
                    : "bg-white/70 hover:bg-white border border-stone-200/90 hover:border-stone-300 text-stone-800"
                }`}
                aria-haspopup="listbox"
                aria-expanded={langDropdownOpen}
                aria-label={t.nav.languageToggle}
              >
                <Globe
                  className={`w-3.5 h-3.5 transition-colors ${
                    isTransparent ? "text-white/80 group-hover:text-white" : "text-stone-500 group-hover:text-stone-800"
                  }`}
                />
                <span className="uppercase tracking-wider font-semibold text-[11px]">
                  {language}
                </span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isTransparent ? "text-white/80" : "text-stone-500"
                  } ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-2 w-44 rounded-none bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-xl py-1.5 z-50 overflow-hidden"
                    role="listbox"
                  >
                    <div className="px-3.5 py-1.5 text-[10px] font-sans font-semibold tracking-[0.14em] uppercase text-stone-400 border-b border-stone-200/50">
                      {language === "vi" ? "Ngôn ngữ" : "Language"}
                    </div>
                    {languages.map((item) => {
                      const isSelected = language === item.code;
                      return (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => {
                            setLanguage(item.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs transition-colors cursor-pointer text-left ${
                            isSelected
                              ? "bg-stone-900 text-white font-medium"
                              : "text-stone-700 hover:bg-stone-100 font-normal"
                          }`}
                          role="option"
                          aria-selected={isSelected}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{item.flag}</span>
                            <span className="font-sans">{item.label}</span>
                          </div>
                          {isSelected ? (
                            <Check className="w-3.5 h-3.5 text-stone-300" />
                          ) : (
                            <span className="text-[10px] font-mono tracking-wider text-stone-400">
                              {item.short}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu điều hướng"}
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-none transition-colors cursor-pointer ${
                isTransparent
                  ? "border border-white/30 bg-black/25 text-white hover:bg-black/40 backdrop-blur-sm"
                  : "border border-stone-300/80 bg-white/70 text-stone-800 hover:bg-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-[72px] left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-stone-200 shadow-lg px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const active = isTabActive(item);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative flex items-center justify-between py-2.5 text-base font-medium tracking-wide focus:outline-hidden"
                  >
                    <span
                      className={
                        active
                          ? "text-[#18181B] font-semibold"
                          : "text-stone-600 hover:text-stone-900"
                      }
                    >
                      {item.label}
                    </span>

                    {/* Underline or Active indicator for mobile */}
                    {active ? (
                      <span className="w-8 h-[2.5px] bg-[#18181B] rounded-none" />
                    ) : (
                      <span className="text-xs text-stone-400 font-sans">
                        →
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-stone-500" />
                  <span>{t.nav.languageToggle}</span>
                </span>
                <div className="flex items-center gap-2">
                  {languages.map((item) => {
                    const isSelected = language === item.code;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          setLanguage(item.code);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-sans transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-stone-900 text-white font-medium"
                            : "bg-stone-200/70 text-stone-700 hover:bg-stone-300/70"
                        }`}
                      >
                        <span>{item.flag}</span>
                        <span>{item.short}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
