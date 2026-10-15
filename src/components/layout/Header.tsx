"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config";
import { StaggeredMenu } from "./StaggeredMenu";

export function Header() {
  const menuItems = [
    { label: "Trang chủ", ariaLabel: "Về trang chủ", link: "/" },
    { label: "Khám phá", ariaLabel: "Xem danh sách bài viết & dự án", link: "#items" },
    { label: "Tính năng", ariaLabel: "Xem các tính năng kiến trúc", link: "#features" },
    { label: "Giới thiệu", ariaLabel: "Tìm hiểu sứ mệnh dự án", link: "#about" },
    { label: "Liên hệ", ariaLabel: "Gửi thông tin tư vấn", link: "#contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: siteConfig.links.github },
    { label: "Twitter / X", link: siteConfig.links.twitter },
    { label: "LinkedIn", link: siteConfig.links.linkedin },
  ];

  const logoComponent = (
    <Link
      href="/"
      className="flex items-center gap-2.5 font-bold text-lg text-slate-900 transition-opacity hover:opacity-90 dark:text-white"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md">
        <Sparkles className="h-5 w-5 text-amber-100" />
      </div>
      <span className="font-extrabold tracking-tight text-xl text-slate-900 dark:text-white">
        {siteConfig.name}
      </span>
    </Link>
  );

  return (
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
      logoComponent={logoComponent}
    />
  );
}
