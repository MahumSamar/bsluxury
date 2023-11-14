import { basket, shipping } from "../assets";
import Image from "next/image";
import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="bg-[#DBE5DB] flex justify-center items-center gap-5 md:gap-6 p-3">
        <Image priority src={shipping} alt="Shipping icon" className="w-8" />
        <p className="text-xs md:text-md lg:text-xl font-bold">
          FREE SHIPPING ON ORDERS OF $50 OR MORE
        </p>
        <p className="text-xs lg:text-md">DETAILS</p>
      </div>
      <div className="md:relative flex items-center justify-between md:justify-center border-b p-3 max-w-7xl mx-auto">
        <Logo />
        <div className="md:absolute md:right-3 flex gap-4">
          <Link href="/">
            <span className="text-md uppercase">Sign in/ Sign up</span>
          </Link>
          <p>|</p>
          <div className="relative">
            <Image priority src={basket} alt="cart" className="w-5"/>
            <div className="absolute top-0 -right-2">
              <p className="flex h-1 w-1 items-center justify-center rounded-full bg-black p-2 text-[12px] text-white">
                3
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
