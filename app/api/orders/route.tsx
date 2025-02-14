import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userEmail, orderData } = body; // Extract data from request

    if (!userEmail || !orderData || orderData.length === 0) {
      return NextResponse.json(
        { error: "Invalid request. Missing userEmail or orderData." },
        { status: 400 }
      );
    }

    // Ensure all required fields are present in orderData
    const validOrders = orderData.map((item: any) => ({
      userEmail, // Correct field name (not userId)
      productId: Number(item.productId), // Convert to integer
      quantity: item.quantity,
      product_price: item.product_price,
      total_price: item.total_price,
      status: item.status || "Pending", // Default status if not provided
      createdAt: item.createdAt ? new Date(item.createdAt) : new Date(),
      updatedAt: item.updatedAt ? new Date(item.updatedAt) : new Date(),
    }));

    if (validOrders.length === 0) {
      return NextResponse.json(
        { error: "No valid order data provided." },
        { status: 400 }
      );
    }

    // Insert all orders using Prisma transaction
    const orders = await prisma.$transaction(
      validOrders.map((order: any) => prisma.order.create({ data: order }))
    );

    return NextResponse.json(
      { message: "Order placed successfully", orders },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating order:", error);

    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const orders = await prisma.order.findMany();
  return NextResponse.json(orders);
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, status } = body;

    if (!orderId || !status) {
      return NextResponse.json(
        { error: "Missing orderId or status." },
        { status: 400 }
      );
    }

    // Update order status using Prisma
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status, updatedAt: new Date() },
    });

    return NextResponse.json(
      { message: "Order status updated successfully", updatedOrder },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating order status:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
