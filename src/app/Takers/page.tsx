"use client";
import Header from "@modules/components/Header";
import Taker from "@modules/components/Taker";
import User from "@modules/components/User";

import { getTakers } from "@modules/components/Taker/taker-functions";
import { DatasStore } from "@modules/context/store";
import { takerProps } from "@modules/types/takers";
import { useState, useEffect } from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
export default function Takers() {
  const datas     = DatasStore((state) => state.takers);
  const setTaker  = DatasStore((state) => state.setTakers);
  const [takers, setTakers]   = useState<takerProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getTakers({ setLoading, setTakers });

    return () => {
      if (!datas) {
        setTaker(takers);
      }
    };
  }, []);

  return (
    <section className="text-gray-600 body-font w-full h-full overflow-x-hidden">
      <Header>
        <Taker setTakers={setTakers} setLoading={setLoading} takers={takers} />
      </Header>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap gap-1 pt-2">
          {takers.map((taker) => {
            return (
              <User.Container key={taker.id}>
                <User.Icon imageURL="" />
                <User.Content>
                  <User.Title name={taker.name} />
                  <User.Subtitle subtitle={taker.description} />
                  <User.Tags>
                    <User.Tag value={taker.debt} key={1} title="Para receber">
                      <BsArrowUpShort className="mr-1" color="green" />
                    </User.Tag>
                    <User.Tag value={taker.owing} key={2} title="Para pagar">
                      <BsArrowDownShort className="mr-1" color="red" />
                    </User.Tag>
                  </User.Tags>
                </User.Content>
              </User.Container>
            );
          })}
        </div>
      </div>
    </section>
  );
}
