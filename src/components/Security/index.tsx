"use client";
import { ThemeStore } from "@modules/context/store";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Scroller from "../Scroller";
import { ToastContainer } from "react-toastify";
import authenticate from "./authenticate";
import Loader from "../Loader";
interface ISecurity {
  children: any;
}
type authProps = {
  auth: "loading" | "unprotected" | "not allowed" | "is allowed";
}
export default function Security({ children }: ISecurity) {
  const theme = ThemeStore((state) => state.theme);
  const [auth, setAuth] = useState<"loading" | "unprotected" | "not allowed" | "is allowed">("loading");
  const { push } = useRouter();
  const path = usePathname();

  useEffect(() => {
    (authenticate.haveSession({ path, setAuth }))
  });

  switch (auth) {
    case "loading":
      return <Loader/>
    case "unprotected":
      return (
        <div data-theme={theme}>
          <ToastContainer theme={theme} autoClose={3000} />
          {children}
        </div>
      );
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
