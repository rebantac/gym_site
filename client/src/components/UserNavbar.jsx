import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import logo from '../assets/logo.png'

const UserNavbar = () => {
  const id = "U001"; // later fetched from Home as a props

  return (
    <div >
      <div >
        <img className='logo' src={logo} alt='logo' height='50px' />
      </div>

			<Link to={`/profile/${id}`}><button>PROFILE</button></Link>
			<Link to=''><button>CONTACT US</button></Link>

			<p>Name</p>
    </div>
  )
}

export default UserNavbar