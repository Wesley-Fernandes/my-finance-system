import { receiptProps } from "@modules/types/receipts";
import {create} from "zustand";

interface itemsType{
    newTheme: 'dark'|'light';
}

type DatasProps = {
    datas: receiptProps[];
    setDatas: (data:receiptProps[])=>void;
}

type ThemeProps = {
    theme: 'dark'|'light';
    setTheme: (theme: any) => void;
}

const DatasStore = create<DatasProps>((set) => ({
    datas: [],
    setDatas: (data:any) => set((state)=>({datas: data}))
}))

const ThemeStore = create<ThemeProps>((set) => ({
    theme: 'light',
    setTheme: (theme: any) => set((state) => ({ theme: theme })),
}))

export {ThemeStore, DatasStore};