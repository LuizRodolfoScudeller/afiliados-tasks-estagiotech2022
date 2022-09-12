import React from "react";
import { Button } from "antd";
import { GenericIconButtonStyle } from "../styles/Variables/Buttons";
import { svgGear } from "../assets/icons/iconsSVG";
import '../styles/SCSS/pseudos/buttons.scss';

const CheckOrdersButton=()=>{
    return(
        <div className="buttons-pseudo-hover" >
            <Button style={GenericIconButtonStyle}  type='text' >Checar Pedidos {svgGear()} </Button>
        </div>
    )
}
export default CheckOrdersButton