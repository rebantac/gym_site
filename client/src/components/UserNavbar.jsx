import React from 'react'
import { Link } from "react-router-dom";

import logo from '../assets/dumbell.png'

const UserNavbar = () => {
  return (
    <div >
      <div >
        <img className='logo' src={logo} alt='logo' height='50px' />
      </div>

			<Link to='/profile'><button>PROFILE</button></Link>
			<Link to=''><button>CONTACT US</button></Link>

			<p>Name</p>
    </div>
  )
}

export default UserNavbar