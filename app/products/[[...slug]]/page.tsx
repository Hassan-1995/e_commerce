"use client";
import Image from "next/image";
import React from "react";
import SizeSelector from "../SizeSelector";
import AddToCart from "../AddToCart";

import { useSearchParams } from "next/navigation";

const ProductDeatilPage = () => {
  const searchParams = useSearchParams();

  const imageSrc = searchParams.get("imageSrc");
  const description = searchParams.get("description");
  const detail = searchParams.get("detail");
  const price = searchParams.get("price");
  return (
    <div>
      <div className="flex px-32 my-20">
        <div className="mr-20">
          <Image
            src={imageSrc!}
            alt={description!}
            width={500}
            height={500}
            priority
            // className="object-contain"
            className="object-contain w-[150px] h-[250px] lg:w-[500px] lg:h-[500px]"
          />
        </div>
        <div className="mt-10 space-y-6">
          <p className="text-2xl font-medium">{description}</p>
          <p>Review</p>
          <p className="text-3xl font-bold">Rs {price}</p>
          <p className="text-lg w-80">{detail}</p>
          <SizeSelector />
          <AddToCart itemName={description!} />
        </div>
      </div>
    </div>
  );
};

export default ProductDeatilPage;
