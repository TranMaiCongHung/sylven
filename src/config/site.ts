import { ROUTES } from "@/constants";

export const siteConfig = {
  name: "SYLVEN",
  title: "SYLVEN",
  description:
    "SYLVEN là thương hiệu trang sức định hướng thiết kế (design-led), kết hợp Bạc 925 và Titanium F136 chuẩn y sinh cùng linh kiện điện tử tuyển chọn được bọc resin an toàn, mang đến dấu ấn cá nhân và câu chuyện tuần hoàn độc bản.",
  url: "https://sylven.dev",
  ogImage: "/images/og-image.png",
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  navItems: [
    { label: "Trang chủ", href: ROUTES.HOME },
    { label: "Khám phá", href: ROUTES.ITEMS },
    { label: "Tính năng", href: ROUTES.FEATURES },
    { label: "Giới thiệu", href: ROUTES.ABOUT },
    { label: "Liên hệ", href: ROUTES.CONTACT },
  ],
  footerLinks: [
    {
      title: "Sản phẩm & Giải pháp",
      links: [
        { label: "Thư viện bài viết", href: ROUTES.ITEMS },
        { label: "Hệ sinh thái kiến thức", href: ROUTES.FEATURES },
        { label: "Mẫu giao diện Next.js", href: ROUTES.HOME },
        { label: "Tài liệu kỹ thuật", href: "#" },
      ],
    },
    {
      title: "Về Sylven",
      links: [
        { label: "Sứ mệnh cốt lõi", href: ROUTES.ABOUT },
        { label: "Đội ngũ phát triển", href: ROUTES.ABOUT },
        { label: "Lộ trình công nghệ", href: "#" },
        { label: "Cơ hội nghề nghiệp", href: "#" },
      ],
    },
    {
      title: "Hỗ trợ & Pháp lý",
      links: [
        { label: "Chính sách bảo mật", href: "#" },
        { label: "Điều khoản dịch vụ", href: "#" },
        { label: "Trợ giúp & FAQ", href: "#" },
        { label: "Gửi phản hồi", href: ROUTES.CONTACT },
      ],
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
