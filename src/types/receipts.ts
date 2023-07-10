export interface receiptProps{
    id: number,
    inserted_at: string,
    updated_at: string,
    title: string,
    coust: number,
    type: "Gastos" | "Lucros",
    about: string,
    paid: boolean,
    sync: string,
    category: string
}