import React from "react";

const CategorySelector = () => {
  const categories = ["Ring", "Bracelet", "Necklace"];

  return (
    <div className="px-10 py-12 bg-white">
      <h2 className="text-3xl font-bold text-[#5c4433]">Choose The Type!</h2>

      <div className="flex gap-6 mt-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-[#fff8f2] p-5 rounded-full w-28 text-center shadow-md"
          >
            <p className="text-[#5c4433] font-semibold">{cat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
