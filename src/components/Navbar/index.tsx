"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import Drawner from "./Drawner";
import supabase from "@modules/supabase/supabase";

export default function Navbar() {
  const [modal, setModal] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("http://localhost:3000/user.png");
  function toogle() {
    switch (modal) {
      case true:
        setModal(false);
        break;
      case false:
        setModal(true);
        break;
    }
  }

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return;
    } else {
      setIcon(user.user_metadata.icon);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <nav className="flex bg-base-300 border-b-2 border-base-content items-center relative justify-between px-5 py-6 w-full">
      <div className="flex items-center justify-center min-[950px]:hidden">
        <Drawner />
      </div>
      <ul
        id="drawer"
        role="menu"
        className=" sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0  sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 w-[940px]:hidden"
      >
        <li className="font-medium text-sm p-3 sm:p-0 sm:hover:bg-transparent text-primary w-[950px]:hidden">
          <Link href={"/Dashboard"} className="text-base-content">
            Dashboard
          </Link>
        </li>
        <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
          <Link href={"/Search"} className="text-base-content flex">
            Pesquisar
          </Link>
        </li>
        <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
          <Link href={"/Receipt"} className="text-base-content">
            Criar receita
          </Link>
        </li>
        <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
          <Link href={"/Takers"} className="text-base-content">
            Tomadores
          </Link>
        </li>

      </ul>
      <div className="flex gap-1 items-center">
        <div
          onClick={() => {
            toogle();
          }}
          className={`w-10 h-10 ring-primary ring-2 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center `} style={{ backgroundImage: `url('${icon}')`}}
        >
          {modal ? <Modal /> : <></>}
        </div>
      </div>
    </nav>
  );
}
