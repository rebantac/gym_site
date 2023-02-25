import React from 'react'

const Detail = ({ gymDetail }) => {
  console.log(gymDetail[0])

  const gym = gymDetail[0];
  const { address, contact, email, gym_name, monthlyFee, name, registrationFee, trainer } = gym;

  return (
    <section>
      <div>
        <h1>{gym_name}</h1>
        <p>Maintained by: {name}</p>
        <div>
          Contact Detail:
          <p>Email: {email}</p>
          <p>Phone: {contact}</p>
        </div>
        <p>Located at: {address}</p>

        <p>Registration Fee: ₹{registrationFee}</p>
        <p>Monthly Fee: ₹{monthlyFee}</p>

        <p>Number of Trainers = {trainer}</p>
      </div>

      <button>Enroll</button>
    </section>
  )
}

export default Detail