import React from "react";

interface props {
  submiter: (e: React.FormEvent) => void;
  children: any;
}
export default function SearchForm({ submiter, children }: props) {
  return (
    <form
      method="dialog"
      className="modal-box flex flex-col gap-2"
      onSubmit={submiter}
    >
      {children}
    </form>
  );
}
