import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productRepository } from "@/data";
import { ProductDetailView } from "./ProductDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await productRepository.getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product =
    (await productRepository.getProductBySlug(slug)) ||
    (await productRepository.getProductById(slug));

  if (!product) {
    return {
      title: "SYLVEN",
      description: "Tác phẩm trang sức công nghệ đương đại độc bản SYLVEN.",
    };
  }

  return {
    title: "SYLVEN",
    description: `${product.title} - ${product.subtitle.vi}. Giá ước tính: ${product.formattedPrice}. Chế tác thủ công từ vi mạch tái sinh và kim hoàn quý.`,
    openGraph: {
      title: `${product.title} | SYLVEN`,
      description: product.subtitle.vi,
      images: [
        {
          url: product.image,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product =
    (await productRepository.getProductBySlug(slug)) ||
    (await productRepository.getProductById(slug));

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
