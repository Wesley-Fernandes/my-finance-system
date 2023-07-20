import React from "react";

interface props{
  name: string;
}

export function Title({name}: props) {
  return (
    <h2 className="text-base-content text-lg title-font font-medium">
      {name}
    </h2>
  );
}
