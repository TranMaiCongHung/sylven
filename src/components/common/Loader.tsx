import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib";

export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullPage?: boolean;
  className?: string;
}

export function Loader({
  size = "md",
  text = "Đang tải dữ liệu...",
  fullPage = false,
  className,
}: LoaderProps) {
  const sizeMap = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const content = (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 text-center",
        className
      )}
    >
      <Loader2
        className={cn(
          "animate-spin text-brand-600 dark:text-brand-400",
          sizeMap[size]
        )}
      />
      {text && (
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {text}
        </p>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center">
        {content}
      </div>
    );
  }

  return <div className="py-12">{content}</div>;
}
