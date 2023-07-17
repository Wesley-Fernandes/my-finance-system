"use client";
import Header from "@modules/components/Header";
import Taker from "@modules/components/Taker";
import User from "@modules/components/User";
import React from "react";

import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
export default function Users() {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <section className="text-gray-600 body-font w-screen h-screen">
      <Header>
        <Taker setData={setData} setLoading={setLoading} />
      </Header>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap gap-1 pt-2">
          <User.Container key={1}>
            <User.Icon imageURL="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
            <User.Content>
              <User.Title name="Wesley Fernandes" />
              <User.Subtitle subtitle="Wesleyintelligence@gmail.com" />
              <User.Tags>
                <User.Tag value={9000} key={1} title="Para receber">
                  <BsArrowUpShort className="mr-1" />
                </User.Tag>
                <User.Tag value={2000} key={2} title="Para pagar">
                  <BsArrowDownShort className="mr-1" />
                </User.Tag>
              </User.Tags>
            </User.Content>
          </User.Container>
        </div>
      </div>
    </section>
  );
}
