import Image from "next/image";
import Link from "next/link";

interface Product {
  href: string;
  imageSrc: string;
  description: string;
  detail: string;
  price: string | number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { href, imageSrc, description, detail, price } = product;

  return (
    <div className="w-full sm:w-[80%] md:w-[90%] lg:w-[80%] max-w-sm mx-auto overflow-hidden">
      <Link
        href={{
          pathname: href,
          query: { imageSrc, description, detail, price },
        }}
        className="block"
      >
        <div className="flex items-center justify-center w-full h-[50vw] sm:h-[40vw] md:h-[30vw] lg:h-[25vw] bg-transparent transition-transform duration-300 hover:scale-110">
          <Image
            src={imageSrc}
            alt={description}
            width={150}
            height={250}
            priority
            className="object-contain w-[150px] h-[250px] lg:w-[250px] lg:h-[250px]"
          />
        </div>
        <div className="w-full h-[10%] bg-gray-200 flex items-center pl-2 leading-tight">
          <p className="line-clamp-1 text-gray-900 text-sm sm:text-base">
            {description}
          </p>
        </div>
        <div className="w-full h-[5%] bg-gray-200 text-sm font-medium flex items-center pl-2 text-gray-900">
          Rs {price}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
