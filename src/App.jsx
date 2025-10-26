import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Slider from './components/Slider'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import About from './pages/About'
import { Services } from './pages/Services'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import AntiInspect from './components/AntiInspect'
import Popcontact from './components/Popcontact'

function App() {
  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        < AntiInspect />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/projects" element={<Products/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/popup" element={<Popcontact />} />
        </Routes>
      </main>

      < Footer />

    </div>
  )
}

export default App
