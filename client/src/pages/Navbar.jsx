import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/dumbell.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div >
        <img className='logo' src={logo} alt='logo' height='50px' />
        </div>
      
        <div>
        <button className='btn'>Log In</button>
       
        </div>
      
    </div>
  )
}

export default Navbar