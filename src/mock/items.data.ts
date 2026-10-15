/**
 * Mock data for items/articles/topics
 */

export interface ItemAuthor {
  name: string;
  role: string;
  avatar: string;
}

export type ItemCategory =
  | "frontend"
  | "architecture"
  | "performance"
  | "ui-ux"
  | "security";

export interface Item {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: ItemCategory;
  categoryLabel: string;
  tags: string[];
  coverImage: string;
  author: ItemAuthor;
  publishDate: string;
  readTime: string;
  viewsCount: number;
  likesCount: number;
  featured: boolean;
  status: "published" | "draft";
}

export const mockCategories: Array<{
  id: ItemCategory | "all";
  label: string;
  description: string;
}> = [
  { id: "all", label: "Tất cả chủ đề", description: "Toàn bộ bài viết và dự án mẫu" },
  { id: "frontend", label: "Frontend", description: "Next.js, React 19, TypeScript và hệ sinh thái web" },
  { id: "architecture", label: "Kiến trúc", description: "Feature-based, module design, clean code" },
  { id: "performance", label: "Hiệu năng", description: "Tối ưu tốc độ tải trang, Core Web Vitals, SSR/SSG" },
  { id: "ui-ux", label: "UI / UX", description: "Hệ thống thiết kế, Tailwind CSS v4, component nguyên tử" },
  { id: "security", label: "Bảo mật", description: "Validation dữ liệu, CSP, phòng chống lỗ hổng Client" },
];

export const mockItemsData: Item[] = [
  {
    id: "item-1",
    slug: "chinh-phuc-nextjs-15-app-router-va-react-19",
    title: "Chinh phục Next.js 15 App Router & React 19: Những Thay Đổi Mang Tính Cách Mạng",
    summary:
      "Khám phá các tính năng mới đột phá trong Next.js 15: Server Actions ổn định, Async Request APIs, React Compiler tích hợp và cách cấu trúc App Router hiệu quả.",
    content:
      "Next.js 15 đánh dấu một bước tiến nhảy vọt trong hành trình phát triển ứng dụng web hiện đại. Sự kết hợp chặt chẽ với React 19 mang đến các cải tiến sâu sắc về Server Components, tối ưu hóa quá trình hydrate và đơn giản hóa việc quản lý trạng thái luồng dữ liệu.\n\nTrong bài viết này, chúng ta sẽ phân tích chi tiết cơ chế hoạt động của Turbopack mới, quy chuẩn sử dụng async headers/cookies, và phương pháp tổ chức thư mục linh hoạt cho các dự án quy mô vừa và lớn.",
    category: "frontend",
    categoryLabel: "Frontend",
    tags: ["Next.js 15", "React 19", "Server Components", "Turbopack"],
    coverImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Trần Anh Tuấn",
      role: "Lead Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    },
    publishDate: "2026-03-28",
    readTime: "7 phút",
    viewsCount: 3840,
    likesCount: 295,
    featured: true,
    status: "published",
  },
  {
    id: "item-2",
    slug: "kien-truc-feature-based-chuan-muc-cho-du-an-lon",
    title: "Kiến trúc Feature-Based: Chiến Lược Tổ Chức Mã Nguồn Bền Vững",
    summary:
      "Tạm biệt cấu trúc phân loại theo layer truyền thống. Hướng dẫn chi tiết cách nhóm theo tính năng kinh doanh (Feature) giúp cô lập logic và tăng tốc đội ngũ phát triển.",
    content:
      "Khi quy mô dự án mở rộng, việc đặt tất cả components vào một thư mục dùng chung thường dẫn đến tình trạng coupling phức tạp và khó bảo trì.\n\nKiến trúc Feature-Based giải quyết triệt để vấn đề này bằng cách gom nhóm `components`, `hooks`, `services`, `types` của từng nghiệp vụ vào một khối thống nhất và chỉ công khai những gì cần thiết qua file `index.ts` trung gian.",
    category: "architecture",
    categoryLabel: "Kiến trúc",
    tags: ["Feature-Based", "Clean Code", "Design Pattern", "Scalability"],
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Lê Minh Tâm",
      role: "Software Architect",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    },
    publishDate: "2026-03-15",
    readTime: "9 phút",
    viewsCount: 2910,
    likesCount: 188,
    featured: true,
    status: "published",
  },
  {
    id: "item-3",
    slug: "tailwind-css-v4-kham-pha-suc-manh-theme-tokens",
    title: "Tailwind CSS v4 & @theme Tokens: Kỷ Nguyên Mới Của Utility-First",
    summary:
      "Không còn file tailwind.config.js phức tạp. Tìm hiểu cách Tailwind CSS v4 định nghĩa biến CSS原生, tối ưu hóa CSS engine Oxide và tăng tốc độ biên dịch lên 10 lần.",
    content:
      "Tailwind CSS v4 được viết lại hoàn toàn bằng Rust và CSS-first paradigm. Thay vì viết các cấu hình trong JavaScript, lập trình viên định nghĩa biến trực tiếp trong khối `@theme` của file CSS.\n\nĐiều này không chỉ giúp việc tùy biến màu sắc, font chữ và breakpoint trở nên tự nhiên hơn mà còn mang lại khả năng tích hợp vượt trội với CSS variables của trình duyệt hiện đại.",
    category: "ui-ux",
    categoryLabel: "UI / UX",
    tags: ["Tailwind v4", "CSS Tokens", "Design System", "Oxide Engine"],
    coverImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Vũ Phương Mai",
      role: "Design Technologist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    },
    publishDate: "2026-03-02",
    readTime: "6 phút",
    viewsCount: 4520,
    likesCount: 340,
    featured: true,
    status: "published",
  },
  {
    id: "item-4",
    slug: "quan-ly-form-an-toan-voi-react-hook-form-va-zod",
    title: "Xử Lý Biểu Mẫu Chuẩn Mực Với React Hook Form & Zod Validation",
    summary:
      "Bảo đảm an toàn kiểu dữ liệu từ phía Client. Kỹ thuật kết hợp Hook Form Resolvers để tạo các biểu mẫu nhập liệu mượt mà, phản hồi tức thì và không bị re-render thừa.",
    content:
      "Việc xử lý biểu mẫu người dùng luôn tiềm ẩn nhiều thách thức về mặt hiệu năng và độ tin cậy của dữ liệu.\n\nSử dụng Zod Schema cho phép bạn định nghĩa các ràng buộc về kiểu dữ liệu (từ độ dài chuỗi, định dạng email, số điện thoại đến các quy tắc validation logic phức tạp) và tự động suy luận TypeScript types mà không cần viết lặp mã nguồn.",
    category: "frontend",
    categoryLabel: "Frontend",
    tags: ["React Hook Form", "Zod", "Validation", "TypeScript"],
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Nguyễn Hải Đăng",
      role: "Senior Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    },
    publishDate: "2026-02-20",
    readTime: "8 phút",
    viewsCount: 2150,
    likesCount: 162,
    featured: false,
    status: "published",
  },
  {
    id: "item-5",
    slug: "toi-uu-hoa-core-web-vitals-cho-website-toc-do-cao",
    title: "Tối Ưu Hóa Core Web Vitals: Bí Quyết Đạt Điểm 100 Trên Lighthouse",
    summary:
      "Chiến lược kiểm soát LCP, INP và CLS thực chiến. Cách quản lý tài nguyên font chữ, tải lười hình ảnh thế hệ mới và hạn chế main-thread blocking.",
    content:
      "Google đã chính thức đưa INP (Interaction to Next Paint) vào hệ thống Core Web Vitals cốt lõi thay thế FID. Để đảm bảo trải nghiệm người dùng đạt độ mượt mà tối đa, các kỹ sư frontend cần phải nắm vững kỹ thuật debounce, scheduler yield và lazy load thông minh.\n\nTìm hiểu các bước tinh chỉnh layout shift và optimize font swap để website luôn tải nhanh như chớp.",
    category: "performance",
    categoryLabel: "Hiệu năng",
    tags: ["Core Web Vitals", "Lighthouse", "LCP", "INP", "Web Performance"],
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Đặng Quang Huy",
      role: "Performance Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    publishDate: "2026-02-10",
    readTime: "10 phút",
    viewsCount: 5200,
    likesCount: 412,
    featured: true,
    status: "published",
  },
  {
    id: "item-6",
    slug: "atomic-design-voi-cva-va-tailwind-merge",
    title: "Xây Dựng Thư Viện UI Nguyên Tử Với CVA & Tailwind Merge",
    summary:
      "Tạo ra các component tái sử dụng linh hoạt như Button, Input, Card với hệ thống variant mạnh mẽ, giải quyết triệt để xung đột class Tailwind.",
    content:
      "Việc xây dựng UI Component System đòi hỏi tính nhất quán cao và khả năng mở rộng không giới hạn.\n\nSự kết hợp giữa Class Variance Authority (CVA) để quản lý ma trận variants/sizes và `clsx` + `tailwind-merge` (thông qua hàm trợ giúp `cn`) chính là tiêu chuẩn vàng của ngành công nghiệp hiện nay để tạo nên các component chuẩn headless và thân thiện với developer.",
    category: "ui-ux",
    categoryLabel: "UI / UX",
    tags: ["CVA", "Design Tokens", "Tailwind Merge", "Atomic Design"],
    coverImage:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Phạm Thu Hương",
      role: "UI Engineer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    publishDate: "2026-01-29",
    readTime: "5 phút",
    viewsCount: 3100,
    likesCount: 220,
    featured: false,
    status: "published",
  },
  {
    id: "item-7",
    slug: "bao-mat-ung-dung-frontend-xss-va-data-sanitization",
    title: "Bảo Vệ Ứng Dụng Frontend: Xử Lý Lỗ Hổng XSS & Kiểm Duyệt Nhập Liệu",
    summary:
      "Các nguyên tắc bảo mật trọng yếu mà mọi kỹ sư frontend cần ghi nhớ: Content Security Policy, phòng ngừa XSS trong React và xác thực nghiêm ngặt dữ liệu Client.",
    content:
      "Mặc dù React mặc định escape các chuỗi hiển thị, các rủi ro bảo mật vẫn xuất hiện khi sử dụng `dangerouslySetInnerHTML`, href không kiểm tra giao thức `javascript:` hoặc dữ liệu từ localStorage.\n\nBài viết cung cấp các giải pháp thiết thực để thiết lập hàng rào phòng thủ nhiều lớp vững chắc cho client web.",
    category: "security",
    categoryLabel: "Bảo mật",
    tags: ["Security", "XSS", "CSP", "Sanitization"],
    coverImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Lý Gia Khang",
      role: "AppSec Specialist",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    },
    publishDate: "2026-01-14",
    readTime: "8 phút",
    viewsCount: 1980,
    likesCount: 145,
    featured: false,
    status: "published",
  },
  {
    id: "item-8",
    slug: "chuyen-doi-sang-standalone-frontend-khong-can-backend-live",
    title: "Xây Dựng Bản Demo Khách Hàng Hoàn Hảo Với Mock Data Tự Chứa",
    summary:
      "Kỹ thuật tạo ứng dụng demo độc lập, có thể trình diễn mọi kịch bản nghiệp vụ (lọc, tìm kiếm, lưu trữ tạm) mà không cần cấu hình database hay server phức tạp.",
    content:
      "Trong giai đoạn thẩm định ý tưởng (PoC) hoặc gửi demo cho khách hàng, việc phụ thuộc vào backend live có thể gây ra nhiều sự cố không mong muốn do mạng hoặc hạ tầng.\n\nSử dụng kiến trúc Standalone Mock Data Engine giúp ứng dụng chạy mượt mà ở mọi nơi, dễ dàng deploy lên Vercel/Netlify hoặc phân phối mã nguồn dạng trọn gói.",
    category: "architecture",
    categoryLabel: "Kiến trúc",
    tags: ["Mock Data", "Standalone", "PoC", "Rapid Prototyping"],
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Trần Anh Tuấn",
      role: "Lead Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    },
    publishDate: "2026-01-05",
    readTime: "6 phút",
    viewsCount: 3670,
    likesCount: 280,
    featured: false,
    status: "published",
  },
];
