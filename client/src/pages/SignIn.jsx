import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormField } from '../components';
import signinimg from "../assets/signinimg.jpg";
import './Signin.css';

const SignIn = () => {
  const gym_id = "G001";
  const navigate = useNavigate()

  const [checkClient, setCheckClient] = useState(true)

  const [form, setForm] = useState({
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('gym_id', gym_id)

    checkClient ? (
      navigate('/home')
    ) : (
      navigate('/dashboard')
    )
  }


  return (
    <div className='whole'>
    <div className='part1'>
    <img className='signin' src={signinimg} style={{width:"40%" , height:"80%" , marginLeft:"2%"}} alt="" />
    </div>
    <div className='part2'>
    
    <form onSubmit={handleSubmit}>
        <div>
          <FormField
            labelName='Your Email'
            type='email'
            name='email'
            placeholder='user@test.com'
            value={form.email}
            handleChange={handleChange}
          />

          <FormField
            labelName='Your Password'
            type='password'
            name='password'
            value={form.password}
            handleChange={handleChange}
          />
        </div>

        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

          <button className='button3 bttn2'
            type='submit'
            onClick={() => setCheckClient(true)}
          >
            Log In as Client
          </button>

          <button className='button3 bttn3'
            type='submit'
            onClick={() => setCheckClient(false)}
          >
            Log In as Gym Owner
          </button>
        </div>
      </form>
    </div>
      

    </div>
  )
}

export default SignIn