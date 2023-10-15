import React from "react";
import { Logo } from "./Logo";
import { FooterSection } from "./FooterSection";
import {
  cards,
  customerService,
  information,
  language,
  navigate,
  socials,
} from "@/constants";
import { Selector } from "./Selector";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0">
      <Logo />
      <FooterSection section={navigate} title="NAVIGATE" />
      <div>
        <FooterSection section={information} title="INFORMATION" />
        <select
          name="price"
          id="price"
          className="bg-white border border-black px-1 md:px-2 mt-4"
        >
          {language.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <FooterSection section={customerService} title="CUSTOMER SERVICE" />
      <div>
        <p className="text-xs font-bold">Follow Us</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {socials.map((social: any, index: any) => (
            <Link href={social.link} key={index}>
              <Image src={social.icon} alt={social.name} className="w-7" />
            </Link>
          ))}
        </div>
        <p className="text-xs font-bold mt-4">Payment Methods</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {cards.map((card: any, index: any) => (
            <Image key={index} src={card.icon} alt={card.name} className="w-7" />
          ))}
        </div>
      </div>
    </div>
  );
};
