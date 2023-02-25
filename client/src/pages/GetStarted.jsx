import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  const [getStart, setGetStart] = useState(true)

  return (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      {getStart ? (
        <button
          onClick={() => setGetStart(false)}
        >
          Get Started
        </button>
      ) : (
        <div>
          <Link to='/login-user'><button>Login as Client</button></Link>
          <Link to='/login-gym-owner'><button>Login as Gym Owner</button></Link>
        </div>
      )}
    </div>
  )
}

export default GetStarted