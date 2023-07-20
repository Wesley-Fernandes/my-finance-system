"use client";
import React from "react";
import { years } from "./years";
import { mouth } from "./mouths";
import { SearchSelect } from "./SearchSelect";
import { takerProps } from "@modules/types/takers";
import { DatasStore } from "@modules/context/store";
import { getTakers } from "../Taker/taker-functions";
import { SearchSelectTaker } from "./SearchSelectTaker";

interface searchProps {
  setLoading: (value: any) => void;
  setData: (value: any) => void;
}

export function SearchByID({ setLoading, setData }: searchProps) {
  const setTakers = DatasStore((state) => state.setTakers);
  const takers = DatasStore((state) => state.takers);

  React.useEffect(() => {
    if (takers.length == 0) {
      getTakers({ setLoading, setTakers });
    }
  });
  return (
    <>
      <h3 className="font-bold text-lg">Pesquisar por tomador</h3>
      <SearchSelect data={mouth} name="mouth" option="long" key={"mouth"} />
      <SearchSelect data={years} name="year" option="short" key={"year"} />
      <SearchSelectTaker data={takers}  name="takers" />
    </>
  );
}
