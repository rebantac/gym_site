import React, { useEffect, useState } from 'react'

import { GymCard, UserNavbar } from '../components';

// import data from '../assets/data.json';


const Home = () => {

  const [data, setData] = useState([])
  useEffect(() => {

    const getGymData = async (req, res) => {
      let response
      try {
        response = await fetch("http://localhost:5000/gyms/", {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
        console.log(response)
      }
      catch (err) {
        console.log(err)
      }
      let result
      if(response.ok){
        result = await response.json()
        console.log(result.data)
      }
      setData(result.data)
      console.log(data)
    }
    getGymData()

  }, [])
  return (
    <div>
      <UserNavbar />

      {data && data.map((element) => {
        return (
          <div>
            <GymCard
              id={element.id}
              name={element.name}
              gym_name={element.gym_name}
              registrationFee={element.registrationFee}
              monthlyFee={element.monthlyFee}
            />
          </div>
        );
      })}
    </div>
  )
}

export default Home