"use client";
import React, { useRef } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";
import { mouth } from "./mouths";
import { years } from "./years";
import { newSearch } from "./search";

interface IMouth {
  text: string;
  value: number;
}

interface searchProps {
  setLoading: (value: any) => void;
  setData: (value: any) => void;
}
export default function Taker({ setLoading, setData }: searchProps) {
  const modal = useRef<HTMLDialogElement>(null);

  const close = () => {
    modal.current?.close();
  };

  return (
    <>
      <section
        className="animate__animated animate__fadeIn flex items-center justify-center h-screen cursor-pointer"
        onClick={() => {
          modal.current?.showModal();
        }}
      >
        <div className="w-60 h-24 flex items-center justify-center bg-indigo-500 rounded-lg  max-[950px]:w-[calc(100vw-2rem)]">
          <div className="flex-row space-x-4 items-center flex">
            <span className="flex items-center gap-1 text-base-100 cursor-pointer">
              <span className=" text-white text-lg uppercase">
                Adicionar tomador
              </span>
            </span>
          </div>
        </div>
      </section>

      <dialog id="my_modal_1" className="modal" ref={modal}>
        <form
          method="dialog"
          className="modal-box flex flex-col gap-2"
          onSubmit={(e) => {
            newSearch({
              e,
              setLoading,
              setReceipts: setData,
              modal: modal.current,
            });
          }}
        >
          <h3 className="font-bold text-lg">Adicionar tomador</h3>
          <input
            type="text"
            placeholder="Nome do úsuario"
            className="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Email@example.com"
            className="input input-bordered w-full"
          />

          <div className="modal-action flex justify-between">
            <button type="button" className="btn" onClick={close}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Adicionar
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
