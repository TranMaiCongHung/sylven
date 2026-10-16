"use client";

import * as React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  X,
  Send,
} from "lucide-react";
import { Container } from "@/components/layout";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_I18N, type ProductTranslationItem } from "@/lib/i18n/translations";

export default function ProductsPage() {
  const { language, t } = useLanguage();
  const [selectedArtwork, setSelectedArtwork] =
    React.useState<ProductTranslationItem | null>(null);
  const [inquirySent, setInquirySent] = React.useState(false);
  const [clientName, setClientName] = React.useState("");
  const [clientContact, setClientContact] = React.useState("");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setSelectedArtwork(null);
      setClientName("");
      setClientContact("");
    }, 2500);
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pt-24 sm:pt-28 pb-32 w-full max-w-full overflow-hidden">
      {/* 9 CARDS GRID (GIỐNG CARD LANDING PAGE - MỖI HÀNG 3 CARD) */}
      <section className="px-4">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {PRODUCTS_I18N.map((artwork, idx) => (
              <div
                key={artwork.id}
                onClick={() => setSelectedArtwork(artwork)}
                className="group block cursor-pointer transition-transform duration-500 hover:-translate-y-1 min-w-0 w-full"
              >
                {/* Image Container with Smooth Crossfade Hover Animation */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#ECE8E1]/50 border border-stone-200/70 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-stone-300">
                  {/* Default Image */}
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 3}
                    className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <Image
                    src={artwork.hoverImage}
                    alt={`${artwork.title} - view`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                {/* Minimalist Gallery Typography */}
                <div className="mt-4 sm:mt-5 text-left">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-900 tracking-tight transition-colors duration-300 group-hover:text-stone-700">
                    {artwork.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-500 font-light tracking-wide">
                    {artwork.subtitle[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DETAIL & INQUIRY MODAL */}
      {selectedArtwork && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] rounded-3xl border border-stone-200/90 shadow-2xl p-6 sm:p-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedArtwork(null)}
              aria-label={t.productsPage.closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/80 border border-stone-200 text-stone-600 hover:text-stone-950 hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Image Preview */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#ECE8E1] border border-stone-200/80 shadow-inner">
                <Image
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Details & Inquiry Form */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-stone-200/70 px-3 py-1 text-[11px] font-mono tracking-wider text-stone-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-stone-900" />
                    <span>
                      {t.productsPage.certificateLabel} {selectedArtwork.specs.certificate}
                    </span>
                  </div>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                    {selectedArtwork.title}
                  </h2>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {selectedArtwork.description[language]}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="rounded-2xl border border-stone-200/90 bg-white/70 p-4 space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-500">{t.productsPage.materials}</span>
                    <span className="font-semibold text-stone-900">
                      {selectedArtwork.specs.gold[language]}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-500">{t.productsPage.gemstones}</span>
                    <span className="font-semibold text-stone-900">
                      {selectedArtwork.specs.gem[language]}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-stone-500">{t.productsPage.silicon}</span>
                    <span className="font-semibold text-stone-900">
                      {selectedArtwork.specs.silicon[language]}
                    </span>
                  </div>
                </div>

                {/* Inquiry Form */}
                <div id="inquiry" className="pt-2">
                  <h4 className="text-sm font-bold text-stone-900 mb-2">
                    {t.productsPage.inquiryTitle}
                  </h4>
                  {inquirySent ? (
                    <div className="p-4 rounded-2xl bg-stone-900 text-[#FAF8F5] flex items-center gap-3 text-xs">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>{t.productsPage.inquirySuccess}</span>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder={t.productsPage.namePlaceholder}
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 focus:outline-hidden focus:border-stone-800"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          value={clientContact}
                          onChange={(e) => setClientContact(e.target.value)}
                          placeholder={t.productsPage.contactPlaceholder}
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 focus:outline-hidden focus:border-stone-800"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#18181B] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{t.productsPage.submitInquiry}</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
