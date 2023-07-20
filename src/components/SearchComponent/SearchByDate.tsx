import React  from "react";
import { years } from "./years";
import { mouth } from "./mouths";
import { SearchSelect } from "./SearchSelect";


interface searchProps {
  setLoading: (value: any) => void;
  setData: (value: any) => void;
}

export function SearchByDate({ setLoading, setData }: searchProps) {

  return (
    <>
      <h3 className="font-bold text-lg">Pesquisar por mês</h3>
      <SearchSelect data={mouth} name="mouth" option="long" key={"mouth"} />
      <SearchSelect data={years} name="year" option="short" key={"year"} />
    </>
  );
}
