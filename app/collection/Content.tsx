import React from "react";
import ProductCard from "../components/ProductCard";
import Dropdown from "./DropDownBox";

const Content = () => {
  const collections = [
    {
      href: "/products/1",
      imageSrc: "/t_shirt_01.png",
      description: "Men Round Neck Pure Cotton T-shirt",
      price: "60",
      detail:
        "Made from 100% pure cotton, this round-neck t-shirt offers ultimate comfort and breathability.",
    },
    {
      href: "/products/2",
      imageSrc: "/t_shirt_02.png",
      description: "Women V-Neck Stylish Top",
      price: "70",
      detail:
        "A stylish v-neck top made of soft, premium fabric, perfect for casual outings and summer wear.",
    },
    {
      href: "/products/3",
      imageSrc: "/t_shirt_03.png",
      description: "Casual Denim Jacket",
      price: "90",
      detail:
        "A timeless casual denim jacket, designed for comfort and style with a classic, rugged look.",
    },
    {
      href: "/products/4",
      imageSrc: "/t_shirt_04.png",
      description: "Classic Denim Jean",
      price: "50",
      detail:
        "These classic denim jeans offer a perfect fit with durable fabric, making them ideal for everyday wear.",
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
            detail={product.detail}
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
            detail={product.detail}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
