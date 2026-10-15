import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Palette,
  CheckCircle2,
  Component,
  Database,
  Star,
  Quote,
  HelpCircle,
  Code2,
} from "lucide-react";
import { Container } from "@/components/layout";
import { Button, Card, Badge } from "@/components/ui";
import { SectionTitle } from "@/components/common";
import {
  siteHeroData,
  siteFeaturesData,
  siteTestimonialsData,
  siteFaqData,
} from "@/mock/site.data";
import { ItemsExplorer, ItemInquiryForm } from "@/features/items";

const featureIcons: Record<string, React.ReactNode> = {
  Layers: <Layers className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  CheckCircle2: <CheckCircle2 className="h-6 w-6" />,
  Component: <Component className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-24 sm:pt-32 lg:pt-36">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-100/50 via-indigo-50/20 to-transparent blur-3xl -z-10 pointer-events-none dark:from-brand-950/20" />

        <Container>
          <div className="mx-auto max-w-4xl text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-xs backdrop-blur-md dark:border-brand-800 dark:bg-slate-900/80 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-500 animate-pulse" />
              <span>{siteHeroData.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.15]">
              {siteHeroData.title}{" "}
              <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {siteHeroData.highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {siteHeroData.description}
            </p>

            {/* Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href={siteHeroData.primaryCta.href}>
                <Button
                  size="lg"
                  variant="primary"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {siteHeroData.primaryCta.label}
                </Button>
              </Link>
              <Link href={siteHeroData.secondaryCta.href}>
                <Button size="lg" variant="outline">
                  {siteHeroData.secondaryCta.label}
                </Button>
              </Link>
            </div>

            {/* Key Metrics / Stats Bar */}
            <div className="mt-14 sm:mt-20 grid grid-cols-2 gap-4 rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:grid-cols-4 dark:border-slate-800 dark:bg-slate-900/60">
              {siteHeroData.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center p-2 text-center ${
                    i !== siteHeroData.stats.length - 1
                      ? "sm:border-r sm:border-slate-100 dark:sm:border-slate-800"
                      : ""
                  }`}
                >
                  <span className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ARCHITECTURE FEATURES SECTION */}
      <section id="features" className="scroll-mt-20">
        <Container>
          <SectionTitle
            badge="Kiến Trúc & Công Nghệ"
            title="Các Trụ Cột Nền Tảng Trong Dự Án"
            description="Được thiết kế dựa trên các tiêu chuẩn kỹ thuật hàng đầu, mang lại khả năng mở rộng không giới hạn và bảo trì dễ dàng."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteFeaturesData.map((feature) => (
              <Card
                key={feature.id}
                className="group relative flex flex-col p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-500/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/60 dark:text-brand-400">
                    {featureIcons[feature.iconName] || <Code2 className="h-6 w-6" />}
                  </div>
                  {feature.badge && (
                    <Badge variant="brand" size="sm">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors dark:text-white dark:group-hover:text-brand-400">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ITEMS EXPLORER FEATURE SECTION (INTERACTIVE CLIENT MODULE) */}
      <section id="items" className="scroll-mt-20">
        <Container>
          <SectionTitle
            badge="Thư Viện Bài Viết & Dự Án"
            title="Khám Phá Dữ Liệu Nội Bộ Độc Lập"
            description="Tìm kiếm theo từ khóa, lọc theo chủ đề, xem chi tiết bài viết và tương tác mượt mà thông qua Mock Data Engine."
          />

          <ItemsExplorer />
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-slate-100/60 py-16 dark:bg-slate-900/40">
        <Container>
          <SectionTitle
            badge="Cộng Đồng & Đánh Giá"
            title="Được Tin Tưởng Bởi Đội Ngũ Kỹ Sư"
            description="Những phản hồi thực tế từ các kỹ sư và chuyên gia công nghệ khi trải nghiệm kiến trúc mã nguồn chuẩn mực."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {siteTestimonialsData.map((t) => (
              <Card key={t.id} className="flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-slate-300 dark:text-slate-700" />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand-500/20">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.role} • {t.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT & FAQ SECTION */}
      <section id="about" className="scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* About Narrative */}
            <div className="space-y-6">
              <Badge variant="brand" size="md">
                Về Dự Án Sylven
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white leading-tight">
                Triết Lý Phát Triển Frontend Độc Lập & Hiện Đại
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Sylven được xây dựng nhằm cung cấp giải pháp mẫu hoàn chỉnh cho các dự án web yêu cầu tính độc lập cao, không bị nghẽn bởi tiến độ phát triển backend API.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Zero External Dependencies:</strong> Không cần chạy server backend, không lo lắng về CORS hay sự cố ngắt kết nối mạng.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Feature-Based Architecture:</strong> Tách biệt rõ ràng ranh giới nghiệp vụ, giúp nhiều lập trình viên làm việc song song hiệu quả.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Type-Safe End-to-End:</strong> Toàn bộ luồng dữ liệu, tham số bộ lọc và biểu mẫu đều được kiểm tra chặt chẽ bởi TypeScript và Zod.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Cards */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
                <HelpCircle className="h-5 w-5 text-brand-600" /> Giải Đáp Thắc Mắc
              </h3>
              {siteFaqData.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {faq.question}
                    </h4>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {faq.category}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT & INQUIRY FORM SECTION */}
      <section id="contact" className="scroll-mt-20">
        <Container>
          <SectionTitle
            badge="Liên Hệ & Tư Vấn"
            title="Kết Nối Với Đội Ngũ Kiến Trúc Sư"
            description="Biểu mẫu sử dụng React Hook Form kết hợp Zod validation. Hãy thử nhập sai dữ liệu để kiểm tra tính năng xác thực tức thì."
          />

          <ItemInquiryForm />
        </Container>
      </section>
    </div>
  );
}
