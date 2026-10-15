/**
 * Mock data for site content, hero, features, stats, and testimonials
 */

export interface HeroData {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  stats: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const siteHeroData: HeroData = {
  badge: "Kiến trúc Chuẩn mực 2026",
  title: "Xây dựng Ứng dụng Web Độc lập với",
  highlight: "Next.js 15 & React 19",
  description:
    "Hệ thống Frontend tối ưu hiệu năng, kiến trúc Feature-Based bài bản, phong cách Tailwind CSS v4 hiện đại và hoàn toàn độc lập với kho Mock Data phong phú.",
  primaryCta: {
    label: "Khám phá Thư viện",
    href: "#items",
  },
  secondaryCta: {
    label: "Tìm hiểu Kiến trúc",
    href: "#features",
  },
  stats: [
    {
      value: "100%",
      label: "Độc lập Backend",
      description: "Chạy mượt mà với Mock Data nội bộ",
    },
    {
      value: "0.2s",
      label: "Tốc độ phản hồi",
      description: "Tối ưu hóa Server & Client Components",
    },
    {
      value: "A+",
      label: "Điểm Accessibility",
      description: "Tuân thủ tiêu chuẩn Web chuẩn mực",
    },
    {
      value: "100%",
      label: "TypeScript Strict",
      description: "An toàn kiểu dữ liệu toàn diện",
    },
  ],
};

export const siteFeaturesData: FeatureItem[] = [
  {
    id: "f1",
    title: "Feature-Based Architecture",
    description:
      "Tổ chức mã nguồn module hóa cao, cô lập nghiệp vụ theo từng tính năng độc lập, dễ bảo trì và mở rộng quy mô lớn.",
    iconName: "Layers",
    badge: "Core Pattern",
  },
  {
    id: "f2",
    title: "Tailwind CSS v4 & @theme Tokens",
    description:
      "Tận dụng toàn bộ sức mạnh của Tailwind CSS v4 với design tokens định nghĩa trực tiếp trong CSS, loại bỏ config rườm rà.",
    iconName: "Palette",
    badge: "Modern CSS",
  },
  {
    id: "f3",
    title: "Strict Form Validation",
    description:
      "Tích hợp bộ ba React Hook Form, Zod schema và Hookform Resolvers mang lại trải nghiệm nhập liệu an toàn, mượt mà.",
    iconName: "CheckCircle2",
    badge: "Type-Safe",
  },
  {
    id: "f4",
    title: "Atomic UI Component System",
    description:
      "Thư viện thành phần giao diện nguyên tử tùy biến cao với CVA (Class Variance Authority) và utility `cn` chuẩn hóa.",
    iconName: "Component",
    badge: "Design System",
  },
  {
    id: "f5",
    title: "Standalone Mock Data Engine",
    description:
      "Dịch vụ Mock Data cục bộ mô phỏng độ trễ mạng thực tế, hỗ trợ lọc, tìm kiếm, phân trang mà không cần máy chủ API.",
    iconName: "Database",
    badge: "Self-Contained",
  },
  {
    id: "f6",
    title: "Tối ưu Trải nghiệm & SEO",
    description:
      "Hỗ trợ Next.js App Router, Metadata chuẩn OpenGraph, responsive đa kích thước màn hình từ điện thoại đến desktop 4K.",
    iconName: "Sparkles",
    badge: "Fast & Fluid",
  },
];

export const siteTestimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Cấu trúc thư mục Feature-based cùng Tailwind CSS v4 mang lại cảm giác code sạch sẽ, rõ ràng và cực kỳ nhanh chóng khi cần bổ sung tính năng mới.",
    author: "Nguyễn Minh Đức",
    role: "Senior Frontend Architect",
    company: "TechNova Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Hệ thống component CVA kết hợp icon Lucide và thiết kế giao diện chuẩn mực giúp nhóm phát triển tiết kiệm đến 50% thời gian dựng UI ban đầu.",
    author: "Trần Bảo An",
    role: "Lead Product Designer",
    company: "Vanguard Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Một giải pháp mẫu tuyệt vời cho các dự án cần prototype nhanh, kiểm thử nghiệp vụ hoặc làm landing page chất lượng cao không phụ thuộc backend.",
    author: "Lê Hoàng Yến",
    role: "Engineering Director",
    company: "Nexus Labs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export const siteFaqData: FaqItem[] = [
  {
    id: "faq1",
    question: "Dự án này có cần kết nối cơ sở dữ liệu hay API bên ngoài không?",
    answer:
      "Hoàn toàn không. Toàn bộ dữ liệu được quản lý nội bộ qua file mock `.ts` với các service mô phỏng bất đồng bộ, giúp dự án chạy độc lập 100% trong mọi môi trường.",
    category: "Kiến trúc",
  },
  {
    id: "faq2",
    question: "Tailwind CSS v4 trong dự án được cấu hình như thế nào?",
    answer:
      "Dự án sử dụng `@tailwindcss/postcss` và định nghĩa trực tiếp design token bảng màu, font chữ trong block `@theme` tại `globals.css` theo chuẩn mới nhất của Tailwind CSS v4.",
    category: "Giao diện",
  },
  {
    id: "faq3",
    question: "Làm thế nào để thêm một Feature mới vào dự án?",
    answer:
      "Chỉ cần tạo thư mục trong `src/features/<tên-feature>` với 4 phần: components, hooks, services, types và export public API qua `index.ts` để các module khác dễ dàng sử dụng.",
    category: "Phát triển",
  },
  {
    id: "faq4",
    question: "Form liên hệ và phản hồi được kiểm tra tính hợp lệ bằng công cụ gì?",
    answer:
      "Dự án sử dụng React Hook Form kết hợp Zod schema và `@hookform/resolvers/zod` để đảm bảo xác thực dữ liệu chặt chẽ cả về kiểu và định dạng trước khi xử lý.",
    category: "Dữ liệu",
  },
];
