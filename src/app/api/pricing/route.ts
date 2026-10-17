import { NextResponse } from "next/server";
import { pricingDatabase } from "@/data";
import type { ProductCategory, ProductMaterial } from "@/types/product";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") as ProductCategory | null;
    const material = searchParams.get("material") as ProductMaterial | null;
    const id = searchParams.get("id");

    if (id) {
      const price = pricingDatabase.getPrice(id);
      if (!price) {
        return NextResponse.json(
          { success: false, error: "Price record not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: price });
    }

    if (category) {
      const prices = pricingDatabase.getPricesByCategory(category);
      const range = pricingDatabase.getPriceRangeByCategory(category);
      return NextResponse.json({
        success: true,
        category,
        range,
        data: prices,
      });
    }

    if (material) {
      const prices = pricingDatabase.getPricesByMaterial(material);
      return NextResponse.json({
        success: true,
        material,
        total: prices.length,
        data: prices,
      });
    }

    // Mặc định trả về toàn bộ bảng giá và ma trận giá PDF
    const allPrices = pricingDatabase.getAllPrices();
    const matrix = pricingDatabase.getPriceMatrix();

    return NextResponse.json({
      success: true,
      total: allPrices.length,
      matrix,
      data: allPrices,
    });
  } catch (error) {
    console.error("API /api/pricing error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve pricing database" },
      { status: 500 }
    );
  }
}
