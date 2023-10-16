import React from "react";
import { Selector } from "./Selector";
import {
  category,
  color,
  numberOfColumns,
  priceSelector,
  products01,
  products02,
  products03,
  size,
} from "@/constants";
import Image from "next/image";
import { ProductsRow } from "./ProductsRow";
import { basket, basketWhite } from "@/assets";

export const Products = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#F9F9F9] p-3 my-4 rounded-sm gap-6 lg:gap-0">
        <div className="grid grid-cols-3 gap-2">
          <Selector selectorList={category} name="category"/>
          <Selector selectorList={size} name="size"/>
          <Selector selectorList={color} name="color"/>
        </div>
        <div className="grid grid-cols-2 md:flex gap-4">
          <p>3087 items</p>
          <div className="flex gap-3">
            <p>View: </p>
            {numberOfColumns.map((column, index) => (
              <Image
                key={index}
                src={column.icon}
                alt={column.name}
                className="w-7 hover:fill-gray-800 hover:cursor-pointer"
              />
            ))}
          </div>
          <div className="flex gap-3 col-span-2 ">
            <p>Sort by price: </p>
            <Selector selectorList={priceSelector} name="price"/>
          </div>
        </div>
      </div>
      <ProductsRow products={products01} columns={3} />
      <ProductsRow products={products02} columns={4} />

      {products03.map((product, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between gap-6 my-3 drop-shadow-md"
        >
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <p className="text-md text-gray-500">{product.category}</p>
                <p className="text-xl font-bold">{product.title}</p>
              </div>
              <p className="text-md text-[#303030]">{product.description}</p>
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
              <button className="w-full flex items-center justify-center gap-3 rounded-sm bg-black text-white py-2 text-md">
                <Image src={basketWhite} alt="cart" className="w-5" />
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
