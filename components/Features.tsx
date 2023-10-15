import { features } from "@/constants";
import React from "react";
import { FeatureCard } from "./FeatureCard";

export const Features = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="grid grid-cols-2 md:grid-cols-4 p-4 max-w-7xl mx-auto md:divide-x gap-4 md:gap-0">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};
