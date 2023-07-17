import React from "react";
interface props {
  subtitle: string;
}

export function Subtitle({ subtitle }: props) {
  return <p className="leading-relaxed text-base">{subtitle}</p>;
}
