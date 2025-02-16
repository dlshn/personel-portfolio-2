import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { Menu } from '@mui/icons-material';

export const Header = () => {
  const [responsive,setResponsive]=useState(false);
  return (
    
    <>
        <header>
            <div className="container flexsb">
                <Link to="/">
                <div className="logo">
                    Dilshan
                </div>
                </Link>
                
                
                <div className={responsive ? "hideMenu" : "nav"}>
                    
                    <Link to="/" data-aos="zoom-in">Home</Link>
                    <Link to="/About" data-aos="zoom-in">About</Link>
                    <Link to="/Skills" data-aos="zoom-in">Skills</Link>
                    <Link to="/Contact" data-aos="zoom-in">Contact</Link>
                    
                </div> 
                <button className='toggle' onClick={()=>setResponsive(!responsive)}>
                    <Menu className='icon'></Menu>
                </button>
            </div>
        </header>
    </>
  )
}

