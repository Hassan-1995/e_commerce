import Image from "next/image";
import React from "react";

const Poster = () => {
  return (
    <div className="bg-gray-950 w-screen h-screen flex justify-center items-center">
      <div className="absolute bg-white opacity-35 blur-3xl w-1/2 h-1/3 rounded-full z-10" />
      <Image
        className="z-20 bg-transparent"
        src="/poster.png"
        alt="Next.js logo"
        width={250}
        height={250}
        priority
      />
      <h1 className="font-semibold text-6xl text-yellow-100 absolute bottom-20 z-30 w-full text-center">
        THE ART OF <br />
        DRESSING WELL.
      </h1>
    </div>
  );
};

export default Poster;
