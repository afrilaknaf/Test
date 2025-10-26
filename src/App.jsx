import { useState } from 'react'
import './App.css'
import Navbar from './compoents/Navbar'
import Hero from './compoents/Hero'
import ImagesinHero from './compoents/ImagesInHero'
import { Route,Routes } from 'react-router-dom'
import Signup from './compoents/Siggnup'
import MobileNavbar from './compoents/MobileNavbar'
import Login from './compoents/Login'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Hero/>}/> 
        <Route path='/signups' element={<Signup/>}/> 
        <Route path="/login" element={<Login/>}/>
      </Routes>
      {/* <ImagesinHero/> */}
    </>
  )
}

export default App
