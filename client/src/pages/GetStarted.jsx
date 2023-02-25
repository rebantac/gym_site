import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Getstarted.css';


const GetStarted = () => {
  const [getStart, setGetStart] = useState(true)

  return (
    <div>
      <div class="slider-one">
        <div class="slider-one-image">
            <div class="slider-text">
                <h1>Ride Fast or Stay Home</h1>
                <p>Strength does not come from physical capacity. It comes from an indomitable will.</p>
            </div>
        </div>
    </div>

    <div class="slider-two">
        <div class="slider-two-image">
            <div class="slider-text">
                <h1>Shine Like a diamond in the Dark</h1>
                <p>People are like stained glass windows, they sparkle and shine when the sun is out, but when darkness
                    sets in their true beauty is revealed only if there is a light from within</p>
            </div>
        </div>
    </div>

    <div class="slider-three">
        <div class="slider-three-image">
            <div class="slider-text">
                <h1>leave sooner, drive slower, live longer</h1>
                <p>driving is not my hobby it's my feeling. I only love FAST CARS because I don't believe slow and
                    steady wins the race.</p>
            </div>
        </div>
    </div>

      {getStart ? (
        <button className='button-48'
          onClick={() => setGetStart(false)}
        >
          Get Started
        </button>
      ) : (
        <div >
          <Link to='/login-user'><button className='button-48 w3-container w3-center w3-animate-zoom'>Login as Client</button></Link>
          <Link to='/login-gym-owner'><button className='button-48'>Login as Gym Owner</button></Link>
        </div>
      )}
    </div>
  )
}

export default GetStarted