"use client";
import React from "react";
import Swap from "./Swap";
import supabase from "@modules/supabase/supabase";
import { useRouter } from "next/navigation";
import {BiSolidUserCircle} from 'react-icons/bi'
export function Modal() {
  const { push } = useRouter();

  const exit = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    } else {
      localStorage.removeItem("user_my_finance");
      push("/");
    }
  };
  return (
    <div className="drop-down  w-48 overflow-hidden bg-base-300 rounded-md shadow absolute top-12 right-3 z-40">
      <ul>
      <li onClick={()=>{push('/Profile')}} className="px-3 py-3 text-sm font-medium flex items-center space-x-2 text-base-content hover:bg-base-200">
          <BiSolidUserCircle fontSize={25}/>
          <span> Meu perfil </span>
        </li>
        <li>
          <Swap />
        </li>
        <li onClick={exit} className="px-3 py-3 text-sm font-medium flex items-center space-x-2 text-base-content hover:bg-base-200">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </span>
          <span> Desconectar </span>
        </li>
      </ul>
    </div>
  );
}
