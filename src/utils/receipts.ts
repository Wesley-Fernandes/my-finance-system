
import supabase from "@modules/supabase/supabase";

interface IReceipts{
  setReceipts: (datas:any) => void;
}

async function getAllMouthReceipts({setReceipts}:IReceipts) {
    const date = new Date();
    const mouth = date.getMonth() + 1;
    const sync = (await supabase.auth.getUser()).data.user?.id;

 
    let { data, error } = await supabase
    .from('receipts')
    .select()
    .eq('sync', sync)
    .gte('inserted_at',  `2023-${mouth}-01T00:00:00Z`)
    .lt('inserted_at',   `2023-${mouth==12?('01'):(mouth + 1)}-01T00:00:00Z`)
    .order('inserted_at', {ascending: true});

    if(error){
      throw new Error(error.message);
    }else{
      const datas: any = data;
      setReceipts(datas)
    }

}


function allProfit(receipts:any[]){
  const receiptsLucros = receipts?.filter((item:any)=>{
    if(item.type=='Lucros'){
      return item.coust;
    }
  })

  let count  = 0;
  
  receiptsLucros?.map((item:any)=>{
        if(item.type=='Lucros'){
          count = count + item.coust;
        }
  });

  return count;
}


function allCosts(receipts:any[]){
  const receiptsLucros = receipts?.filter((item:any)=>{
    if(item.type!='Lucros'){
      return item.coust;
    }
  })

  let count  = 0;
  

  receiptsLucros?.map((item:any)=>{
        if(item.type=='Gastos'){
          count = count + item.coust;
        }
  });

  return count;

}


function allReceipts(receipts:any[]){
  const receiptsLucros = receipts?.filter((item:any)=>{
    if(item.type=='Lucros'){
      return item.coust;
    }
  })


  let Lucros  = 0;

  receiptsLucros?.map((item:any)=>{
    if(item.type=='Lucros'){
      Lucros = Lucros + item.coust;
    }
  });

  const receiptsGastos = receipts?.filter((item:any)=>{
    if(item.type!='Lucros'){
      return item.coust;
    }
  })


  let Gastos  = 0;

  receiptsGastos?.map((item:any)=>{
    if(item.type=='Gastos'){
      Gastos = Gastos + item.coust;
    }
  });

  const result  = (Lucros - Gastos);

  return result;
}
export {getAllMouthReceipts, allProfit, allCosts, allReceipts}