import React from "react";
import { DrawnerInside } from "./DrawnerInside";
import { FiMenu } from "react-icons/fi";
export default function Drawner() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle flex" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button text-white">
          <FiMenu  fontSize={30} className="text-base-content"/>
        </label>
      </div>
      <DrawnerInside />
    </div>
  );
}
