'use client'
import React from "react";

interface ISymbol {
  children: any;
}

export function Symbol({ children }: ISymbol) {
  return <span>{children}</span>;
}
