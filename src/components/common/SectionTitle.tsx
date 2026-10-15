import * as React from "react";
import { Badge } from "@/components/ui";
import { cn } from "@/lib";

export interface SectionTitleProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col mb-12 sm:mb-16",
        alignmentClasses[align],
        className
      )}
    >
      {badge && (
        <Badge variant="brand" size="md" className="mb-3 font-semibold">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
