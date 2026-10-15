"use client";

import React, { useEffect, useState } from "react";
import { BrandLogo } from "@/components/common";

export function MorphingBrandHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-40 select-none ${
        isScrolled ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        height: "72px",
        transform: isScrolled ? "translate3d(0, 0, 0)" : "translate3d(0, -12px, 0)",
        opacity: isScrolled ? 1 : 0,
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
      }}
      aria-hidden={!isScrolled}
    >
      {/* 1. Frosted Glass Backdrop with subtle bottom border & shadow */}
      <div
        className="absolute inset-0 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs"
        style={{ height: "72px" }}
        aria-hidden="true"
      />

      {/* 2. Header Content Bar */}
      <div
        className="relative w-full px-4 sm:px-8 flex items-center justify-between"
        style={{ height: "72px" }}
      >
        {/* Left: Brand Logo */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Về đầu trang Sylven"
          className="relative group flex items-center gap-2 cursor-pointer focus:outline-hidden"
        >
          <div className="relative flex items-center justify-center">
            <BrandLogo size={36} className="sm:w-10 sm:h-10" />
            {/* Subtle ambient halo on hover */}
            <div className="absolute inset-0 rounded-full bg-stone-900/5 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>

        {/* Center: Brand Name SYLVEN - perfectly centered horizontally and vertically */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Sylven Atelier"
          className="cursor-pointer focus:outline-hidden flex items-center justify-center group"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="font-yavimayan text-lg sm:text-2xl font-bold tracking-[0.25em] text-[#18181B] whitespace-nowrap transition-colors group-hover:text-stone-700">
            SYLVEN
          </span>
        </button>

        {/* Right placeholder to balance flex container (StaggeredMenu toggle button is on top at z-50) */}
        <div className="w-16 sm:w-20 h-10" aria-hidden="true" />
      </div>
    </header>
  );
}

export default MorphingBrandHeader;
