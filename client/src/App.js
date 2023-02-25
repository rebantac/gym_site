import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Navbar, Footer } from './components';
import {Home, Profile, GetStarted } from './pages'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<GetStarted />}/>

          <Route path='/home' element={<Home />}/>

          <Route path='/profile' element={<Profile />}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
