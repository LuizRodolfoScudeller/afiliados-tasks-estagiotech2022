import React, {useEffect, useState} from 'react'
import { LineChart, Line, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import axios from 'axios';

import "./style.css"

import CircleRed from "./assets/circleRed.svg"
import CircleBlack from "./assets/circleBlack.svg"
import MoonIcon from "./assets/moonIcon.svg"
import SunIcon from "./assets/sunIcon.svg"

// const data = [
//   {
//     name: '00h',
//     GMV: 0.17,
//     vendasD364: 0.22,
//   },
//   {
//     name: '01h',
//     GMV: 0.14,
//     vendasD364: 0.15,
//   },
//   {
//     name: '02h',
//     GMV: 0.15,
//     vendasD364: 0.17,
//   },
//   {
//     name: '03h',
//     GMV: 0.15,
//     vendasD364: 0.17,
//   },
//   {
//     name: '04h',
//     GMV: 0.15,
//     vendasD364: 0.17,
//   },
//   {
//     name: '05h',
//     GMV: 0.15,
//     vendasD364: 0.17,
//   },
//   {
//     name: '06h',
//     GMV: 0.16,
//     vendasD364: 0.17,
//   },
//   {
//     name: '07h',
//     GMV: 0.15,
//     vendasD364: 0.17,
//   },
//   {
//     name: '08h',
//     GMV: 0.16,
//     vendasD364: 0.17,
//   },
//   {
//     name: '09h',
//     GMV: 0.14,
//     vendasD364: 0.17,
//   },
//   {
//     name: '10h',
//     GMV: 0.15,
//     vendasD364: 0.17,
//   },
//   {
//     name: '11h',
//     GMV: 0.15,
//     vendasD364: 0.17,
//   },
//   {
//     name: '12h',
//     vendasD364: 0.20,
//   },
//   {
//     name: '13h',
//     vendasD364: 0.45,
//   },
//   {
//     name: '14h',
//     vendasD364: 0.35,
//   },
//   {
//     name: '15h',
//     vendasD364: 0.25,
//   },
//   {
//     name: '16h',
//     vendasD364: 0.20,
//   },
//   {
//     name: '17h',
//     vendasD364: 0.22,
//   },
//   {
//     name: '18h',
//     vendasD364: 0.20,
//   },
//   {
//     name: '19h',
//     vendasD364: 0.22,
//   },
//   {
//     name: '20h',
//     vendasD364: 0.17,
//   },
//   {
//     name: '21h',
//     vendasD364: 0.20,
//   },
//   {
//     name: '22h',
//     vendasD364: 0.22,
//   },
//   {
//     name: '23h',
//     vendasD364: 0.15,
//   },
  
// ];

const URL = "http://localhost:8081";
function SummaryResults() {
  
  const [data, setData] = useState(0);

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
    try{
      const resp = await axios.get(`${URL}/pedidos`)
      setData(resp.data)
    } catch (err) {
            console.log(err);
          }
  }

  const CustomizedLabel = (props) => {
    const { x, y, stroke,  value } = props;
    const largura = 50
    const altura = 20
  
    return (
      <g>
      <rect x={x - largura/2} y={y - altura} width={largura} height={altura} fill="#fff" rx={altura/2} />
      <text x={x} y={y - altura/2} dy={0} fill={stroke} fontSize={12} textAnchor="middle" dominantBaseline="middle">
      {value > 0 ? value+" Mi" : value }
      </text>
      
      </g>
    );
  };

  const CustomizedLabelBottom = (props) => {
    const { x, y, stroke,  value } = props;
    const largura = 50
    const altura = 20
  
    return (
      <g>
      <rect x={x - largura/2} y={y + altura} width={largura} height={altura} fill="#F2F2F2f2" rx={altura/2} />
      <text x={x} y={y + 10 + altura/2} dy={10} fill={stroke} fontSize={12} textAnchor="middle" dominantBaseline="middle">
      {value > 0 ? value+" Mi" : value }
      </text>
      
      </g>
    );
  };


  return (
    <div class="mainContainer">
      <div class="chartContainer">
      <h1 className='title'><span className='gmv'>GMV</span> X <span className='sales'>VENDAS D-364</span></h1>
      <ul className='listBrands'>
        <li><img src={CircleBlack} alt="" /> GMV</li>
        <li><img src={CircleRed} alt="" />Vendas D-364</li>
      </ul>
        <div className="chart">
          <ResponsiveContainer width="100%" aspect={3} >
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <XAxis dataKey="name" /> */}
              <Tooltip />
              <Line dataKey="GMV" stroke="#000000" strokeWidth="4" dot={false}  dx={-50}>
                <LabelList dataKey="GMV" content={CustomizedLabelBottom} stroke='0.1'/>
              </Line>
              <Line dataKey="VENDASD364" stroke="#FF0037" strokeWidth="4" dot={false}>
                <LabelList  dataKey="VENDASD364" content={CustomizedLabel} />
              </Line>
            </LineChart>
          </ResponsiveContainer>
          <ul className='axisIcons'>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={SunIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
            <li><img src={MoonIcon} alt="" /></li>
          </ul>
          <ul className='axisIconsHour'>
            <li>00h</li>
            <li>01h</li>
            <li>02h</li>
            <li>03h</li>
            <li>04h</li>
            <li>05h</li>
            <li>06h</li>
            <li>07h</li>
            <li>08h</li>
            <li>09h</li>
            <li>10h</li>
            <li>11h</li>
            <li>12h</li>
            <li>13h</li>
            <li>14h</li>
            <li>15h</li>
            <li>16h</li>
            <li>17h</li>
            <li>18h</li>
            <li>19h</li>
            <li>20h</li>
            <li>21h</li>
            <li>22h</li>
            <li>23h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SummaryResults;
