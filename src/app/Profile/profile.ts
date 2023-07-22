import supabase from "@modules/supabase/supabase";
import { IImgbb } from "@modules/types/imgbb";
import axios from "axios";
import { FormEvent } from "react";
import { toast } from "react-toastify";
interface userProps {
    id: string | undefined;
    deleteICON: string;
    icon: string;
    pix: string;
    username: string;
}

interface updateProps{
    user: any;
    event: FormEvent;
    picture: any;
    image: any;
}

interface recoverProps{
    setUser:    (value: userProps) => void;
    setImage:   (value: any) => void;
}

async function recoverUserData({setUser, setImage}:recoverProps) {
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
}



async function updateUser({user, event, picture, image}:updateProps) {
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
                toast.error(userError.message);
                return;
              } else {
                toast.success("usuario atualizado com sucesso");
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
            toast.error(userError.message);
            return;
          } else {
            toast.success("usuario atualizado com sucesso");
            return;
          }
        }
      })();
    }
  }
export {recoverUserData, updateUser}