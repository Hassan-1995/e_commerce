import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-12 md:px-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-500">Our Brand</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          We craft stylish and comfortable apparel, from trendy shirts to
          timeless denim jackets. Our mission is to bring high-quality,
          fashion-forward clothing to individuals who love to express
          themselves.
        </p>
      </div>

      {/* Images & Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
        <Image
          src="/t_shirt_03.png"
          alt="Stylish Apparel"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Designed for Comfort & Style
          </h2>
          <p className="text-gray-600">
            Our collection is curated with care, ensuring every piece reflects
            premium craftsmanship and attention to detail. Whether you&apos;re
            looking for a casual everyday outfit or a bold fashion statement, we
            have something for you.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Sustainability & Quality
        </h2>
        <p className="text-gray-600 text-lg">
          We believe in ethical fashion. Our products are made with sustainable
          materials and responsible sourcing, ensuring quality that lasts while
          minimizing environmental impact.
        </p>
      </div>
    </div>
  );
};

export default About;
