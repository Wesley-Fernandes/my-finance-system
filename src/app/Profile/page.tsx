"use client";
import supabase from "@modules/supabase/supabase";
import { IImgbb } from "@modules/types/imgbb";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState, FormEvent } from "react";
import { recoverUserData, updateUser } from "./profile";
import { fileChange } from "../Register/register";

interface userProps {
  id: string | undefined;
  deleteICON: string;
  icon: string;
  pix: string;
  username: string;
}

export default function Profile() {
  const [user, setUser] = useState<userProps | null>();
  const [picture, setPicture] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const { push } = useRouter();

  async function changeImage(event: FormEvent) {
    fileChange({ event, setImage, setPicture });
  }

  async function submiter(event: FormEvent) {
    updateUser({ event, image, picture, user });
  }

  useEffect(() => {
    recoverUserData({ setImage, setUser });
  }, []);

  
  return (
    <form className="p-3" onSubmit={submiter}>
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
