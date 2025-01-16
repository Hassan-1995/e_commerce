// components/EmptyCart.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Image
        src="/empty-cart.png" // Replace with your empty cart image path
        alt="Empty Cart"
        width={300}
        height={300}
        className="mb-6"
      />
      <h2 className="text-2xl font-bold text-gray-700">Your Cart is Empty!</h2>
      <p className="text-gray-500 mt-2 text-center">
        Looks like you haven’t added anything to your cart yet. <br />
        Start exploring our collection and fill it up!
      </p>
      <Link
        href="/collection"
        // className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        className="bg-slate-800 text-white font-medium mt-6 px-4 py-3 rounded-sm hover:bg-slate-600"
      >
        Go to Shop
      </Link>
    </div>
  );
};

export default EmptyCart;
