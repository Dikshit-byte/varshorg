import React from 'react'
import Navbar1 from './components/TopNavbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Temp from './components/TemplateShowCase/Temp'
// import Carousal from './components/Carousal/Carousal'
import { Routes, Route } from "react-router-dom";
import Contact from './components/ContactUsPage/Contact'
import About from './components/AboutUs/About';
import Home from './components/Home';
const App = () => {
  return (
    <>
    <Navbar1/>
    <Routes>
                        <Route path='/about' element={<About/>} />
                        <Route path='/' element={<Home/>} />
                        <Route path='/contact' element={<Contact/>} />
                        </Routes>

    
    </>
  )
}

export default App