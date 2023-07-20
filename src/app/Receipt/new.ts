import { getTaker } from "@modules/components/Taker/taker-functions";
import supabase from "@modules/supabase/supabase";
import { takerProps } from "@modules/types/takers";
import { FormEvent } from "react";
import { toast } from "react-toastify";

interface newReceiptProps{
    event: FormEvent;
    option: boolean;
    taker: takerProps;
}
async function newReceipt({event, option, taker}:newReceiptProps){
    

    const target = event.target as typeof event.target &{
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
        .insert([{ about, category, paid, type, coust, title, sync: user.data.session?.user.id }]);
    


    if(error){
        toast.error(error.message);
        return

    }else{

        switch (option) {
            case true:
                switch (type) {
                    case 'Lucros':
                        const { error: newLucros } = await supabase
                            .from('takers')
                            .update({ debt: (coust - taker.debt) })
                            .eq('id', Number(category));
                            
                        if (newLucros) {
                            toast.error(newLucros.message);
                            return;
                        }
                            
                            
                        break;
                    case 'Gastos':
                        const { error: newGastos } = await supabase
                            .from('takers')
                            .update({ owing: (coust+taker.owing) })
                            .eq('id', Number(category))
                            
                        if (newGastos) {
                            toast.error(newGastos.message);
                            return;
                        }
                        break;
                }
                
            case false:
                toast.success('Recibo criado com sucesso!');
                return
        }
    }
}


export {newReceipt}