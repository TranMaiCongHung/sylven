"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 80);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems: NavItem[] = [
    { label: t.nav.home, href: "/" },
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

  // Rule: On landing page ("/"), header does not appear initially at top; it appears only after scroll.
  // On other pages (like "/san-pham"), header is visible from the start.
  const isLandingPage = pathname === "/";
  const isHeaderVisible = !isLandingPage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 select-none transition-[transform,opacity] duration-300 ease-out ${
        isHeaderVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isScrolled
          ? "bg-[#FAF9F6]/92 backdrop-blur-md border-b border-stone-200/80 shadow-xs"
          : "bg-[#FAF9F6]/80 backdrop-blur-sm border-b border-stone-200/40"
      }`}
      style={{ height: "72px" }}
      aria-hidden={!isHeaderVisible}
    >
      <div className="mx-auto w-full max-w-7xl h-full px-4 sm:px-8 flex items-center justify-between">
        {/* LEFT: Brand Logo + Brand Name "SYLVEN" pushed to the left next to logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
          aria-label="Sylven Atelier"
        >
          <div className="relative flex items-center justify-center">
            <BrandLogo
              size={36}
              className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-stone-900/5 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-yavimayan text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#18181B] whitespace-nowrap transition-colors group-hover:text-stone-700">
            SYLVEN
          </span>
        </Link>

        {/* CENTER / NAVIGATION: Menu Tabs with Active Underline Component */}
        <nav
          aria-label="Thanh điều hướng chính"
          className="hidden md:flex items-center gap-8 lg:gap-12"
        >
          {navItems.map((item) => {
            const active = isTabActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2.5 px-1.5 focus:outline-hidden group"
              >
                <span
                  className={`text-sm lg:text-[15px] font-medium tracking-[0.08em] transition-colors duration-200 ${
                    active
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
                    className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] bg-[#18181B] rounded-full shadow-xs"
                  />
                ) : (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-stone-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Streamlined Micro Language Toggle Switcher (VI / EN) & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Streamlined Micro Language Pill Toggle */}
          <div
            role="group"
            aria-label={t.nav.languageToggle}
            className="relative inline-flex items-center rounded-full bg-stone-200/60 p-0.5 border border-stone-300/70 text-[10px] font-sans font-medium select-none"
          >
            {(["vi", "en"] as const).map((lang) => {
              const active = language === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`relative z-10 px-2 py-0.5 rounded-full uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                    active
                      ? "text-[#FAF9F6] font-bold"
                      : "text-stone-600 hover:text-stone-900 font-medium"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeLangIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      className="absolute inset-0 bg-[#18181B] rounded-full -z-10 shadow-2xs"
                    />
                  )}
                  {lang}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu điều hướng"}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-stone-300/80 bg-white/70 text-stone-800 hover:bg-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
            className="md:hidden absolute top-[72px] left-0 right-0 w-full bg-[#FAF9F6]/98 backdrop-blur-xl border-b border-stone-200 shadow-lg px-6 py-6"
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
                      <span className="w-8 h-[2.5px] bg-[#18181B] rounded-full" />
                    ) : (
                      <span className="text-xs text-stone-400 font-sans">
                        →
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-stone-500" />
                  <span>{t.nav.languageToggle}</span>
                </span>
                <div className="relative inline-flex items-center rounded-full bg-stone-200/60 p-0.5 border border-stone-300/70 text-[10px] font-sans font-medium select-none">
                  {(["vi", "en"] as const).map((lang) => {
                    const active = language === lang;
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setLanguage(lang)}
                        className={`relative z-10 px-2.5 py-0.5 rounded-full uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                          active
                            ? "text-[#FAF9F6] font-bold"
                            : "text-stone-600 font-medium"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="mobileActiveLangIndicator"
                            transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            className="absolute inset-0 bg-[#18181B] rounded-full -z-10 shadow-2xs"
                          />
                        )}
                        {lang}
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
