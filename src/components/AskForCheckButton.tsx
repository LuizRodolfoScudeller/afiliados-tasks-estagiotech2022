import React from "react";
import { Button } from "antd";
import { GenericIconButtonStyle } from "../styles/Variables/Buttons";
import { svgGear } from "../assets/icons/iconsSVG";
import '../styles/SCSS/pseudos/buttons.scss';

const AskForCheckButton=()=>{
    return(
        <div className="buttons-pseudo-hover" >
            <Button style={GenericIconButtonStyle}  type='text' >Pedir Checagem {svgGear()} </Button>
        </div>
    )
}
export default AskForCheckButton