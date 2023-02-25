import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormField } from '../components';

const LoginGymOwner = () => {
  const navigate = useNavigate() // helps to go back to the home page

  const [form, setForm] = useState({
    name: '',
    gym_name: '',
    email: '',
    password: '',
    registrationFee: '',
    monthlyFee: '',
    contact: '',
    address: '',
    trainer: '',
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate('/');
  }


  return (
    <section>
      <div>GYM OWNER SIGN UP</div>

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
            labelName='Your Gym Name'
            type='text'
            name='gym_name'
            placeholder='John Gym'
            value={form.gym_name}
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
            labelName='Registration Fee'
            type='number'
            name='registrationFee'
            value={form.registrationFee}
            handleChange={handleChange}
          />
          
          <FormField
            labelName='Monthly Fee'
            type='number'
            name='monthlyFee'
            value={form.monthlyFee}
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

          <FormField
            labelName='Gym-s Address'
            type='text'
            name='address'
            placeholder='7th Street, Patia'
            value={form.address}
            handleChange={handleChange}
          />

          <FormField
            labelName='Number of Trainers'
            type='number'
            name='trainer'
            placeholder=''
            value={form.trainer}
            handleChange={handleChange}
          />
          
        </div>

        <div>
          <p>After Submission - Log In into Application</p>

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

export default LoginGymOwner