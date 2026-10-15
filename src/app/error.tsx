"use client";

import * as React from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui";
import { Container } from "@/components/layout";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("App Error Boundary caught an error:", error);
  }, [error]);

  return (
    <Container className="py-24 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center rounded-3xl border border-rose-200 bg-white p-8 shadow-xl dark:border-rose-900/50 dark:bg-slate-900">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
          Đã Xảy Ra Lỗi Bất Ngờ
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Hệ thống gặp sự cố trong quá trình kết xuất giao diện. Hãy thử tải lại trang hoặc kiểm tra lại thông tin.
        </p>
        <div className="mt-6 flex gap-3">
          <Button
            variant="primary"
            onClick={() => reset()}
            leftIcon={<RefreshCcw className="h-4 w-4" />}
          >
            Thử tải lại
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
          >
            Về trang chủ
          </Button>
        </div>
      </div>
    </Container>
  );
}
