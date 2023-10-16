"use client";
import { recommendedProducts } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef, useState } from "react";

export const RecommendedProductsCard = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (
    element: any,
    speed: any,
    distance: any,
    step: any
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div className="flex">
      <div className="flex justify-between">
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -150);
          }}
          disabled={arrowDisable}
        >
          <ChevronLeftIcon className="w-6 m-1"/>
        </button>
      </div>
      <div className="flex overflow-x-scroll overflow-hidden no-scrollbar gap-4 my-6" ref={elementRef}>
        {recommendedProducts.map((product, i) => (
          <div key={product.id} className="bg-white shadow-md my-2 rounded-md">
            <div>
              <Image
                key={i}
                alt={product.title}
                src={product.image}
                className="w-full h-full max-h-52 object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-between p-2">
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="whitespace-nowrap text-md font-bold">{product.title}</p>
              <p className="font-bold text-md">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 150);
          }}
        >
          <ChevronRightIcon className="w-6 m-1"/>
        </button>
    </div>
  );
};
