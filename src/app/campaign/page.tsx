"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { Breadcrumbs } from "@/components/common";
import { PRODUCTS_DATABASE } from "@/data";
import { motion, AnimatePresence } from "motion/react";

interface CampaignLook {
  id: string;
  image: string;
  alt: string;
  products: {
    id?: string;
    title: string;
  }[];
}

const CAMPAIGN_LOOKS: CampaignLook[] = [
  {
    id: "look-1",
    image: "https://www.oushaba.com/cdn/shop/products/Oushaba_M_14_9_224801_rt1copy_840x.jpg?v=1676292659",
    alt: "Connection Salvaged - Constellation & Vestige Suite",
    products: [
      { id: "necklaces-1", title: "Constellation Necklace" },
      { id: "bracelets-1", title: "Vestige Bracelet" },
      { id: "rings-1", title: "Gold Fragments Ring" },
    ],
  },
  {
    id: "look-2",
    image: "/images/artworks/model_alchemy.jpg",
    alt: "Connection Salvaged - Modern Alchemy Sculpture",
    products: [
      { id: "earrings-4", title: "Sapphire Odyssey" },
      { id: "rings-6", title: "Emerald Circuit Ring" },
      { id: "necklaces-3", title: "Code Necklace" },
    ],
  },
  {
    id: "look-3",
    image: "https://cdn.accentuate.io/86966698145/1674500371509/181221-1-OUSHABA6520.jpg?v=1674500371509",
    alt: "Connection Salvaged - Orbit Bracelet & Alliance Earrings Suite",
    products: [
      { id: "bracelets-3", title: "Orbit bracelet, gold, silver and rubies" },
      { id: "earrings-9", title: "Alliance Earrings" },
    ],
  },
];

function CampaignLookCard({
  look,
  isOpen,
  onToggle,
  priority = false,
}: {
  look: CampaignLook;
  isOpen: boolean;
  onToggle: () => void;
  priority?: boolean;
}) {
  return (
    <div className="w-full flex flex-col">
      {/* Model Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
        <Image
          src={look.image}
          alt={look.alt}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          priority={priority}
          className="object-cover object-center"
        />
      </div>

      {/* SHOP + / — Accordion Trigger & Items */}
      <div className="mt-4 sm:mt-5 text-left">
        <button
          type="button"
          onClick={onToggle}
          className="font-lexend font-extralight font-[250] text-xs sm:text-[13px] uppercase tracking-[0.2em] text-black hover:opacity-70 transition-opacity cursor-pointer inline-flex items-center gap-2 select-none"
          aria-expanded={isOpen}
        >
          <span>SHOP</span>
          <span className="text-sm font-extralight font-[250] leading-none">
            {isOpen ? "—" : "+"}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-2.5 sm:mt-3 space-y-1 sm:space-y-1.5">
                {look.products.map((item) => {
                  const hasProductInDb = Boolean(
                    item.id &&
                      PRODUCTS_DATABASE.some(
                        (p) => p.id === item.id || p.slug === item.id
                      )
                  );

                  return (
                    <li key={item.title}>
                      {hasProductInDb ? (
                        <Link
                          href={`/san-pham/${item.id}`}
                          className="group relative inline-block py-0.5 focus:outline-hidden"
                        >
                          {/* Text: font-extralight, font size matching SHOP (text-xs sm:text-[13px]), black text */}
                          <span className="font-lexend font-extralight font-[250] text-xs sm:text-[13px] text-black tracking-[0.02em] block leading-relaxed">
                            {item.title}
                          </span>
                          {/* Underline: extends 50% of the text width, appears smoothly from left to right */}
                          <span
                            aria-hidden="true"
                            className="absolute bottom-0 left-0 h-[1px] w-1/2 bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none"
                          />
                        </Link>
                      ) : (
                        <div className="group relative inline-block py-0.5 cursor-default select-none">
                          <span className="font-lexend font-extralight font-[250] text-xs sm:text-[13px] text-black tracking-[0.02em] block leading-relaxed">
                            {item.title}
                          </span>
                          <span
                            aria-hidden="true"
                            className="absolute bottom-0 left-0 h-[1px] w-1/2 bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none"
                          />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function CampaignPage() {
  // State for collapsible "SHOP +" accordion for each model look (default: all closed)
  const [openLooks, setOpenLooks] = React.useState<Record<string, boolean>>({});

  const toggleLook = (id: string) => {
    setOpenLooks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-12 pt-24 sm:pt-28 pb-32 w-full max-w-full overflow-hidden bg-white">
      {/* HEADER & CAMPAIGN HERO BANNER */}
      <section className="px-4">
        <Container size="lg">
          {/* BREADCRUMB TREE: HOME / CONNECTION SALVAGED */}
          <div className="w-full flex justify-start mb-4 sm:mb-6">
            <Breadcrumbs
              items={[
                { label: "HOME", href: "/" },
                { label: "CONNECTION SALVAGED", isActiveCollection: true },
              ]}
            />
          </div>

          {/* HERO SPLIT BANNER: CAMPAIGN / CONNECTION SALVAGED */}
          <div className="w-full mb-8 sm:mb-12 overflow-hidden bg-[#dbbfb2] shadow-xs">
            <h1 className="sr-only">Campaign - Connection Salvaged</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-[#dbbfb2]">
              {/* Left: Peach Background with CAMPAIGN tag and CONNECTION SALVAGED title */}
              <div className="w-full md:aspect-[1.5/1] bg-[#dbbfb2] flex flex-col justify-between pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-8 sm:pb-10 md:pb-12 pl-6 sm:pl-8 md:pl-10 lg:pl-12 pr-6 sm:pr-8 md:pr-10 lg:pr-12 xl:pr-14">
                {/* Top: CAMPAIGN in Serif */}
                <div>
                  <span className="font-oranienbaum text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[46px] text-[#051933] font-normal tracking-[0.05em] uppercase block">
                    CAMPAIGN
                  </span>
                </div>

                {/* Middle: CONNECTION SALVAGED (Large, refined, right-aligned) */}
                <div className="my-auto py-3 sm:py-5 md:py-6 w-full text-right">
                  <h2 className="font-lexend font-light text-3xl sm:text-5xl md:text-[48px] lg:text-[64px] xl:text-[76px] text-[#051933] tracking-[0.035em] uppercase leading-[1.05] text-right">
                    <span>CONNECTION</span>
                    <span className="block mt-1 sm:mt-1.5">SALVAGED</span>
                  </h2>
                </div>

                {/* Bottom spacer for balanced breathing room */}
                <div className="h-1 sm:h-2" />
              </div>

              {/* Right: Editorial Campaign Photo */}
              <div className="relative w-full aspect-[1.5/1] bg-stone-100 overflow-hidden">
                <Image
                  src="/images/about/connection-salvaged-models.webp"
                  alt="Sylven Connection Salvaged Editorial Campaign"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CAMPAIGN EDITORIAL LOOKBOOK SECTION */}
      <section className="px-4">
        <Container size="lg">
          {/* ROW 1: 2 MODELS SIDE BY SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
            {CAMPAIGN_LOOKS.slice(0, 2).map((look, idx) => (
              <CampaignLookCard
                key={look.id}
                look={look}
                isOpen={!!openLooks[look.id]}
                onToggle={() => toggleLook(look.id)}
                priority={idx === 0}
              />
            ))}
          </div>

          {/* ROW 2: 1 MODEL CENTERED IN THE MIDDLE */}
          <div className="mt-14 sm:mt-18 md:mt-24 flex justify-center w-full">
            <div className="w-full max-w-[560px]">
              <CampaignLookCard
                look={CAMPAIGN_LOOKS[2]}
                isOpen={!!openLooks[CAMPAIGN_LOOKS[2].id]}
                onToggle={() => toggleLook(CAMPAIGN_LOOKS[2].id)}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
