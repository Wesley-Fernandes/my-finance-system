import React from "react";
import { format } from "date-fns";
import { BsCalendarDate } from "react-icons/bs";
interface props {
  date: string;
}
export function Dates({ date }: props) {
  const data = new Date(date);
  const formated = format(data, "dd/MM/yyyy");
  return (
    <span className="flex items-center text-sm w-fit px-2 rounded text-base-100 bg-base-content">
      <BsCalendarDate className="mr-1" /> {formated}
    </span>
  );
}
