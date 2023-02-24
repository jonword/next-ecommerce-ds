import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="lg: mt-8 flex h-screen w-full flex-col items-center justify-start gap-8 lg:mt-20 lg:flex-row lg:items-start lg:justify-evenly">
      <p className="text-2xl font-medium lg:hidden">
        Franklin Steel - Snare Drum
      </p>
      <div>
        <Image src="" alt="" className="h-[400px] w-[400px] bg-stone-200" />
      </div>
      <div className="flex flex-col gap-8 pl-4">
        <p className="hidden text-2xl font-medium lg:block">
          Franklin Steel - Snare Drum
        </p>
        <p>$850.00</p>
        <p>
          Classic vibes, versatile sound. 5x14 beaded steel shell with aged
          steel finish.
        </p>
        <div className="flex justify-center">
          <button className="bg-zinc-800 px-12 py-4 text-white">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
