'use client'

import React from "react";
import { newReceipt } from "./new";

export default function Receipt() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-90px)]">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto">
          <form className="max-w-md pl-2 pr-2" onSubmit={newReceipt}>
            <div className="mb-6">
              <h3 className="text-base">Selecionar o titulo</h3>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Titulo do recibo"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-base">Selecionar o valor</h3>
              <input
                type="number"
                name="coust"
                step="any"
                id="coust"
                placeholder="Valor (em numeros)"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-base">Selecionar a tag</h3>
              <select name="category" className="select select-bordered w-full">
                <option value="Hobbies">Hobbies</option>
                <option value="Lazer">Lazer</option>
                <option value="Serviços">Serviço</option>
                <option value="Alimentos">Alimentos</option>
                <option value="Projetos">Projetos</option>
                <option value="Roupas">Roupas</option>
                <option value="Ferias">Ferias</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="text-base">Selecionar o tipo</h3>
              <select name="type" className="select select-bordered w-full">
                <option value="Lucros">Lucros</option>
                <option value="Gastos">Gastos</option>
              </select>
            </div>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="text-base">Descrição da tarefa</h3>
              </div>
              <textarea
                name="about"
                id="about"
                placeholder="Faça uma breve descrição..."
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Criar tarefa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
