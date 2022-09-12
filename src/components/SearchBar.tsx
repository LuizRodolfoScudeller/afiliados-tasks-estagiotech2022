import React from "react";
import { Button, Input } from "antd";
import 'antd/dist/antd.css';
import * as CSS from 'csstype'
import { searchIconSVG } from "../assets/icons/iconsSVG";

const searchBarStyle: CSS.Properties = {
    borderRadius: '28px 0px 0px 28px',
    outline:'none',
    borderColor: '#C4C4C4',
    
}
const searchButtonStyle: CSS.Properties = {
    borderRadius: '0px 28px 28px 0px',
    backgroundColor: '#FF0037',
    border: 'none'
}
const SearchBar=()=>{
    return(
        <div className="site-input-group-wrapper">
        <Input.Group size="default" style={{width: '500px', display: 'flex'}}>
            <Input status="error" style={searchBarStyle} prefix={searchIconSVG()} placeholder="Digite sua busca aqui" />
            <Button style={searchButtonStyle} type="primary" >BUSCAR</Button>
        </Input.Group>
        </div>
        )
};
export default SearchBar;