'use client'
import React from "react";

interface IContainer {
  children: any;
}
export function Container({ children }: IContainer) {
  return (
    <section className="animate__animated animate__slideInLeft flex items-center justify-center h-screen">
      <div className="bg-indigo-800/90 p-6 rounded-lg max-[950px]:w-[calc(100vw-2rem)]">
      <div className="flex flex-row space-x-4 items-center">
          {children}
          </div>
      </div>
    </section>
  );
}
