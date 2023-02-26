import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FormField } from '../components';
import side from '../assets/side2.jpg'
import './loginuser.css'

const LoginUser = () => {
  const navigate = useNavigate() // helps to go back to the home page

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    height: '',
    weight: '',
    contact: ''
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("yess working here")
    let response
    let body = form
    try {
       response = await fetch('http://localhost:5000/users/pushUser', {
        method: 'post',
        body: JSON.stringify({...body}),
        // body,
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response)
    }
    catch (err) {
      console.log(err)
    }
    // console.log(form)
    navigate('/');
    alert("Registered Please Login")
  }


  return (
    <section className='whole'>
      <div className="part1">
        <img className='image' src={side} alt="" />
      </div>
      <div className="part2">
        <div className='head'>
          <h2>R E G I S T R A T I O N
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='in_form'>
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

          <div className="mt-10 text">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <button className='btn_'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginUser