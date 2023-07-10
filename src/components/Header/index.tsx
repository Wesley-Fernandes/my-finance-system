"use client";
import React, { useEffect, useRef, useState } from "react";

interface IHeader {
  children: any;
}

export default function Header({ children }: IHeader) {
  const [quantity, setQuantity] = useState<number>(0);
  const [sw, setSw] = useState<number>(0);
  const header = useRef<HTMLDivElement>(null);
  //96*quantity
  useEffect(() => {
    if (header.current) {
      const q = header.current.querySelectorAll("section");
      const w = header.current.offsetWidth;
      if (q.length) {
        setQuantity(q.length + 1);
        setSw(w)
      }
    }
  });
  return (
    <div
      ref={header}
      style={{height: sw>940?120:96*quantity}}
      className={`bg-base-300
        w-full
        flex
        gap-1
        items-center
        justify-around
        max-[950px]:flex-col
        max-[950px]:justify-start
        max-[950px]:gap-1 p-2 h-40`}
    >
      {children}
    </div>
  );
}
