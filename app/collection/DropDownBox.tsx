"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect: (selected: string) => void;
}

const Dropdown = ({
  options,
  placeholder = "Select an option",
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Notify parent of the selection
  };

  return (
    <div className="relative inline-block ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex text-sm justify-between items-center w-full px-2 py-2 text-left bg-white border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedOption || placeholder}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {isOpen && (
        <ul className="absolute left-0 w-full mt-0 bg-white border border-gray-300 rounded-sm shadow-lg max-h-60 overflow-auto z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
