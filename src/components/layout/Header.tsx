"use client";

import * as React from "react";
import { siteConfig } from "@/config";
import { StaggeredMenu } from "./StaggeredMenu";
import { MorphingBrandHeader } from "./MorphingBrandHeader";

export function Header() {
  const menuItems = [
    { label: "Trang chủ", ariaLabel: "Về đầu trang", link: "#top" },
    { label: "Tác phẩm", ariaLabel: "Khám phá các tác phẩm điêu khắc", link: "#showcase" },
    { label: "Triết lý Alchemy", ariaLabel: "Triết lý chế tác và hòa ca công nghệ", link: "#alchemy" },
    { label: "Bộ sưu tập", ariaLabel: "Danh mục tác phẩm độc bản", link: "#collection" },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://instagram.com" },
    { label: "Behance", link: "https://behance.net" },
    { label: "LinkedIn", link: siteConfig.links.linkedin },
  ];

  return (
    <>
      {/* Fixed Luxury Brand Header: Displays Logo & SYLVEN upon scroll */}
      <MorphingBrandHeader />

      {/* Luxury Staggered Navigation Drawer & Right Toggle Button */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        isFixed={true}
        colors={["#F5F2EB", "#71717A", "#18181B"]}
        accentColor="#D4CEBF"
        menuButtonColor="#18181B"
        openMenuButtonColor="#F5F2EB"
        changeMenuColorOnOpen={true}
      />
    </>
  );
}
