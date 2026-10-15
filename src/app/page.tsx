"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  Sparkles,
  Cpu,
  Gem,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout";
import { Button, FlexCarousel, SCULPTURE_ITEMS, ReflectiveCard, ShinyText, SlingButton } from "@/components/ui";
import { ScrollReveal, BrandLogo } from "@/components/common";

const CURATED_ARTWORKS = [
  {
    title: "Digital Odyssey Earrings",
    subtitle: "Aquamarines and Silver",
    image: "/images/artworks/curated_01_a.jpg",
    hoverImage: "/images/artworks/curated_01_b.jpg",
  },
  {
    title: "Digital Odyssey Sapphire Earrings",
    subtitle: "White Gold, Diamonds and Sapphire",
    image: "/images/artworks/curated_02_a.jpg",
    hoverImage: "/images/artworks/curated_02_b.png",
  },
  {
    title: "Silver Code Necklace",
    subtitle: "Ruby, Pearls and Silver",
    image: "/images/artworks/curated_03_a.jpg",
    hoverImage: "/images/artworks/curated_03_b.jpg",
  },
];

export default function HomePage() {
  const [mounted, setMounted] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

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
    <div className="flex flex-col gap-24 sm:gap-36 pb-28 w-full max-w-full overflow-hidden">
      {/* 1. HERO BRAND INTRO: EXCLUSIVE FULL-VIEWPORT COMMANDING ENTRANCE */}
      <section
        id="top"
        className="relative flex flex-col justify-between items-center h-[100svh] max-h-[100svh] w-full px-4 overflow-hidden pt-10 sm:pt-12 pb-4 sm:pb-6"
      >
        {/* Ambient Warm Luxury Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[520px] bg-gradient-to-b from-[#F5F2EB]/90 via-[#EBE7DF]/40 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />

        {/* Center Stage: Logo + ShinyText Brand Name + Tagline */}
        <div className="flex-1 flex flex-col items-center justify-center text-center my-auto min-h-0">
          {/* Prominent Emblem Logo */}
          <div
            className={`relative group mb-2 sm:mb-3 transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <BrandLogo className="w-56 h-32 sm:w-72 sm:h-40 md:w-88 md:h-50 lg:w-[420px] lg:h-[235px] max-w-[80vw] max-h-[25vh] drop-shadow-xl" />
            <div className="absolute inset-0 rounded-full bg-stone-900/5 blur-3xl -z-10" />
          </div>

          {/* Majestic SYLVEN with ShinyText Effect */}
          <div
            className={`font-yavimayan text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] sm:tracking-[0.25em] leading-none select-none my-2 sm:my-3 transition-all duration-1000 delay-200 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <ShinyText
              text="SYLVEN"
              color="#18181b"
              shineColor="#ffffff"
              speed={2}
              shineWidth={40}
              softness={0.8}
              trigger="loop"
              delay={0}
              angle={120}
              bands={1}
              glow={0}
              direction="left"
              easing="smooth"
              yoyo={false}
              followPointer={false}
              pauseOnHover={false}
              disabled={false}
            />
          </div>

          {/* Subtitle Tagline */}
          <span
            className={`text-[11px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.35em] sm:tracking-[0.45em] text-stone-500 mt-1 sm:mt-2 font-medium transition-all duration-1000 delay-300 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Atelier d&apos;Art Contemporain
          </span>
        </div>

        {/* Bottom Scroll Cue */}
        <div
          className={`flex flex-col items-center justify-center pt-2 pb-1 transition-all duration-1000 delay-500 ease-out shrink-0 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="#manifesto"
            className="group flex flex-col items-center gap-1.5 text-stone-400 hover:text-stone-800 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] font-medium text-stone-500 group-hover:text-stone-800 transition-colors">
              Cuộn để khám phá
            </span>
            <div className="w-5 h-8 rounded-full border border-stone-300/80 flex items-start justify-center p-1 group-hover:border-stone-500 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-stone-500 group-hover:bg-stone-800 animate-bounce transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      {/* 2. MANIFESTO & PHILOSOPHY HEADLINE SECTION */}
      <section id="manifesto" className="scroll-mt-20 pt-16 sm:pt-24 pb-8 sm:pb-16 relative overflow-hidden">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            {/* Atelier Badge */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-[#FAF8F5]/90 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-stone-700 shadow-xs backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-stone-800" />
                <span>Sylven Atelier • Contemporary Sculpture</span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-[#18181B] sm:text-6xl lg:text-7xl leading-[1.12]">
                Tái sinh mảnh ghép công nghệ thành{" "}
                <span className="font-serif italic font-normal text-stone-800 underline decoration-stone-300 underline-offset-8">
                  tác phẩm điêu khắc
                </span>{" "}
                đương đại.
              </h1>
            </ScrollReveal>

            {/* Subhead */}
            <ScrollReveal direction="up" delay={0.3}>
              <p className="mt-6 text-base sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Bản hòa ca giữa kỹ thuật chế tác kim hoàn và vẻ đẹp cấu trúc vi
                mạch. Mỗi thiết kế là một tác phẩm độc bản lưu giữ dấu ấn của kỷ
                nguyên số.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
                <Link href="#showcase">
                  <Button
                    size="lg"
                    className="bg-[#18181B] text-[#F5F2EB] hover:bg-[#27272A] border border-stone-800 px-7 py-3.5 rounded-full shadow-md hover:shadow-lg font-medium text-sm sm:text-base tracking-wide"
                    rightIcon={<ArrowDown className="h-4 w-4 animate-bounce" />}
                  >
                    Khám phá tác phẩm
                  </Button>
                </Link>

                <Link href="#alchemy">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-stone-300 bg-white/70 text-stone-800 hover:bg-[#F5F2EB] px-7 py-3.5 rounded-full font-medium text-sm sm:text-base tracking-wide backdrop-blur-sm"
                  >
                    Triết lý thương hiệu
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 2. SHOWCASE COMPONENT: WEBGL FLEX CAROUSEL */}
      <section id="showcase" className="scroll-mt-24 relative overflow-hidden">
        <Container size="full">
          {/* Section Header with Scroll Reveal */}
          <ScrollReveal direction="up" delay={0.1} className="text-center mb-10 sm:mb-14 px-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-stone-500">
              Interactive WebGL Exhibition
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#18181B] tracking-tight">
              Bộ Sưu Tập Tác Phẩm Tiêu Biểu
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-stone-600 leading-relaxed">
              Trải nghiệm dòng chảy thấu kính chất lỏng WebGL. Kéo chuột hoặc lướt nhẹ để chiêm ngưỡng các thiết kế điêu khắc độc bản.
            </p>
          </ScrollReveal>

          {/* WebGL FlexCarousel Container with Harmonized Luxury Background */}
          <ScrollReveal direction="up" delay={0.2} duration={1.1}>
            <div className="relative mx-auto w-full max-w-7xl h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border border-stone-200/90 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#ECE5D8] shadow-2xl shadow-stone-900/5">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.7),_transparent_70%)] pointer-events-none" />
              <FlexCarousel
                items={SCULPTURE_ITEMS}
                preset="liquid"
                cardHeight={0.55}
                gap={16}
                radius={16}
                fit="portrait"
                captions={true}
                focusOnClick={true}
                className="w-full h-full relative z-10"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 3. ALCHEMY: BRAND PHILOSOPHY & CRAFTSMANSHIP */}
      <section id="alchemy" className="scroll-mt-24 overflow-hidden">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative with Staggered Scroll Reveal */}
            <div className="lg:col-span-6 min-w-0 w-full space-y-5">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-stone-500">
                  Triết Lý Thương Hiệu
                </span>
                <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-[#18181B] tracking-tight leading-tight">
                  Nghệ Thuật Giả Kim <br />
                  <span className="font-serif italic font-normal text-stone-700">
                    Kỷ Nguyên Số
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Tại Sylven Atelier, chúng tôi hòa quyện kỹ nghệ kim hoàn bậc thầy cùng kiến trúc bán dẫn. Từng vi mạch, tinh thể silicon và vàng khối được tái sinh thành tác phẩm điêu khắc độc bản lưu giữ linh hồn thời đại số.
                </p>
              </ScrollReveal>

              {/* Three Pillars */}
              <div className="pt-2 space-y-3">
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="flex items-center gap-4 rounded-2xl border border-stone-200/90 bg-[#FAF8F5]/90 p-3.5 transition-all hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#18181B] text-[#F5F2EB]">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#18181B]">
                        Khai Quật Vi Mạch (Silicon Archaeology)
                      </h4>
                      <p className="mt-0.5 text-xs text-stone-600 leading-relaxed">
                        Tuyển chọn chip và tinh thể bán dẫn mang tính biểu tượng từ các cột mốc công nghệ.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4}>
                  <div className="flex items-center gap-4 rounded-2xl border border-stone-200/90 bg-[#FAF8F5]/90 p-3.5 transition-all hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#18181B] text-[#F5F2EB]">
                      <Gem className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#18181B]">
                        Chế Tác Kim Hoàn (Haute Craftsmanship)
                      </h4>
                      <p className="mt-0.5 text-xs text-stone-600 leading-relaxed">
                        Chế tác vi mô bằng vàng 24k dát mỏng, bạch kim và đá sapphire dưới kính hiển vi.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.5}>
                  <div className="flex items-center gap-4 rounded-2xl border border-stone-200/90 bg-[#FAF8F5]/90 p-3.5 transition-all hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#18181B] text-[#F5F2EB]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#18181B]">
                        Mỗi Thiết Kế Là Độc Bản (Unique Pieces)
                      </h4>
                      <p className="mt-0.5 text-xs text-stone-600 leading-relaxed">
                        Không sản xuất hàng loạt. Từng tác phẩm là duy nhất với chứng thư giám định số.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right ReflectiveCard Display with Scroll Reveal */}
            <div className="lg:col-span-6 min-w-0 w-full flex justify-center lg:justify-end">
              <ScrollReveal direction="up" delay={0.3} duration={1} className="w-full flex justify-center lg:justify-end">
                <ReflectiveCard
                  imageSrc="/images/artworks/oushaba_sculpture.jpg"
                  imageAlt="Tác phẩm điêu khắc vi mạch kim hoàn Oushaba Sylven"
                  tint="#ffffff"
                  metalness={1}
                  roughness={0.3}
                  blurStrength={6}
                  shine={1}
                  glare={0.5}
                  grayscale={1}
                  warp={0.6}
                  warpScale={1}
                  bevel={3}
                  tiltStrength={12}
                  radius={24}
                  enableTilt={true}
                  intro={true}
                  width="100%"
                  height={520}
                  className="w-full max-w-[420px]"
                />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CURATED ARTWORKS GRID WITH STAGGERED SCROLL REVEAL */}
      <section id="collection" className="scroll-mt-24 overflow-hidden">
        <Container size="lg">
          <ScrollReveal direction="up" delay={0.1} className="text-center mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-stone-500">
              Curated Masterpieces
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#18181B] tracking-tight">
              Tác Phẩm Sưu Tập Độc Bản
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-stone-600">
              Mỗi tác phẩm đi kèm chứng chỉ giám định chất liệu, mã số vi mạch lịch sử và hòm lưu trữ cao cấp.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {CURATED_ARTWORKS.map((artwork, idx) => (
              <ScrollReveal
                key={artwork.title + idx}
                direction="up"
                delay={0.15 * (idx + 1)}
                className="min-w-0 w-full"
              >
                <Link
                  href="#showcase"
                  className="group block cursor-pointer transition-transform duration-500 hover:-translate-y-1"
                >
                  {/* Image Container with Smooth Crossfade Hover Animation */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#ECE8E1]/50 border border-stone-200/70 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-stone-300">
                    {/* Default Image */}
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                    />
                    {/* Hover Image */}
                    <Image
                      src={artwork.hoverImage}
                      alt={`${artwork.title} - chi tiết`}
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
                      {artwork.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Floating Back to Top SlingButton: Appears when scrolling to Component 2 */}
      <div
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-500 ease-out ${
          scrollY > 300
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
            : "opacity-0 translate-y-8 pointer-events-none scale-75"
        }`}
      >
        <div className="relative group">
          <SlingButton
            onSend={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            padColor="#FAF8F5"
            iconColor="#18181B"
            accentColor="#FAF8F5"
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
            ariaLabel="Quay về đầu trang"
          />
        </div>
      </div>
    </div>
  );
}
