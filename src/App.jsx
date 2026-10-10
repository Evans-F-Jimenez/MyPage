import React from 'react'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Knowleadge from './pages/Knowleadge'
import { Routes, Route } from 'react-router-dom'
import VR from './pages/VR'
import VA from './pages/VA'
import FrontEnd from './pages/Front-End'

const App = () => {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Knowleadge" element={<Knowleadge />} />
        <Route path="/education" element={<Education />} />
        <Route path="/portafolio" element={<Experiences />} />
        <Route path="/portafolio/vr" element={<VR />} />
        <Route path="/portafolio/va" element={<VA />} />
        <Route path="/portafolio/front-end" element={<FrontEnd />} />
        <Route path="/social" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App