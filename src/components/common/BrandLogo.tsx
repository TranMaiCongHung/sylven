import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib";

export interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  width?: number | string;
  height?: number | string;
}

export function BrandLogo({
  size,
  width,
  height,
  className,
  style,
  ...props
}: BrandLogoProps) {
  const dynamicStyle: React.CSSProperties = { ...style };
  if (width !== undefined) {
    dynamicStyle.width = typeof width === "number" ? `${width}px` : width;
  } else if (size !== undefined && !className?.includes("w-")) {
    dynamicStyle.width = `${size}px`;
  }
  if (height !== undefined) {
    dynamicStyle.height = typeof height === "number" ? `${height}px` : height;
  } else if (size !== undefined && !className?.includes("h-")) {
    dynamicStyle.height = `${size}px`;
  }

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center shrink-0 select-none",
        className
      )}
      style={dynamicStyle}
      {...props}
    >
      <Image
        src="/images/logo.png"
        alt="Sylven Brand Logo"
        fill
        sizes="(max-width: 768px) 500px, 1000px"
        priority
        className="object-contain pointer-events-none drop-shadow-sm"
      />
    </div>
  );
}
