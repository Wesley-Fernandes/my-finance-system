"use client";
import Swap from "@modules/components/Navbar/Swap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { fileChange, register } from "./register";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState<any>();
  const [image, setImage] = useState<any>("/user");
  const { push } = useRouter();

  async function submiter(event: FormEvent) {
    register({ event, picture, push, setLoading });
  }

  async function changeImage(event: FormEvent) {
    fileChange({ event, setImage, setPicture });
  }

  return (
    <div className="flex min-h-screen justify-center items-center ">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-indigo-500 font-bold text-5xl">
              MY FINANCE
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Crie sua conta para ter acesso
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={submiter}>
              <div className="flex justify-center">
                <div className="avatar">
                  <div className="w-24 mask mask-squircle">
                    <img src={image || "user.png"} />
                  </div>
                </div>
              </div>
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text">Escolha sua foto</span>
                </label>
                <input
                  type="file"
                  onChange={changeImage}
                  className="file-input file-input-bordered w-full"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Meu nome
                </label>
                <input
                  type="name"
                  required
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="pix"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Meu pix
                </label>
                <input
                  type="text"
                  required
                  name="pix"
                  id="pix"
                  placeholder="Seu pix code para pagamentos"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Senha
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  id="password"
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Registrar-se
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Já tem uma conta?{" "}
                <Link
                  href={"/Login"}
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  Faça login agora
                </Link>
                .
              </p>
            </form>
            <hr className="mt-5" />
            <Swap />
          </div>
        </div>
        <p className="uppercase text-center text-base-content mb-5">
          Versão: 1.1.0
        </p>
      </div>
    </div>
  );
}
