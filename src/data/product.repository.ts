import { PRODUCTS_DATABASE } from "./products.data";
import type {
  Product,
  ProductCategory,
  ProductMaterial,
  ProductFilterOptions,
} from "@/types/product";

// Helper giả lập độ trễ mạng nhẹ (cho phép test skeleton/loading state tự nhiên)
const simulateLatency = (ms: number = 20) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const productRepository = {
  /**
   * Lấy danh sách sản phẩm với các bộ lọc phong phú (Danh mục, Chất liệu, Tìm kiếm...)
   */
  async getAllProducts(options: ProductFilterOptions = {}): Promise<Product[]> {
    await simulateLatency(15);
    let items = PRODUCTS_DATABASE.filter((item) => item.status === "published");

    // Lọc theo Category (Vòng cổ, Vòng tay, Khuyên tai, Nhẫn)
    if (options.category && options.category !== "all") {
      items = items.filter((item) => item.category === options.category);
    }

    // Lọc theo Chất liệu (Titanium, Silver, Gold)
    if (options.material && options.material !== "all") {
      items = items.filter((item) => item.material === options.material);
    }

    // Lọc theo Featured Flag
    if (options.featuredOnly) {
      items = items.filter(
        (item) =>
          item.featuredFlags?.isCurated ||
          item.featuredFlags?.isHeroShowcase ||
          item.featuredFlags?.isCarousel
      );
    }

    // Tìm kiếm thông minh theo từ khóa (hỗ trợ cả tiếng Việt và tiếng Anh)
    if (options.search && options.search.trim() !== "") {
      const q = options.search.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q) ||
          item.material.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.subtitle.vi.toLowerCase().includes(q) ||
          item.subtitle.en.toLowerCase().includes(q) ||
          item.description.vi.toLowerCase().includes(q) ||
          item.description.en.toLowerCase().includes(q) ||
          item.specs.material.vi.toLowerCase().includes(q) ||
          item.specs.certificate.toLowerCase().includes(q)
      );
    }

    // Phân trang
    if (options.offset !== undefined || options.limit !== undefined) {
      const offset = options.offset || 0;
      const limit = options.limit || items.length;
      items = items.slice(offset, offset + limit);
    }

    return items;
  },

  /**
   * Lấy sản phẩm theo ID chính xác (vd: "necklaces-1", "rings-3")
   */
  async getProductById(id: string): Promise<Product | null> {
    await simulateLatency(10);
    const found = PRODUCTS_DATABASE.find((item) => item.id === id);
    return found || null;
  },

  /**
   * Lấy sản phẩm theo số thứ tự của từng danh mục (vd: category="necklaces", number=1)
   */
  async getProductByItemNumber(
    category: ProductCategory,
    itemNumber: number
  ): Promise<Product | null> {
    await simulateLatency(10);
    const found = PRODUCTS_DATABASE.find(
      (item) => item.category === category && item.itemNumber === itemNumber
    );
    return found || null;
  },

  /**
   * Lấy chi tiết sản phẩm theo slug (phục vụ trang chi tiết sản phẩm /san-pham/[slug])
   */
  async getProductBySlug(slug: string): Promise<Product | null> {
    await simulateLatency(10);
    const found = PRODUCTS_DATABASE.find((item) => item.slug === slug);
    return found || null;
  },

  /**
   * Lấy nhanh danh sách sản phẩm theo Category
   */
  async getProductsByCategory(category: ProductCategory): Promise<Product[]> {
    return this.getAllProducts({ category });
  },

  /**
   * Lấy nhanh danh sách sản phẩm theo Chất liệu
   */
  async getProductsByMaterial(material: ProductMaterial): Promise<Product[]> {
    return this.getAllProducts({ material });
  },

  /**
   * Lấy các tác phẩm tiêu biểu (Curated Artworks) hiển thị ở Trang Chủ
   */
  async getCuratedArtworks(): Promise<Product[]> {
    await simulateLatency(10);
    return PRODUCTS_DATABASE.filter((item) => item.featuredFlags?.isCurated);
  },

  /**
   * Lấy các tác phẩm định dạng Spotlight Showcase
   */
  async getHeroShowcaseItems(): Promise<Product[]> {
    await simulateLatency(10);
    return PRODUCTS_DATABASE.filter((item) => item.featuredFlags?.isHeroShowcase);
  },

  /**
   * Lấy các tác phẩm hiển thị trên WebGL 3D FlexCarousel
   */
  async getCarouselItems(): Promise<Product[]> {
    await simulateLatency(10);
    return PRODUCTS_DATABASE.filter((item) => item.featuredFlags?.isCarousel);
  },

  /**
   * Thống kê số lượng sản phẩm theo từng nhóm (Dashboard / Badge Counts)
   */
  async getStats() {
    const total = PRODUCTS_DATABASE.length;
    const byCategory: Record<ProductCategory, number> = {
      necklaces: 0,
      bracelets: 0,
      earrings: 0,
      rings: 0,
    };
    const byMaterial: Record<ProductMaterial, number> = {
      titanium: 0,
      silver: 0,
      gold: 0,
    };

    for (const item of PRODUCTS_DATABASE) {
      if (byCategory[item.category] !== undefined) byCategory[item.category]++;
      if (byMaterial[item.material] !== undefined) byMaterial[item.material]++;
    }

    return { total, byCategory, byMaterial };
  },
};
