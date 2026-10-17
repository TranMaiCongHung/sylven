/**
 * Product Data Model Definitions for Sylven Contemporary High Jewelry
 */

export type ProductCategory = "necklaces" | "bracelets" | "earrings" | "rings";

export type ProductMaterial = "titanium" | "silver" | "gold";

export interface LocalizedText {
  vi: string;
  en: string;
}

export interface ProductSpecs {
  material: LocalizedText;
  gemstones?: LocalizedText;
  silicon: LocalizedText;
  certificate: string;
  /** Alias tương thích ngược */
  gold?: LocalizedText;
  gem?: LocalizedText;
}

export interface ProductFeaturedFlags {
  isCurated?: boolean;       // Hiển thị ở mục Tuyển chọn (Curated Artworks)
  isHeroShowcase?: boolean;  // Hiển thị ở mục Spotlight Showcase trang chủ
  isCarousel?: boolean;      // Hiển thị ở WebGL Carousel
}

export interface Product {
  /** Unique ID theo từng danh mục (vd: "necklaces-1", "rings-3") */
  id: string;

  /** Số thứ tự theo danh sách gốc (1, 2, 3...) */
  itemNumber: number;

  /** Slug thân thiện URL */
  slug: string;

  /** Tên tác phẩm */
  title: string;

  /** 
   * DANH MỤC SẢN PHẨM (Bắt buộc)
   * necklaces: Vòng cổ | bracelets: Vòng tay | earrings: Khuyên tai | rings: Nhẫn
   */
  category: ProductCategory;

  /** 
   * CHẤT LIỆU CHÍNH (Bắt buộc)
   * titanium | silver | gold
   */
  material: ProductMaterial;

  /** 
   * DANH SÁCH HÌNH ẢNH (Bắt buộc - Nhiều hình ảnh cho 1 sản phẩm)
   * images[0] là ảnh đại diện chính, images[1] là ảnh hover
   */
  images: string[];

  /** Ảnh chính (alias tiện lợi tương thích UI cũ) */
  image: string;

  /** Ảnh hover (alias tiện lợi tương thích UI cũ) */
  hoverImage: string;

  /** Video review nếu có (ví dụ nhẫn số 3) */
  video?: string;

  /** Phụ đề ngắn song ngữ */
  subtitle: LocalizedText;

  /** Mô tả chi tiết song ngữ */
  description: LocalizedText;

  /** Thông số vật liệu & giám định */
  specs: ProductSpecs;

  /** Cờ đánh dấu vị trí xuất hiện nổi bật */
  featuredFlags?: ProductFeaturedFlags;

  /** Trạng thái phát hành */
  status: "published" | "draft";

  /** Giá sản phẩm cụ thể bằng số (VND) dựa trên bảng giá PDF */
  price: number;

  /** Giá đã định dạng hiển thị (vd: "1.490.000₫") */
  formattedPrice: string;

  /** Đoạn văn tự sự thủ công atelier song ngữ */
  story?: {
    vi: string[];
    en: string[];
  };

  createdAt?: string;
}

export interface ProductFilterOptions {
  category?: ProductCategory | "all";
  material?: ProductMaterial | "all";
  search?: string;
  featuredOnly?: boolean;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "newest" | "price_asc" | "price_desc" | "title";
  limit?: number;
  offset?: number;
}

export interface PriceMatrixCategoryRange {
  min: number;
  max: number;
  formattedRange: string;
}

export interface MaterialPriceTier {
  id: string;
  name: string;
  collection: "Silver Collection" | "F136 Titanium Collection" | "Gold 18K";
  necklace: PriceMatrixCategoryRange;
  bracelet: PriceMatrixCategoryRange;
  earrings: PriceMatrixCategoryRange;
  ring: PriceMatrixCategoryRange;
}

export interface ProductPriceRecord {
  id: string;
  slug: string;
  title: string;
  category: ProductCategory;
  material: ProductMaterial;
  price: number;
  formattedPrice: string;
}
