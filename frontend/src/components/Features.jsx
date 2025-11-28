import React from "react";

const Features = () => {
  const items = [
    "Free Shipping",
    "Exclusive Design",
    "Good Packaging",
    "Highest Quality",
  ];

  return (
    <div className="bg-white py-10 flex flex-wrap justify-around gap-6 px-5">
      {items.map((feature, index) => (
        <div
          key={index}
          className="text-center bg-[#fff8f2] shadow-md p-5 rounded-lg w-40"
        >
          <h3 className="text-[#5c4433] font-semibold">{feature}</h3>
        </div>
      ))}
    </div>
  );
};

export default Features;
