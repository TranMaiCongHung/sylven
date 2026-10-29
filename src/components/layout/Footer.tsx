"use client";

import * as React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/common";
import { Container } from "./Container";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language, t } = useLanguage();

  const footerColumns = React.useMemo(() => [
    {
      title: t.footer.columns.explore,
      links: [
        { label: t.footer.columns.artworks, href: "/#showcase" },
        { label: t.footer.columns.manifesto, href: "/#manifesto" },
        { label: t.footer.columns.alchemy, href: "/#alchemy" },
        { label: t.footer.columns.collection, href: "/san-pham" },
      ],
    },
    {
      title: t.footer.columns.about || (language === "vi" ? "Về Sylven" : "About"),
      links: [
        { label: t.aboutPage?.title || "We are SYLVEN", href: "/about" },
        { label: language === "vi" ? "Tính tuần hoàn & Thủ công" : "Circularity & Craft", href: "/#alchemy" },
        { label: language === "vi" ? "Đặt lịch hẹn riêng" : "Private Appointment", href: "/san-pham" },
      ],
    },
    {
      title: t.footer.columns.legal,
      links: [
        { label: t.footer.columns.certification, href: "/san-pham" },
        { label: t.footer.columns.privacy, href: "#" },
        { label: t.footer.columns.terms, href: "#" },
      ],
    },
  ], [t, language]);

  return (
    <footer className="border-t border-stone-200/80 bg-white">
      <Container size="lg">
        <div className="py-12 md:py-16">
          {/* Even 4-Column Grid: Perfectly aligned baselines and flush left edges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-start">
            {/* Column 1: Brand Info & Social Icons */}
            <div className="space-y-4">
              <div className="h-7 flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2.5 font-bold text-lg text-slate-900 focus:outline-hidden"
                >
                  <BrandLogo size={28} />
                  <span className="font-yavimayan text-lg sm:text-xl font-bold tracking-[0.2em] text-[#18181B] leading-none">
                    SYLVEN
                  </span>
                </Link>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed font-lexend font-light">
                {t.footer.description}
              </p>
              {/* Social Icons: Perfectly flush left aligned with SYLVEN and paragraph */}
              <div className="flex items-center gap-4 pt-1 text-stone-500">
                <span
                  className="text-stone-500 hover:text-stone-900 transition-colors cursor-pointer select-none inline-flex items-center justify-center"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </span>
                <span
                  className="text-stone-500 hover:text-stone-900 transition-colors cursor-pointer select-none inline-flex items-center justify-center"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Columns 2, 3, 4: Navigation Link Columns */}
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <div className="h-7 flex items-center">
                  <h4 className="font-oranienbaum text-xs font-semibold uppercase tracking-wider text-stone-900 leading-none">
                    {column.title}
                  </h4>
                </div>
                <ul className="space-y-2.5 text-sm font-lexend font-light">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-stone-600 transition-colors hover:text-stone-950"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
