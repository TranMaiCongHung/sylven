import type {
  ProductCategory,
  ProductMaterial,
  MaterialPriceTier,
  ProductPriceRecord,
} from "@/types/product";
import { PRODUCTS_DATABASE } from "./products.data";

/**
 * Định dạng số tiền sang định dạng tiền tệ Việt Nam (vd: 1.490.000₫)
 */
export function formatPriceVND(amount: number): string {
  return amount.toLocaleString("vi-VN") + "₫";
}

/**
 * BẢNG GIÁ CHUẨN XUẤT PHÁT TỪ TÀI LIỆU PDF (5 TRANG)
 * Cung cấp phạm vi giá tối thiểu - tối đa cho từng nhóm vật liệu & danh mục
 */
export const PDF_PRICE_MATRIX: MaterialPriceTier[] = [
  // 1. SILVER COLLECTION
  {
    id: "silver-925-999",
    name: "Silver 925/999",
    collection: "Silver Collection",
    necklace: { min: 890000, max: 1490000, formattedRange: "890K - 1.49M" },
    bracelet: { min: 690000, max: 1090000, formattedRange: "690K - 1.09M" },
    earrings: { min: 490000, max: 790000, formattedRange: "490K - 790K" },
    ring: { min: 590000, max: 890000, formattedRange: "590K - 890K" },
  },
  {
    id: "gold-plated-silver-925-999",
    name: "Gold-plated Silver 925/999",
    collection: "Silver Collection",
    necklace: { min: 1590000, max: 2490000, formattedRange: "1.59M - 2.49M" },
    bracelet: { min: 1290000, max: 1890000, formattedRange: "1.29M - 1.89M" },
    earrings: { min: 890000, max: 1390000, formattedRange: "890K - 1.39M" },
    ring: { min: 1090000, max: 1590000, formattedRange: "1.09M - 1.59M" },
  },

  // 2. F136 TITANIUM COLLECTION
  {
    id: "f136-titanium",
    name: "F136 Titanium",
    collection: "F136 Titanium Collection",
    necklace: { min: 1090000, max: 1690000, formattedRange: "1.09M - 1.69M" },
    bracelet: { min: 790000, max: 1290000, formattedRange: "790K - 1.29M" },
    earrings: { min: 590000, max: 890000, formattedRange: "590K - 890K" },
    ring: { min: 690000, max: 990000, formattedRange: "690K - 990K" },
  },
  {
    id: "gold-plated-f136-titanium",
    name: "Gold-plated F136 Titanium",
    collection: "F136 Titanium Collection",
    necklace: { min: 1790000, max: 2690000, formattedRange: "1.79M - 2.69M" },
    bracelet: { min: 1390000, max: 1990000, formattedRange: "1.39M - 1.99M" },
    earrings: { min: 990000, max: 1490000, formattedRange: "990K - 1.49M" },
    ring: { min: 1190000, max: 1690000, formattedRange: "1.19M - 1.69M" },
  },

  // 3. GOLD 18K
  {
    id: "gold-18k",
    name: "Gold 18K",
    collection: "Gold 18K",
    necklace: { min: 1890000, max: 2490000, formattedRange: "1.89M - 2.49M" },
    bracelet: { min: 1490000, max: 1990000, formattedRange: "1.49M - 1.99M" },
    earrings: { min: 1090000, max: 1490000, formattedRange: "1.09M - 1.49M" },
    ring: { min: 1290000, max: 1690000, formattedRange: "1.29M - 1.69M" },
  },
];

/**
 * DATABASE BẢNG TRA CỨU GIÁ TRỰC TIẾP TỪNG SẢN PHẨM (INDEX THEO CẢ ID VÀ SLUG)
 */
export const PRODUCT_PRICES_MAP: Record<string, ProductPriceRecord> = (() => {
  const map: Record<string, ProductPriceRecord> = {};

  for (const product of PRODUCTS_DATABASE) {
    const record: ProductPriceRecord = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      category: product.category,
      material: product.material,
      price: product.price,
      formattedPrice: product.formattedPrice || formatPriceVND(product.price),
    };

    // Index theo cả ID (vd: "necklaces-1") và Slug (vd: "constellation-titanium-circuit-necklace-01")
    map[product.id] = record;
    map[product.slug] = record;
  }

  return map;
})();

/**
 * CÁC HÀM TRUY XUẤT DATABASE GIÁ (FAST O(1) LOOKUPS)
 */
export const pricingDatabase = {
  /**
   * Lấy bản ghi giá trực tiếp theo ID hoặc Slug (O(1))
   */
  getPrice(idOrSlug: string): ProductPriceRecord | null {
    return PRODUCT_PRICES_MAP[idOrSlug] || null;
  },

  /**
   * Lấy toàn bộ danh sách giá tất cả sản phẩm
   */
  getAllPrices(): ProductPriceRecord[] {
    return PRODUCTS_DATABASE.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      category: p.category,
      material: p.material,
      price: p.price,
      formattedPrice: p.formattedPrice,
    }));
  },

  /**
   * Lấy danh sách giá theo danh mục (necklaces, bracelets, earrings, rings)
   */
  getPricesByCategory(category: ProductCategory): ProductPriceRecord[] {
    return this.getAllPrices().filter((p) => p.category === category);
  },

  /**
   * Lấy danh sách giá theo chất liệu (titanium, silver, gold)
   */
  getPricesByMaterial(material: ProductMaterial): ProductPriceRecord[] {
    return this.getAllPrices().filter((p) => p.material === material);
  },

  /**
   * Thống kê biên độ giá của một danh mục
   */
  getPriceRangeByCategory(category: ProductCategory): { min: number; max: number; count: number } {
    const items = this.getPricesByCategory(category);
    if (items.length === 0) return { min: 0, max: 0, count: 0 };

    const prices = items.map((p) => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
      count: items.length,
    };
  },

  /**
   * Lấy bảng ma trận giá chuẩn từ tài liệu PDF
   */
  getPriceMatrix(): MaterialPriceTier[] {
    return PDF_PRICE_MATRIX;
  },
};
