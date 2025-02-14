"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OrdersTable from "./OrdersTable";
import LoadingContent from "./loading";

interface Order {
  id: number;
  userEmail: string;
  productId: number;
  quantity: number;
  product_price: number;
  total_price: number;
  status: string;
  updatedAt: string;
}

const Orders = () => {
  const { data: orders, error, isLoading } = useOrders();

  if (isLoading) {
    return <LoadingContent />;
  }

  if (error instanceof Error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders List</h1>
      <OrdersTable orders={orders || []} />
    </div>
  );
};

export default Orders;

// Custom Hook to Fetch Orders
const useOrders = () =>
  useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: () => axios.get("/api/orders").then((res) => res.data),
    staleTime: 60 * 1000, // Data is considered fresh for 1 minute
    retry: 3, // Retry fetching up to 3 times on failure
  });
