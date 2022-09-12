import React from "react";
import { Avatar, List, Image } from "antd";
import type * as CSS from "csstype";

import "../../styles/SCSS/Header/header.scss";

import gearSVG from "../../assets/icons/gear.svg";
import fireSVG from "../../assets/icons/fire.svg";

const mockedNotificationData = [
  {
    title: "Mock Data 1",
    content:
      "Novidade na plataforma! Temos uma nova função pra você dentro da página Central de Downloads, com recursos exclusivos para facilitar o download e a geração de relatórios para sua análise",
    img: gearSVG,
  },
  {
    title: "Mock Data 2",
    content:
      "A plataforma estará passando por uma atualização no dia 07/07/2022 a partir das 14h com previsão de 24h de manutenção. Nesse período, relatórios não poderão ser gerados.",
    img: fireSVG,
  },
  {
    title: "Mock Data 3",
    content:
      "A plataforma estará passando por uma atualização no dia 07/07/2022 a partir das 14h com previsão de 24h de manutenção. Nesse período, relatórios não poderão ser gerados.",
    img: fireSVG,
  },
];

const listStyle: CSS.Properties = {
  maxWidth: "561px",
  width: "561px",
  maxHeight: "168px",
  overflowY: "scroll",
  padding: "0px 45px 0px 0px",
};

const imageStyle: CSS.Properties = {
  width: "27.23px",
  height: "31.51px",
};

const descriptionStyle: CSS.Properties = {
  color: "#3C3C3C",
};

const Notification = () => {
  return (
    <div className="scrollBarStyle">
      <List
        style={listStyle}
        itemLayout="horizontal"
        dataSource={mockedNotificationData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={
                    <Image style={imageStyle} preview={false} src={item.img} />
                  }
                />
              }
              description={<div style={descriptionStyle}>{item.content}</div>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Notification;
