import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='nav'>
      <div >
        <img className='logo' src={logo} alt='logo' height='50px' />
      </div>

      <div>
        <button  
          onClick={() => navigate('/sign-in')}
          className='btn'
        >
          Log In
        </button>
      </div>

    </div>
  )
}

export default Navbar