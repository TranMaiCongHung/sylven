"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { Breadcrumbs } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language, t } = useLanguage();
  const about = t?.aboutPage;

  return (
    <div className="flex flex-col pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-36 w-full max-w-full overflow-hidden bg-white">
      {/* Centered container with balanced margins matching Oushaba proportions */}
      <Container size="md" className="px-6 sm:px-10 md:px-12 lg:px-14">
        {/* Breadcrumb Tree: Aligned to the Left */}
        <div className="w-full flex justify-start mb-6 sm:mb-8 md:mb-10">
          <Breadcrumbs
            alignment="left"
            items={[
              { label: "HOME", href: "/" },
              { label: about?.breadcrumb || "ABOUT", isActiveCollection: true },
            ]}
          />
        </div>

        {/* 2-Column Luxury Layout: Left Photo & Right Text perfectly balanced in height */}
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
      </Container>
    </div>
  );
}
