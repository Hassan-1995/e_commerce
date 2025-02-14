import React, { useState } from "react";
import axios from "axios";

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

const OrdersTable: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const [statuses, setStatuses] = useState<{ [key: number]: string }>(
    orders.reduce((acc, order) => ({ ...acc, [order.id]: order.status }), {})
  );

  const handleStatusChange = (orderId: number, newStatus: string) => {
    setStatuses((prev) => ({ ...prev, [orderId]: newStatus }));
  };

  const updateStatus = async (orderId: number) => {
    try {
      const response = await axios.put("/api/orders", {
        orderId,
        status: statuses[orderId],
      });

      if (response.status === 200) {
        alert("Status updated successfully!");
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("An error occurred while updating status.");
    }
  };

  return (
    <div className="p-4">
      {/* Table for Desktop & Tablet */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">
                Customer Email
              </th>
              <th className="border border-gray-300 px-4 py-2">Product ID</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Updated At</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {order.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.userEmail}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.productId}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Rs {order.total_price.toFixed(0)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      value={statuses[order.id]}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className="border p-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(order.updatedAt).toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => updateStatus(order.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">
                  Order ID: {order.id}
                </span>
                <span className="text-sm font-semibold text-blue-600">
                  {statuses[order.id]}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Customer:</span>{" "}
                  {order.userEmail}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Product ID:</span>{" "}
                  {order.productId}
                </p>
                <p className="text-gray-700 text-sm font-semibold">
                  Total: Rs {order.total_price.toFixed(0)}
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Updated: {new Date(order.updatedAt).toLocaleString()}
              </p>
              <div className="mt-2">
                <select
                  value={statuses[order.id]}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border p-1 rounded w-full"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Delivered">Delivered</option>
                </select>
                <button
                  onClick={() => updateStatus(order.id)}
                  className="mt-2 bg-blue-500 text-white w-full py-1 rounded"
                >
                  Update
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrdersTable;
