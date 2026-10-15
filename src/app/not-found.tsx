import Link from "next/link";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui";
import { Container } from "@/components/layout";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
          <FileQuestion className="h-8 w-8" />
        </div>
        <span className="mt-4 font-mono text-sm font-bold tracking-widest text-brand-600 dark:text-brand-400">
          404 ERROR
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
          Trang Không Tồn Tại
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Đường dẫn bạn vừa truy cập có thể đã bị di chuyển, xóa hoặc tạm thời không khả dụng trong hệ thống.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/">
            <Button
              variant="primary"
              leftIcon={<Home className="h-4 w-4" />}
            >
              Quay lại Trang Chủ
            </Button>
          </Link>
          <Link href="#items">
            <Button
              variant="outline"
              leftIcon={<ArrowLeft className="h-4 w-4" />}
            >
              Khám phá Thư viện
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
