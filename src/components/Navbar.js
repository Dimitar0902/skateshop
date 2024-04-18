import React, { useState } from 'react'
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
      <div className='left' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='Logo'/>
        <div className="hiddenLinks">
         <Link to="/"> Home </Link>
         <Link to="/about"> About </Link>
         <Link to="/shop"> Shop </Link>
         <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className='right'>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar} >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  )
}

export default Navbar
