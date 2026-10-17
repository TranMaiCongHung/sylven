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
    key: "titanium",
    label: { vi: "Titanium ASTM F136 Y Sinh", en: "ASTM F136 Biocompatible Titanium" },
    shortLabel: { vi: "Titanium F136", en: "Titanium" },
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
  },
  {
    key: "silver",
    label: { vi: "Bạc 925 Tái Sinh Cao Cấp", en: "925 Recycled Sterling Silver" },
    shortLabel: { vi: "Bạc 925", en: "Silver 925" },
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
  },
  {
    key: "gold",
    label: { vi: "Vàng 18K (Au750) & PVD Gold", en: "18K Gold (Au750) & PVD Gold" },
    shortLabel: { vi: "Vàng 18K", en: "18K Gold" },
    badgeColor: "bg-amber-50 text-amber-900 border-amber-300",
  },
];
