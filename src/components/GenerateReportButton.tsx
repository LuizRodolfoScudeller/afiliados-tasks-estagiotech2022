import React from "react";
import { Button } from "antd";
import { GenericIconButtonStyle } from "../styles/Variables/Buttons";
import { reportSVG } from "../assets/icons/iconsSVG";
import '../styles/SCSS/pseudos/buttons.scss';

const GenerateReportButton=()=>{
    return(
        <div className="buttons-pseudo-hover" >
            <Button style={GenericIconButtonStyle} type='text'>Gerar Relatório {reportSVG()}</Button>
        </div>
    )
}
export default GenerateReportButton