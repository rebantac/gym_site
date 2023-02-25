import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormField } from '../components';

const LoginUser = () => {
  const navigate = useNavigate() // helps to go back to the home page

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    height: '',
    weight: '',
    contact: '',
    gender: '',
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate('/home');
  }


  return (
    <section>
      <div>CLIENT SIGN UP</div>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='John Doe'
            value={form.name}
            handleChange={handleChange}
          />

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

          <FormField
            labelName='Your Height (cm)'
            type='number'
            name='height'
            placeholder='150'
            value={form.height}
            handleChange={handleChange}
          />

          <FormField
            labelName='Your Weight (kg)'
            type='number'
            name='weight'
            placeholder='65'
            value={form.weight}
            handleChange={handleChange}
          />

          <FormField
            labelName='Contact Number'
            type='text'
            name='contact'
            placeholder='9000000000'
            value={form.contact}
            handleChange={handleChange}
          />
        </div>

        <div className="mt-10">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

          <button
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default LoginUser