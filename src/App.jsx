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
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <AntiInspect />
          <Routes>
            {/* Home */}
            <Route path="/" element={
              <>
                <Helmet>
                  <title>Upstorks Elevators</title>
                  <meta name="description" content="Upstorks Elevators provides elevator solutions, installation, and maintenance services across Delhi." />
                  <link rel="canonical" href="https://www.upstorkselevators.in/" />
                </Helmet>
                <Home />
              </>
            } />

            {/* About */}
            <Route path="/about" element={
              <>
                <Helmet>
                  <title>About - Upstorks Elevators</title>
                  <meta name="description" content="Learn more about Upstorks Elevators, our team, and mission." />
                  <link rel="canonical" href="https://www.upstorkselevators.in/about" />
                </Helmet>
                <About />
              </>
            } />

            {/* Services */}
            <Route path="/services" element={
              <>
                <Helmet>
                  <title>Services - Upstorks Elevators</title>
                  <meta name="description" content="Our elevator services include installation, maintenance, and modernization." />
                  <link rel="canonical" href="https://www.upstorkselevators.in/services" />
                </Helmet>
                <Services />
              </>
            } />

            {/* Projects / Products */}
            <Route path="/projects" element={
              <>
                <Helmet>
                  <title>Projects - Upstorks Elevators</title>
                  <meta name="description" content="Explore our elevator installation and maintenance projects across Delhi." />
                  <link rel="canonical" href="https://www.upstorkselevators.in/projects" />
                </Helmet>
                <Products />
              </>
            } />

            {/* Contact */}
            <Route path="/contact" element={
              <>
                <Helmet>
                  <title>Contact - Upstorks Elevators</title>
                  <meta name="description" content="Get in touch with Upstorks Elevators for elevator services and inquiries." />
                  <link rel="canonical" href="https://www.upstorkselevators.in/contact" />
                </Helmet>
                <ContactUs />
              </>
            } />

            {/* Popup */}
            <Route path="/popup" element={
              <>
                <Helmet>
                  <title>Popup - Upstorks Elevators</title>
                  <meta name="description" content="Quick contact popup for Upstorks Elevators." />
                  <link rel="canonical" href="https://www.upstorkselevators.in/popup" />
                </Helmet>
                <Popcontact />
              </>
            } />

          </Routes>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App




