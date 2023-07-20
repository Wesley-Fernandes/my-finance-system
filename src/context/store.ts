import { receiptProps } from "@modules/types/receipts";
import { create } from "zustand";
import { takerProps } from "@modules/types/takers";

interface itemsType{
    newTheme: 'dark'|'light';
}

type DatasProps = {
    datas: receiptProps[];
    takers: takerProps[];
    setDatas: (data: receiptProps[]) => void;
    setTakers: (data: takerProps[]) => void;
}

type ThemeProps = {
    theme: 'dark'|'light';
    setTheme: (theme: any) => void;
}

const DatasStore = create<DatasProps>((set) => ({
    takers: [],
    datas: [],
    setDatas: (data: any) => set((state) => ({ datas: data })),
    setTakers: (data:any) => set((state)=>({takers: data}))
}))

const ThemeStore = create<ThemeProps>((set) => ({
    theme: 'light',
    setTheme: (theme: any) => set((state) => ({ theme: theme })),
}))

export {ThemeStore, DatasStore};