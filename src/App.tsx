import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";
import "./styles/SCSS/global.scss";
import 'antd/dist/antd.css';

import CheckOrdersButton from "./components/CheckOrdersButton";
import NavBrands from "./components/NavBrands/Index";
import SummaryResults from "./components/SummaryResults";


import UsersTable from "./components/UsersTable";
import AskForCheckButton from "./components/AskForCheckButton";



function search() {
  return (
    <>
      <Header />
      <UsersTable />
      <SearchBar />
      <NavBrands />  
      <SummaryResults />
      <CheckOrdersButton />
      <AskForCheckButton/>
    </>
  );
}

export default search;