import { NextResponse } from "next/server";
import { productRepository } from "@/data";
import type { ProductCategory, ProductMaterial } from "@/types/product";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const category = searchParams.get("category") as ProductCategory | "all" | null;
    const material = searchParams.get("material") as ProductMaterial | "all" | null;
    const search = searchParams.get("search") || undefined;
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const sortBy = searchParams.get("sortBy") as "newest" | "price_asc" | "price_desc" | "title" | null;
    const limitParam = searchParams.get("limit");
    const offsetParam = searchParams.get("offset");

    const minPrice = minPriceParam ? parseInt(minPriceParam, 10) : undefined;
    const maxPrice = maxPriceParam ? parseInt(maxPriceParam, 10) : undefined;
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;
    const offset = offsetParam ? parseInt(offsetParam, 10) : undefined;

    const products = await productRepository.getAllProducts({
      category: category || undefined,
      material: material || undefined,
      search,
      minPrice,
      maxPrice,
      sortBy: sortBy || undefined,
      limit,
      offset,
    });

    return NextResponse.json({
      success: true,
      total: products.length,
      data: products,
    });
  } catch (error) {
    console.error("API /api/products error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve products from database" },
      { status: 500 }
    );
  }
}
