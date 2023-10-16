import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export const SignUp = () => {
  return (
    <div className="flex items-center justify-between bg-[#F3F3F3] py-2 px-6 mt-10 text-xs md:text-md lg:text-xl">
      <p className="">Sign up for news & get 20% off</p>
      <button className="flex items-center gap-4 border border-black py-1 px-3 rounded-md">
        <span className="uppercase font-bold">Get Started</span>
        <ChevronRightIcon className="w-4" />
      </button>
    </div>
  );
};
