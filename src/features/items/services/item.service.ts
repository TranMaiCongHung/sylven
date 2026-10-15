import { mockItemsData, mockCategories, type Item } from "@/mock/items.data";
import type {
  ItemFilterState,
  InquiryFormData,
  InquirySubmissionResult,
} from "../types";

// Helper to simulate network latency for realistic loading states
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const itemService = {
  /**
   * Fetch items filtered by search, category, tag and sorted by criteria
   */
  async getItems(filters?: Partial<ItemFilterState>): Promise<{
    items: Item[];
    total: number;
    categories: typeof mockCategories;
    allTags: string[];
  }> {
    await delay(120);

    let result = [...mockItemsData];

    // Filter by search query
    if (filters?.search && filters.search.trim() !== "") {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          item.author.name.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (filters?.category && filters.category !== "all") {
      result = result.filter((item) => item.category === filters.category);
    }

    // Filter by tag
    if (filters?.tag) {
      result = result.filter((item) => item.tags.includes(filters.tag!));
    }

    // Sort items
    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case "newest":
          result.sort(
            (a, b) =>
              new Date(b.publishDate).getTime() -
              new Date(a.publishDate).getTime()
          );
          break;
        case "oldest":
          result.sort(
            (a, b) =>
              new Date(a.publishDate).getTime() -
              new Date(b.publishDate).getTime()
          );
          break;
        case "views":
          result.sort((a, b) => b.viewsCount - a.viewsCount);
          break;
        case "likes":
          result.sort((a, b) => b.likesCount - a.likesCount);
          break;
      }
    }

    // Extract all unique tags
    const allTags = Array.from(
      new Set(mockItemsData.flatMap((item) => item.tags))
    );

    return {
      items: result,
      total: result.length,
      categories: mockCategories,
      allTags,
    };
  },

  /**
   * Fetch item by unique ID or slug
   */
  async getItemById(idOrSlug: string): Promise<Item | null> {
    await delay(100);
    const item = mockItemsData.find(
      (item) => item.id === idOrSlug || item.slug === idOrSlug
    );
    return item || null;
  },

  /**
   * Fetch highlighted/featured items
   */
  async getFeaturedItems(): Promise<Item[]> {
    await delay(80);
    return mockItemsData.filter((item) => item.featured);
  },

  /**
   * Submit an inquiry/feedback form (standalone local simulation)
   */
  async submitInquiry(
    data: InquiryFormData
  ): Promise<InquirySubmissionResult> {
    await delay(450); // Simulate network round-trip

    // Generate random tracking ID
    const randomHex = Math.random().toString(36).substring(2, 9).toUpperCase();
    const trackingId = `SYL-${randomHex}`;

    return {
      success: true,
      message: `Cảm ơn ${data.fullName}! Thông tin của bạn đã được ghi nhận thành công trên hệ thống mô phỏng.`,
      trackingId,
      timestamp: new Date().toISOString(),
    };
  },
};
