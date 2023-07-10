import React from "react";
interface IProps {
  title: string;
}

export function Title({ title }: IProps) {
  return (
    <h1 className="sm:text-3xl text-2xl title-font mb-2 uppercase font-bold text-base-content">
      {title}
    </h1>
  );
}
