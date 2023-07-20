import React from "react";

interface props {
  loading: boolean;
  close: () => void;
}
export function SearchButtons({ loading, close }: props) {
  return (
    <div className="modal-action flex justify-between">
      <button type="button" className="btn" onClick={close}>
        Fechar
      </button>
      <button type="submit" className="btn btn-primary w-32">
        {loading ? (
          <span className="loading loading-spinner loading-xs" />
        ) : (
          "Pesquisar"
        )}
      </button>
    </div>
  );
}
