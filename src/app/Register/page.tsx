"use client";
import Swap from "@modules/components/Navbar/Swap";
import supabase from "@modules/supabase/supabase";
import { IImgbb } from "@modules/types/imgbb";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

export default function Register() {
  const [loading, setLoading] = React.useState(false);
  const [picture, setPicture] = React.useState<any>();
  const [image, setImage] = React.useState<any>("/user");
  const { push } = useRouter();

  async function register(event: FormEvent) {
    event.preventDefault();

    setLoading(true);

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      name: { value: string };
      pix: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;
    const username = target.name.value;
    const pix = target.pix.value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          pix,
          icon: "",
          deleteICON: "",
        },
      },
    });

    if (error) {
      console.error(error.message);
      return;
    } else {
      axios
        .post(
          encodeURI(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`
          ),
          picture
        )
        .then(async (result) => {
          const response: IImgbb = result.data;

          const { data: userData, error } = await supabase.auth.updateUser({
            data: {
              icon: response.data.thumb.url,
              deleteICON: response.data.delete_url,
            },
          });

          if (error) {
            console.log(error.message);
          } else {
            alert("usuario criado com sucesso");
            push("/Dashboard");
            return;
          }
        });
    }
  }

  const fileChange = (event: FormEvent) => {
    const target: any = event.target;

    const arquive = target.files[0];
    const reader = new FileReader();
    const form_data = new FormData();
    form_data.append("image", arquive);
    form_data.append("name", "user image");

    setPicture(form_data);

    reader.onload = () => {
      const image64 = reader.result;
      setImage(image64);
    };

    if (arquive) {
      reader.readAsDataURL(arquive);
    }
  };
  return (
    <div className="flex h-screen justify-center items-center ">
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
            <form onSubmit={register}>
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
                  onChange={fileChange}
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
      </div>
    </div>
  );
}
