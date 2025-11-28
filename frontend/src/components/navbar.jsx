import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-10 flex justify-between items-center bg-[#f8f3ed]">
      <h1 className="text-2xl font-bold text-[#5c4433]">Shimmer</h1>

      <ul className="hidden md:flex gap-10 text-[#5c4433] font-medium">
        <li>Home</li>
        <li>Collection</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>

      <button className="bg-[#5c4433] text-white px-6 py-2 rounded-full">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
