import type { ProductCategory, ProductMaterial } from "@/types/product";

export interface CategoryMeta {
  key: ProductCategory;
  label: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
}

export interface MaterialMeta {
  key: ProductMaterial;
  label: {
    vi: string;
    en: string;
  };
  shortLabel: {
    vi: string;
    en: string;
  };
  badgeColor: string;
}

export const CATEGORIES_DATA: CategoryMeta[] = [
  {
    key: "necklaces",
    label: { vi: "Vòng cổ", en: "Necklaces" },
    description: {
      vi: "Dây chuyền và mặt dây điêu khắc từ phôi Titanium F136 và Bạc 925 kết hợp vi mạch bọc resin ngọc.",
      en: "Necklaces and sculpted pendants forged from F136 Titanium and 925 Silver with resin-sealed circuitry.",
    },
  },
  {
    key: "bracelets",
    label: { vi: "Vòng tay", en: "Bracelets" },
    description: {
      vi: "Vòng tay kiến trúc đương đại ôm sát cổ tay với điểm nhấn vi phiến bán dẫn quang khắc.",
      en: "Architectural cuffs and bracelets ergonomically cast with photolithographic semiconductor accents.",
    },
  },
  {
    key: "earrings",
    label: { vi: "Khuyên tai", en: "Earrings" },
    description: {
      vi: "Khuyên tai đinh, khuyên tròn và dáng thả đính đá quý cùng bo mạch vi xử lý siêu nhẹ an toàn cho da.",
      en: "Studs, drops, and hoops set with fine gemstones and ultra-lightweight hypoallergenic circuitry.",
    },
  },
  {
    key: "rings",
    label: { vi: "Nhẫn", en: "Rings" },
    description: {
      vi: "Nhẫn nguyên khối, nhẫn bản rộng và nhẫn bện cáp quang học tinh xảo cho vẻ đẹp vị lai.",
      en: "Monolithic statement rings, wide bands, and woven optical cable designs with futuristic aesthetics.",
    },
  },
];

export const MATERIALS_DATA: MaterialMeta[] = [
  {
    key: "silver",
    label: { vi: "Silver Collection (Bạc 925 / 999 & Bạc Mạ Vàng)", en: "Silver Collection (925 / 999 Silver & Gold-plated)" },
    shortLabel: { vi: "Silver Collection", en: "Silver Collection" },
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
  },
  {
    key: "titanium",
    label: { vi: "F136 Titanium Collection (ASTM F136)", en: "F136 Titanium Collection (ASTM F136)" },
    shortLabel: { vi: "F136 Titanium", en: "F136 Titanium" },
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
  },
  {
    key: "gold",
    label: { vi: "Gold 18K (Vàng 18K Au750)", en: "Gold 18K (18K Gold Au750)" },
    shortLabel: { vi: "Gold 18K", en: "Gold 18K" },
    badgeColor: "bg-amber-50 text-amber-900 border-amber-300",
  },
];
