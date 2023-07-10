import React from "react";

interface IContainer {
  children: any;
}
export function Container({ children }: IContainer) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">{children}</div>
    </section>
  );
}
