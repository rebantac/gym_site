import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [id, setId] = useState('')
  useEffect(() => {
    setId(localStorage.getItem('gym_id'))
  }, [])
  
  console.log(id)

  return (
    <div></div>
  )
}

export default Dashboard