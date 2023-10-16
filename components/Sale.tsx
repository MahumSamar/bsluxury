import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Sale = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 bg-[#ACB6AC] p-4 rounded-md mt-6">
      <p className="lg:text-xl">THE GREAT EGEO</p>
      <p className="text-4xl lg:text-5xl font-bold">SALE</p>
      <div className="text-white">
        <p className="text-4xl text-center">UP TO 70% OFF</p>
        <p>CUSTOMIZE YOUR SHOPPING BELOW</p>
      </div>
      <button className="flex items-center gap-4 bg-white py-1 px-3 rounded-md">
        <span className="uppercase text-xs lg:text-xl font-bold">SHOP SALE</span>
        <ChevronRightIcon className="w-4" />
      </button>
    </div>
  );
};
