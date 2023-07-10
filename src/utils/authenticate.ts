import React from 'react'
import supabase from "@modules/supabase/supabase";
import { useRouter } from 'next/navigation';

interface ITryLogin{
    event: React.FormEvent;
    setLoading: (value: boolean) => void;
}

async function tryLogin({ event, setLoading }: ITryLogin) {
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
      //toast.error("Por favor, insira um e-mail.");
      return;
    }

    if (!password) {
      setLoading(false);
      //toast.warning("Por favor, insira o seu password.");
      return;
    }

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
        setLoading(false);
        console.error(error);
      //toast.warning(error.message);
      return;
    } else {
      setLoading(false);
 
    }
}
  

export {tryLogin}