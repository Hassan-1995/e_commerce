"use client";
import Image from "next/image";
import React, { useState } from "react";
import SizeSelector from "../SizeSelector";
import AddToCart from "../AddToCart";

import { useSearchParams, useParams } from "next/navigation";

const ProductDetailPage = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const searchParams = useSearchParams();
  const params = useParams(); // Access the params asynchronously

  const product_id = String(params.slug); // Get the slug from the params object
  const imageSrc = searchParams.get("imageSrc");
  const description = searchParams.get("description");
  const detail = searchParams.get("detail");
  const price = searchParams.get("price");

  const handleAddToCart = () => {
    // Retrieve the cart from localStorage or initialize an empty array
    const cartData = localStorage.getItem("cart");
    const cart: Array<{
      id: string;
      name: string;
      size: string;
      imageSrc: string;
      quantity: number;
      price: string | number;
    }> = cartData ? JSON.parse(cartData) : [];

    // Check if a size is selected
    if (selectedSize === null) {
      alert(
        "You forgot to pick a size. Please pick a size first before adding an item to the cart."
      );
      return;
    }

    console.log(
      `Added to cart: ${quantity} ${description} of size ${selectedSize}`
    );

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product_id && item.size === selectedSize
    );

    if (existingItemIndex !== -1) {
      alert("This item is already in your cart.");
      return;
    }

    // Create a new cart item
    const cartItem = {
      id: product_id, // Ensure product_id is defined
      name: description!, // Non-null assertion since description is from searchParams
      size: selectedSize,
      imageSrc: imageSrc!,
      quantity: quantity,
      price: price!,
    };

    // Add the new item to the cart
    cart.push(cartItem);
    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to your cart successfully!");
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
          <p className="text-sm md:text-base">{product_id}</p>
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
