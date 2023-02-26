import React from 'react'

import { GymCard, UserNavbar } from '../components';

import data from '../assets/data.json';
import desktop from "../assets/Desktop_.png"
import "./home.css"
const Home = () => {
  return (
    <div className='back'>
      <UserNavbar />
      <img src={desktop} alt="" />
      {/* <h1 className='heading'>C H O O S E  Y  O U R  O W N  T R A I N E R </h1> */}
      {data && data.map((element) => {
        return (
          <div className='card_'>
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