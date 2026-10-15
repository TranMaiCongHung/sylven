import { z } from "zod";
import type { Item, ItemCategory, ItemAuthor } from "@/mock/items.data";

export type { Item, ItemCategory, ItemAuthor };

export type SortOption = "newest" | "oldest" | "views" | "likes";

export interface ItemFilterState {
  search: string;
  category: ItemCategory | "all";
  tag: string | null;
  sortBy: SortOption;
}

/**
 * Zod Schema for item consultation / feedback inquiry form
 */
export const inquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Họ và tên phải có ít nhất 2 ký tự" })
    .max(50, { message: "Họ và tên không vượt quá 50 ký tự" }),
  email: z
    .string()
    .email({ message: "Địa chỉ email không đúng định dạng" }),
  phone: z
    .string()
    .regex(/^([0-9]{10,11})?$/, {
      message: "Số điện thoại phải từ 10 đến 11 chữ số",
    })
    .optional()
    .or(z.literal("")),
  topic: z
    .string()
    .min(1, { message: "Vui lòng chọn chủ đề quan tâm" }),
  message: z
    .string()
    .min(10, { message: "Nội dung tin nhắn tối thiểu 10 ký tự" })
    .max(1000, { message: "Nội dung tin nhắn tối đa 1000 ký tự" }),
  subscribeNewsletter: z.boolean().default(true),
});

export type InquiryFormData = z.infer<typeof inquiryFormSchema>;

export interface InquirySubmissionResult {
  success: boolean;
  message: string;
  trackingId?: string;
  timestamp?: string;
}
