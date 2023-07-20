"use client";
import React from "react";
import { newTaker } from "./taker-functions";
import { takerProps } from "@modules/types/takers";

interface searchProps {
  setLoading: (value: any) => void;
  setTakers: (value: any) => void;
  takers: takerProps[];
}
export default function Taker({ setLoading, setTakers, takers }: searchProps) {
  const modal = React.useRef<HTMLDialogElement>(null);

  const close = () => {
    modal.current?.close();
  };

  const show = () => {
    modal.current?.show();
  };

  async function submiter(event: React.FormEvent) {
    newTaker({ event, setLoading, setTakers, close, takers });
  }
  return (
    <>
      <section
        className="animate__animated animate__fadeIn flex items-center justify-center h-screen cursor-pointer"
        onClick={show}
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
          onSubmit={submiter}
        >
          <h3 className="font-bold text-lg">Adicionar tomador</h3>
          <input
            type="text"
            placeholder="Nome do tomador"
            name="name"
            className="input input-bordered w-full"
          />

          <textarea
            className="textarea textarea-bordered"
            name="description"
            placeholder="Descrição do tomador."
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
