import supabase from "@modules/supabase/supabase";
import { takerProps } from "@modules/types/takers";
import { FormEvent } from "react";
import { toast } from "react-toastify";



interface createProps{
    event: FormEvent;
    takers: takerProps[];
    setLoading: (value: boolean) => void;
    setTakers: (data:any)=>void;
    close: () => void;
}

interface getProps{
    setLoading: (value: boolean) => void;
    setTakers: (data: any)=>void;
}

async function newTaker({event,setLoading,setTakers, close, takers}:createProps){
    event.preventDefault();
    setLoading(true);
    

    const target = event.target as typeof event.target &{
      name:    {value: string},
      description:    {value: string},
    };


    const user          = await supabase.auth.getSession();
    const name          = target.name.value;
    const description   = target.description.value;


    if (!name || !description) {
        toast.error('Preencha todos os campos.');
        return;
    }

    const { data, error } = await supabase
        .from('takers')
        .insert({
            description,
            name,
            sync: user.data.session?.user.id,
            owing: 0.0,
            debt: 0.0,
        }).select()


    if (error) {
        close();
        toast.error(error.message);
        return

    } else {
        setTakers((prev:any)=>[data[0], ...prev])
        close();
        toast.success('Tomador criado com sucesso!');
        return

    }
}

async function getTakers({setLoading,setTakers}:getProps) {

    const sync = (await supabase.auth.getUser()).data.user?.id;


    let { data, error } = await supabase
        .from("takers")
        .select("*")
        .eq("sync", sync)
        .order("created_at", { ascending: true });
    
    if (error) {
        toast.error(error.message);
    } else {
        if (data) {
            const convert: any = data;
            const alldatas:takerProps = convert;
            setTakers(alldatas);
            console.log(alldatas)
        }
    }

}

async function getTaker(id:number):Promise<takerProps|undefined> {

    const sync = (await supabase.auth.getUser()).data.user?.id;


    let { data, error } = await supabase
        .from("takers")
        .select("*")
        .eq("sync", sync)
        .eq('id', id)
        .order("created_at", { ascending: true });
    
    if (error) {
        toast.error(error.message);
    } else {
        if (data) {
            const convert: any = data;
            const alldatas:takerProps = convert;
            return alldatas;
        }
    }

}


export {newTaker, getTakers, getTaker}