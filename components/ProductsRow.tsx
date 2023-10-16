import Image from "next/image";
import React from "react";

export const ProductsRow = ({ products, columns }: any) => {
  return (
    <div
      className={`grid grid-cols-1 ${
        columns == 3 ? "md:grid-cols-3" : "md:grid-cols-4"
      }  gap-12 mt-4`}
    >
      {products.map((product: any, i: any) => (
        <div key={i} className="bg-white rounded-sm drop-shadow-md my-2">
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
              key={i}
              alt={product.title}
              src={product.image}
              className="w-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-between p-2">
            {product.colors ? (
              <div className="flex gap-2 my-2">
                {product.colors.map((color: any) => (
                  <div
                    key={color}
                    style={{ backgroundColor: color.value }}
                    className="rounded-full w-5 h-5"
                  />
                ))}
              </div>
            ) : <div className="h-9"/>}
            <p className="text-center text-sm lg:whitespace-nowrap lg:text-md font-bold">
              {product.title}
            </p>
            <div className="flex gap-4">
              {product.originalPrice && (
                <p className="font-bold text-gray-400 text-md">
                  {product.originalPrice}
                </p>
              )}
              <p className="font-bold text-md">{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
