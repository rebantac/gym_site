import React from 'react'
import { Link } from "react-router-dom";

import logo from '../assets/logo.png'
import "./userNavbar.css"

const UserNavbar = () => {
  return (
    <div className='main'>
      <div >
        <img className='logo' src={logo} alt='logo' height='50px' />
      </div>
    
      <div className='btnn'>
			<Link to='/profile'><button className='btn_'>PROFILE</button></Link>
			<Link to=''><button className='btn_'>CONTACT US</button></Link>

			<p>Name</p>
      </div>
    </div>
  )
}

export default UserNavbar