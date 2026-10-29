import { PRODUCTS_DATABASE } from "./products.data";
import { PRODUCT_DIMENSIONS } from "./product-dimensions.data";
import type {
  Product,
  ProductCategory,
  ProductMaterial,
  ProductFilterOptions,
} from "@/types/product";

// Helper giả lập độ trễ mạng nhẹ (cho phép test skeleton/loading state tự nhiên)
const simulateLatency = (ms: number = 20) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Thứ tự sắp xếp mặc định theo cặp tỉ lệ (2 cột cân đối, mỹ quan quiet luxury)
 * Row 1: Constellation Necklace & Gold Alliance Earrings (khớp chính xác Screenshot 2)
 * Row 2: Gold Remnants Ring & Emerald Circuit Ring (khớp chính xác Screenshot 1 & 2)
 */
const CURATED_DEFAULT_ORDER = [
  "necklaces-1", "earrings-9", // Row 1 (Screenshot 2: Constellation Necklace & Gold Alliance Earrings)
  "rings-1", "rings-6",         // Row 2 (Screenshot 1 & 2: Gold Remnants Ring & Emerald Circuit Ring)
  "necklaces-2", "earrings-4", // Row 3: Ascent Necklace & Sapphire Odyssey
  "rings-3", "rings-5",        // Row 4: Cable Ring & Monolith Ring
  "necklaces-4", "earrings-6", // Row 5: Memento Necklace & Aquamarine Odyssey
  "rings-4", "rings-9",        // Row 6: Fragments Band & Emerald Ring
  "necklaces-5", "earrings-8", // Row 7: Mini Code Necklace & Wire Odyssey
  "rings-11", "rings-14",      // Row 8: Fragments Ring & Tech Ring
  "necklaces-6", "necklaces-7",// Row 9: Silver Constellation & USB Relic
  "rings-7", "rings-12",       // Row 10: Inlaid Ring & Wide Band
  "rings-13", "necklaces-9",   // Row 11: Slim Band & Voyage Necklace
  "necklaces-3", "bracelets-1",// Row 12: Code Necklace & Vestige Bracelet
  "earrings-1", "rings-10",    // Row 13: Circuit Studs & Sapphire Ring
  "necklaces-8", "rings-8",    // Row 14: Baroque Ascent & Woven Ring
  "bracelets-2", "earrings-2", // Row 15: Vestige Cuff & Futurist Earrings
  "earrings-10", "bracelets-3",// Row 16: Circuit Fossil & Orbit Bracelet
  "earrings-3", "earrings-7",  // Row 17: Connection Drops & Emerald Fossil
  "earrings-5", "rings-2",     // Row 18: Alliance Duality & Cyber Relic
];

function enrichProduct(item: Product): Product {
  const dim = PRODUCT_DIMENSIONS[item.id];
  return {
    ...item,
    width: dim?.width || 1600,
    height: dim?.height || 2400,
    aspectRatio: dim?.aspectRatio || "1600 / 2400",
  };
}

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
          (item.collection && item.collection.toLowerCase().includes(q)) ||
          item.category.toLowerCase().includes(q) ||
          item.subtitle.vi.toLowerCase().includes(q) ||
          item.subtitle.en.toLowerCase().includes(q) ||
          item.description.vi.toLowerCase().includes(q) ||
          item.description.en.toLowerCase().includes(q) ||
          item.specs.material.vi.toLowerCase().includes(q) ||
          item.specs.certificate.toLowerCase().includes(q)
      );
    }

    // Lọc theo khoảng giá (Min Price / Max Price)
    if (options.minPrice !== undefined) {
      items = items.filter((item) => item.price >= options.minPrice!);
    }
    if (options.maxPrice !== undefined) {
      items = items.filter((item) => item.price <= options.maxPrice!);
    }

    // Sắp xếp (theo giá tăng dần, giá giảm dần, mới nhất, tiêu đề)
    if (options.sortBy) {
      if (options.sortBy === "price_asc") {
        items.sort((a, b) => a.price - b.price);
      } else if (options.sortBy === "price_desc") {
        items.sort((a, b) => b.price - a.price);
      } else if (options.sortBy === "title") {
        items.sort((a, b) => a.title.localeCompare(b.title));
      }
    } else if (
      (!options.category || options.category === "all") &&
      (!options.material || options.material === "all") &&
      !options.search
    ) {
      // Sắp xếp mặc định theo thứ tự thẩm mỹ cặp đôi (Curated 2-column pairing)
      items.sort((a, b) => {
        const idxA = CURATED_DEFAULT_ORDER.indexOf(a.id);
        const idxB = CURATED_DEFAULT_ORDER.indexOf(b.id);
        return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
      });
    }

    // Phân trang
    if (options.offset !== undefined || options.limit !== undefined) {
      const offset = options.offset || 0;
      const limit = options.limit || items.length;
      items = items.slice(offset, offset + limit);
    }

    return items.map(enrichProduct);
  },

  /**
   * Lấy sản phẩm theo ID chính xác (vd: "necklaces-1", "rings-3")
   */
  async getProductById(id: string): Promise<Product | null> {
    await simulateLatency(10);
    const found = PRODUCTS_DATABASE.find((item) => item.id === id);
    return found ? enrichProduct(found) : null;
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
    return found ? enrichProduct(found) : null;
  },

  /**
   * Lấy chi tiết sản phẩm theo slug (phục vụ trang chi tiết sản phẩm /san-pham/[slug])
   */
  async getProductBySlug(slug: string): Promise<Product | null> {
    await simulateLatency(10);
    const found = PRODUCTS_DATABASE.find((item) => item.slug === slug);
    return found ? enrichProduct(found) : null;
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
    return PRODUCTS_DATABASE.filter((item) => item.featuredFlags?.isCurated).map(enrichProduct);
  },

  /**
   * Lấy các tác phẩm định dạng Spotlight Showcase
   */
  async getHeroShowcaseItems(): Promise<Product[]> {
    await simulateLatency(10);
    return PRODUCTS_DATABASE.filter((item) => item.featuredFlags?.isHeroShowcase).map(enrichProduct);
  },

  /**
   * Lấy các tác phẩm hiển thị trên WebGL 3D FlexCarousel
   */
  async getCarouselItems(): Promise<Product[]> {
    await simulateLatency(10);
    return PRODUCTS_DATABASE.filter((item) => item.featuredFlags?.isCarousel).map(enrichProduct);
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

  /**
   * Truy xuất giá sản phẩm nhanh chóng theo ID hoặc Slug (O(1))
   */
  async getProductPrice(idOrSlug: string) {
    await simulateLatency(5);
    const found = PRODUCTS_DATABASE.find(
      (item) => item.id === idOrSlug || item.slug === idOrSlug
    );
    if (!found) return null;
    return {
      id: found.id,
      slug: found.slug,
      title: found.title,
      price: found.price,
      formattedPrice: found.formattedPrice,
    };
  },

  /**
   * Cập nhật giá sản phẩm trong database
   */
  async updateProductPrice(idOrSlug: string, newPrice: number): Promise<Product | null> {
    await simulateLatency(10);
    const product = PRODUCTS_DATABASE.find(
      (item) => item.id === idOrSlug || item.slug === idOrSlug
    );
    if (!product) return null;

    product.price = newPrice;
    product.formattedPrice = newPrice.toLocaleString("vi-VN") + "₫";
    return enrichProduct(product);
  },

  /**
   * Lấy toàn bộ danh sách giá rút gọn để hiển thị bảng tra cứu
   */
  async getAllProductPrices() {
    await simulateLatency(5);
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
};
