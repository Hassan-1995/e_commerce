"use client";
import { Skeleton } from "@/app/components";
import Dropdown from "./DropDownBox";

const LoadingContent = () => {
  const placeholderItems = Array(8).fill(null); // Adjust number to simulate loading cards

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
          onSelect={() => {}}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-5 mx-auto place-items-center">
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
    </div>
  );
};

export default LoadingContent;
