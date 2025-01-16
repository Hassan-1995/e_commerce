"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ProductCard from "../components/ProductCard";
import Dropdown from "./DropDownBox";
import LoadingContent from "./loading";

// Define the Product type to match the backend structure
interface Product {
  href: string;
  imageSrc: string;
  description: string;
  price: number;
  detail: string;
}

const Content = () => {
  const { data: products, error, isLoading } = useProducts();

  const handleSelect = (selected: string) => {
    console.log("Selected option:", selected);
    toast.success(`Selected option: ${selected}`);
  };

  if (isLoading) {
    return <LoadingContent />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <div className="flex justify-between mb-10">
        <h1 className="flex flex-wrap items-center text-lg md:text-3xl font-[500] mr-4">
          <span className="text-gray-400 sm:mr-4 mr-2">ALL</span>
          <div className="flex items-center flex-wrap">
            <span className="text-gray-900">COLLECTIONS</span>
            <span className="mx-4 w-16 h-[2px] bg-gray-700 hidden sm:inline-block"></span>
          </div>
        </h1>
        <Dropdown
          options={[
            "Sort by: Relevant",
            "Sort by: Low to High",
            "Sort by: High to Low",
          ]}
          placeholder="Choose an option"
          onSelect={handleSelect}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-5 mx-auto place-items-center">
        {products?.map((product) => (
          <ProductCard key={product.href} product={product} />
        ))}
        {products!.map((product) => (
          <ProductCard key={product.href} product={product} />
        ))}
      </div>
      <Toaster />
    </div>
  );
};

export default Content;

const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => axios.get("/api/products").then((res) => res.data),
    staleTime: 60 * 1000, // Cache products for 1 minute
    retry: 3, // Retry failed requests up to 3 times
  });
