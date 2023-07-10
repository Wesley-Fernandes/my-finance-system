'use client'
import React from "react";
interface IIcon {
  children: any;
}

export function Icon({ children }: IIcon) {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div id="stats-1">{children}</div>
    </div>
  );
}
