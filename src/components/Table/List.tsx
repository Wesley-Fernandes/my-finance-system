import React from "react";

interface IList {
  children: any;
}
export function List({ children }: IList) {
  return <div className="flex flex-wrap -m-4">{children}</div>;
}
