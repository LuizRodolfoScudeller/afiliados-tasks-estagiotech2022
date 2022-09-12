import React from "react";
import { List, Progress } from "antd";
import { TypeDownloadContent } from "../../@types/GlobalTypes";
import type * as CSS from "csstype";
import "../../styles/SCSS/Header/header.scss";

const dataDownload: Array<TypeDownloadContent> = [
  {
    title:
      "Nome Grande Enorme Gigante do Relatório Aqui de Exemplo",
    percent: 69,
    status: "active",
  },
  { title: "Nome Grande Enorme Gigante do Relatório Aqui de Exemplo", percent: 100, status: "success" },
  { title: "Albano", percent: 100, status: "success" },
  { title: "Igor", percent: 100, status: "success" },
  { title: "Rodolfo", percent: 100, status: "success" },
  { title: "Ronaldo", percent: 100, status: "success" }
];

const downloadStyle: CSS.Properties = {
  width: "202px",
  padding: "0px 10px 3px 3px",
  border: "1px solid #DDDDDD",
  borderRadius: "16px",
  height: "18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "arial",
};

const listStyle: CSS.Properties = {
  maxWidth: "561px",
  width: "529px",
  maxHeight: "236px",
  overflowY: "scroll",
  padding: "0px 10px 0px 0px",
};

const Download = () => {
  return (
    <div className="scrollBarStyle">
      <List
        style={listStyle}
        itemLayout="horizontal"
        dataSource={dataDownload}
        renderItem={(item) => (
          <List.Item
            extra={
              <Progress
                strokeColor={"#FF0037"}
                trailColor={"transparent"}
                percent={item.percent}
                status={item.status}
                strokeWidth={10}
                format={(percent) => `${percent}%`}
                style={downloadStyle}
              />
            }
          >
            <List.Item.Meta
              title={
                <div style={{ color: "#FF0037", textDecoration: "underline" }}>
                  {item.title}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Download;
