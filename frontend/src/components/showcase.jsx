import React from "react";

const Showcase = () => {
  return (
    <div className="p-10 bg-white flex flex-col md:flex-row gap-10 items-center">
      <div className="w-[300px] h-[250px] bg-[#d7b599] rounded-xl"></div>

      <div className="flex-1">
        <h2 className="text-3xl font-bold text-[#5c4433]">The Art Of Radiant Refinement</h2>
        <p className="text-[#5c4433] mt-4">
          Explore premium jewelry that blends craftsmanship with modern elegance.
        </p>
        <button className="mt-5 bg-[#5c4433] text-white px-6 py-2 rounded-full">
          Explore Now
        </button>
      </div>

      <div className="w-[200px] h-[200px] bg-[#e8d5c3] rounded-xl"></div>
    </div>
  );
};

export default Showcase;
