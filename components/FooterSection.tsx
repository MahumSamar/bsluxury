import Link from "next/link";
import React from "react";

export const FooterSection = ({ title, section }: any) => {
  return (
    <div>
      <p className="text-xs font-bold">{title}</p>
      {section.map((section: any, index: any) => (
        <Link href={section.link} key={index}>
          <p className="text-xs mt-2 hover:underline">{section.title}</p>
        </Link>
      ))}
    </div>
  );
};
