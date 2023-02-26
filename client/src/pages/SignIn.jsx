import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormField } from '../components';


const SignIn = () => {
  // const gym_id = "G001";
  const [gym_id,setId] = useState("")
  const navigate = useNavigate()

  const [checkClient, setCheckClient] = useState(true)
  // const [body,setBody] = useState({email:"",password:""})
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
    const body = form
    let response
    const getUserId = async (req, res, next) => {

      try {
        response = await fetch('http://localhost:5000/users/getId', {
          method: "POST",
          body: JSON.stringify({ ...body }),
          headers: { 'Content-Type': 'application/json' }
        })
      }
      catch (err) {
        console.log(err)
      }
      let result
      if (response.ok) {
        result = await response.json()
        // console.log(result.data)
      }
      setId(result.id)
      console.log(gym_id)
    }

    const getGymId = async (req, res, next) => {
      // console.log("gym")
      console.log(body)
      try {
        response = await fetch("http://localhost:5000/gyms/getId", {
          method: "POST",
          body: JSON.stringify({ ...body }),
          headers: { 'Content-Type': 'application/json' }
        })
        console.log(response)
      }
      catch (err) {
        console.log(err)
      }
      let result
      if (response.ok) {
        result = await response.json()
        // console.log(result.data)
      }
      console.log(result.id)
      setId(result.id)
      console.log(gym_id)
    }
    // checkClient ? (

    //   navigate('/home')
    // ) : (
    //   navigate('/dashboard')
    // )
    if (checkClient) {
      getUserId()
      navigate('/home')
    }
    else {
      getGymId()
      navigate('/dashboard')
    }
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