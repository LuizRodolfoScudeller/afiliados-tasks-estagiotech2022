import React from "react";
import { useBrand } from "../Store/store";

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

const NavBrands = () => {

    // Lógica de seleção das Marcas
    const elementsBrands = () => Array.from(document.querySelectorAll("li>input"))

    const ativeCheckBox = () => {
        const checkedAttribute = () => document.querySelector(".ant-checkbox-input")
        
        if(checkedAttribute().checked){
            elementsBrands().forEach((e) => e.setAttribute("checked", true));
        } else{
            elementsBrands().forEach((e) => e.removeAttribute("checked"));
        }
    }

    // Select - Status de Pagamento
    const { Option } = Select;

    // Retorno do select - Status de Pagamento

    const handleChange = (value) => {
        arrayData.push(value)
    };

    // Lógica Date Picker
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const dateInitialChange = (date, dateString) => {
        arrayData.push(dateString)
    };

    const dateFinalChange = (date, dateString) => {
        arrayData.push(dateString)
    };

    // Logica para retornar o nome da marca

    const {brand, setBrand} = useBrand()
    
    const handleBrands = (value) => {
        return (event) => {
            brand.some((brand) => brand === value) === true ? brand.splice(brand.indexOf(value), 1) : brand.push(value) 
        }
    }
    
    const arrayData = new Array()
    
    arrayData.unshift(brand)

    const printArray = () => console.log(arrayData[0])

    return (
        <nav className="NavContainer">
            <div className="ContainerBrands">
                <h3>Marca</h3>
                        
                <ul className="Brands">

                    <li>
                        <input id="checkbox1" type="checkbox" onClick={handleBrands("ACOM")} />
                            <label className="checkbox"  htmlFor="checkbox1" >

                                <img src={IconAmericanas} alt="" />

                            </label>
                    </li>

                    <li>
                        <input id="checkbox2" type="checkbox" onClick={handleBrands("B2B")} />
                            <label className="checkbox" htmlFor="checkbox2">

                                <img src={IconAmericanasEmpresas} alt="" />

                            </label>
                    </li>

                    <li>
                        <input id="checkbox3" type="checkbox" onClick={handleBrands("SUBA")}/>
                            <label                     className="checkbox" htmlFor="checkbox3">

                                <img src={IconSubmarino} alt="" />

                            </label>
                    </li>

                    <li>
                        <input id="checkbox4" type="checkbox" onClick={handleBrands("SHOP")}/>
                            <label                     className="checkbox" htmlFor="checkbox4">

                                <img src={IconShoptime} alt="" />

                            </label>
                    </li>

                    <li>
                        <input id="checkbox5" type="checkbox" onClick={handleBrands("SOUB")}/>
                            <label  className="checkbox" htmlFor="checkbox5">

                                <img src={IconSouBarato} alt="" />

                            </label>
                    </li>

                </ul>
            </div>
            <div className="Allbrands" onClick={() => ativeCheckBox()}>
                <Checkbox className="checkBrands"/>
                <h3 >Todas  as marcas</h3>
            </div>
            {/* <button onClick={() => elementsBrands()}>clique</button> */}
            <div className="PaymentStatus">
                <h3 className="titleInput">Status de Pagamento</h3>
                <div className="list-payment">
                    <Select placeholder="Selecione o tipo de pagamento" className="payment" onChange={handleChange}>
                        <Option value="Aprovado">Aprovado</Option>
                        <Option value="Reprovado">Reprovado</Option>
                        <Option value="Cancelado">Cancelado</Option>
                        <Option value="Retornado">Retornado</Option>
                    </Select>
                </div>
            </div>
            
            <div className="InitialDate">
                <h3 className="titleInput" >Data do Pedido Inicial</h3>
                <Space>
                    <DatePicker onChange={dateInitialChange} className="inputAntd" placeholder="Insira a data inicial" format={dateFormatList} />
                </Space>
            </div>
            <div className="arrow-right">
                <img src={ArrowRight} alt="Seta-para-esquerda" />
            </div>
            <div className="FinalDate">
                <h3 className="titleInput" >Data do Pedido Final</h3>
                <Space>
                    <DatePicker onChange={dateFinalChange} className="inputAntd" placeholder="Insira a data final" format={dateFormatList} />
                </Space>
            </div>
            <GenerateReportButton onClick={() => printArray()}/>
        </nav>
    )
}

export default NavBrands;