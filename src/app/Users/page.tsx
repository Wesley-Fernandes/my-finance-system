'use client'
import Header from "@modules/components/Header";
import Taker from "@modules/components/Taker";
import User from "@modules/components/User";
import React from "react";

import { BsArrowUpShort, BsArrowDownShort} from "react-icons/bs";
export default function Users() {
  return (
    <section className="text-gray-600 body-font w-screen h-screen">
      <Header>
        <Taker/>
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
                  <BsArrowUpShort className="mr-1"/>
                </User.Tag>

                <User.Tag value={2000} key={2} title="Para pagar">
                  <BsArrowDownShort className="mr-1"/>
                </User.Tag>
              </User.Tags>
            </User.Content>
          </User.Container>

          <User.Container key={2}>
            <User.Icon imageURL="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
            <User.Content>
              <User.Title name="Felipe Mello" />
              <User.Subtitle subtitle="Vivendo minha vida intensamente." />
              <User.Jumper />
            </User.Content>
          </User.Container>
        </div>
      </div>
    </section>
  );
}
