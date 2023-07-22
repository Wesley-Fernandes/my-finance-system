import { FormEvent } from "react";
import { toast } from "react-toastify";
import supabase from "@modules/supabase/supabase";


interface tryLogin{
    setLoading: (value: boolean) => void;
    event: FormEvent;
    push: (value: string)=>void;
}

async function tryLogin({setLoading, event, push}:tryLogin) {
    event.preventDefault();

    setLoading(true);

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    if (!email) {
      setLoading(false);
      toast.error("Por favor, insira um e-mail.");
      return;
    }

    if (!password) {
      setLoading(false);
      toast.warning("Por favor, insira o seu password.");
      return;
    }

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      console.error(error);
      toast.warning(error.message);
      return;
    } else {
      setLoading(false);
      if (user.session.access_token) {
        localStorage.setItem("user_my_finance", user.session.access_token);
      }
      push("/Dashboard");
    }
}
  
export {tryLogin}