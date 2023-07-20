"use client";
import { takerProps } from "@modules/types/takers";
import React from "react";

interface props {
  data: takerProps[];
  name: string;
  change: (data:number) => void;
}

export function SearchSelectTaker({ data, name, change }: props) {
  return (
    <select name={name} className="select select-bordered w-full" onChange={(e) => {
      const same = (taker: takerProps) => taker.id == Number(e.target.value);
      const index = data.findIndex(same);
      change(index);
    }}>
      <>
        {data.map((taker: takerProps) => {
          return (
            <option value={taker.id} key={taker.id}>
              {taker.name}
            </option>
          );
        })}
      </>
    </select>
  );
}
