import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-[#f2e6d8] px-10 py-20 flex flex-col md:flex-row items-center gap-10">
      <div>
        <h1 className="text-5xl font-bold text-[#5c4433] leading-snug">
          Our Luxury <br /> Collections
        </h1>

        <p className="mt-4 text-[#5c4433] w-3/4">
          Discover premium jewelry crafted with elegance and style for every occasion.
        </p>

        <button className="mt-6 bg-[#5c4433] text-white px-6 py-3 rounded-full">
          Visit Collection
        </button>
      </div>

      <div className="rounded-xl overflow-hidden w-[350px] h-[350px] bg-[#d7b599]">
        {/* Image Placeholder */}
      </div>
    </div>
  );
};

export default Hero;
