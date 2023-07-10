import React from "react";
interface IProps {
  children: any;
}
export function Details({ children }: IProps) {
  return (
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      {children}
    </div>
  );
}
