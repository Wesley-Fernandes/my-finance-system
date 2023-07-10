'use client'
import React from "react";

interface IDetails {
  children: any;
}
export function Details({ children }: IDetails) {
  return <div>{children}</div>;
}
