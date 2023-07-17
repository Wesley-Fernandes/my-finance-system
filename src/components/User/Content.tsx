import React from "react";
interface props {
  children: any;
}
export function Content({ children }: props) {
  return <div className="flex-grow">{children}</div>;
}
