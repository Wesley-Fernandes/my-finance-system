import React from "react";

interface IDetails {
  children: any;
}
export function Details({ children }: IDetails) {
  return <div className="mt-3 flex justify-normal gap-1">{children}</div>;
}
