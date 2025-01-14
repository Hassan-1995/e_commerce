"use client";
import { useState } from "react";
import { FiCheckCircle, FiCircle } from "react-icons/fi";

interface FilterProps {
  initialCategories: { label: string; isChecked: boolean }[];
  onCategoryChange: (selectedCategory: string) => void;
  title?: string;
}

const Filter = ({
  initialCategories,
  onCategoryChange,
  title = "Categories",
}: FilterProps) => {
  const [categories, setCategories] = useState(initialCategories);

  const toggleCheck = (index: number) => {
    const updatedCategories = categories.map((category, i) =>
      i === index ? { ...category, isChecked: !category.isChecked } : category
    );
    setCategories(updatedCategories);

    // Notify parent about the selected button
    if (onCategoryChange) {
      const selectedCategory = updatedCategories[index];
      if (selectedCategory.isChecked) {
        onCategoryChange(selectedCategory.label); // Pass the label of the selected category
      } else {
        onCategoryChange(""); // If unchecked, pass an empty string
      }
    }
  };

  return (
    <div className="border-2 border-zinc-500 rounded-sm shadow-md p-4 lg:w-60 md:w-48 w-full">
      <h1 className="text-lg font-medium mb-3">{title}</h1>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={category.label}>
            <button
              onClick={() => toggleCheck(index)}
              className="flex items-center text-zinc-500 hover:text-zinc-800 transition-colors duration-500"
            >
              {category.isChecked ? (
                <FiCheckCircle size={20} className="mr-2 text-blue-500" />
              ) : (
                <FiCircle size={20} className="mr-2" />
              )}
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
