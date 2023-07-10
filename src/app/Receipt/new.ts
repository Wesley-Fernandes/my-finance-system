import supabase from "@modules/supabase/supabase";
import { FormEvent } from "react";
import { toast } from "react-toastify";

async function newReceipt(e:FormEvent){
    e.preventDefault();
    

    const target = e.target as typeof e.target &{
      about:    {value: string},
      title:    {value: string},
      coust:    {value: number},
      type:     {value: string},
      category: {value: string}
    };


    const user      = await supabase.auth.getSession();
    const paid      = false;
    const about     = target.about.value;
    const coust     = target.coust.value;
    const title     = target.title.value;
    const category  = target.category.value;
    const type      = target.type.value;

    if(!about || !title || !type || !coust || !category){
        toast.error('Preencha todos os campos.');
        return;
    }

    const { data, error } = await supabase
        .from('receipts')
        .insert([{about, category, paid, type, coust, title, sync: user.data.session?.user.id}]);


    if(error){
        toast.error(error.message);
        return

    }else{
        toast.success('Recibo criado com sucesso!');
        return

    }
}


export {newReceipt}