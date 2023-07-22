import { FormEvent } from "react";
import supabase from "@modules/supabase/supabase";
import axios from "axios";
import { IImgbb } from "@modules/types/imgbb";
import { toast } from "react-toastify";

interface fileProps{
    event: FormEvent;
    setPicture: (value: any) => void;
    setImage: (value: any) => void;
}

interface registerProps{
    event: FormEvent;
    setLoading: (value: boolean) => void;
    picture: any;
    push: (value: string) => void;
}

async function fileChange({event, setPicture, setImage}:fileProps){
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
  
async function register({event, setLoading, picture, push}:registerProps) {
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
              toast.error(error.message);
              return
          } else {
            alert("usuario criado com sucesso");
            push("/Dashboard");
            return;
          }
        });
    }
  }



export {fileChange, register}