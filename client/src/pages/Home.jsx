import React from 'react'

import { GymCard, UserNavbar } from '../components';

import data from '../assets/data.json';

const Home = () => {
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