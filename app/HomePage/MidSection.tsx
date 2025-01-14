import IconDisplay from "../components/IconDisplay";
import ProductCard from "../components/ProductCard";

import { RiExchangeFundsFill } from "react-icons/ri";
import { FiUsers, FiTruck } from "react-icons/fi";

const MidSection = () => {
  const products = [
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
        {products.map((product) => (
          <ProductCard
            key={product.href}
            href={product.href}
            imageSrc={product.imageSrc}
            description={product.description}
            price={product.price}
          />
        ))}
        {products.map((product) => (
          <ProductCard
            key={product.href}
            href={product.href}
            imageSrc={product.imageSrc}
            description={product.description}
            price={product.price}
          />
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
        {products.map((product) => (
          <ProductCard
            key={product.href}
            href={product.href}
            imageSrc={product.imageSrc}
            description={product.description}
            price={product.price}
          />
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
