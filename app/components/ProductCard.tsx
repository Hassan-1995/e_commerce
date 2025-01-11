import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  href: string;
  imageSrc: string;
  description: string;
  price: string | number;
}

const ProductCard = ({
  href,
  imageSrc,
  description,
  price,
}: ProductCardProps) => {
  return (
    <div className="w-72 md:w-56 overflow-hidden">
      <Link href={href} className="block">
        <div className="flex items-center justify-center w-full h-72 bg-transparent transition-transform duration-300 hover:scale-110 hover:overflow-hidden">
          <Image
            src={imageSrc}
            alt={description}
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="w-full h-12 bg-gray-200 flex items-center pl-2 leading-tight">
          <p className="line-clamp-2 text-gray-900">{description}</p>
        </div>
        <div className="w-full h-6 bg-gray-200 text-sm font-medium flex items-center pl-2 text-gray-900">
          Rs {price}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
