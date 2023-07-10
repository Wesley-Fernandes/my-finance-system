import React from "react";

interface IScroller {
  children: any;
}
export default function Scroller({ children }: IScroller) {
  return (
    <div style={{ height: "calc(100vh - 90px)", overflowY: "scroll" }}>
      {children}
    </div>
  );
}
