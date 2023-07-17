import React from "react";

interface ITags {
  children: any;
}
export function Tags({ children }: ITags) {
  return <div className="flex w-full items-center mt-1 justify-around">{children}</div>;
}
