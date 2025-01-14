"use client";
import React from "react";

interface SizeSelectorProps {
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  setSelectedSize,
}) => {
  const sizes = ["S", "M", "L", "XL", "XXL"]; // Size options

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size); // Update the selected size in the parent component
    console.log(`Selected size: ${size}`); // Log the selected size
  };

  return (
    <div className="space-y-5">
      <p className="text-lg">Select Size</p>
      <div className="flex space-x-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeSelect(size)}
            className={`px-4 py-2 rounded border-2 ${
              selectedSize === size
                ? "border-slate-900 bg-black text-white"
                : "border-gray-300 bg-white"
            } transition duration-200 ease-in-out hover:border-gray-500`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
