import React from "react";

import { Checkbox, DatePicker, Space, Select } from 'antd';
import GenerateReportButton from "../GenerateReportButton";

// Arquivo Css
import "./styled.css"

// Icones SVG
import IconAmericanas from "./assets/icone-americanas.svg"
import IconAmericanasEmpresas from "./assets/icone-americanas-empresas.svg"
import IconSubmarino from "./assets/icone-submarino.svg"
import IconShoptime from "./assets/icone-shoptime.svg"
import IconSouBarato from "./assets/icone-sou-barato.svg"
import ArrowRight from "./assets/arrow-right.svg"

// Lógica Date Picker
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

// Select
const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const NavBrands = () => {
       
    return (
        <nav className="NavContainer">
            <div className="ContainerBrands">
                <h3>Marca</h3>
                        
                <ul className="Brands">

                    <li>
                        <input id="checkbox1" type="checkbox" />
                            <label                     className="checkbox" htmlFor="checkbox">

                                <img src={IconAmericanas} alt="" />

                            </label>
                    </li>

                    <li>
                        <input id="checkbox1" type="checkbox" />
                            <label                     className="checkbox" htmlFor="checkbox">

                                <img src={IconAmericanasEmpresas} alt="" />

                            </label>
                    </li>

                    <li>
                        <input id="checkbox1" type="checkbox" />
                            <label                     className="checkbox" htmlFor="checkbox">

                                <img src={IconSubmarino} alt="" />

                            </label>
                    </li>

                    <li>
                        <input id="checkbox1" type="checkbox" />
                            <label                     className="checkbox" htmlFor="checkbox">

                                <img src={IconShoptime} alt="" />

                            </label>
                    </li>

                    <li>
                        <input id="checkbox1" type="checkbox" />
                            <label                     className="checkbox" htmlFor="checkbox">

                                <img src={IconSouBarato} alt="" />

                            </label>
                    </li>

                </ul>
            </div>
            <div className="Allbrands">
                <Checkbox/>
                <h3>Todas as marcas</h3>
            </div>
            <div className="PaymentStatus">
                <h3 className="titleInput">Status de Pagamento</h3>
                <div className="list-payment">
                    <Select placeholder="Selecione o tipo de pagamento" className="payment" onChange={handleChange}>
                        <Option value="Aprovado">Aprovado</Option>
                        <Option value="Reprovado">Reprovado</Option>
                        <Option value="Cancelado">Cancelado</Option>
                    </Select>
                </div>
            </div>
            
            <div className="InitialDate">
                <h3 className="titleInput" >Data do Pedido Inicial</h3>
                <Space>
                    <DatePicker className="inputAntd" placeholder="Insira a data inicial" format={dateFormatList} />
                </Space>
            </div>
            <div className="arrow-right">
                <img src={ArrowRight} alt="Seta-para-esquerda" />
            </div>
            <div className="FinalDate">
                <h3 className="titleInput" >Data do Pedido Inicial</h3>
                <Space>
                    <DatePicker className="inputAntd" placeholder="Insira a data final" format={dateFormatList} />
                </Space>
            </div>
            <GenerateReportButton/>
        </nav>
    )
}

export default NavBrands;