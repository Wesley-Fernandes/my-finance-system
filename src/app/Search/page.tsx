"use client";
import {useState} from "react";

//Components
import Card from "@modules/components/Card";
import Header from "@modules/components/Header";
import SearchComponent from "@modules/components/SearchComponent";
import Table from "@modules/components/Table";
import Income from "@modules/components/Table/Income";

//Icons
import { BsBank2, BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { receiptProps } from "@modules/types/receipts";
import { allCosts, allProfit, allReceipts } from "@modules/utils/receipts";
import { DatasStore } from "@modules/context/store";


export default function Search() {
  const [loading, setLoading]         =   useState<boolean>(false);
  const datas = DatasStore((state)    =>  state.datas);
  const setDatas = DatasStore((state) =>  state.setDatas);

  return (
    <div>
      <Header>
        <SearchComponent setData={setDatas} setLoading={setLoading} loading={loading} />
        <Card.Container key={"Ganhos"}>
          <Card.Icon>
            <BsBank2 className="text-white text-3xl" />
          </Card.Icon>
          <Card.Details>
            <Card.Title title="Restante" />
            <Card.Value value={allReceipts(datas)} />
          </Card.Details>
        </Card.Container>

        <Card.Container key={"Lucros"}>
          <Card.Icon>
            <GiReceiveMoney className="text-white text-3xl" />
          </Card.Icon>
          <Card.Details>
            <Card.Title title="Lucros" />
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
            <Card.Title title="Gastos" />
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
            subtitle={`Lista de todos recibos do mês de Julho.`}
          />
        </Table.Details>

        <Table.List>
          {datas.map((data: receiptProps) => {
            return (
              <Income.Container data={data} key={data.id}>
                <Income.Value value={data.coust} type={data.type} />
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
