import { basketWhite } from "@/assets";
import Image from "next/image";
import React from "react";

export const ProductCard = ({ product }: any) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 md:gap-6 my-6 shadow-md rounded-md">
      {product.discount && (
        <div className="absolute text-white bg-black top-2 right-2 rounded-full w-12 p-1 text-center flex flex-col">
          <p>
            <span className="font-xl font-bold">{product.discount}</span>%
          </p>
          <p className="text-xs">OFF</p>
        </div>
      )}
      <div>
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        <div className="lg:col-span-2 flex flex-col justify-center">
          <div className="mb-6">
            <p className="text-md text-gray-500">{product.category}</p>
            <p className="text-xl font-bold">{product.title}</p>
          </div>
          <p className="text-md text-[#303030]">{product.description}</p>
          {product.colors && (
            <div className="flex gap-2 my-2">
              {product.colors.map((color: any,index:any) => (
                <div
                  key={index}
                  style={{ backgroundColor: color.value }}
                  className="rounded-full w-5 h-5"
                />
              ))}
            </div>
          )}
          <p className="mt-6 hover:underline">View Full Details</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 font-bold">
          <div className="flex gap-4">
            {product.originalPrice && (
              <p className="font-bold text-gray-400 text-xl">
                {product.originalPrice}
              </p>
            )}
            <p className="text-xl">{product.price}</p>
          </div>
          <button className="w-full flex items-center justify-center gap-3 rounded-md bg-black text-white py-2 text-md">
            <Image src={basketWhite} alt="cart" className="w-5" />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
