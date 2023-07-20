"use client";
import { takerProps } from "@modules/types/takers";
import React from "react";

interface shortProps {
  text: string;
  value: number;
}

interface longProps {
  text: string;
  value: number;
}

interface props {
  data: longProps[] | number[];
  name: string;
  option: "short" | "long";
}
export function SearchSelect({ data, name, option }: props) {
  return (
    <select name={name} className="select select-bordered w-full">
      <>
        {option == "long" && (
          <>
            {data.map(({ text, value }: any) => {
              return (
                <option value={value} key={text}>
                  {text}
                </option>
              );
            })}
          </>
        )}

        {option == "short" && (
          <>
            {data.map((ano: any) => {
              return (
                <option value={ano} key={ano}>
                  {ano}
                </option>
              );
            })}
          </>
        )}
      </>
    </select>
  );
}
