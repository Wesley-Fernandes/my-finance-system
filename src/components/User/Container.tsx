import React from "react";

interface props {
  children: any;
}

export function Container({ children }: props) {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col w-[800px] max-[820px]:w-[390px] max-[400px]:w-[350px]">
        {children}
      </div>
    </div>
  );
}
