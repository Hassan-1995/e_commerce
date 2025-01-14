import React from "react";
import ProductCard from "../components/ProductCard";
import Dropdown from "./DropDownBox";

const Content = () => {
  const collections = [
    {
      href: "/collection/1",
      imageSrc: "/t_shirt_01.png",
      description: "Men Round Neck Pure Cotton T-shirt",
      price: "60",
    },
    {
      href: "/collection/2",
      imageSrc: "/t_shirt_02.png",
      description: "Women V-Neck Stylish Top",
      price: "70",
    },
    {
      href: "/collection/3",
      imageSrc: "/t_shirt_03.png",
      description: "Casual Denim Jacket",
      price: "90",
    },
    {
      href: "/collection/4",
      imageSrc: "/t_shirt_04.png",
      description: "Classic Denim Jean",
      price: "50",
    },
  ];

  const handleSelect = (selected: string) => {
    console.log("Selected option:", selected);
  };

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
        {collections.map((product) => (
          <ProductCard
            key={product.href}
            href={product.href}
            imageSrc={product.imageSrc}
            description={product.description}
            price={product.price}
          />
        ))}
        {/* </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 lg:grid-cols-4 mx-auto place-items-center"> */}
        {collections.map((product) => (
          <ProductCard
            key={product.href}
            href={product.href}
            imageSrc={product.imageSrc}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
