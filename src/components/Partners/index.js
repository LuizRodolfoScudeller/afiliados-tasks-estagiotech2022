import React from "react";
import "./style.css";

import Filter from "./assets/filter.svg";

const Partners = () => {
  return (
    <div className="mainContainers">
      <div className="Title-Parceiros">
        <h1>PARCEIROS</h1>
      </div>
      <div className="Container">
        <div className="Table">
          <div className="tableFilters">
            <div className="Filter">
              <img src={Filter} alt=""></img>
              <h3>Filtrar parceiros</h3>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Partners;
