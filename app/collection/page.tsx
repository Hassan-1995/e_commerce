"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import Content from "./Content";

const initialCategories = [
  { label: "Men", isChecked: false },
  { label: "Women", isChecked: false },
  { label: "Kids", isChecked: false },
];
const initialTypes = [
  { label: "Topwear", isChecked: false },
  { label: "Bottomwear", isChecked: false },
  { label: "Winterwear", isChecked: false },
];

const CollectionPage = () => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const handleCategoryChange = (selectedCategory: string) => {
    if (selectedCategory) {
      console.log("Selected Category:", selectedCategory);
    } else {
      console.log("No category selected");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center sm:space-x-16 mt-12 mx-4">
      <div>
        <h1 className="text-2xl font-medium mb-10 hidden sm:block">Filter</h1>
        <button
          className="text-2xl font-medium mb-5 sm:hidden"
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
        >
          Filter
        </button>

        <div className="space-y-6 hidden sm:block">
          <Filter
            initialCategories={initialCategories}
            onCategoryChange={handleCategoryChange}
            title="CATEGORIES"
          />
          <Filter
            initialCategories={initialTypes}
            onCategoryChange={handleCategoryChange}
            title="TYPE"
          />
        </div>

        {isFilterMenuOpen && (
          <div className="space-y-6">
            <Filter
              initialCategories={initialCategories}
              onCategoryChange={handleCategoryChange}
              title="CATEGORIES"
            />
            <Filter
              initialCategories={initialTypes}
              onCategoryChange={handleCategoryChange}
              title="TYPE"
            />
          </div>
        )}
      </div>
      <Content />
    </div>
  );
};

export default CollectionPage;
