import React from "react";
import { BsClock } from "react-icons/bs";
import { format } from "date-fns";
interface props {
  date: string;
}
export function Hour({ date }: props) {
  const data = new Date(date);
  const formated = format(data, 'hh:mm') + 'h';
  return (
    <span className="flex items-center text-sm w-fit px-2 rounded text-base-100 bg-base-content">
      <BsClock className="mr-1" /> {formated}
    </span>
  );
}
