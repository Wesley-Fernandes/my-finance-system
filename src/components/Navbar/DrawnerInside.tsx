import Link from "next/link";
import React from "react";

export function DrawnerInside() {
  return (
    <div className="drawer-side z-50">
      <label htmlFor="my-drawer" className="drawer-overlay" />
      <ul className="menu p-4 w-80 h-full bg-base-200 gap-1">
        <li className="w-full p-3">
          <Link href={"/Dashboard"}>Dashboard</Link>
        </li>
        <li className="w-full p-3">
          <Link href={"/Search"}>Pesquisar</Link>
        </li>
        <li className="w-full p-3">
          <Link href={"/Receipt"}>Criar novo</Link>
        </li>
        <li className="w-full p-3">
          <Link href={"/Takers"}>Tomadores</Link>
        </li>
      </ul>
    </div>
  );
}
