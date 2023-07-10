"use client";
import React from "react";
import {Modal} from "./Modal";

interface IContainer {
  children: any;
  data: any;
}
export function Container({ children, data }: IContainer) {
  const dialogREF = React.useRef<HTMLDialogElement>(null);

  const close = () => {
    if (dialogREF.current) {
      dialogREF.current.close();
    }
  };

  const open = () => {
    if (dialogREF.current) {
      dialogREF.current.show();
    }
  }
    return (
      <>
        <div className="xl:w-1/3 md:w-1/2 p-4 drop-shadow-md w-full">
          <div className="border border-base-300 p-6 rounded-lg cursor-pointer hover:border-indigo-500 ease-in-out duration-1000" onClick={()=>{dialogREF?.current?.showModal()}}>
            {children}
          </div>
        </div>

        <dialog ref={dialogREF} className="modal">
          <Modal data={data}/>
        </dialog>
      </>
    );
  };

