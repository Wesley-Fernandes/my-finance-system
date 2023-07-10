"use client";
import React from "react";

interface ITitle {
  title: string;
}
export function Title({ title }: ITitle) {
  return (
    <p className="text-secondary text-sm font-medium uppercase leading-4">
      {title}
    </p>
  );
}
