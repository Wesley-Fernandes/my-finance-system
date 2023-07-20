"use client";
import React from "react";
import { searchByDate, searchByIdentification } from "./search-functions";
import { SearchByDate } from "./SearchByDate";
import { SearchByID } from "./SearchByID";
import { SearchButtons } from "./SearchButtons";
import SearchOptions from "./SearchOptions";
import SearchForm from "./SearchForm";
import SearchApressentation from "./SearchApressentation";
import { DatasStore } from "@modules/context/store";
import { getTakers } from "../Taker/taker-functions";

interface searchProps {
  setLoading: (value: any) => void;
  setData: (value: any) => void;
  loading: boolean;
}
export default function SearchComponent({
  setLoading,
  setData,
  loading,
}: searchProps) {
  const modal = React.useRef<HTMLDialogElement>(null);
  const [option, setOption] = React.useState(false);

  const close = () => {
    modal.current?.close();
  };

  const show = () => {
    modal.current?.show();
  };

  async function submiter(event: React.FormEvent) {
    if (option) {
      searchByIdentification({
        e: event,
        setLoading,
        setReceipts: setData,
        modal: modal.current,
      });
    } else {
      searchByDate({
        e: event,
        setLoading,
        setReceipts: setData,
        modal: modal.current,
      });
    }
  }

  return (
    <>
      <SearchApressentation show={show} />
      <dialog id="my_modal_1" className="modal" ref={modal}>
        <SearchForm submiter={submiter}>
          <SearchOptions first="Por tomador" second="Por data" setOption={setOption} />
          {!option ? (
            <SearchByDate setData={setData} setLoading={setLoading} />
          ) : (
            <SearchByID setData={setData} setLoading={setLoading} />
          )}
          <SearchButtons loading={loading} close={close} />
        </SearchForm>
      </dialog>
    </>
  );
}
