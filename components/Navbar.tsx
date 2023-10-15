import React from "react";
import { navLinks, priceSelector } from "../constants";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Selector } from "./Selector";

export const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-10 py-4">
        {navLinks.map((nav) => (
          <Link
            href="/"
            key={nav.id}
            className="hover:text-gray text-xs font-medium cursor-pointer"
          >
            {nav.title}
          </Link>
        ))}
      </div>
      <div className="bg-[#F9F9F9] rounded-sm flex items-center justify-between py-4 px-3 text-xs">
        <div className="flex gap-1 md:gap-2 ">
          <Link href="/">Home</Link>
          <ChevronRightIcon className="text-gray-500 w-4" />
          <Link href="/">Shop</Link>
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <p><span className="font-bold">3087</span> items</p>
          <p>|</p>
          <p>Sort by price:</p>
          <Selector selectorList={priceSelector}/>
        </div>
      </div>
    </>
  );
};
