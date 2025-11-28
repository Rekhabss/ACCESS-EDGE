import React from "react";

const Collection = () => {
  const products = [
    { name: "Gold Earrings" },
    { name: "Diamond Ring" },
    { name: "Gold Necklace" },
  ];

  return (
    <div className="bg-[#fff8f2] px-10 py-16">
      <h2 className="text-3xl font-bold text-[#5c4433]">Our Collection</h2>

      <div className="flex gap-8 mt-8 overflow-x-auto">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 w-[200px] h-[200px]"
          >
            <div className="w-full h-28 bg-[#d7b599] rounded-md mb-3"></div>
            <p className="text-center text-[#5c4433] font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;

