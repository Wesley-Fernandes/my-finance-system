import React from "react";
interface props {
  title: string;
}
export function Title({ title }: props) {
  return (
    <h3 className="text-lg font-bold title-font mb-2 text-base-content">
      {title}
    </h3>
  );
}
