import Image from "next/image";
import React from "react";

export const ProductsRow = ({ products, columns }: any) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-12 mt-4`}>
      {products.map((product: any, i: any) => (
        <div key={i} className="bg-white rounded-sm drop-shadow-md my-2">
          <div>
            <Image
              key={i}
              loading="lazy"
              alt={product.title}
              src={product.image}
              className="w-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-between p-2">
            <p className="whitespace-nowrap text-md font-bold">
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
