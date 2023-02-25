import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Footer } from './components';
import { Home, Profile, GetStarted, LoginUser, LoginGymOwner, Dashboard, SignIn, GymDetail  } from './pages'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
     

        <Routes>
          <Route path='/' element={<GetStarted />}/>

          <Route path='/home' element={<Home />}/>

          <Route path='/profile' element={<Profile />}/>

          <Route path='/login-user' element={<LoginUser />}/>

          <Route path='/dashboard' element={<Dashboard />}/>

          <Route path='/login-gym-owner' element={<LoginGymOwner />}/>

          <Route path='/sign-in' element={<SignIn />}/>

          <Route path='/gym/:id' element={<GymDetail/>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
