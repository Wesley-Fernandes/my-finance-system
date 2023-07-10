"use client";
import Swap from "@modules/components/Navbar/Swap";
import supabase from "@modules/supabase/supabase";
import { IImgbb } from "@modules/types/imgbb";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect } from "react";

interface userProps {
  id: string | undefined;
  deleteICON: string;
  icon: string;
  pix: string;
  username: string;
}

export default function Profile() {
  const [user, setUser] = React.useState<userProps | null>();
  const [picture, setPicture] = React.useState<any>("");
  const [image, setImage] = React.useState<any>("");
  const { push } = useRouter();

  async function register(event: FormEvent) {
    if (!event) {
      throw new Error("Event is missing");
    } else {
      (async function protectedRegister() {
        event.preventDefault();

        const target = event.target as typeof event.target & {
          email: { value: string };
          password: { value: string };
          name: { value: string };
          pix: { value: string };
        };

        const username = target.name.value;
        const pix = target.pix.value;

        if (user?.icon != image) {
          axios
            .post(
              encodeURI(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`
              ),
              picture
            )
            .then(async (result) => {
              const response: IImgbb = result.data;
              const { data, error: userError } = await supabase.auth.updateUser(
                {
                  data: {
                    username: username || user?.username,
                    pix: pix || user?.pix,
                    icon: response.data.thumb.url,
                    deleteICON: response.data.delete_url,
                  },
                }
              );
              if (userError) {
                console.error(userError.message);
                return;
              } else {
                alert("usuario atualizado com sucesso");
                return;
              }
            });
        } else {
          const { data, error: userError } = await supabase.auth.updateUser({
            data: {
              username: username || user?.username,
              pix: pix || user?.pix,
              icon: user?.icon,
              deleteICON: user?.deleteICON,
            },
          });
          if (userError) {
            console.error(userError.message);
            return;
          } else {
            alert("usuario atualizado com sucesso");
            return;
          }
        }
      })();
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

  useEffect(() => {
    (async function recoverUserData() {
      const request = await supabase.auth.getSession();
      if (request) {
        setUser({
          id: request.data.session?.user.id,
          deleteICON: request.data.session?.user.user_metadata.deleteICON,
          icon: request.data.session?.user.user_metadata.icon,
          pix: request.data.session?.user.user_metadata.pix,
          username: request.data.session?.user.user_metadata.username,
        });

        setImage(request.data.session?.user.user_metadata.icon);
      } else {
        throw new Error("User is missing.");
      }
    })();
  }, []);
  return (
    <form className="p-3" onSubmit={register}>
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src={image || user?.icon} />
          </div>
        </div>
      </div>
      <div className="form-control w-full mb-6">
        <label className="label">
          <span className="label-text">Escolha sua nova foto</span>
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
          defaultValue={user?.username}
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
          defaultValue={user?.pix}
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>

      <div className="mb-6">
        <button
          type="submit"
          className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
        >
          Atualizar
        </button>
      </div>
    </form>
  );
}
