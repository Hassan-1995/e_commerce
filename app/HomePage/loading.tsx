"use client";

import IconDisplay from "../components/IconDisplay";
import { Skeleton } from "@/app/components";
// import ProductCard from "../components/ProductCard";

import { FiTruck, FiUsers } from "react-icons/fi";
import { RiExchangeFundsFill } from "react-icons/ri";

const LoadingContent = () => {
  const placeholderItems = Array(8).fill(null); // Adjust number to simulate loading cards

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
        {placeholderItems.map((_, index) => (
          <div
            key={index}
            className="w-full h-72 flex flex-col items-center justify-between bg-gray-100 rounded-lg p-4 shadow-md"
          >
            <div className="w-full h-36 bg-gray-200 rounded-md">
              <Skeleton className="h-full" />
            </div>
            <div className="w-full mt-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2 mt-2" />
            </div>
            <Skeleton className="h-8 w-1/3 mt-4" />
          </div>
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
        {placeholderItems.map((_, index) => (
          <div
            key={index}
            className="w-full h-72 flex flex-col items-center justify-between bg-gray-100 rounded-lg p-4 shadow-md"
          >
            <div className="w-full h-36 bg-gray-200 rounded-md">
              <Skeleton className="h-full" />
            </div>
            <div className="w-full mt-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2 mt-2" />
            </div>
            <Skeleton className="h-8 w-1/3 mt-4" />
          </div>
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

export default LoadingContent;
