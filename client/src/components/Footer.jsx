import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='social'>
        <p className='para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      </div>
      <div className='contact'>
      <div>
          <p className='contact1'>Contact us</p>
      </div>
      <div className='icons'>
      <i class="social-icon fa-brands fa-facebook fa-2x color"></i>
                <i class="social-icon fa-brands fa-twitter fa-2x color"></i>
                <i class="social-icon fa-brands fa-instagram fa-2x color"></i>
                <i class="social-icon fa-solid fa-envelope fa-2x color"></i>
      </div>
    
      </div>
    </div>
  )
}

export default Footer