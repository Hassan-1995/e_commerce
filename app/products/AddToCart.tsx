"use client";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const AddToCart = ({ itemName }: { itemName: string }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    console.log(`Added to cart: ${quantity} of ${itemName}`);
    // Perform additional logic, like updating a cart context or API call
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev)); // Prevent quantity < 1

  return (
    <div className="mt-5 space-y-5 rounded-md w-40">
      <div className="flex items-center mb-4">
        <button
          onClick={decrementQuantity}
          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-l-md"
        >
          <FiMinus />
        </button>
        <span className="px-4 py-1 border-y border-gray-300">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-r-md"
        >
          <FiPlus />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="bg-slate-800 text-white font-medium  px-4 py-3 rounded-sm w-full hover:bg-slate-600"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
