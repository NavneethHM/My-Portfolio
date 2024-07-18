import './nav.scss';
import "bootstrap/dist/css/bootstrap.css";

import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const toabout = useNavigate();
  const toexperince = useNavigate();
  const toproject = useNavigate();
  return (
    <>
    <div id='nav'>
        <div className='nav-comp  p-4 d-flex'>
<div><button onClick={()=>{toabout("/about")}} className='but-nav'>About Me</button></div>
<div><button onClick={()=>{toexperince("/experince")}} className='but-nav'>Experience</button> </div>
<div><button onClick={()=>{toproject("/project")}} className='but-nav'>My Projects</button></div>
    
        </div>
    </div>
    </>
  )
}

export default NavBar