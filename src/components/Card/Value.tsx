"use client";
import React from "react";

interface IValue {
  value: number;
  children?: any;
}

export function Value({ value, children }: IValue) {
  const [numeroAtual, setNumeroAtual] = React.useState(0);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const until = value < 0 ? (0) : (value);
  const duracaoAnimacao = 2000;
  const incrementoPorIntervalo = until / (duracaoAnimacao / 10);


  React.useEffect(() => {
    const intervalo = setInterval(() => {
      setNumeroAtual((prevNumero) => {
        const novoNumero = prevNumero + incrementoPorIntervalo;
        return novoNumero >= until ? value : novoNumero;
      });
    }, 10);

    return () => clearInterval(intervalo);
  });

  
  return (
    <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
      <span>{formatter.format(numeroAtual)}</span>
      <span>{children || ""}</span>
    </p>
  );
}
