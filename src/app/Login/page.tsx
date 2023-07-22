"use client";
import Swap from "@modules/components/Navbar/Swap";
import { tryLogin } from "./login-functions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const { push } = useRouter();

  async function submiter(e: FormEvent) {
    tryLogin({ event: e, setLoading, push });
  }

  return (
    <div className="flex items-center min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-indigo-500 font-bold text-5xl">
              MY FINANCE
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Entre para ter acesso a sua conta
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={submiter}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  E-mail
                </label>
                <input
                  type="email"
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
                    Password
                  </label>
                  <Link
                    href={"/Login"}
                    className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300 hidden"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*******"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Fazer login
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Ainda não tem conta?{" "}
                <Link
                  href={"/Register"}
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  Crie uma agora
                </Link>
                .
              </p>
            </form>
            <hr className="mt-5" />
            <Swap />
          </div>
        </div>
        <p className="uppercase text-center text-base-content">Versão: 1.1.0</p>
      </div>
    </div>
  );
}
