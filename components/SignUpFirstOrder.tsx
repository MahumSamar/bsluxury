import React from "react";

export const SignUpFirstOrder = () => {
  return (
    <div className="bg-[#EDEDED]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between p-7 text-xs md:text-md lg:text-xl">
        <p className="font-bold">
          Sign up to receive 15% off your first order!
        </p>
        <div className="flex gap-4">
          <input type="text" className="border border-gray-400 rounded-sm text-xs p-2 md:w-52 lg:w-64" placeholder="E-mail Address" />
          <button className="flex items-center gap-4 border border-blue-950 text-blue-950 py-1 px-3 rounded-md uppercase font-bold">
            Women
          </button>
          <button className="flex items-center gap-4 border border-black py-1 px-3 rounded-md uppercase font-bold">
            Men
          </button>
        </div>
      </div>
    </div>
  );
};
