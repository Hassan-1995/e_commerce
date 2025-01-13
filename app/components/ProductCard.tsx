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
    <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[80%] max-w-sm mx-auto overflow-hidden">
      <Link href={href} className="block">
        <div className="flex items-center justify-center w-full h-[50vw] sm:h-[40vw] md:h-[30vw] lg:h-[25vw] bg-transparent transition-transform duration-300 hover:scale-110">
          <Image
            src={imageSrc}
            alt={description}
            width={500}
            height={500}
            priority
            className="object-contain"
          />
        </div>
        <div className="w-full h-[10%] bg-gray-200 flex items-center pl-2 leading-tight">
          <p className="line-clamp-2 text-gray-900 text-sm sm:text-base">
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
