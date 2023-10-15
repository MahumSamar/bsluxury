import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Sale = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 bg-[#ACB6AC] p-4 rounded-md mt-6">
      <p>THE GREAT EGEO</p>
      <p className="text-4xl font-bold">SALE</p>
      <div className="text-white">
        <p className="text-4xl text-center">UP TO 70% OFF</p>
        <p>CUSTOMIZE YOUR SHOPPING BELOW</p>
      </div>
      <button className="flex items-center gap-4 bg-white py-1 px-3 rounded-sm">
        <span className="uppercase text-xs font-bold">SHOP SALE</span>
        <ChevronRightIcon className="w-4" />
      </button>
    </div>
  );
};
