import supabase from "@modules/supabase/supabase";
import { FormEvent } from "react";
import { toast } from "react-toastify";


interface IMouthReceipts{
  e: FormEvent;
  setLoading: (value: boolean) => void;
  setReceipts: (datas: any) => void;
  modal: HTMLDialogElement|null
}
export async function newSearch({e, setLoading, setReceipts, modal}:IMouthReceipts) {
    e.preventDefault();
    setLoading(true);

    const target = e.target as typeof e.target & {
      mouth: { value: number };
      year: { value: number };
    };

    const mouth = target.mouth.value;
    const year = target.year.value;


    function reviewsfutureMouth(i: number) {
      if (i == 12) {
        return "01";
      } else {
        if (i < 10 && i++ < 10) {
          return `0${i++}`;
        } else if (i < 10 && i++ > 10) {
          return `0${i}`;
        }
      }
    }

    function reviewThisMouth(i: number) {
      if (i < 10) {
        return `0${i}`;
      } else {
        return i;
      }
    }

    const sync = (await supabase.auth.getUser()).data.user?.id;

    const thisMouth = reviewThisMouth(mouth);
    const futureMouth = reviewsfutureMouth(mouth);

    let { data, error } = await supabase
      .from("receipts")
      .select("*")
      .eq("sync", sync)
      .gte("inserted_at", `2023-${thisMouth}-01T00:00:00Z`)
      .lt("inserted_at", `2023-${futureMouth}-01T00:00:00Z`)
      .order("inserted_at", { ascending: true });

  if (error) {
    toast.error(error.message);
    setLoading(false);
    return
    } else {
      const datas: any = data;
      modal?.close();
      setLoading(false);
      setReceipts(datas);
    }
  }