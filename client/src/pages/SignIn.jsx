import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormField } from '../components';

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

    checkClient ? (
      navigate('/home')
    ) : (
      navigate(`/dashboard/${gym_id}`)
    )
  }


  return (
    <div>
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

          <button
            type='submit'
            onClick={() => setCheckClient(true)}
          >
            Log In as Client
          </button>

          <button
            type='submit'
            onClick={() => setCheckClient(false)}
          >
            Log In as Gym Owner
          </button>
        </div>
      </form>

    </div>
  )
}

export default SignIn