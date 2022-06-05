import React from 'react';
import className from './css/NavBar.css';
// import { MdOutlineSpaceDashboard } from "/./../node_modules/react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/";
import { FaBeer, FaRegChartBar } from "./../../node_modules/react-icons/fa";
import { RiSuitcaseLine } from "./../../node_modules/react-icons/ri";
import { BiTransfer } from "./../../node_modules/react-icons/bi"
import { CgMenuBoxed } from "./../../node_modules/react-icons/cg"
const NavBar = () => {
  return (
    <div className='sidebar'>
	<div className=' menu'>
        <ul className='nav'>
							<li className="nav-item">
								<a href="index.html"  className="active">
									<span className="icon">
										<FaRegChartBar></FaRegChartBar>

									 </span></a>
							</li>
							<li className="nav-item">
								<a href="#">
									<span className="icon">
                                   <RiSuitcaseLine></RiSuitcaseLine>

									</span>
								</a>
							</li>
							<li className="nav-item">
								<a href="#">
									<span className="icon">
                                  <BiTransfer></BiTransfer>

									</span>
								</a>
							</li>
							<li className="nav-item">
								<a href="#">
									<span className="icon">
                                   <CgMenuBoxed></CgMenuBoxed>
									</span>
								</a>
							</li>
							</ul>
					</div>
					

    </div>
  )
}

export default NavBar