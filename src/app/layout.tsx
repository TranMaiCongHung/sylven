import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { siteConfig } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js 15",
    "React 19",
    "Tailwind CSS v4",
    "TypeScript",
    "Frontend Architecture",
    "Mock Data",
    "Clean Code",
  ],
  authors: [{ name: "Sylven Studio" }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-surface-50 overflow-x-hidden max-w-full">
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
