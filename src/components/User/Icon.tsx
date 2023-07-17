import React from "react";

interface props{
  imageURL: string;
}

export function Icon({imageURL}: props) {
  return (
    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 overflow-hidden border-primary border">
      <img src={imageURL} alt="user image" className=" object-cover object-center" />
    </div>
  );
}
