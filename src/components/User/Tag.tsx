import React from "react";

interface ITag {
  title: string;
  value: number;
  children: any;
}

export function Tag({ children, value, title}: ITag) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className={`badge badge-lg `} title={title}>
      {children}
      {formatter.format(value)}
    </div>
  );
}
