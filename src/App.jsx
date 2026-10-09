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
        <Route path="/MyPage" element={<Home />} />
        <Route path="/MyPage/Knowleadge" element={<Knowleadge />} />
        <Route path="/MyPage/education" element={<Education />} />
        <Route path="/MyPage/portafolio" element={<Experiences />} />
        <Route path="/MyPage/portafolio/vr" element={<VR />} />
        <Route path="/MyPage/portafolio/va" element={<VA />} />
        <Route path="/MyPage/portafolio/front-end" element={<FrontEnd />} />
        <Route path="/MyPage/social" element={<Experiences />} />
        <Route path="/MyPage/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App