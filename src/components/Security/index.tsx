"use client";
import { ThemeStore } from "@modules/context/store";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Navbar from "../Navbar";
import supabase from "@modules/supabase/supabase";
import Scroller from "../Scroller";
import { ToastContainer } from "react-toastify";
interface ISecurity {
  children: any;
}

export default function Security({ children }: ISecurity) {
  const theme = ThemeStore((state) => state.theme);
  const [auth, setAuth] = React.useState<
    "loading" | "unprotected" | "not allowed" | "is allowed"
  >("loading");
  const { push } = useRouter();
  const path = usePathname();

  async function verify() {
    const user = await supabase.auth.getSession();

    if (
      (user.data.session && path == "/Login") ||
      (user.data.session && path == "/") ||
      (user.data.session && path == "/Register")
    ) {
      push("/Dashboard");
      return;
    }

    if (
      (!user.data.session && path == "/Login") ||
      (!user.data.session && path == "/") ||
      (!user.data.session && path == "/Register")
    ) {
      setAuth("unprotected");
      return;
    }

    if (
      (!user.data.session && path !== "/Login") ||
      (!user.data.session && path !== "/") ||
      (!user.data.session && path !== "/Register")
    ) {
      setAuth("not allowed");
      return;
    }

    if (
      (user.data.session && path !== "/Login") ||
      (user.data.session && path !== "/") ||
      (user.data.session && path !== "/Register")
    ) {
      setAuth("is allowed");
      return;
    }

    if (
      (!user.data.session && path == "/Login") ||
      (user.data.session && path == "/") ||
      (!user.data.session && path == "/Register")
    ) {
      setAuth("unprotected");
      return;
    }
  }

  React.useEffect(() => {
    verify();
  });

  switch (auth) {
    case "loading":
      return "carregando...";
    case "unprotected":
      return <div data-theme={theme}>
        <ToastContainer theme={theme} autoClose={3000} />
        {children}
      </div>;
    case "not allowed":
      console.log("Not allowed");
      push("/Login");
      break;
    case "is allowed":
      return (
        <div data-theme={theme}>
          <ToastContainer theme={theme} autoClose={3000} />
          <Navbar />
          <Scroller>{children}</Scroller>
        </div>
      );
  }
}
