import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export const ProductsRow = ({ products, columns }: any) => {
  return (
    <div
      className={`grid grid-cols-1 ${
        columns == 3 ? "md:grid-cols-3 gap-12" : "md:grid-cols-4 gap-6"
      }  mt-4`}
    >
      {products.map((product: any, i: any) => (
        <div key={i} className="bg-white rounded-md shadow-md my-2">
          <div className="relative">
            <Image
              key={i}
              alt={product.title}
              src={product.image}
              className="w-full inset-0 rounded-t-md object-contain z-0"
            />
            {product.discount && (
              <div className="absolute text-white bg-black top-2 right-2 rounded-full w-12 p-1 text-center flex flex-col">
                <p>
                  <span className="text-xl font-bold">{product.discount}</span>%
                </p>
                <p className="text-xs">OFF</p>
              </div>
            )}
            <div className="opacity-0 hover:opacity-100 absolute inset-0 z-10 flex items-end justify-between px-4 bottom-3 ">
              <div className="flex items-center justify-between w-full gap-4">
                <HeartIcon className="w-10 h-8 text-center bg-white rounded-full p-1 hover:cursor-pointer" />
                <button className="w-full flex items-center justify-center gap-3 rounded-md bg-black text-white py-2 text-md">
                  ADD TO CART
                </button>
                <MagnifyingGlassIcon className="w-10 h-8 text-center bg-white rounded-full p-1 hover:cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between p-2">
            {product.colors ? (
              <div className="flex gap-2 my-2">
                {product.colors.map((color: any, index: any) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color.value }}
                    className="rounded-full w-5 h-5"
                  />
                ))}
              </div>
            ) : (
              <div className="h-9" />
            )}
            <p className="text-center text-sm xl:whitespace-nowrap lg:text-xl ">
              {product.title}
            </p>
            <div className="flex gap-4 mt-3 text-md md:text-xl">
              {product.originalPrice && (
                <p className="font-bold text-gray-400">
                  {product.originalPrice}
                </p>
              )}
              <p className="font-bold ">{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
