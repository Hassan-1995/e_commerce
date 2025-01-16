"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Add a trash icon for deleting items

interface CartItem {
  id: string;
  name: string;
  size: string;
  imageSrc: string;
  quantity: number;
  price: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Retrieve the cart data from localStorage
    const storedCart = localStorage.getItem("cart");

    // Parse the cart data if available
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update cart in localStorage
  };

  const handleDeleteItem = (id: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update cart in localStorage
  };

  const handleConfirmOrder = () => {
    console.log("Order Confirmed:", cartItems);
    // You can perform additional actions here like sending the order to a server
  };

  const calculateItemTotal = (quantity: number, price: string) => {
    return quantity * parseFloat(price);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item.quantity, item.price),
      0
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 border-b pb-4"
            >
              <div className="flex items-center">
                {/* Image */}
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  width={250}
                  height={250}
                  className="object-cover rounded-lg mr-4"
                />
                {/* Product Details */}
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.size}</p>
                  <p className="font-bold text-xl">Rs {item.price}</p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center">
                <button
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() =>
                    item.quantity > 1 &&
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="w-12 text-center border border-gray-300"
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
                <button
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              {/* Delete Icon */}
              <div>
                <FaTrashAlt
                  className="text-red-500 cursor-pointer ml-4"
                  onClick={() => handleDeleteItem(item.id)}
                />
              </div>

              {/* Item Total */}
              <div className="font-bold text-xl">
                Rs {calculateItemTotal(item.quantity, item.price).toFixed(2)}
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 text-right font-semibold text-2xl">
            <p>Total: Rs {calculateTotal().toFixed(2)}</p>
          </div>

          {/* Confirmation Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleConfirmOrder}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
