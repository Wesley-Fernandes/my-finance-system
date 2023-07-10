import React from "react";
import { BsFillTagFill } from "react-icons/bs";
interface props{
  value: number;
  type: "Gastos" | "Lucros";
}

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
export function Value({type,value}:props) {
  return (
    <div className="flex justify-between items-center">
      <div className="p-2 bg-base-300 rounded-full text-primary">
        <BsFillTagFill />
      </div>
      <h2 className="text-lg p-2 bg-base-300 text-base-content rounded">
        {" "}
        {type=='Gastos'?('-'):('+')} {formatter.format(value)}
      </h2>
    </div>
  );
}
