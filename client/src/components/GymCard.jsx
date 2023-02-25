import React from 'react'
import { Link } from 'react-router-dom'

const GymCard = ({
  id,
  name,
  gym_name,
  registrationFee,
  monthlyFee,
}) => {
  return (
    <section>
      <Link to={`/gym/${id}`}>
        <div style={{ padding: '20px' }}>
          <p>{gym_name}</p>
          <p>Maintained by {name}</p>
          
          
          <p>Registration Fee: ₹{registrationFee}</p>
          <p>Monthly Fee: ₹{monthlyFee}</p>
          
        </div>
      </Link>
    </section>
  )
}

export default GymCard