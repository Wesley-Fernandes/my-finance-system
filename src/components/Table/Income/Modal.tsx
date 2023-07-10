import { DatasStore } from "@modules/context/store";
import supabase from "@modules/supabase/supabase";
import { receiptProps } from "@modules/types/receipts";
import React from "react";

interface props {
  data: receiptProps;
}

export function Modal({ data }: props) {
  const [modal, setModal] = React.useState(false);

  const datas = DatasStore((state) => state.datas);
  const setDatas = DatasStore((state) => state.setDatas);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });


  const exclude = async () => {
    const { error } = await supabase
      .from("receipts")
      .delete()
      .eq("id", data.id);
    if (error) {
      throw new Error(error.message);
    } else {
      const newdata = datas.filter((item) => item.id != data.id);
      setDatas(newdata);
      console.log("Data apagada com sucesso!");
    }
  };

  const valueToShow = formatter.format(data.coust);
  console.log(valueToShow);
  return (
    <form
      method="dialog"
      className="modal-box overflow-visible flex flex-col gap-1"
    >
      <h3 className="font-bold text-lg">{data.title}</h3>
      <hr className="mt-1 mb-1" />

      <div className="mb-6">
        <h3 className="text-base">Valor</h3>
        <input
          type="text"
          name="title"
          id="title"
          value={valueToShow}
          disabled
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-base">Categoria</h3>
        <select name="category" className="select select-bordered w-full" disabled>
          <option value={data.category}>{data.category}</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-base">Tipo</h3>
        <select name="type" className="select select-bordered w-full" disabled>
          <option value={data.type}>{data.type}</option>
        </select>
      </div>

      <div className="mb-6">
        <div className="flex justify-between">
          <h3 className="text-base">Descrição</h3>
        </div>
        <textarea
          name="about"
          id="about"
          disabled
          value={data.about}
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>

      <div className="modal-action flex justify-center items-center">
        <div className="join join-horizontal w-full">
          <button
            type="button"
            onClick={exclude}
            className="btn join-item flex flex-1 btn-primary"
          >
            Deletar
          </button>
          <button className="btn join-item flex flex-1">Fechar</button>
        </div>
      </div>
    </form>
  );
}
