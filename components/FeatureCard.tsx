import Image from "next/image";
import React from "react";

export const FeatureCard = ({ feature }: any) => {
  return (
    <div className="grid grid-cols-3 px-2 ">
      <Image src={feature.icon} alt={feature.title} className=" w-8 h-8 md:w-10 md:h-10"/>
      <div className="col-span-2">
        <p className="text-xs md:text-md font-bold">{feature.title}</p>
        <p className="text-xs">{feature.description}</p>
      </div>
    </div>
  );
};
