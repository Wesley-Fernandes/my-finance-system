import React from "react";
import {FaUserTie} from 'react-icons/fa'
interface props{
  imageURL: string;
}

export function Icon({imageURL}: props) {
  return (
    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 overflow-hidden border-primary border">
      <div className="p-2 bg-base-300 rounded-full text-primary h-full w-full flex items-start justify-center">
        <FaUserTie  size={70}/>
      </div>
    </div>
  );
}
