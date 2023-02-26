import React from 'react'

const UserDetail = ({ userDetail }) => {
  console.log(userDetail[0])

  const user = userDetail[0];
  const { name, email, height, weight, contact } = user;

  return (
    <section>
      <div>
        <h1>{name}</h1>
        <div>
          Contact UserDetail:
          <p>Email: {email}</p>
          <p>Phone: {contact}</p>
        </div>

        <p>Height: {height} cm</p>
        <p>Weight: {weight} kg</p>
      </div>
    </section>
  )
}

export default UserDetail