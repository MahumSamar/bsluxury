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
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#F9F9F9] p-3 my-4 rounded-md gap-6 lg:gap-0">
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
        <ProductCard key={index} product={product}/>
      ))}
    </div>
  );
};
