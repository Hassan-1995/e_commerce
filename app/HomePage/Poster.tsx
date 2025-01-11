import Image from "next/image";
import React from "react";

const Poster = () => {
  return (
    <div className="bg-gray-950 w-screen lg:h-screen flex justify-center items-center">
      <div className="absolute bg-white opacity-35 blur-3xl w-1/2 h-1/3 rounded-full z-10" />
      <div className="z-30 justify-center items-center flex flex-col m-10">
        <Image
          className=""
          src="/poster.png"
          alt="Next.js logo"
          width={250}
          height={250}
          priority
        />
        <h1 className="font-semibold md:text-6xl text-3xl text-yellow-100 bottom-20 z-20 w-full text-center">
          THE ART OF <br />
          DRESSING WELL.
        </h1>
      </div>
    </div>
  );
};

export default Poster;
