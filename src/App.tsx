import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";
import "./styles/SCSS/global.scss";
import 'antd/dist/antd.css';
import GenerateReportButton from "./components/GenerateReportButton";
import CheckOrdersButton from "./components/CheckOrdersButton";

import UsersTable from "./components/UsersTable";
import AskForCheckButton from "./components/AskForCheckButton";



function search() {
  return (
    <>
      <Header />
      <UsersTable />
      <SearchBar />
      <GenerateReportButton />
      <CheckOrdersButton />
      <AskForCheckButton/>
    </>
  );
}

export default search;