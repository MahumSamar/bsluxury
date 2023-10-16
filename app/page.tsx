import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { RecommendedProducts } from "@/components/RecommendedProducts";
import { Sale } from "@/components/Sale";
import { SignUp } from "@/components/SignUp";
import { SignUpFirstOrder } from "@/components/SignUpFirstOrder";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-7xl mx-auto px-3">
        <Navbar />
        <SignUp />
        <Sale />
        <RecommendedProducts />
        <Products />
      </div>
      <Features/>
      <SignUpFirstOrder />
      <Footer />
      <div className="bg-[#F4F4F4] flex justify-center items-center p-3">
        <p className="text-[14px]">
        All Rights Reserved © 2019
        </p>
      </div>
    </main>
  );
}
