"use client";

//Components
import Card from "@modules/components/Card";
import Header from "@modules/components/Header";
import Table from "@modules/components/Table";
import Income from "@modules/components/Table/Income";

import React from "react";

//Tipagem
import { receiptProps } from "@modules/types/receipts";

//Icones
import { BsBank2, BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

//utils
import {
  allCosts,
  allProfit,
  allReceipts,
  getAllMouthReceipts,
} from "@modules/utils/receipts";
import { mouths } from "./mouths";
import { DatasStore } from "@modules/context/store";

export default function Dashboard() {
  const [mouth, setMouth] = React.useState<string>("");

  const datas = DatasStore((state) => state.datas);
  const setDatas = DatasStore((state) => state.setDatas);

  React.useEffect(() => {
    function getMouthName() {
      const dataAtual = new Date();
      const newMouth = mouths[dataAtual.getMonth()];

      setMouth(newMouth);
    }

    getMouthName();
    getAllMouthReceipts({ setReceipts: setDatas });
  }, [datas]);

  return (
    <div className="flex h-screen flex-col">
      <Header>
        <Card.Container key={"Ganhos"}>
          <Card.Icon>
            <BsBank2 className="text-white text-3xl" />
          </Card.Icon>
          <Card.Details>
            <Card.Title title="Restante deste mês" />
            <Card.Value value={allReceipts(datas)} />
          </Card.Details>
        </Card.Container>

        <Card.Container key={"Lucros"}>
          <Card.Icon>
            <GiReceiveMoney className="text-white text-3xl" />
          </Card.Icon>
          <Card.Details>
            <Card.Title title="Lucros deste mês" />
            <Card.Value value={allProfit(datas)}>
              <BsArrowUpShort />
            </Card.Value>
          </Card.Details>
        </Card.Container>

        <Card.Container key={"Gastos"}>
          <Card.Icon>
            <GiPayMoney className="text-white text-3xl" />
          </Card.Icon>
          <Card.Details>
            <Card.Title title="Gastos deste mês" />
            <Card.Value value={allCosts(datas)}>
              <BsArrowDownShort />
            </Card.Value>
          </Card.Details>
        </Card.Container>
      </Header>

      <Table.Container>
        <Table.Details>
          <Table.Title title="Recibos deste mês" />
          <Table.Subtitle
            subtitle={`Lista de todos recibos do mês de ${mouth.toUpperCase()}.`}
          />
        </Table.Details>

        <Table.List>
          {datas.map((data: receiptProps) => {
            const coust = data.coust;
            return (
              <Income.Container data={data} key={data.id}>
                <Income.Value value={coust} type={data.type} />
                <Income.Title title={data.title} />
                <Income.Subtitle subtitle={data.about} />
                <Income.Details>
                  <Income.Hour date={data.inserted_at} />
                  <Income.Dates date={data.inserted_at} />
                </Income.Details>
              </Income.Container>
            );
          })}
        </Table.List>
      </Table.Container>
    </div>
  );
}
