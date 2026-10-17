"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout";
import { Button, FlexCarousel, ShinyText, SlingButton } from "@/components/ui";
import { ScrollReveal, BrandLogo } from "@/components/common";
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

  React.useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="scroll-smooth flex flex-col gap-12 sm:gap-16 pb-24 w-full max-w-full overflow-hidden">
      {/* 1. HERO BRAND INTRO: EXCLUSIVE FULL-VIEWPORT COMMANDING ENTRANCE */}
      <section
        id="top"
        className="relative flex flex-col justify-between items-center h-[100svh] max-h-[100svh] w-full px-4 overflow-hidden pt-10 sm:pt-12 pb-4 sm:pb-6"
      >
        {/* Ambient Subtle Luxury Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[420px] bg-stone-200/25 blur-3xl -z-10 pointer-events-none rounded-full" />

        {/* Center Stage: Logo + ShinyText Brand Name */}
        <div className="flex-1 flex flex-col items-center justify-center text-center my-auto min-h-0 w-full px-2">
          {/* Prominent Emblem Logo (Responsive Balanced Luxury Size) */}
          <div
            className={`relative group mb-2 sm:mb-4 transition-all duration-1000 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
          >
            <BrandLogo className="w-48 h-27 sm:w-64 sm:h-36 md:w-80 md:h-45 lg:w-[390px] lg:h-[220px] xl:w-[450px] xl:h-[254px] 2xl:w-[500px] 2xl:h-[282px] max-w-[82vw] max-h-[30vh] drop-shadow-xl" />
            <div className="absolute inset-0 rounded-full bg-stone-900/5 blur-2xl -z-10" />
          </div>

          {/* Majestic SYLVEN with ShinyText Effect (Responsive Fluid Sizing) */}
          <div
            className={`font-yavimayan text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.75rem] 2xl:text-[7.5rem] font-bold tracking-[0.20em] sm:tracking-[0.23em] md:tracking-[0.25em] lg:tracking-[0.26em] leading-none select-none my-2 sm:my-3 transition-all duration-1000 delay-200 ease-out max-w-full ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <ShinyText
              text="SYLVEN"
              color="#18181b"
              shineColor="#ffffff"
              speed={2.2}
              shineWidth={42}
              softness={0.8}
              trigger="loop"
              delay={0}
              angle={120}
              bands={1}
              glow={0}
              direction="right"
              easing="smooth"
              yoyo={false}
              followPointer={false}
              pauseOnHover={false}
              disabled={false}
            />
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div
          className={`flex flex-col items-center justify-center pt-2 pb-1 transition-all duration-1000 delay-500 ease-out shrink-0 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <Link
            href="#manifesto"
            className="group flex flex-col items-center gap-1.5 text-stone-400 hover:text-stone-800 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] font-medium text-stone-500 group-hover:text-stone-800 transition-colors">
              {t.hero.scrollPrompt}
            </span>
            <div className="w-5 h-8 rounded-none border border-stone-300/80 flex items-start justify-center p-1 group-hover:border-stone-500 transition-colors">
              <div className="w-1.5 h-2 rounded-none bg-stone-500 group-hover:bg-stone-800 animate-bounce transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      {/* 2. MANIFESTO & PHILOSOPHY HEADLINE SECTION */}
      <section id="manifesto" className="scroll-mt-20 pt-8 sm:pt-14 pb-2 sm:pb-4 relative overflow-hidden">
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
      <section id="showcase" className="scroll-mt-20 relative overflow-hidden">
        <Container size="full" className="px-2 sm:px-4">
          {/* Section Header with Scroll Reveal (No Badge, Compact Spacing) */}
          <ScrollReveal direction="up" delay={0.1} className="text-center mb-3 sm:mb-4 px-4">
            <h2 className="font-oranienbaum text-3xl sm:text-5xl font-medium tracking-[0.03em] uppercase text-[#18181B] text-balance">
              {t.showcase.title}
            </h2>
          </ScrollReveal>

          {/* WebGL FlexCarousel Container with Reduced Padding and Balanced Proportions */}
          <ScrollReveal direction="up" delay={0.2} duration={1.1}>
            <div className="relative mx-auto w-full max-w-7xl h-[385px] sm:h-[425px] rounded-none overflow-hidden border border-stone-200/60 bg-white">
              <FlexCarousel
                items={showcaseItems}
                preset="straight"
                cardHeight={0.74}
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
      <section id="alchemy" className="scroll-mt-20 overflow-hidden">
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
      <section id="collection" className="scroll-mt-24 overflow-hidden">
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
                    <h3 className="font-oranienbaum text-lg sm:text-xl font-medium tracking-[0.03em] uppercase text-stone-900 transition-colors duration-300 group-hover:text-stone-700">
                      {artwork.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-stone-500 font-normal tracking-wide">
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
