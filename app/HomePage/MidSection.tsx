"use client";

import IconDisplay from "../components/IconDisplay";
import ProductCard from "../components/ProductCard";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

import { FiTruck, FiUsers } from "react-icons/fi";
import { RiExchangeFundsFill } from "react-icons/ri";
import LoadingContent from "./loading";

interface Product {
  href: string;
  imageSrc: string;
  description: string;
  price: number;
  detail: string;
}

const MidSection = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) {
    return <LoadingContent />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx- mb-10">
      <div className="flex flex-col md:mt-16 mt-10 items-center justify-center px-4">
        <h1 className="flex items-center justify-center text-lg md:text-5xl font-[500] text-center">
          <span className="text-gray-400 mr-4">LATEST </span>
          <span className="text-gray-900"> COLLECTIONS</span>
          <span className="mx-4 w-16 h-[2px] bg-gray-700 inline-block"></span>
        </h1>
        <p className="text-gray-700 mt-2 text-base sm:text-lg text-center">
          Discover the perfect blend of style and comfort with our newest
          arrivals.
        </p>
      </div>

      {/* Latest Product Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-10 mx-auto place-items-center">
        {products?.map((product) => (
          <ProductCard key={product.href} product={product} />
        ))}
        {products?.map((product) => (
          <ProductCard key={product.href} product={product} />
        ))}
      </div>

      <div className="flex flex-col md:mt-16 mt-10 items-center justify-center px-4">
        <h1 className="flex items-center justify-center text-lg md:text-5xl font-[500] text-center">
          <span className="text-gray-400 mr-4">BEST </span>
          <span className="text-gray-900"> SELLERS</span>
          <span className="mx-4 w-16 h-[2px] bg-gray-700 inline-block"></span>
        </h1>
        <p className="text-gray-700 mt-2 text-base sm:text-lg text-center">
          Discover the most loved picks of our customers, crafted for style and
          comfort.
        </p>
      </div>
      {/* Best Product Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-10 mx-auto place-items-center">
        {products?.map((product) => (
          <ProductCard key={product.href} product={product} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6 mt-24 md:grid-cols-3 mx-auto place-items-center mb-14">
        <IconDisplay
          icon={<RiExchangeFundsFill />}
          title="Easy Return Policy"
          subtitle="We provide 7 days free return policy"
        />
        <IconDisplay
          icon={<FiTruck />}
          title="Easy Return Policy"
          subtitle="Reliable and quick shipping, guaranteed safety"
        />
        <IconDisplay
          icon={<FiUsers />}
          title="Trusted Customers"
          subtitle="Join thousands who trust our quality and service"
        />
      </div>
    </div>
  );
};

export default MidSection;

const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => axios.get("/api/products").then((res) => res.data),
    staleTime: 60 * 1000, // Cache products for 1 minute
    retry: 3, // Retry failed requests up to 3 times
  });
