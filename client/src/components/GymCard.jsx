import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import { Link } from 'react-router-dom'
import "./gymcard.css"
import avtar from "../assets/person.png"
// import desktop from "../assets/Desktop_.png"
const GymCard = ({
  id,
  name,
  gym_name,
  registrationFee,
  monthlyFee,
}) => {
  return (
<>
<div class="slider-one_">
        <div class="slider-one-image_">
        </div>
    </div>

    <div class="slider-two_">
        <div class="slider-two-image_">
            
        </div>
    </div>

    <div class="slider-three_">
        <div class="slider-three-image_">
        </div>
    </div>

    {/* <img className='home'  src={desktop} alt="" /> */}

    <div className="cards_">
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <div className="full">
          <div className="avtar1">
      <img  className='avtar' src={avtar} alt="" />
      </div>
      <div className="avtar2">
      <Link style={{textDecoration:"none"}} to={`/gym/${id}`}>
        <div style={{ padding: '20px' }}>
          <h5 style={{color:"black" , textDecoration:"none"}} className="card-title">{gym_name}</h5>
          <p style={{textDecoration:"none" , color:"black"}} className='card-text'>Maintained by {name}</p>
          
          
          <p className='card-text' style={{color:"black"}}>Registration Fee: ₹{registrationFee}</p>
          <p className='card-text' style={{color:"black"}}>Monthly Fee: ₹{monthlyFee}</p>

         
        </div>
      </Link>
      </div>
      </div>
      </div>
    </div> 
    </div>
    </>
   
  )
}



export default GymCard