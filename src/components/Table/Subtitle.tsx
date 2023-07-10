import React from "react";
interface IProps {
  subtitle: string;
}

export function Subtitle({ subtitle }: IProps) {
  return <p className="lg:w-1/2 w-full leading-relaxed">{subtitle}</p>;
}
