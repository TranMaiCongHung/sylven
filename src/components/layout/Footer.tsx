"use client";

import * as React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { siteConfig } from "@/config";
import { BrandLogo } from "@/components/common";
import { Container } from "./Container";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
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
      title: t.footer.columns.legal,
      links: [
        { label: t.footer.columns.certification, href: "/san-pham" },
        { label: t.footer.columns.privacy, href: "#" },
        { label: t.footer.columns.terms, href: "#" },
      ],
    },
  ], [t]);

  return (
    <footer className="border-t border-stone-200/80 bg-[#FAF9F6]">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <Link
                href="/"
                className="flex items-center gap-3 font-bold text-lg text-slate-900"
              >
                <BrandLogo size={36} />
                <span className="font-yavimayan text-xl font-bold tracking-[0.2em] text-[#18181B]">
                  SYLVEN
                </span>
              </Link>
              <p className="max-w-sm text-sm text-stone-600 leading-relaxed">
                {t.footer.description}
              </p>
              <div className="flex items-center gap-3 pt-2 text-stone-500">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 hover:bg-stone-200/50 hover:text-stone-900 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 hover:bg-stone-200/50 hover:text-stone-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 1.63 1.63 1.63 1.63 0 0 0-1.63-1.63z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                  {column.title}
                </h4>
                <ul className="space-y-2 text-sm">
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

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-200/80 pt-8 text-xs text-stone-500 md:flex-row">
            <p>
              © {currentYear} {siteConfig.name}. {t.footer.rights}
            </p>
            <p className="flex items-center gap-1">
              Sylven Atelier <Heart className="h-3.5 w-3.5 text-stone-700 fill-stone-700" /> Haute Sculpture
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
