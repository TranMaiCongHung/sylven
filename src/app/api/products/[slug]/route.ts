import { NextResponse } from "next/server";
import { productRepository } from "@/data";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const product =
      (await productRepository.getProductBySlug(slug)) ||
      (await productRepository.getProductById(slug));

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found in database" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("API /api/products/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const body = await request.json();

    if (body.price === undefined || typeof body.price !== "number") {
      return NextResponse.json(
        { success: false, error: "Invalid price: must be a number" },
        { status: 400 }
      );
    }

    const updated = await productRepository.updateProductPrice(slug, body.price);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Product not found to update price" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Price updated successfully in database",
      data: updated,
    });
  } catch (error) {
    console.error("API /api/products/[slug] PATCH error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update product price" },
      { status: 500 }
    );
  }
}
