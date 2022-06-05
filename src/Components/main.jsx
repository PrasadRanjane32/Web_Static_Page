import React from 'react'
import className from './css/main.css';
import ClassName from './css/Card.css';
import { GrCircleAlert } from "./../../node_modules/react-icons/gr"
import { BiTransfer, BiDownArrowAlt } from "./../../node_modules/react-icons/bi"
import { RiWallet3Line, RiArrowUpLine } from "./../../node_modules/react-icons/ri"
import { DonutChart } from 'react-donut-chart';
import { Chart } from "react-google-charts";
const main = () => {
    return (
        <div className='main'>
            <div className='Line1'>
                <ul className='b1'>
                    <li>
                        <GrCircleAlert className='icon'></GrCircleAlert>
                    </li>
                    <li className='f1'>

                        <p>Exchange Not Connected</p>
                    </li>
                </ul>
            </div>
            <div className='Line2'>
                <ul>
                    <li className='flatCard'>

                        <div>
                            <table>
                                <tr>
                                    <td>
                                        <RiWallet3Line className='icon'></RiWallet3Line>
                                        <p className='f1'>Balance</p>
                                    </td>

                                    <td>
                                    </td>
                                    <td className='t2'>
                                        <p className='f1'>2.043454 BTC</p>
                                    </td>
                                </tr>
                                <tr>
                                    <p>$25,200.97</p>
                                </tr>
                                <tr>
                                    <td>
                                        <RiArrowUpLine className='icon'></RiArrowUpLine>
                                        <p className='f1'>Invested</p>
                                        <p className='f1b'>$10,4588.00</p>
                                    </td>
                                    <td className='Bl'>
                                        <RiArrowUpLine className='icon'></RiArrowUpLine>
                                        <p className='f1'>%Profit</p>
                                        <p className='f1b'>+60%</p>

                                    </td>
                                    <td className='Bl'>
                                        <RiArrowUpLine className='icon'></RiArrowUpLine>
                                        <p className='f1'>USD Profit</p>
                                        <p className='f1b'>$15,648.38</p>
                                    </td>

                                </tr>

                            </table>
                        </div>

                    </li>
                    <li className='flatCard f2'>
                        {/* <DonutChart className='DonutChart'
                            height={"9rem"}
                            width={"21rem"}
                                data={[
                                    {
                                        label: 'Bitcoin',
                                        value: 11567.00,

                                    },
                                    {
                                        label: 'Ethereum',
                                        value: 5583.00,

                                    },
                                    {
                                        label: 'Monero',
                                        value: 8050.97,
                                    },

                                ]}
                                colors={
                                    ['mediumpurple','#eee','skyblue']}
                                         
                                
                            /> */}


                    </li>
                </ul>



            </div>
            <div className='Line3'>
                <ul>
                    <li className='card'>
                        <Chart
                            chartType="AreaChart"
                            data={[["Month", "Price"], [0, 76.727997 ],
                            [20,100.751999],
                            [30,96.011002],
                            [40,87.500000], 
                            [50,79.500000],
                            [60,85.650000],
                            [70,79.750000],
                            [80,81.500000],
                            [90,90.500000],
                            [100,79.500000],
                            [100, 75.459999 ]]}
                            width="18rem"
                            height="13rem"
                            legendToggle
                        />
                    </li>
                    <li className='card f2'>
                    <Chart
                            chartType="AreaChart"
                            data={
                                
                                [["Month", "Price"], [0, 76.727997 ],
                            [20,100.751999],
                            [30,96.011002],
                            [40,87.500000], 
                            [50,79.500000],
                            [60,85.650000],
                            [70,79.750000],
                            [80,81.500000],
                            [90,90.500000],
                            [100,79.500000],
                            [100, 75.459999 ]]}
                            width="18rem"
                            height="13rem"
                            legendToggle
                        />

                    </li>
                    <li className='card f2'>
                    <Chart
                            chartType="AreaChart"
                            data={[["Month", "Price"], [0, 76.727997 ],
                            [20,100.751999],
                            [30,96.011002],
                            [40,87.500000], 
                            [50,79.500000],
                            [60,85.650000],
                            [70,79.750000],
                            [80,81.500000],
                            [90,90.500000],
                            [100,79.500000],
                            [100, 75.459999 ]]}
                            width="18rem"
                            height="13rem"
                            legendToggle
                        />

                    </li>
                </ul>
            </div>
            <div className='Line4'>
                <ul>
                    <li className='flatCardL'>
                    <Chart
                            chartType="CandlestickChart"
                            data={[
  ['3d', '1w', 'b', 'c', 'd'],
  ['1w', 2, 8, 38, 45],
  ['1m', 31, 38, 55, 66],
  ['3m', 50, 55, 77, 80],
  ['6m', 77, 77, 66, 50],
  ['1y', 68, 66, 22, 15],
]}
                            // width="18rem"
                            // height="13rem"
                            legendToggle
                            options={{
                  legend: 'none',
                }}
                        />
                    </li>
                    <li className='card f2'>
                    <table>
                        <tr>
                        <td></td>
        
                            <td className='f3'>
                            <BiTransfer></BiTransfer>
                                <p>See All</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <BiDownArrowAlt></BiDownArrowAlt>
                            <p className='f1b'>Buy</p>
                            <p className='f1'>$250.00</p>
                            </td>
                            <td>
                                <p className='f1'>Apr-20-2022 </p>
                            </td>

                        </tr>
                        <tr>
                        <td><BiDownArrowAlt></BiDownArrowAlt>
                            <p className='f1b'>Sell</p>
                            <p className='f1'>$250.00</p>
                            </td>
                            <td>
                                <p className='f1'>Apr-16-2022 </p>
                            </td>
                            
                        </tr>
                        <tr>
                        <td><BiDownArrowAlt></BiDownArrowAlt>
                            <p className='f1b'>Sell</p>
                            <p className='f1'>$250.00</p>
                            </td>
                            <td>
                                <p className='f1'>Apr-10-2022 </p>
                            </td>
                        </tr>

                    </table>


                    </li>
                </ul>

            </div>

        </div>

    )
}

export default main