"use client";
import { useEffect } from "react";
import { ThemeStore } from "@modules/context/store";
import React from "react";

export default function Swap() {
  const theme = ThemeStore((state) => state.theme);
  const setTheme = ThemeStore((state) => state.setTheme);

  function toogleTheme() {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
    }
  }

  return (
    <div className="form-control ">
      <label className="cursor-pointer label">
        <span className="label-text text-base-content hover:bg-base-200 ml-2">
          {theme=='light'?('Tema claro'):('Tema escuro')}
        </span>
        <input
          type="checkbox"
          className="toggle mr-2"
          checked={theme == 'light' ? (true) : (false)}
          onChange={()=>{}}
          onClick={toogleTheme}
        />
      </label>
    </div>
  );
}
