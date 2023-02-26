import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Detail.css';
import pic from '../assets/pic.png';

const Detail = ({ gymDetail }) => {
  console.log(gymDetail[0])

  const gym = gymDetail[0];
  const { address, contact, email, gym_name, monthlyFee, name, registrationFee, trainer } = gym;

  return (
    <section>
      <div className='card' style={{width: '50rem'}}>
      <div class="row g-0">
      <div class="col-md-4 cardimg">
           <img src={pic} class="card-img-top  " alt="..."></img>
      </div>
      <div class="col-md-8">
      <div className="card-body">
        <h1 className='card-title gymname'>{gym_name}</h1>
        <p className='card-text maintained'>Maintained by: {name}</p>
        <div className='card-text'>
          Contact Detail:
          <p>Email: {email}</p>
          <p>Phone: {contact}</p>
        </div>
        <p className='card-text'>Located at: {address}</p>

        <p className='card-text'>Registration Fee: ₹{registrationFee}</p>
        <p>Monthly Fee: ₹{monthlyFee}</p>

        <p className='card-text'>Number of Trainers = {trainer}</p>
      

      <button className='bttn'>Enroll</button></div></div>
      </div>
      
      </div>
    </section>
  )
}

export default Detail


{/* <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
      <Link to={`/gym/${id}`}>
        <div style={{ padding: '20px' }}>
          <h5 className="card-title">{gym_name}</h5>
          <p className='card-text'>Maintained by {name}</p>
          
          
          <p className='card-text'>Registration Fee: ₹{registrationFee}</p>
          <p className='card-text'>Monthly Fee: ₹{monthlyFee}</p>

         
        </div>
      </Link>
      </div>
    </div> */}