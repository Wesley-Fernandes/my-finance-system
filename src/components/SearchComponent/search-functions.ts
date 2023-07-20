import supabase from "@modules/supabase/supabase";
import { FormEvent } from "react";
import { toast } from "react-toastify";


interface dateProps{
  e: FormEvent;
  setLoading: (value: boolean) => void;
  setReceipts: (datas: any) => void;
  modal: HTMLDialogElement|null
}

interface idProps{
  e: FormEvent;
  setLoading: (value: boolean) => void;
  setReceipts: (datas: any) => void;
  modal: HTMLDialogElement|null
}

async function searchByDate({ e, setLoading, setReceipts, modal }: dateProps) {
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
  

async function searchByIdentification({e, setLoading, setReceipts, modal}:idProps) {
  e.preventDefault();
  setLoading(true);

  const target = e.target as typeof e.target & {
    mouth: { value: number };
    year: { value: number };
    takers: { value: string };
  };

  const mouth = target.mouth.value;
  const year = target.year.value;
  const taker = target.takers.value;


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
    .eq("category", taker)
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
};


export {searchByDate, searchByIdentification}