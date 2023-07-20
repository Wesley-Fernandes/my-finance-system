import React from "react";
import { BsSearch } from "react-icons/bs";

interface props {
  show: () => void;
}

export default function SearchApressentation({ show }: props) {
  return (
    <section
      className="animate__animated animate__fadeIn flex items-center justify-center h-screen cursor-pointer"
      onClick={show}
    >
      <div className="w-24 h-24 flex items-center justify-center bg-indigo-500 rounded-lg  max-[950px]:w-[calc(100vw-2rem)]">
        <div className="flex-row space-x-4 items-center flex">
          <span className="flex items-center gap-1 text-base-100 cursor-pointer">
            <BsSearch
              fontSize={40}
              className=" max-[940px]:hidden text-white"
            />
            <span className="hidden max-[940px]:block text-white text-lg uppercase">
              Fazer uma pesquisa
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
