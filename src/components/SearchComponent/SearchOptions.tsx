import React from "react";

interface props {
  setOption: (value: boolean) => void;
  first: string;
  second: string;
}

export default function SearchOptions({ setOption, first, second }: props) {
  return (
    <div className="flex justify-around">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text pr-1">{first}</span>
          <input
            type="radio"
            name="radio-10"
            onClick={() => {
              setOption(true);
            }}
            className="radio checked:bg-red-500"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text pr-1">{second}</span>
          <input
            type="radio"
            name="radio-10"
            onClick={() => {
              setOption(false);
            }}
            className="radio checked:bg-blue-500"
            defaultChecked
          />
        </label>
      </div>
    </div>
  );
}
