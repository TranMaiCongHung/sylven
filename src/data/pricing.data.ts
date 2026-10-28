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
    id: "silver-925",
    name: "Silver 925",
    collection: "Silver Collection",
    necklace: { min: 2700000, max: 2760000, formattedRange: "2.70M - 2.76M" },
    bracelet: { min: 2440000, max: 2450000, formattedRange: "2.44M - 2.45M" },
    earrings: { min: 1480000, max: 1480000, formattedRange: "1.48M" },
    ring: { min: 2060000, max: 2170000, formattedRange: "2.06M - 2.17M" },
  },
  {
    id: "silver-999",
    name: "Silver 999",
    collection: "Silver Collection",
    necklace: { min: 2820000, max: 2880000, formattedRange: "2.82M - 2.88M" },
    bracelet: { min: 2550000, max: 2560000, formattedRange: "2.55M - 2.56M" },
    earrings: { min: 1500000, max: 1500000, formattedRange: "1.50M" },
    ring: { min: 2140000, max: 2260000, formattedRange: "2.14M - 2.26M" },
  },
  {
    id: "gold-plated-silver",
    name: "Gold-plated Silver 925/999",
    collection: "Silver Collection",
    necklace: { min: 2800000, max: 2980000, formattedRange: "2.80M - 2.98M" },
    bracelet: { min: 2910000, max: 3060000, formattedRange: "2.91M - 3.06M" },
    earrings: { min: 1580000, max: 1600000, formattedRange: "1.58M - 1.60M" },
    ring: { min: 2160000, max: 2360000, formattedRange: "2.16M - 2.36M" },
  },

  // 2. F136 TITANIUM COLLECTION
  {
    id: "f136-titanium",
    name: "F136 Titanium",
    collection: "F136 Titanium Collection",
    necklace: { min: 1680000, max: 1710000, formattedRange: "1.68M - 1.71M" },
    bracelet: { min: 1660000, max: 1660000, formattedRange: "1.66M" },
    earrings: { min: 1200000, max: 1200000, formattedRange: "1.20M" },
    ring: { min: 1520000, max: 1590000, formattedRange: "1.52M - 1.59M" },
  },
  {
    id: "gold-plated-f136-titanium",
    name: "Gold-plated F136 Titanium",
    collection: "F136 Titanium Collection",
    necklace: { min: 1780000, max: 1810000, formattedRange: "1.78M - 1.81M" },
    bracelet: { min: 1760000, max: 1760000, formattedRange: "1.76M" },
    earrings: { min: 1300000, max: 1300000, formattedRange: "1.30M" },
    ring: { min: 1620000, max: 1690000, formattedRange: "1.62M - 1.69M" },
  },

  // 3. GOLD 18K
  {
    id: "gold-18k",
    name: "Gold 18K (AU750)",
    collection: "Gold 18K",
    necklace: { min: 21590000, max: 25000000, formattedRange: "21.59M - 25.00M" },
    bracelet: { min: 61270000, max: 69160000, formattedRange: "61.27M - 69.16M" },
    earrings: { min: 8400000, max: 8400000, formattedRange: "8.40M" },
    ring: { min: 47570000, max: 54260000, formattedRange: "47.57M - 54.26M" },
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
      collection: product.collection,
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
      collection: p.collection,
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
