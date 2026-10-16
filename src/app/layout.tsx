import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "SYLVEN",
    "Trang sức công nghệ",
    "Upcycled Jewelry",
    "Trang sức tái sinh",
    "Titanium F136",
    "Bạc 925",
    "Cyberpunk Jewelry",
    "TechDNA",
  ],
  authors: [{ name: "SYLVEN Group 02" }],
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
    <html lang="vi">
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-surface-50 overflow-x-hidden max-w-full">
        <LanguageProvider>
          <Header />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
