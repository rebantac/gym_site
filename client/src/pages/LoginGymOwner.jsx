import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer, FormField } from '../components';

import "./LogingymOwner.css"
import trainer from "../assets/trainer.jpg"

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
    <section className='whole'>
      <div className="part1">
    <img className='image' src={trainer} alt="" />
      </div>
      <div className='part2'>
        <div className="head">
        <h2>GYM OWNER SIGN UP
        </h2>
        </div>


      <form onSubmit={handleSubmit}>
        <div className='in_form'>
          <div className="parent">
            <div className="child1">
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
          </div>
          <div className="child2">
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
          </div>
        </div>

        <div className='mt-10 text'>
          <p>After Submission - Log In into Application</p>

          <button className='btn_'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
      </div>
      <Footer/>
    </section>
  )
}

export default LoginGymOwner