"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { Breadcrumbs } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_DATABASE } from "@/data";

export default function AboutPage() {
  const { language, t } = useLanguage();
  const about = t?.aboutPage;

  React.useEffect(() => {
    document.title = "SYLVEN";
  }, []);

  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = React.useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  React.useEffect(() => {
    checkScroll();
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const amount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const ethosProducts = React.useMemo(() => {
    const list = [
      {
        id: "necklaces-4",
        ethosTitle: {
          en: "Breathing New Life into Forgotten Materials",
          vi: "Tái Sinh Vật Liệu Từng Bị Lãng Quên",
        },
      },
      {
        id: "rings-6",
        ethosTitle: {
          en: "Exceptional Pieces of Wearable Art",
          vi: "Tác Phẩm Điêu Khắc Đeo Nghệ Thuật",
        },
      },
      {
        id: "earrings-1",
        ethosTitle: {
          en: "Commitment to Craftsmanship",
          vi: "Kỹ Nghệ Kim Hoàn Chuẩn Mực",
        },
      },
      {
        id: "earrings-9",
        ethosTitle: {
          en: "Eco Conscious Circular Metallurgy",
          vi: "Kim Loại Tái Chế & Ý Thức Sinh Thái",
        },
      },
      {
        id: "earrings-4",
        ethosTitle: {
          en: "Precious Minerals & Digital Geometry",
          vi: "Khoáng Thạch Quý & Hình Học Kỹ Thuật Số",
        },
      },
      {
        id: "bracelets-3",
        ethosTitle: {
          en: "Infinite Circularity by Design",
          vi: "Triết Lý Tuần Hoàn Bất Tận",
        },
      },
      {
        id: "earrings-8",
        ethosTitle: {
          en: "Microscopic Sculptural Architecture",
          vi: "Kiến Trúc Điêu Khắc Vi Mô",
        },
      },
      {
        id: "rings-3",
        ethosTitle: {
          en: "Repurposed Data Connections",
          vi: "Kết Nối Dữ Liệu Tái Sinh",
        },
      },
      {
        id: "rings-9",
        ethosTitle: {
          en: "Botanical Geometry & Preserved Circuitry",
          vi: "Hình Học Thực Vật & Vi Mạch Hóa Thạch",
        },
      },
      {
        id: "rings-11",
        ethosTitle: {
          en: "Sculptural Contemporary Monument",
          vi: "Tượng Đài Đương Đại Điêu Khắc",
        },
      },
    ];

    return list
      .map((item) => {
        const prod = PRODUCTS_DATABASE.find((p) => p.id === item.id);
        return prod ? { ...prod, ethosTitle: item.ethosTitle } : null;
      })
      .filter((p): p is (typeof PRODUCTS_DATABASE[0] & { ethosTitle: { en: string; vi: string } }) => Boolean(p));
  }, []);

  return (
    <div className="flex flex-col pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-36 w-full max-w-full overflow-hidden bg-white">
      {/* Outer container matching header and site grid */}
      <Container size="lg" className="px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Breadcrumb Tree: Aligned to the Left */}
        <div className="w-full flex justify-start mb-4 sm:mb-6">
          <Breadcrumbs
            alignment="left"
            items={[
              { label: "HOME", href: "/" },
              { label: about?.breadcrumb || "ABOUT", isActiveCollection: true },
            ]}
          />
        </div>

        {/* Hero Split Banner: OUR WORLD (Left) + Editorial Collage (Right) - Matching Oushaba Layout */}
        <div className="w-full mb-14 sm:mb-18 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-[#051933]">
            {/* Left: OUR WORLD */}
            <div className="relative w-full aspect-[1.68/1] bg-[#051933] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/about/our-world.png"
                alt="Our World"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            {/* Right: Editorial Collage */}
            <div className="relative w-full aspect-[1.68/1] bg-stone-100 overflow-hidden">
              <Image
                src="/images/about/editorial-collage.jpg"
                alt="Sylven Atelier Editorial"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 2-Column Luxury Layout: Left Photo & Right Text perfectly balanced in height */}
        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-10 lg:gap-12 xl:gap-14 items-stretch">
            {/* LEFT: Founder / Atelier Portrait - stretches to match text column height */}
            <div className="md:col-span-5 w-full flex flex-col">
              <div className="relative w-full h-full min-h-[460px] md:min-h-full aspect-[2/3] md:aspect-auto overflow-hidden bg-stone-100 shadow-xs">
                <Image
                  src="/images/about/portrait.jpg"
                  alt="Sylven Atelier Founder"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* RIGHT: Title & Justified Content */}
            <div className="md:col-span-7 flex flex-col justify-start">
              {/* Title: "We are SYLVEN" in elegant headline font */}
              <h1 className="font-oranienbaum normal-case text-3xl sm:text-4xl lg:text-[42px] text-[#18181B] font-normal tracking-[0.02em] leading-tight mb-5 sm:mb-6">
                {about?.title || "We are SYLVEN"}
              </h1>

              {/* Content: Balanced font size, line-height & paragraph spacing */}
              <div
                style={{ textAlign: "justify" }}
                className="font-lexend font-light text-[13.5px] sm:text-[14px] text-stone-700 leading-[1.8] sm:leading-[1.85] text-justify space-y-3.5 sm:space-y-4"
              >
                <p>
                  {about?.p1 ||
                    "Artistic and avant-garde, we exist at the apex of art and design, luxury and sustainability. With circularity at our heart, we're breathing new life into forgotten materials."}
                </p>

                <p>
                  {about?.p2 ||
                    "Launched in 2027 in Ho Chi Minh City, Vietnam by a trio of art lovers and collectors, our name SYLVEN is used symbolically to represent a mixing of ideas, influences and collaborations."}
                </p>

                <p>
                  {about?.p3 ||
                    "Our collections elevate recycled materials while championing and sustaining global artisanal crafts. Beautifully crafted, ethically sourced and socially valuable. Each collection is designed to do good. The pieces we create will touch your life and benefit many others."}
                </p>

                <p>
                  {about?.p4 ||
                    "Created to bring joy to the world, we're repurposing, redesigning and reshaping a beautiful, more meaningful tomorrow. Seeing opportunity where others see waste. Seeing the extraordinary where others do not. Together we push boundaries and follow our passions – sharing the joy of new life and renewed purpose for the benefit of us all."}
                </p>

                <p>
                  {about?.p5Prefix || "Read about our sustainability journey and ethical practices "}
                  <Link
                    href="/#alchemy"
                    className="no-underline hover:underline underline-offset-4 text-stone-900 transition-colors"
                  >
                    {about?.p5Link || "here."}
                  </Link>
                </p>

                <p>
                  {about?.p6Prefix || "Discover our debut collection "}
                  <span>
                    {about?.p6Collection || "CONNECTION SALVAGED "}
                  </span>
                  <Link
                    href="/san-pham"
                    className="no-underline hover:underline underline-offset-4 text-stone-900 transition-colors"
                  >
                    {about?.p6Link || "here"}
                  </Link>
                  {about?.p6Suffix || " or by private appointment at our studio in Ho Chi Minh City, Vietnam."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OUR ETHOS SECTION (CAROUSEL WITH CREATIONS FROM DATABASE) */}
        <section className="w-full mt-16 sm:mt-24 md:mt-28">
          {/* Header Bar: Title on Left & Minimal Luxury Hairline Arrows on Right */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="font-oranienbaum text-2xl sm:text-3xl md:text-4xl text-[#18181B] font-normal tracking-[0.04em] uppercase">
              OUR ETHOS
            </h2>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`p-1.5 sm:p-2 transition-all cursor-pointer ${
                  canScrollLeft
                    ? "text-stone-900 hover:text-stone-600 opacity-100"
                    : "text-stone-300 opacity-30 cursor-not-allowed"
                }`}
                aria-label="Previous"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`p-1.5 sm:p-2 transition-all cursor-pointer ${
                  canScrollRight
                    ? "text-stone-900 hover:text-stone-600 opacity-100"
                    : "text-stone-300 opacity-30 cursor-not-allowed"
                }`}
                aria-label="Next"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Product Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 sm:gap-8 pb-4 pt-1 scroll-smooth snap-x snap-mandatory select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {ethosProducts.map((product) => (
              <Link
                key={product.id}
                href={`/san-pham/${product.slug}`}
                className="group flex flex-col flex-shrink-0 w-[240px] sm:w-[270px] md:w-[300px] snap-start cursor-pointer"
              >
                {/* Product Image Frame: Rectangular aspect-[3/4] matching landing page, borderless & no outer padding */}
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-none bg-stone-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 240px, 300px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={`${product.title} Alternate View`}
                      fill
                      sizes="(max-width: 768px) 240px, 300px"
                      className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out absolute inset-0"
                    />
                  )}
                </div>

                {/* Card Text Content (Directly underneath image matching Image 1) */}
                <div className="flex flex-col pt-3 sm:pt-4">
                  <span className="font-lexend font-normal text-[11.5px] sm:text-xs text-stone-800 uppercase tracking-[0.14em] line-clamp-2 leading-snug group-hover:text-stone-950 transition-colors">
                    {language === "vi" ? product.ethosTitle.vi : product.ethosTitle.en}
                  </span>
                  <span className="font-lexend font-light text-[11px] sm:text-[11.5px] text-stone-400 uppercase tracking-wider mt-1.5 line-clamp-1">
                    {product.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
