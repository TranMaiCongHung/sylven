import * as React from "react";
import { FolderSearch } from "lucide-react";
import { cn } from "@/lib";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title = "Không tìm thấy dữ liệu",
  description = "Không có kết quả nào phù hợp với bộ lọc hiện tại của bạn. Hãy thử thay đổi từ khóa tìm kiếm.",
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/50 p-8 text-center backdrop-blur-xs md:p-12 dark:border-slate-800 dark:bg-slate-900/40",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 shadow-inner dark:bg-slate-800 dark:text-slate-400">
        {icon || <FolderSearch className="h-7 w-7 stroke-[1.5]" />}
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
