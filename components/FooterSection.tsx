import Link from "next/link";
import React from "react";

export const FooterSection = ({ title, section }: any) => {
  return (
    <div className="text-md md:text-xs lg:text-md xl:text-xl">
      <p className="font-bold">{title}</p>
      {section.map((section: any, index: any) => (
        <Link href={section.link} key={index}>
          <p className=" mt-2 hover:underline">{section.title}</p>
        </Link>
      ))}
    </div>
  );
};
