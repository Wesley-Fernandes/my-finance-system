import Link from "next/link";
import React from "react";

export function Jumper() {
  return (
    <Link href={""} className="mt-3 text-indigo-500 inline-flex items-center">
      Deixar recado
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  );
}
