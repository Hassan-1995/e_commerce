"use client";
import Image from "next/image";
import React, { useState } from "react";
import SizeSelector from "../SizeSelector";
import AddToCart from "../AddToCart";

import { useSearchParams } from "next/navigation";

const ProductDetailPage = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const searchParams = useSearchParams();

  const imageSrc = searchParams.get("imageSrc");
  const description = searchParams.get("description");
  const detail = searchParams.get("detail");
  const price = searchParams.get("price");

  const handleAddToCart = () => {
    if (selectedSize !== null) {
      console.log(
        `Added to cart: ${quantity} ${description} of size ${selectedSize}`
      );
    }
    // Perform additional actions like sending data to a backend, etc.
  };

  return (
    <div className="px-4 lg:px-32 my-16">
      <div className="flex flex-col lg:flex-row lg:space-x-20">
        {/* Image Section */}
        <div className="mb-8 lg:mb-0">
          <Image
            src={imageSrc!}
            alt={description!}
            width={500}
            height={500}
            priority
            className="object-contain w-full h-[250px] sm:h-[350px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-6 pb-10">
          <p className="text-xl md:text-2xl font-medium">{description}</p>
          <p className="text-sm md:text-base">Review</p>
          <p className="text-2xl md:text-3xl font-bold">Rs {price}</p>
          <p className="text-base md:text-lg w-full lg:w-96">{detail}</p>

          {/* Size Selector */}
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          {/* Add to Cart */}
          <AddToCart
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddToCart={handleAddToCart}
          />

          <span className="w-96 h-[1px] bg-gray-700 md:w-full shadow-sm inline-block"></span>

          <p className="text-slate-600 leading-loose">
            100% Original product. <br />
            Cash on delivery is available on this product. <br />
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
