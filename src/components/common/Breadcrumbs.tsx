import * as React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActiveCollection?: boolean; // Highlight with amber underline like in Image 1
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  alignment?: "center" | "left";
}

export function Breadcrumbs({
  items,
  className = "",
  alignment = "center",
}: BreadcrumbsProps) {
  const alignClass = alignment === "left" ? "justify-start" : "justify-center";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center ${alignClass} flex-wrap gap-y-2 text-[11px] sm:text-xs font-lexend tracking-[0.2em] uppercase text-stone-500 ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="mx-2.5 sm:mx-3 text-stone-300 font-light select-none">
                /
              </span>
            )}

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={`transition-colors hover:text-stone-950 ${
                  item.isActiveCollection
                    ? "text-stone-900 font-medium border-b-2 border-amber-500 pb-0.5"
                    : "text-stone-500"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`${
                  item.isActiveCollection
                    ? "text-stone-900 font-medium border-b-2 border-amber-500 pb-0.5"
                    : isLast
                    ? "text-stone-700 font-normal line-clamp-1"
                    : "text-stone-500"
                }`}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
