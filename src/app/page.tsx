"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout";
import { Button, FlexCarousel, SlingButton } from "@/components/ui";
import { ScrollReveal } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";
import { productRepository, PRODUCTS_DATABASE } from "@/data";

export default function HomePage() {
  const { language, t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  const curatedArtworks = React.useMemo(() => {
    return PRODUCTS_DATABASE.filter((it) => it.featuredFlags?.isCurated)
      .slice(0, 3)
      .map((it) => ({
        title: it.title,
        subtitle: it.subtitle[language],
        image: it.image,
      }));
  }, [language]);

  const showcaseItems = React.useMemo(() => [
    {
      src: "https://cdn.accentuate.io/86966698145/1638979210096/181221-1-OUSHABA5688.jpg?v=1672951248997",
      alt: "Sylven Atelier Sculpture I",
      title: "Sylven Atelier Sculpture I",
    },
    {
      src: "https://cdn.accentuate.io/86966698145/1638541115814/181221-1-OUSHABA5386.jpg?v=1672951216466",
      alt: "Sylven Atelier Sculpture II",
      title: "Sylven Atelier Sculpture II",
    },
    {
      src: "https://cdn.accentuate.io/86966698145/1674500251906/181221-1-OUSHABA6745.jpg?v=1674500251906",
      alt: "Sylven Atelier Sculpture III",
      title: "Sylven Atelier Sculpture III",
    },
    {
      src: "https://cdn.accentuate.io/86966698145/1674500163771/181221-1-OUSHABA6658.jpg?v=1674500163772",
      alt: "Sylven Atelier Sculpture IV",
      title: "Sylven Atelier Sculpture IV",
    },
    {
      src: "https://cdn.accentuate.io/86966698145/1674500371509/181221-1-OUSHABA6520.jpg?v=1674500371509",
      alt: "Sylven Atelier Sculpture V",
      title: "Sylven Atelier Sculpture V",
    },
  ], []);

  React.useEffect(() => {
    // Trigger hero load fade-in
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

    const [heroHeight, setHeroHeight] = React.useState(1200);

  React.useEffect(() => {
    let rafId: number;
    const updateMetrics = () => {
      const heroEl = document.getElementById("top");
      if (heroEl) {
        setHeroHeight(heroEl.offsetHeight);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    updateMetrics();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateMetrics, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMetrics);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="scroll-smooth flex flex-col pb-24 w-full max-w-full overflow-hidden">
      {/* 1. HERO SECTION: FULL-LENGTH CINEMATIC HERO BACKGROUND (PRESERVES 100% ORIGINAL HEIGHT) */}
      <section
        id="top"
        className="relative w-full bg-[#121214] overflow-hidden"
      >
        {/* Full-width image preserving natural 1400x1750 aspect ratio and full height */}
        <div className="relative w-full">
          <Image
            src="/images/hero/hero_main_bg.jpg"
            alt="Sylven Haute Joaillerie & Circuitry Synthesis"
            width={1400}
            height={1750}
            priority
            sizes="100vw"
            className="w-full h-auto min-h-[100svh] sm:min-h-0 object-cover object-top block select-none pointer-events-none"
          />
          {/* Subtle contrast gradient for white typography pop at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Bottom Left Ethos: "SEE THE EXTRAORDINARY IN LIFE" */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 md:bottom-12 md:left-14 lg:bottom-14 lg:left-16 z-20 pointer-events-none select-none max-w-fit">
            <div className="flex flex-col text-white gap-1 sm:gap-1.5">
              <span className="font-lexend font-light text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[0.14em] text-white/90 uppercase leading-none">
                SEE THE
              </span>
              <span className="font-oranienbaum font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] text-white uppercase leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                EXTRAORDINARY
              </span>
              <span className="font-lexend font-light text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[0.14em] text-white/90 uppercase leading-none">
                IN LIFE
              </span>
            </div>
          </div>
        </div>

        {/* Hero Brand Name Overlay: Biến mất ở khoảng 40% ảnh background */}
        {(() => {
          const fadeThreshold = Math.max(200, heroHeight * 0.4);
          const sylvenOpacity = Math.max(0, 1 - scrollY / fadeThreshold);
          const isSylvenHidden = scrollY >= fadeThreshold;

          return (
            <div
              style={{
                opacity: sylvenOpacity,
                transform: `translateY(${Math.min(60, (scrollY / fadeThreshold) * 40)}px)`,
                display: isSylvenHidden ? "none" : "flex",
              }}
              className="fixed bottom-0 left-0 right-0 w-full justify-center items-end pb-1 sm:pb-2 px-2 sm:px-4 select-none pointer-events-none z-30"
            >
              <span className="font-yavimayan text-[17vw] sm:text-[16vw] md:text-[15vw] lg:text-[14.5vw] font-bold text-white tracking-[0.14em] sm:tracking-[0.18em] lg:tracking-[0.22em] leading-[0.80] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] text-center w-full block">
                SYLVEN
              </span>
            </div>
          );
        })()}
      </section>

      {/* 2. MANIFESTO & PHILOSOPHY HEADLINE SECTION */}
      <section id="manifesto" className="scroll-mt-20 pt-16 sm:pt-24 pb-10 sm:pb-14 lg:pb-16 relative overflow-hidden">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            {/* Headline (No Underline) */}
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="font-oranienbaum text-3xl font-medium tracking-[0.03em] uppercase text-[#18181B] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.18] text-balance">
                {t.manifesto.titlePrefix}
                {t.manifesto.titleHighlight}
                {t.manifesto.titleSuffix}
              </h1>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="#showcase">
                  <Button
                    size="lg"
                    className="bg-[#18181B] text-[#F5F2EB] hover:bg-[#27272A] border border-stone-800 px-7 py-3.5 rounded-none shadow-md hover:shadow-lg font-medium text-sm sm:text-base tracking-wide cursor-pointer"
                    rightIcon={<ArrowDown className="h-4 w-4 animate-bounce" />}
                  >
                    {t.manifesto.exploreBtn}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 2. SHOWCASE COMPONENT: WEBGL FLEX CAROUSEL */}
      <section id="showcase" className="scroll-mt-20 relative overflow-hidden pt-2 sm:pt-4 pb-4 sm:pb-6">
        <Container size="full" className="px-2 sm:px-4">
          {/* Section Header with Scroll Reveal (No Badge, Compact Spacing Closer to Carousel) */}
          <ScrollReveal direction="up" delay={0.1} className="text-center mb-0 sm:-mb-2 px-4">
            <h2 className="font-oranienbaum text-3xl sm:text-5xl font-medium tracking-[0.03em] uppercase text-[#18181B] text-balance">
              {t.showcase.title}
            </h2>
          </ScrollReveal>

          {/* WebGL FlexCarousel Container with Borderless Luxury Presentation */}
          <ScrollReveal direction="up" delay={0.2} duration={1.1}>
            <div className="relative mx-auto w-full max-w-7xl h-[385px] sm:h-[425px] rounded-none overflow-hidden bg-white">
              <FlexCarousel
                items={showcaseItems}
                preset="straight"
                cardHeight={0.78}
                gap={20}
                radius={0}
                fit="portrait"
                squeeze={0}
                bend={0}
                tilt={0}
                dispersion={0}
                reach={0}
                liquid={0}
                captions={true}
                focusOnClick={true}
                className="w-full h-full relative z-10"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 3. ALCHEMY: BRAND PHILOSOPHY & CRAFTSMANSHIP */}
      <section id="alchemy" className="scroll-mt-20 py-8 sm:py-12 md:py-16 overflow-hidden">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
            {/* Left Narrative with Staggered Scroll Reveal (Vertically & Horizontally Centered with Image) */}
            <div className="lg:col-span-6 min-w-0 w-full flex justify-center items-center">
              <div className="w-full max-w-[480px] flex flex-col justify-center space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h2 className="font-oranienbaum text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.03em] uppercase text-[#18181B] leading-[1.15] text-balance">
                    <span>{t.alchemy.titleMain}</span>
                    {t.alchemy.titleItalic ? (
                      <span className="block mt-1.5 font-medium">
                        {t.alchemy.titleItalic}
                      </span>
                    ) : null}
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal text-justify">
                    {t.alchemy.description}
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Right Display: Pure Image (Centered on X & Y axes) */}
            <div className="lg:col-span-6 min-w-0 w-full flex justify-center items-center">
              <ScrollReveal
                direction="up"
                delay={0.3}
                duration={1}
                className="w-full flex justify-center"
              >
                <div className="relative w-full aspect-[4/5] sm:min-h-[500px] max-w-[460px] rounded-none overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/artworks/model_alchemy.jpg"
                    alt="Sylven Contemporary Jewelry - Titanium F136 & Circuitry Craft"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CURATED ARTWORKS GRID WITH STAGGERED SCROLL REVEAL */}
      <section id="collection" className="scroll-mt-24 pt-6 sm:pt-8 pb-16 sm:pb-24 overflow-hidden">
        <Container size="lg">
          <ScrollReveal direction="up" delay={0.1} className="text-center mb-10 sm:mb-14">
            <h2 className="font-oranienbaum text-3xl sm:text-5xl font-medium tracking-[0.03em] uppercase text-[#18181B] text-balance">
              {t.collection.title}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {curatedArtworks.map((artwork, idx) => (
              <ScrollReveal
                key={artwork.title + idx}
                direction="up"
                delay={0.15 * (idx + 1)}
                className="min-w-0 w-full"
              >
                <Link
                  href="/san-pham"
                  className="group block cursor-pointer transition-transform duration-500 hover:-translate-y-1"
                >
                  {/* Image Container with Smooth Hover Scale */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-none bg-[#ECE8E1]/50 border border-stone-200/70 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-stone-300">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Minimalist Gallery Typography */}
                  <div className="mt-4 sm:mt-5 text-left">
                    <h3 className="font-lexend text-sm sm:text-[15px] font-normal tracking-[0.01em] text-stone-900 transition-colors duration-300 group-hover:text-stone-700">
                      {artwork.title}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500 font-normal tracking-normal line-clamp-1">
                      {artwork.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA to All Products Page */}
          <ScrollReveal direction="up" delay={0.3} className="mt-12 text-center">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-none bg-[#18181B] text-white hover:bg-[#27272A] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>{t.collection.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </Container>
      </section>

      {/* Floating Back to Top SlingButton: Appears when scrolling to Component 2 */}
      <div
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-500 ease-out ${scrollY > 300
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-8 pointer-events-none scale-75"
          }`}
      >
        <div className="relative group">
          <SlingButton
            onSend={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            padColor="#FFFFFF"
            iconColor="#18181B"
            accentColor="#FFFFFF"
            wellColor="#27272A"
            bandColor="#52525B"
            size={52}
            strokeWidth={1.5}
            gap={0.5}
            armAt={42}
            maxPull={140}
            launchSpeed={2600}
            recoil={0.2}
            flight={100}
            particles={12}
            spread={60}
            axis="any"
            tapSends
            disabled={false}
            ariaLabel={t.hero.backToTop}
          />
        </div>
      </div>
    </div>
  );
}
