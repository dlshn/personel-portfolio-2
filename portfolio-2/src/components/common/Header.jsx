import React, { useState } from 'react'
import {Link} from "react-router-dom";
// import {navlink} from "../data/dummydata"
// import logo from "../data/image/logo.png"
import { Menu } from '@mui/icons-material';

export const Header = () => {
  const [responsive,setResponsive]=useState(false);
  return (
    
    <>
        <header>
            <div className="container flexsb">
                <div className="logo">
                    {/* <img src={logo} alt="" /> */}
                    Dilshan
                </div>
                {/*navbar components link from dummy data */}
                <div className={responsive ? "hideMenu" : "nav"}>
                    
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Skills">Skills</Link>
                    <Link to="/Contact">Contact</Link>
                    
                </div> 
                <button className='toggle' onClick={()=>setResponsive(!responsive)}>
                    <Menu className='icon'></Menu>
                </button>
            </div>
        </header>
    </>
  )
}


{/* {navlink.map((links,i)=>(
                        <Link to={links.url} key={i}>
                            {links.text}
                        </Link>
                    ))} */}
